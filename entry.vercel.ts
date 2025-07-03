import { createRequestHandler } from "@remix-run/vercel";
import * as build from "./build/index.js"; // now correct

export default createRequestHandler({ build });
