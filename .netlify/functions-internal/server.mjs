// server.js
var handler = async (event, context) => ({
  statusCode: 200,
  body: "Hello from Netlify Lambda!"
});
export {
  handler
};
