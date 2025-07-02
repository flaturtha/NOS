import { LoaderFunction, redirect } from "@remix-run/node";
import { parse } from "cookie";

// Helper to pick A or B
function pickVariant(existing: string | undefined) {
  if (existing === 'a' || existing === 'b') return existing;
  return Math.random() < 0.5 ? 'a' : 'b';
}

export const loader: LoaderFunction = async ({ params, request }) => {
  // params["base"] will be like "33bt-ebook", "34bt-ebook", etc.
  const base = params["base"];
  if (!base) return redirect("/landing");

  // Check for assignment cookie
  const cookies = parse(request.headers.get("Cookie") || "");
  const cookieKey = `ab_${base}`;
  let assigned = cookies[cookieKey];
  const variant = pickVariant(assigned);

  // Set cookie if not present
  let headers: Record<string, string> = {};
  if (!assigned) {
    headers["Set-Cookie"] = `${cookieKey}=${variant}; Path=/; Max-Age=31536000; SameSite=None; Secure`;
  }

  // Redirect to the correct variant
  return redirect(`/landing/${base}-${variant}`, {
    headers,
  });
};

export default function LandingABRedirect() {
  return null;
} 