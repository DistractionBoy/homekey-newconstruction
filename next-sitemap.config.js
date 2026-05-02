/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://homekeyinspections.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/'] },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/api/*', '/_next/*'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const highPriority = ['/', '/es', '/services', '/new-construction', '/pricing', '/about', '/inspectors']
    const priority = highPriority.includes(path) ? 1.0 : config.priority
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
