import { netlify } from "@remix-run/netlify";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...netlify(),
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true,
  },
}; 