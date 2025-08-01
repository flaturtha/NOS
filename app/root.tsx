import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import posthog from 'posthog-js';
import { useEffect } from 'react';
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader = () => {
  console.log("POSTHOG_API_KEY:", process.env.POSTHOG_API_KEY);
  return json({
    ENV: {
      POSTHOG_API_KEY: process.env.POSTHOG_API_KEY,
    },
  });
};

// TypeScript global declaration for window.ENV
declare global {
  interface Window {
    ENV?: {
      POSTHOG_API_KEY?: string;
    };
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ENV?.POSTHOG_API_KEY) {
      posthog.init(window.ENV.POSTHOG_API_KEY, {
        api_host: 'https://us.i.posthog.com',
        capture_pageview: false,
      });
      posthog.capture('$pageview');
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
          }}
        />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
