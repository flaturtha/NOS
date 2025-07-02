/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  server: "./server.js",
  serverBuildDirectory: ".netlify/functions-internal",
  serverModuleFormat: "esm",
  ignoredRouteFiles: ["**/.*"],
}; 