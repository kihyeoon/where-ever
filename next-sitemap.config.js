/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  priority: 1,
  exclude: ["/place", "/sns", "/viral", "/branding", "/about", "/contact"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
