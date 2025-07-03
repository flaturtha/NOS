/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v3_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "vercel"
};
