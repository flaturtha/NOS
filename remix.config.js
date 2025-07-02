import pkg from "@remix-run/netlify";
const { netlify } = pkg;

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...netlify(),
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true,
  },
}; 