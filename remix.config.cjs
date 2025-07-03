/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // Tell Remix to prerender every route as static HTML
  future: {
    unstable_staticExport: true,
  },
  // Point Remix at your app folder (where your routes live)
  appDirectory: "app",
  // No custom routes needed—Remix will auto-discover app/routes/_index.tsx and app/routes/$variant.tsx
};
