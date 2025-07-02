/** @type {import('@remix-run/dev').AppConfig} */
const { netlify } = require("@remix-run/netlify");

module.exports = {
  ...netlify(),
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true,
  },
}; 