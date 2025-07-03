/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    unstable_staticExport: true,
  },
  routes: async (defineRoutes) =>
    defineRoutes((route) => {
      route("/", "app/routes/_index.tsx");
      route("/:variant", "app/routes/$variant.tsx");
    }),
};
