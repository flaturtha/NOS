import { LoaderFunction } from "@remix-run/node";
import { parse } from "cookie";

// Helper to pick A or B
function pickVariant(existing: string | undefined) {
  if (existing === 'a' || existing === 'b') return existing;
  return Math.random() < 0.5 ? 'a' : 'b';
}

export const loader: LoaderFunction = async ({ params, request }) => {
  // params["base"] will be like "33bt-ebook", "34bt-ebook", etc.
  const base = params["base"];
  if (!base) return new Response(null, { status: 302, headers: { Location: "/landing" } });

  // Check for assignment cookie
  const cookies = parse(request.headers.get("Cookie") || "");
  const cookieKey = `ab_${base}`;
  let assigned = cookies[cookieKey];
  const variant = pickVariant(assigned);

  // Prepare redirect response
  const response = new Response(null, {
    status: 302,
    headers: {
      Location: `/landing/${base}-${variant}`,
    },
  });
  if (!assigned) {
    response.headers.append(
      "Set-Cookie",
      `${cookieKey}=${variant}; Path=/; Max-Age=31536000; SameSite=None; Secure`
    );
  }
  return response;
};

export default function LandingABRedirect() {
  return null;
} 