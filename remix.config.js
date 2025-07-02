import { config } from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...config,
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true,
  },
}; 