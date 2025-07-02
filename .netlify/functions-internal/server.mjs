var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// server.ts
import { createRequestHandler } from "@netlify/remix-adapter";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx2(Outlet, {});
}

// app/routes/mystery.$base.tsx
var mystery_base_exports = {};
__export(mystery_base_exports, {
  default: () => MysteryBaseTest
});
import { jsx as jsx3 } from "react/jsx-runtime";
function MysteryBaseTest() {
  return /* @__PURE__ */ jsx3("h1", { children: "Mystery Dynamic Route Works!" });
}

// app/routes/test.$foo.tsx
var test_foo_exports = {};
__export(test_foo_exports, {
  default: () => TestFoo
});
import { jsx as jsx4 } from "react/jsx-runtime";
function TestFoo() {
  return /* @__PURE__ */ jsx4("h1", { children: "Dynamic Route Works!" });
}

// app/routes/$variant.tsx
var variant_exports = {};
__export(variant_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => LandingVariantRoute,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

// app/variants/landingVariantConfig.ts
var landingVariants = [
  // --- PRINT (A5) LANDER VARIANTS ---
  {
    id: "33bt-a5-a",
    copyVariant: "33bt",
    heroImageDesktop: "/assets/33bt/img/33bt_bg_3x4.png",
    heroImageMobile: "/assets/33bt/img/33bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." },
      { title: "Build a Timeless Library", description: "These aren't throwaway reads. Each book in the bundle is a lasting addition to your personal library\u2014beautifully printed, thoughtfully curated, and worthy of display. Start a collection that reflects your taste for rare, remarkable mysteries." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "33bt-a5-b",
    copyVariant: "33bt",
    heroImageDesktop: "/assets/33bt/img/33bt_bg_3x4.png",
    heroImageMobile: "/assets/33bt/img/33bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." },
      { title: "Build a Timeless Library", description: "These aren't throwaway reads. Each book in the bundle is a lasting addition to your personal library\u2014beautifully printed, thoughtfully curated, and worthy of display. Start a collection that reflects your taste for rare, remarkable mysteries." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  // --- PLACEHOLDER: Remaining variants below. Customize as needed. ---
  {
    id: "34bt-a5-a",
    copyVariant: "34bt",
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." },
      { title: "Build a Timeless Library", description: "These aren't throwaway reads. Each book in the bundle is a lasting addition to your personal library\u2014beautifully printed, thoughtfully curated, and worthy of display. Start a collection that reflects your taste for rare, remarkable mysteries." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34bt-a5-b",
    copyVariant: "34bt",
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." },
      { title: "Build a Timeless Library", description: "These aren't throwaway reads. Each book in the bundle is a lasting addition to your personal library\u2014beautifully printed, thoughtfully curated, and worthy of display. Start a collection that reflects your taste for rare, remarkable mysteries." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34tb-a5-a",
    copyVariant: "34tb",
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." },
      { title: "Build a Timeless Library", description: "These aren't throwaway reads. Each book in the bundle is a lasting addition to your personal library\u2014beautifully printed, thoughtfully curated, and worthy of display. Start a collection that reflects your taste for rare, remarkable mysteries." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34tb-a5-b",
    copyVariant: "34tb",
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." },
      { title: "Build a Timeless Library", description: "These aren't throwaway reads. Each book in the bundle is a lasting addition to your personal library\u2014beautifully printed, thoughtfully curated, and worthy of display. Start a collection that reflects your taste for rare, remarkable mysteries." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  // --- EBOOK LANDER VARIANTS ---
  {
    id: "33bt-ebook-a",
    copyVariant: "33bt",
    heroImageDesktop: "/assets/33bt/img/33bt_bg_3x4.png",
    heroImageMobile: "/assets/33bt/img/33bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$37.99",
    offerOldPrice: "$49.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These ebooks are yours to keep, share, and enjoy on any device, forever." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "33bt-ebook-b",
    copyVariant: "33bt",
    heroImageDesktop: "/assets/33bt/img/33bt_bg_3x4.png",
    heroImageMobile: "/assets/33bt/img/33bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$37.99",
    offerOldPrice: "$49.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These ebooks are yours to keep, share, and enjoy on any device, forever." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34bt-ebook-a",
    copyVariant: "34bt",
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$37.99",
    offerOldPrice: "$49.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These ebooks are yours to keep, share, and enjoy on any device, forever." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34bt-ebook-b",
    copyVariant: "34bt",
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$37.99",
    offerOldPrice: "$49.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These ebooks are yours to keep, share, and enjoy on any device, forever." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34tb-ebook-a",
    copyVariant: "34tb",
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$37.99",
    offerOldPrice: "$49.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These ebooks are yours to keep, share, and enjoy on any device, forever." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34tb-ebook-b",
    copyVariant: "34tb",
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$37.99",
    offerOldPrice: "$49.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours\u2014they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: `Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They're light enough to hold for hours without strain.` },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These ebooks are yours to keep, share, and enjoy on any device, forever." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Bront\xEB wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "\u{1F4D6}", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "\u{1F50E}", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "\u2764\uFE0F", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  }
  // --- END PLACEHOLDER VARIANTS ---
], shopifyCheckoutLinks = {
  // All ebook variants
  "33bt-ebook-a": "https://store.talesofmurder.com/cart/50455734419773:1",
  "33bt-ebook-b": "https://store.talesofmurder.com/cart/50455734419773:1",
  "34bt-ebook-a": "https://store.talesofmurder.com/cart/50455734419773:1",
  "34bt-ebook-b": "https://store.talesofmurder.com/cart/50455734419773:1",
  "34tb-ebook-a": "https://store.talesofmurder.com/cart/50455734419773:1",
  "34tb-ebook-b": "https://store.talesofmurder.com/cart/50455734419773:1",
  // All print (a5) variants
  "33bt-a5-a": "https://store.talesofmurder.com/cart/49670518669629:1",
  "33bt-a5-b": "https://store.talesofmurder.com/cart/49670518669629:1",
  "34bt-a5-a": "https://store.talesofmurder.com/cart/49670518669629:1",
  "34bt-a5-b": "https://store.talesofmurder.com/cart/49670518669629:1",
  "34tb-a5-a": "https://store.talesofmurder.com/cart/49670518669629:1",
  "34tb-a5-b": "https://store.talesofmurder.com/cart/49670518669629:1"
};

// app/variants/landingCopy.ts
var landingCopy = {
  "33bt": {
    headline: "More thrilling than Sherlock, yet nearly lost to history.",
    subhead: "Best mysteries you've never read"
  },
  "34bt": {
    headline: `"Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics."`,
    subhead: "Best mysteries you've never read!"
  },
  "34tb": {
    headline: `"Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics."`,
    subhead: "Best mysteries you've never read!"
  }
};

// app/components/LandingTemplate.tsx
import { useRef, useState, useEffect } from "react";

// app/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/ui/button.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsx5(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  )
);
Button.displayName = "Button";

// app/components/FlourishDivider.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function FlourishDivider() {
  return /* @__PURE__ */ jsx6("div", { className: "w-full flex justify-center my-6", children: /* @__PURE__ */ jsxs2(
    "svg",
    {
      width: "120",
      height: "16",
      viewBox: "0 0 120 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      className: "opacity-60",
      children: [
        /* @__PURE__ */ jsx6(
          "path",
          {
            d: "M2 8c20-8 96-8 116 0",
            stroke: "#8B0000",
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx6("circle", { cx: "60", cy: "8", r: "3", fill: "#8B0000" })
      ]
    }
  ) });
}

// app/components/LandingTemplate.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function LandingTemplate({
  headline,
  subhead,
  heroImageDesktop,
  heroImageMobile,
  offerSection,
  problemSection,
  solutionSection,
  bookGridSection,
  testimonialsSection,
  whyDifferentSection,
  guaranteeSection,
  faqSection,
  trustSignalsSection,
  copyVariant,
  floatingCtaPrice,
  crossLinkHref,
  crossLinkText,
  checkoutUrl
}) {
  let [showFloatingCTA, setShowFloatingCTA] = useState(!0), [animateBottomCTA, setAnimateBottomCTA] = useState(!1), bottomCTARef = useRef(null);
  return useEffect(() => {
    let handleScroll = () => {
      if (bottomCTARef.current) {
        let rect = bottomCTARef.current.getBoundingClientRect(), readyHeadline = document.querySelector("[data-cta-fade]"), fadeOut = !1;
        readyHeadline && (fadeOut = readyHeadline.getBoundingClientRect().top < window.innerHeight * 0.7), setShowFloatingCTA(!fadeOut), setAnimateBottomCTA(rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2);
      }
    };
    return window.addEventListener("scroll", handleScroll), handleScroll(), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ jsxs3("div", { className: "min-h-screen bg-white text-black", style: { fontSize: "18px", lineHeight: "1.7" }, children: [
    /* @__PURE__ */ jsx7("div", { className: "w-full bg-[#8B0000]/90 text-white flex items-center justify-center py-0.5 px-2 sticky top-0 z-50 border-b border-[#a94442] backdrop-blur-sm", children: /* @__PURE__ */ jsx7("div", { className: "flex items-center justify-center max-w-4xl w-full mx-auto", children: /* @__PURE__ */ jsx7("span", { className: "font-semibold text-[11px] md:text-xs tracking-widest text-center flex-1 uppercase opacity-80", style: { fontVariant: "small-caps" }, children: "VINTAGE MYSTERY SAMPLER BUNDLE" }) }) }),
    showFloatingCTA && /* @__PURE__ */ jsx7(
      "div",
      {
        className: `fixed bottom-0 left-0 right-0 bg-[#8B0000] text-white p-4 z-40 shadow-lg transition-all duration-500 ${showFloatingCTA ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        style: { transition: "opacity 0.5s" },
        children: /* @__PURE__ */ jsxs3("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsx7("a", { href: checkoutUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx7(Button, { className: "w-full bg-white text-[#8B0000] hover:bg-gray-100 font-bold text-lg py-4 min-h-[48px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:bg-gray-200", children: `Get my Bundle \u2013 ${floatingCtaPrice}` }) }),
          crossLinkHref && crossLinkText && /* @__PURE__ */ jsx7("div", { className: "mt-2 text-center", children: /* @__PURE__ */ jsx7("a", { href: crossLinkHref, className: "text-white underline text-base hover:text-gray-200 focus:outline-none", children: crossLinkText }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs3("section", { className: "relative", children: [
      /* @__PURE__ */ jsx7(
        "img",
        {
          src: heroImageMobile,
          alt: "Vintage Mystery Sampler Hero",
          className: (copyVariant === "33bt" ? "block md:hidden w-full aspect-[3/4] object-contain object-left" : "block md:hidden w-full aspect-[3/4] object-cover object-[80%_center]") + " block md:hidden"
        }
      ),
      /* @__PURE__ */ jsx7(
        "img",
        {
          src: heroImageDesktop,
          alt: "Vintage Mystery Sampler Hero",
          className: (copyVariant === "33bt" ? "hidden md:block w-full aspect-[16/9] object-contain object-left" : "hidden md:block w-full aspect-[16/9] object-cover object-[center_30%]") + " hidden md:block"
        }
      ),
      /* @__PURE__ */ jsx7("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsx7("div", { className: "max-w-4xl w-full mx-auto px-6 text-center flex justify-center items-center", children: /* @__PURE__ */ jsx7("div", { className: [
        copyVariant === "34bt" || copyVariant === "34tb" ? "inline-block bg-black/40 rounded-lg px-4 py-2 max-w-[90vw] md:max-w-full overflow-hidden" : "inline-block bg-black/40 rounded-lg px-4 py-2 max-w-full overflow-hidden"
      ].join(" "), style: { pointerEvents: "auto" }, children: /* @__PURE__ */ jsx7("h1", { className: [
        copyVariant === "34bt" || copyVariant === "34tb" ? "text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight max-w-[20ch] mx-auto text-white drop-shadow-lg" : "text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight max-w-[20ch] mx-auto text-white drop-shadow-lg"
      ].join(" "), children: headline }) }) }) }),
      /* @__PURE__ */ jsxs3("div", { className: "max-w-4xl mx-auto px-6 flex flex-col items-center text-left mt-4 md:mt-12 gap-y-4 md:gap-y-8", children: [
        /* @__PURE__ */ jsx7(
          "p",
          {
            className: [
              copyVariant === "34bt" || copyVariant === "34tb" ? "text-center text-base md:text-2xl font-bold text-[#242424] w-full mb-2 md:mb-8 mt-8 md:mt-12" : "text-lg md:text-2xl font-bold text-[#242424] text-left w-full mb-8"
            ].join(" "),
            children: subhead
          }
        ),
        /* @__PURE__ */ jsx7(FlourishDivider, {})
      ] })
    ] }),
    offerSection,
    problemSection,
    solutionSection,
    bookGridSection,
    testimonialsSection,
    whyDifferentSection,
    guaranteeSection,
    faqSection,
    trustSignalsSection,
    /* @__PURE__ */ jsx7("footer", { className: "px-6 py-12 bg-[#242424] text-white", children: /* @__PURE__ */ jsxs3("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsx7("p", { className: "text-lg", children: "Tales of Murder Press | Our Mission | Refund Policy" }),
      /* @__PURE__ */ jsxs3("div", { className: "text-xl font-semibold", children: [
        /* @__PURE__ */ jsxs3("span", { className: "block mb-2", children: [
          /* @__PURE__ */ jsx7("span", { role: "img", "aria-label": "phone", className: "mr-2", children: "\u{1F4DE}" }),
          "Questions? Call us at ",
          /* @__PURE__ */ jsx7("a", { href: "tel:+19729687337", className: "underline hover:text-gray-300", children: "(972) 96-MURDR" }),
          " ",
          /* @__PURE__ */ jsx7("span", { className: "text-sm", children: "(968-7337)" })
        ] }),
        /* @__PURE__ */ jsx7("span", { className: "block text-base font-normal text-gray-200", children: "I'm a small, independent press, so may not answer live \u2014 but you can leave a message and I will check into the issue and call you back within 24 hours." })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "text-xl font-semibold", children: [
        "Need help? Email me at",
        " ",
        /* @__PURE__ */ jsx7("a", { href: "mailto:atticus@crowmail.co", className: "text-white underline hover:text-gray-300", children: "atticus@crowmail.co" })
      ] }),
      /* @__PURE__ */ jsx7("p", { className: "font-bold text-lg", children: "We stand by our books and our readers." })
    ] }) })
  ] });
}

// app/components/OfferSection.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function OfferSection({ offerTitle, offerPrice, offerOldPrice, offerBadge, ctaText, onCtaClick, children, checkoutUrl }) {
  return /* @__PURE__ */ jsxs4("div", { className: "bg-white shadow-xl border-2 border-[#8B0000] rounded-lg p-8 mb-8 max-w-md mx-auto text-center", children: [
    /* @__PURE__ */ jsx8("p", { className: "text-base font-semibold text-[#8B0000] mb-3", children: "Limited-Time Launch Offer:" }),
    /* @__PURE__ */ jsx8("h2", { className: "text-2xl font-serif font-bold mb-4", children: offerTitle }),
    /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
      offerOldPrice && /* @__PURE__ */ jsx8("span", { className: "text-xl line-through text-gray-500", children: offerOldPrice }),
      /* @__PURE__ */ jsx8("span", { className: "text-3xl font-bold text-[#8B0000]", children: offerPrice }),
      offerBadge && /* @__PURE__ */ jsx8("span", { className: "bg-[#8B0000] text-white text-base px-3 py-1 rounded", children: offerBadge })
    ] }),
    /* @__PURE__ */ jsx8("a", { href: checkoutUrl, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx8(Button, { className: "bg-[#8B0000] hover:bg-[#5a0000] text-white px-10 py-6 text-xl font-semibold rounded-md mb-8 w-full max-w-sm min-h-[56px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:bg-[#4a0000}", children: ctaText }) }),
    children
  ] });
}

// app/components/ProblemSection.tsx
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
function ProblemSection({ problems }) {
  return /* @__PURE__ */ jsx9("section", { className: "px-6 py-16 bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxs5("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx9("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-center mb-8", children: "Tired of the Digital Runaround and Disappointing Reads?" }),
    /* @__PURE__ */ jsx9("div", { className: "max-w-[65ch] mx-auto mb-10", children: /* @__PURE__ */ jsx9("p", { className: "text-xl leading-relaxed text-left", children: "You just want to curl up with a great mystery, but it's become a frustrating hunt." }) }),
    /* @__PURE__ */ jsx9("div", { className: "space-y-6 max-w-3xl mx-auto", children: problems.map((problem, index) => /* @__PURE__ */ jsxs5("div", { className: "flex items-start gap-4 p-6 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ jsx9("div", { className: "w-4 h-4 bg-[#8B0000] rounded-full mt-2 flex-shrink-0 shadow-sm" }),
      /* @__PURE__ */ jsx9("p", { className: "text-xl leading-relaxed", children: problem })
    ] }, index)) })
  ] }) });
}

// app/components/SolutionSection.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function SolutionSection({ mainText, features }) {
  return /* @__PURE__ */ jsx10("section", { className: "px-6 py-16 bg-[#fdfcf9] border-t border-gray-200", children: /* @__PURE__ */ jsxs6("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx10("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-center mb-8", children: "The Solution: Real Books, Restored for Real Readers" }),
    /* @__PURE__ */ jsx10("div", { className: "max-w-[65ch] mx-auto mb-12", children: /* @__PURE__ */ jsx10("p", { className: "text-xl leading-relaxed text-left", children: mainText }) }),
    /* @__PURE__ */ jsx10("div", { className: "grid md:grid-cols-2 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs6("div", { className: "border-2 border-[#8B0000] bg-white shadow-sm rounded-lg p-8", children: [
      /* @__PURE__ */ jsx10("h3", { className: "text-2xl font-serif font-bold mb-4 text-[#8B0000]", children: feature.title }),
      /* @__PURE__ */ jsx10("div", { className: "max-w-[60ch]", children: /* @__PURE__ */ jsx10("p", { className: "text-xl leading-relaxed", children: feature.description }) })
    ] }, index)) })
  ] }) });
}

// app/components/BookGrid.tsx
import { useState as useState2 } from "react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
function BookGrid({ books }) {
  let [selectedBook, setSelectedBook] = useState2(null);
  function markdownToHtml(md) {
    let html = md.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    return html = html.replace(/\*(?!\*)(.+?)\*/g, "<em>$1</em>"), html = html.replace(/\n/g, "<br>"), html;
  }
  return /* @__PURE__ */ jsxs7("section", { className: "w-full max-w-4xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx11("h2", { className: "text-2xl md:text-3xl font-bold mb-6 text-[#8B0000] text-left", children: "What's Inside Your Bundle" }),
    /* @__PURE__ */ jsx11("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: books.map((book, idx) => /* @__PURE__ */ jsxs7(
      "div",
      {
        className: "bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow duration-200",
        children: [
          /* @__PURE__ */ jsx11(
            "button",
            {
              type: "button",
              onClick: () => setSelectedBook(book),
              className: "focus:outline-none",
              "aria-label": `View details for ${book.title}`,
              children: /* @__PURE__ */ jsx11(
                "img",
                {
                  src: book.image,
                  alt: book.title,
                  className: "w-28 h-40 object-cover rounded mb-3 border border-gray-200 shadow-sm hover:scale-105 transition-transform duration-150",
                  loading: idx > 1 ? "lazy" : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ jsx11("h3", { className: "text-lg font-semibold mb-1 text-[#242424]", children: book.title }),
          /* @__PURE__ */ jsxs7("div", { className: "text-xs text-gray-500 mb-2", children: [
            "by ",
            book.author
          ] }),
          /* @__PURE__ */ jsx11("div", { className: "text-sm text-gray-700 mb-2 line-clamp-3", children: book.description }),
          /* @__PURE__ */ jsx11("div", { className: "text-sm font-bold text-[#8B0000] mb-2", children: book.hook }),
          /* @__PURE__ */ jsx11(
            "button",
            {
              type: "button",
              onClick: () => setSelectedBook(book),
              className: "mt-2 px-4 py-2 bg-[#8B0000] text-white rounded shadow hover:bg-[#5a0000] focus:outline-none text-sm font-semibold",
              children: "Details"
            }
          )
        ]
      },
      book.title
    )) }),
    selectedBook && /* @__PURE__ */ jsx11("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ jsxs7("div", { className: "bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-xl relative", children: [
      /* @__PURE__ */ jsx11(
        "button",
        {
          type: "button",
          onClick: () => setSelectedBook(null),
          className: "absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold focus:outline-none",
          "aria-label": "Close details dialog",
          children: "\xD7"
        }
      ),
      /* @__PURE__ */ jsxs7("div", { className: "p-6 flex flex-col items-center", children: [
        /* @__PURE__ */ jsx11("img", { src: selectedBook.image, alt: selectedBook.title, className: "w-32 h-48 object-cover rounded mb-4 border border-gray-200 shadow" }),
        /* @__PURE__ */ jsx11("h3", { className: "text-2xl font-serif font-bold text-black mb-2 text-center", children: selectedBook.title }),
        /* @__PURE__ */ jsxs7("div", { className: "text-base text-gray-600 mb-4 text-center", children: [
          "by ",
          selectedBook.author
        ] }),
        /* @__PURE__ */ jsx11("div", { className: "text-lg text-gray-800 mb-4 text-left whitespace-pre-line", dangerouslySetInnerHTML: { __html: markdownToHtml(selectedBook.longDescription) } }),
        selectedBook.hook && /* @__PURE__ */ jsx11("div", { className: "text-base font-semibold italic text-[#8B0000] text-center", children: selectedBook.hook })
      ] })
    ] }) })
  ] });
}

// app/components/TestimonialsSection.tsx
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var testimonialImagePaths = [
  "/assets/img/testimonials/richcook_a_photograph_of_an_african_american_person_50_or_older_eba6508c-4608-48e3-bb93-18159bd539c0.png",
  "/assets/img/testimonials/richcook_a_photograph_of_a_woman_65_or_older_within_a_circle__84e91bb1-a11f-4311-ac57-1f75af5352a1_0.png",
  "/assets/img/testimonials/richcook_a_photograph_of_an_Chinese_Japanese_Korean_Veitnames_601e6ba3-89b2-4c66-b2d4-d669b3ce2efc_0.png",
  "/assets/img/testimonials/richcook_a_photograph_of_an_african_american_woman_65_or_olde_fd4730e1-0184-4281-8b2b-190ef0df25c0_1.png",
  "/assets/img/testimonials/richcook_a_photograph_of_a_person_50_or_older_within_a_circle_6895d045-64bf-4753-b36e-a7f2d2ba0d5e_3.png"
];
function TestimonialsSection({ testimonials, variantType }) {
  let imagesToShow = typeof window < "u" && window.innerWidth < 768 ? 3 : 5;
  return /* @__PURE__ */ jsx12("section", { className: "px-6 py-16 bg-[#fdfcf9] border-t border-gray-200", children: /* @__PURE__ */ jsxs8("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx12("div", { className: "flex justify-center gap-4 mb-8", children: testimonialImagePaths.map((src, i) => /* @__PURE__ */ jsx12(
      "img",
      {
        src,
        alt: "Reader testimonial",
        className: `rounded-full object-cover border-2 border-white shadow w-20 h-20 md:w-24 md:h-24 ${i > 2 ? "hidden md:block" : ""}`,
        loading: i > 1 ? "lazy" : void 0
      },
      src
    )) }),
    /* @__PURE__ */ jsx12("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-center mb-8", children: "What Readers Are Saying..." }),
    /* @__PURE__ */ jsx12("div", { className: "max-w-[65ch] mx-auto mb-12", children: /* @__PURE__ */ jsx12("p", { className: "text-xl leading-relaxed text-left", children: "You're in good company. Thousands of readers have rediscovered the joy of classic mysteries." }) }),
    /* @__PURE__ */ jsx12("div", { className: "grid md:grid-cols-2 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs8("div", { className: "bg-white border border-gray-300 shadow-sm rounded-lg p-8", children: [
      /* @__PURE__ */ jsx12("div", { className: "flex mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx12(
        "span",
        {
          className: `w-6 h-6 text-2xl ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`,
          children: "\u2605"
        },
        i
      )) }),
      /* @__PURE__ */ jsxs8("div", { className: "max-w-[60ch]", children: [
        /* @__PURE__ */ jsxs8("p", { className: "text-xl leading-relaxed mb-4 italic", children: [
          '"',
          testimonial.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs8("p", { className: "font-semibold text-lg", children: [
          "\u2013 ",
          testimonial.author
        ] })
      ] })
    ] }, index)) })
  ] }) });
}

// app/components/WhyDifferentSection.tsx
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
function WhyDifferentSection({ mainText, features }) {
  return /* @__PURE__ */ jsx13("section", { className: "px-6 py-16 bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxs9("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx13("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-center mb-8", children: "Why We're Different (And Proud of It)" }),
    /* @__PURE__ */ jsx13("div", { className: "max-w-[65ch] mx-auto mb-12", children: /* @__PURE__ */ jsx13("p", { className: "text-xl leading-relaxed text-left", children: mainText }) }),
    /* @__PURE__ */ jsx13("div", { className: "space-y-8", children: features.map((feature, index) => /* @__PURE__ */ jsx13("div", { className: "border border-gray-300 shadow-sm bg-white rounded-lg p-8", children: /* @__PURE__ */ jsxs9("div", { className: "flex items-start gap-6", children: [
      /* @__PURE__ */ jsx13("span", { className: "text-4xl", children: feature.icon }),
      /* @__PURE__ */ jsxs9("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx13("h3", { className: "text-2xl font-serif font-bold mb-4 text-[#8B0000]", children: feature.title }),
        /* @__PURE__ */ jsx13("div", { className: "max-w-[60ch]", children: /* @__PURE__ */ jsx13("p", { className: "text-xl leading-relaxed", children: feature.description }) })
      ] })
    ] }) }, index)) })
  ] }) });
}

// app/components/GuaranteeSection.tsx
import { Fragment, jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
function GuaranteeSection({ image, variantType }) {
  let videoWebm = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.webm", videoMp4 = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.mp4", gifFallback = "/assets/img/donation/social_richcook_a_video_of_a_65_or_older_woman_donating_a_paperback__f9265f78-18fc-4855-a7e5-cbc6340450fc_0.gif", pngFallback = image;
  return /* @__PURE__ */ jsxs10(
    "section",
    {
      className: "relative w-full px-0 py-16 bg-[#fdfcf9] border-t border-gray-200 overflow-hidden",
      style: { minHeight: "420px" },
      children: [
        variantType === "ebook" ? /* @__PURE__ */ jsxs10("div", { className: "absolute inset-0 w-full h-full z-0", children: [
          /* @__PURE__ */ jsxs10(
            "video",
            {
              className: "w-full h-full object-cover object-center",
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              poster: "/assets/img/donation/richcook_two_women_in_their_mid_60s_holding_ipads_and_happily_c_c9b8095f-ed07-4975-b6ba-1b766829e47e.png",
              "aria-label": "Two women in their 60s in a library.",
              children: [
                /* @__PURE__ */ jsx14("source", { src: "/assets/img/donation/social_richcook_two_women_in_their_mid_60s_holding_ipads_and_happily_abb9dc18-3e74-4cfe-b7e2-e319b692efde_0.webm", type: "video/webm" }),
                /* @__PURE__ */ jsx14("source", { src: "/assets/img/donation/social_richcook_two_women_in_their_mid_60s_holding_ipads_and_happily_abb9dc18-3e74-4cfe-b7e2-e319b692efde_0.gif", type: "image/gif" }),
                /* @__PURE__ */ jsx14(
                  "img",
                  {
                    src: "/assets/img/donation/richcook_two_women_in_their_mid_60s_holding_ipads_and_happily_c_c9b8095f-ed07-4975-b6ba-1b766829e47e.png",
                    alt: "Two women in their 60s in a library.",
                    className: "w-full h-full object-cover object-center"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx14("div", { className: "absolute inset-0 bg-black/20" })
        ] }) : /* @__PURE__ */ jsxs10("div", { className: "absolute inset-0 w-full h-full z-0", children: [
          /* @__PURE__ */ jsxs10(
            "video",
            {
              className: "w-full h-full object-cover object-center",
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              poster: pngFallback,
              "aria-label": "A 65+ woman donating a paperback book.",
              children: [
                /* @__PURE__ */ jsx14("source", { src: videoWebm, type: "video/webm" }),
                /* @__PURE__ */ jsx14("source", { src: videoMp4, type: "video/mp4" }),
                /* @__PURE__ */ jsx14("source", { src: gifFallback, type: "image/gif" }),
                /* @__PURE__ */ jsx14(
                  "img",
                  {
                    src: pngFallback,
                    alt: "A 65+ woman donating a paperback book.",
                    className: "w-full h-full object-cover object-center"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx14("div", { className: "absolute inset-0 bg-black/20" })
        ] }),
        /* @__PURE__ */ jsxs10("div", { className: "relative z-10 w-full max-w-4xl mx-auto px-6 py-10 md:py-16", children: [
          /* @__PURE__ */ jsx14("div", { className: "absolute inset-0 w-full h-full bg-black/60 rounded-lg", style: { zIndex: 1 } }),
          /* @__PURE__ */ jsx14("div", { className: "relative", style: { zIndex: 2 }, children: variantType === "ebook" ? /* @__PURE__ */ jsxs10(Fragment, { children: [
            /* @__PURE__ */ jsxs10("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-white drop-shadow-lg", children: [
              /* @__PURE__ */ jsx14("span", { role: "img", "aria-label": "skull", children: "\u{1F480}" }),
              " Love It or Leave It Guarantee"
            ] }),
            /* @__PURE__ */ jsx14("div", { className: "flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto mb-8", children: /* @__PURE__ */ jsxs10("div", { className: "max-w-[65ch] mx-auto text-white drop-shadow", children: [
              /* @__PURE__ */ jsx14("p", { className: "text-xl leading-relaxed text-left", children: "If you didn't love your ebook, don't sweat it\u2014reading should never feel like a gamble." }),
              /* @__PURE__ */ jsx14("p", { className: "text-xl leading-relaxed text-left mt-4", children: "Instead of a refund with hoops, here's what I offer:" }),
              /* @__PURE__ */ jsxs10("ol", { className: "list-decimal list-inside text-xl leading-relaxed text-left mt-4 space-y-2", children: [
                /* @__PURE__ */ jsx14("li", { children: "Do something kind for another reader. Leave a review (for this or any book), recommend a favorite to a friend, or even share the ebook file with someone you think might enjoy it." }),
                /* @__PURE__ */ jsx14("li", { children: "Then email me. I'll send you a coupon for any other ebook in the store\u2014your choice, no matter the price." }),
                /* @__PURE__ */ jsx14("li", { children: "And don't worry about the book you bought. No need to delete it\u2014consider it a gift." })
              ] }),
              /* @__PURE__ */ jsx14("p", { className: "text-xl leading-relaxed text-left mt-4", children: "No tricks. No fine print. Just a little mystery-world karma." }),
              /* @__PURE__ */ jsxs10("div", { className: "mt-8 p-5 bg-white/95 border-2 border-[#8B0000] rounded-lg shadow-sm text-[#242424] text-lg font-semibold text-center", children: [
                /* @__PURE__ */ jsx14("span", { className: "font-bold", children: "Not your style?" }),
                " ",
                /* @__PURE__ */ jsx14("span", { className: "font-normal", children: "No worries. Share it with a friend, then pick another\u2014on the house." })
              ] })
            ] }) })
          ] }) : /* @__PURE__ */ jsxs10(Fragment, { children: [
            /* @__PURE__ */ jsx14("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-white drop-shadow-lg", children: 'Our "Pass the Mystery On" Guarantee' }),
            /* @__PURE__ */ jsx14("div", { className: "flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto mb-8", children: /* @__PURE__ */ jsx14("div", { className: "max-w-[65ch] mx-auto text-white drop-shadow", children: /* @__PURE__ */ jsx14("p", { className: "text-xl leading-relaxed text-left", children: "We do things a little differently here at Tales of Murder Press\u2014because we're not just selling books, we're keeping stories alive." }) }) }),
            /* @__PURE__ */ jsx14("div", { className: "border-2 border-[#8B0000] bg-white/90 mb-10 shadow-sm rounded-lg p-8", children: /* @__PURE__ */ jsxs10("div", { className: "max-w-[65ch] mx-auto space-y-4", children: [
              /* @__PURE__ */ jsx14("p", { className: "text-xl leading-relaxed", children: "If you're not thrilled with your purchase, we'll give you a 100% refund, including shipping. No restocking fees. No hoops." }),
              /* @__PURE__ */ jsx14("p", { className: "text-xl leading-relaxed font-semibold", children: "All we ask? Donate your book." }),
              /* @__PURE__ */ jsx14("p", { className: "text-xl leading-relaxed", children: "Give it a second life by placing it somewhere it can still be enjoyed\u2014your local library, a senior center, a Little Free Library, a school, a hospital, or even a prison literacy program. Just send us a quick photo or a short note showing you passed it along. That's it." })
            ] }) }),
            /* @__PURE__ */ jsxs10("div", { className: "grid md:grid-cols-3 gap-6 text-center", children: [
              /* @__PURE__ */ jsxs10("div", { className: "p-6 text-white drop-shadow", children: [
                /* @__PURE__ */ jsx14("h4", { className: "font-semibold text-xl mb-3", children: "Less Waste, Lower Footprint" }),
                /* @__PURE__ */ jsx14("p", { className: "text-lg", children: "Every book finds a home." })
              ] }),
              /* @__PURE__ */ jsxs10("div", { className: "p-6 text-white drop-shadow", children: [
                /* @__PURE__ */ jsx14("h4", { className: "font-semibold text-xl mb-3", children: "Every Book Deserves a Reader" }),
                /* @__PURE__ */ jsx14("p", { className: "text-lg", children: "You help share these stories with others." })
              ] }),
              /* @__PURE__ */ jsxs10("div", { className: "p-6 text-white drop-shadow", children: [
                /* @__PURE__ */ jsx14("h4", { className: "font-semibold text-xl mb-3", children: "You Join the Mission" }),
                /* @__PURE__ */ jsx14("p", { className: "text-lg", children: "You become part of our preservation effort." })
              ] })
            ] })
          ] }) })
        ] })
      ]
    }
  );
}

// app/components/FAQSection.tsx
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
function FAQSection({ faqs }) {
  return /* @__PURE__ */ jsx15("section", { className: "px-6 py-16 bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxs11("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx15("h2", { className: "text-3xl md:text-4xl font-serif font-bold text-center mb-12", children: "Frequently Asked Questions" }),
    /* @__PURE__ */ jsx15("div", { className: "space-y-8", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs11("div", { className: "border border-gray-300 shadow-sm bg-white rounded-lg p-8", children: [
      /* @__PURE__ */ jsx15("h3", { className: "text-xl font-semibold mb-4 text-black", children: faq.question }),
      /* @__PURE__ */ jsx15("div", { className: "max-w-[65ch]", children: /* @__PURE__ */ jsx15("p", { className: "text-xl leading-relaxed", children: faq.answer }) })
    ] }, index)) })
  ] }) });
}

// app/routes/$variant.tsx
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
async function loader({ params }) {
  let variant = landingVariants.find((v) => v.id === params.variant);
  if (!variant)
    throw new Response("Not found", { status: 404 });
  return json(variant);
}
function LandingVariantRoute() {
  let variant = useLoaderData(), { headline, subhead } = landingCopy[variant.copyVariant], books = [
    {
      title: "The Bradys and the Chinese Idol",
      author: "Francis Worcester Doughty",
      description: "A chilling mystery of murder and missing treasures in 1890s New York's criminal underworld.",
      longDescription: "When a miserly millionaire is found dead with a dagger in his heart...",
      hook: "Will you solve the case before the Bradys do?",
      image: variant.bookGridImages[0]
    },
    {
      title: "Bat Wing",
      author: "Sax Rohmer",
      description: "A cryptic warning leads detective Paul Harley into a world where shadow and superstition are deadly real.",
      longDescription: "When Paul Harley, a brilliant criminologist known for his unrelenting pursuit of truth...",
      hook: "Who can you trust when the darkness comes for you?",
      image: variant.bookGridImages[1]
    },
    {
      title: "The Expressman and the Detective",
      author: "Allan Pinkerton",
      description: "Based on a true case: $40,000 vanishes and America's first private detective takes the case.",
      longDescription: "When a package containing $40,000 disappears under mysterious circumstances...",
      hook: "Crime. Grit. Real justice.",
      image: variant.bookGridImages[2]
    },
    {
      title: "Into the Heart of Australia",
      author: "Author of Old Broadbrim",
      description: "Old Broadbrim, the Quaker detective, follows a deadly conspiracy from Manhattan to the Australian outback.",
      longDescription: "In the shadows of New York's wealthiest avenues...",
      hook: "This isn't just vintage \u2014 it's a masterclass in suspense.",
      image: variant.bookGridImages[3]
    },
    {
      title: "The Dead Secret",
      author: "Wilkie Collins",
      description: "A dying woman's secret threatens to unravel her family in this gothic mystery of guilt and buried truths.",
      longDescription: "On the mist-shrouded coast of Cornwall...",
      hook: "Can some truths remain buried forever?",
      image: variant.bookGridImages[4]
    }
  ], guaranteeImage = "/assets/img/donation/richcook_a_video_of_a_65_or_older_woman_donating_a_paperback_no_4e0afd90-f02a-4226-be35-f4721c9ac9ad.png", isEbook = variant.id.includes("ebook"), crossLinkHref = "", crossLinkText = "";
  isEbook ? (crossLinkHref = `/${variant.id.replace("ebook", "a5")}`, crossLinkText = "Prefer print? Get the Print Bundle here") : variant.id.includes("a5") && (crossLinkHref = `/${variant.id.replace("a5", "ebook")}`, crossLinkText = "Prefer ebook? Get the Ebook Bundle here");
  let checkoutUrl = shopifyCheckoutLinks[variant.id];
  return /* @__PURE__ */ jsx16(
    LandingTemplate,
    {
      headline,
      subhead,
      heroImageDesktop: variant.heroImageDesktop,
      heroImageMobile: variant.heroImageMobile,
      offerSection: /* @__PURE__ */ jsx16(
        OfferSection,
        {
          offerTitle: variant.offerTitle,
          offerPrice: variant.offerPrice,
          offerOldPrice: variant.offerOldPrice,
          offerBadge: variant.offerBadge,
          ctaText: variant.ctaText,
          checkoutUrl,
          children: crossLinkHref && /* @__PURE__ */ jsx16("div", { className: "mt-2", children: /* @__PURE__ */ jsx16(Link, { to: crossLinkHref, className: "text-[#8B0000] underline text-base hover:text-[#5a0000] focus:outline-none", children: crossLinkText }) })
        }
      ),
      problemSection: /* @__PURE__ */ jsx16(ProblemSection, { problems: variant.problems }),
      solutionSection: /* @__PURE__ */ jsx16(SolutionSection, { mainText: variant.solutionMainText, features: variant.solutionFeatures }),
      bookGridSection: /* @__PURE__ */ jsx16(BookGrid, { books }),
      testimonialsSection: /* @__PURE__ */ jsx16(TestimonialsSection, { testimonials: variant.testimonials, variantType: variant.id.includes("ebook") ? "ebook" : "print" }),
      whyDifferentSection: /* @__PURE__ */ jsx16(WhyDifferentSection, { mainText: variant.whyMainText, features: variant.whyFeatures }),
      guaranteeSection: /* @__PURE__ */ jsx16(GuaranteeSection, { image: guaranteeImage, variantType: variant.id.includes("ebook") ? "ebook" : "print" }),
      faqSection: /* @__PURE__ */ jsx16(FAQSection, { faqs: variant.faqs }),
      copyVariant: variant.copyVariant,
      floatingCtaPrice: variant.offerPrice,
      crossLinkHref,
      crossLinkText,
      checkoutUrl
    }
  );
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ jsxs12("div", { style: { color: "red", padding: 32 }, children: [
    /* @__PURE__ */ jsx16("h1", { children: "Something went wrong" }),
    /* @__PURE__ */ jsx16("pre", { children: error.message }),
    /* @__PURE__ */ jsx16("pre", { children: error.stack })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-BYFOKVV2.js", imports: ["/build/_shared/chunk-5LCOAH32.js", "/build/_shared/chunk-MFPRU5OA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-46WUAGRG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$variant": { id: "routes/$variant", parentId: "root", path: ":variant", index: void 0, caseSensitive: void 0, module: "/build/routes/$variant-GUTFXKSM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/mystery.$base": { id: "routes/mystery.$base", parentId: "root", path: "mystery/:base", index: void 0, caseSensitive: void 0, module: "/build/routes/mystery.$base-PS2AKDFA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/test.$foo": { id: "routes/test.$foo", parentId: "root", path: "test/:foo", index: void 0, caseSensitive: void 0, module: "/build/routes/test.$foo-IRZNFJUC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "a98c2eda", hmr: void 0, url: "/build/manifest-A98C2EDA.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/mystery.$base": {
    id: "routes/mystery.$base",
    parentId: "root",
    path: "mystery/:base",
    index: void 0,
    caseSensitive: void 0,
    module: mystery_base_exports
  },
  "routes/test.$foo": {
    id: "routes/test.$foo",
    parentId: "root",
    path: "test/:foo",
    index: void 0,
    caseSensitive: void 0,
    module: test_foo_exports
  },
  "routes/$variant": {
    id: "routes/$variant",
    parentId: "root",
    path: ":variant",
    index: void 0,
    caseSensitive: void 0,
    module: variant_exports
  }
};

// server.ts
var handler = createRequestHandler({
  build: server_build_exports,
  mode: "production"
});
export {
  handler
};
