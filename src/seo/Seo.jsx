import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { orgSchema, websiteSchema, breadcrumbSchema } from './schema.js'

// During prerendering this context collects the page's head tags; in the browser Seo updates document.head.
export const HeadContext = createContext(null)

export const absUrl = (path = '/') => site.url + (path === '/' ? '/' : `${path.replace(/\/$/, '')}/`)
const clip = (t = '', n = 158) => (t.length > n ? `${t.slice(0, t.lastIndexOf(' ', n - 1))}…` : t)

export function buildHead({ title, fullTitle, description, path, type = 'website', crumbs, schema = [], noindex, image }) {
  const t = fullTitle || (title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`)
  const url = absUrl(path)
  const ld = [orgSchema(), websiteSchema(), ...(crumbs ? [breadcrumbSchema(crumbs)] : []), ...schema]
  return { title: t, description: clip(description), url, type, noindex, image: image || `${site.url}/og-image.png`, ld }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Head tags as an HTML string, used by the prerender script.
export function headToHtml(h) {
  const m = (attr, key, val) => `<meta ${attr}="${key}" content="${esc(val)}" />`
  return [
    `<title>${esc(h.title)}</title>`,
    m('name', 'description', h.description),
    h.noindex ? m('name', 'robots', 'noindex, follow') : m('name', 'robots', 'index, follow, max-image-preview:large'),
    h.noindex ? '' : `<link rel="canonical" href="${h.url}" />`,
    m('property', 'og:type', h.type),
    m('property', 'og:site_name', site.name),
    m('property', 'og:title', h.title),
    m('property', 'og:description', h.description),
    m('property', 'og:url', h.url),
    m('property', 'og:image', h.image),
    m('property', 'og:image:width', '1200'),
    m('property', 'og:image:height', '630'),
    m('property', 'og:locale', 'en_IN'),
    m('name', 'twitter:card', 'summary_large_image'),
    m('name', 'twitter:title', h.title),
    m('name', 'twitter:description', h.description),
    m('name', 'twitter:image', h.image),
    `<script type="application/ld+json" id="ld">${JSON.stringify(h.ld).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean).join('\n    ')
}

function setMeta(attr, key, val) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.setAttribute('content', val)
}

export default function Seo(props) {
  const ctx = useContext(HeadContext)
  const { pathname } = useLocation()
  const h = buildHead({ ...props, path: props.path || pathname })
  if (ctx) ctx.head = h

  const key = JSON.stringify(h)
  useEffect(() => {
    document.title = h.title
    setMeta('name', 'description', h.description)
    setMeta('name', 'robots', h.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    setMeta('property', 'og:title', h.title)
    setMeta('property', 'og:description', h.description)
    setMeta('property', 'og:url', h.url)
    setMeta('property', 'og:type', h.type)
    setMeta('name', 'twitter:title', h.title)
    setMeta('name', 'twitter:description', h.description)
    let can = document.head.querySelector('link[rel="canonical"]')
    if (!can) { can = document.createElement('link'); can.rel = 'canonical'; document.head.appendChild(can) }
    can.href = h.url
    let ld = document.getElementById('ld')
    if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld'; document.head.appendChild(ld) }
    ld.textContent = JSON.stringify(h.ld)
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}
