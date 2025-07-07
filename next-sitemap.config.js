/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pixsellgames.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://pixsellgames.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/500'],
  generateIndexSitemap: true,
  outDir: 'out',
  transform: async (config, path) => {
    // Custom transformation for URL
    
    // Set different priorities for different paths
    let priority = 0.7;
    
    if (path === '/' || path === '/index') {
      priority = 1.0;
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
    } else if (path.startsWith('/about')) {
      priority = 0.9;
    } else if (path.startsWith('/contact')) {
      priority = 0.9;
    } else if (path.startsWith('/services')) {
      priority = 0.9;
    }
    
    // Set change frequency based on path
    let changefreq = 'weekly';
    
    if (path === '/' || path === '/index') {
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      changefreq = 'weekly';
    }
    
    return {
      loc: path, // URL
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://pixsellgames.com${path}`,
          hreflang: 'en',
        },
        {
          href: `https://pixsellgames.com${path}`,
          hreflang: 'x-default',
        },
      ],
    };
  },
}; 