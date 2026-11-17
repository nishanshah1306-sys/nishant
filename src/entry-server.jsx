import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HeadContext, headToHtml } from './seo/Seo.jsx'
import App from './App.jsx'
import { services, groups } from './data/services.js'
import { projects } from './data/projects.js'
import { guides } from './data/guides.js'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const routes = [
  '/', '/services', ...groups.map((g) => `/services/${g.slug}`), ...services.map((s) => `/services/${s.slug}`),
  '/projects', ...projects.map((p) => `/projects/${p.slug}`),
  '/guides', ...guides.map((g) => `/guides/${g.slug}`),
  '/about', '/contact',
]

export function render(path) {
  const ctx = {}
  const html = renderToString(
    <HeadContext.Provider value={ctx}>
      <StaticRouter basename={BASE || '/'} location={BASE + path}><App /></StaticRouter>
    </HeadContext.Provider>
  )
  return { html, head: ctx.head ? headToHtml(ctx.head) : '' }
}
