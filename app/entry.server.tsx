import { createRequestHandler } from "@remix-run/vercel";
import * as build from "../build/index.js"; // not from @remix-run/dev

export default createRequestHandler({ build });
