import { config } from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...config,
  server: "./server.js",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true,
  },
}; 