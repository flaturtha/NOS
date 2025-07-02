import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  // Default: redirect to 33bt-ebook
  return redirect("/landing/33bt-ebook");
};

export default function LandingIndex() {
  return null;
} 