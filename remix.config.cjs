/** @type {import('@remix-run/dev').AppConfig} */
 module.exports = {
-  future: {
-    unstable_staticExport: true,
-  },
-  routes: async (defineRoutes) =>
-    defineRoutes((route) => {
-      route("/", "app/routes/_index.tsx");
-      route("/:variant", "app/routes/$variant.tsx");
-    }),
+  // enable static export and let Remix auto-discover all files under app/routes
+  future: {
+    unstable_staticExport: true,
+  },
+  // No routes override! Remix will find app/routes/_index.tsx and app/routes/$variant.tsx
 };
