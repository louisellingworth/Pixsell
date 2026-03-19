/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://eightsixgames.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/404', '/500', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://eightsixgames.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    // Service pages get high priority
    if (path.startsWith('/services/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    // Blog posts get medium priority
    if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    
    // About and contact pages
    if (path === '/about' || path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
}; 