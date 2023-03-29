/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://mankuthimma.com",
  generateRobotsTxt: true,
};

export default config;
