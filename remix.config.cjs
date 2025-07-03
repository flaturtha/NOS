/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  server: './server.ts',
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildPath: 'api/index.js',
  serverModuleFormat: 'cjs',
};
