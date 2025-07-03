import pkg from "@vercel/remix";
const { vercelPreset } = pkg;

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...vercelPreset(),
};
