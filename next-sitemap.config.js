/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.successsecretsbet.com",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/admin/*","/admin","/auth/*","/auth","/results"],
};
