import netlifyAdapter from "@netlify/remix-adapter";

/** @type {import('@remix-run/dev').AppConfig} */
export default netlifyAdapter({
  ignoredRouteFiles: ["**/.*"],
  future: {
    v2_routeConvention: true,
  },
}); 