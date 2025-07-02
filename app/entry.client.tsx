/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import posthog from 'posthog-js';

// Use environment variable for Posthog key (set in Vercel and .env for local dev)
const POSTHOG_KEY = process.env.POSTHOG_KEY || 'YOUR_POSTHOG_KEY';
posthog.init(POSTHOG_KEY, { api_host: 'https://app.posthog.com' });

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
