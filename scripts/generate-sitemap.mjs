import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = process.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://www.sekersoft.com'
const DIST_DIR = resolve(process.cwd(), 'dist')

const staticRoutes = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/products/logistics', changefreq: 'weekly', priority: '0.9' },
  { path: '/products', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/solutions', changefreq: 'weekly', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/testimonials', changefreq: 'weekly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/support', changefreq: 'weekly', priority: '0.7' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/kvkk', changefreq: 'yearly', priority: '0.3' },
  { path: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
]

const createUrlEntry = (route) => {
  const loc = route.path.startsWith('http') ? route.path : `${SITE_URL}${route.path}`
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
}

const buildSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(createUrlEntry).join('\n')}
</urlset>
`

if (!existsSync(DIST_DIR)) {
  mkdirSync(DIST_DIR, { recursive: true })
}

const sitemapPath = resolve(DIST_DIR, 'sitemap.xml')
writeFileSync(sitemapPath, buildSitemap(), 'utf8')
console.log(`✅ Generated sitemap at ${sitemapPath}`)

