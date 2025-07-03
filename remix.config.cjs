/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v3_routeConvention: true,
  },
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "vercel",
  server: "./entry.vercel.ts", // this tells Remix to use the new handler
};
