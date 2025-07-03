/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    // enable static export
    unstable_staticExport: true,
  },
  routes: async (defineRoutes) =>
    defineRoutes((route) => {
      // your index route
      route("/", "app/routes/_index.tsx");
      // dynamic slug route (file: app/routes/$variant.tsx)
      route("/:variant", "app/routes/$variant.tsx");
    }),
};
