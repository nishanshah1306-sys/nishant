// Turns every route into a real HTML file after `vite build`, so search engines and social apps
// see full content and the right title, description and structured data on each page.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const { render, routes } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const { site } = await import(pathToFileURL(path.resolve('src/data/site.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const page = (url) => {
  const { html, head } = render(url)
  return template.replace('<!--head-->', head).replace('<!--app-->', html)
}

for (const url of routes) {
  const file = path.join(dist, url, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(url))
}
// GitHub Pages serves 404.html for unknown addresses; the app then shows its own not-found page.
fs.writeFileSync(path.join(dist, '404.html'), page('/__not-found__'))

const today = new Date().toISOString().slice(0, 10)
const loc = (u) => site.url + (u === '/' ? '/' : `${u}/`)
const prio = (u) => (u === '/' ? '1.0' : u.split('/').length === 2 ? '0.8' : '0.7')
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    routes.map((u) => `  <url><loc>${loc(u)}</loc><lastmod>${today}</lastmod><priority>${prio(u)}</priority></url>`).join('\n')
  }\n</urlset>\n`)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)
fs.writeFileSync(path.join(dist, '.nojekyll'), '')
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered ${routes.length} pages, 404.html, sitemap.xml and robots.txt`)
