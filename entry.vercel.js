const { createRequestHandler } = require("@remix-run/vercel");
const build = require("@remix-run/vercel/server-build");

module.exports = createRequestHandler({ build });
