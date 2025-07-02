import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { landingVariants, LandingVariantConfig, shopifyCheckoutLinks } from "../variants/landingVariantConfig";
import { landingCopy } from "../variants/landingCopy";
import { LandingTemplate } from "../components/LandingTemplate";
import { OfferSection } from "../components/OfferSection";
import { ProblemSection } from "../components/ProblemSection";
import { SolutionSection } from "../components/SolutionSection";
import { BookGrid } from "../components/BookGrid";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { WhyDifferentSection } from "../components/WhyDifferentSection";
import { GuaranteeSection } from "../components/GuaranteeSection";
import { FAQSection } from "../components/FAQSection";

export async function loader({ params }: LoaderFunctionArgs) {
  const variant = landingVariants.find(v => v.id === params.variant);
  if (!variant) {
    throw new Response("Not found", { status: 404 });
  }
  return json(variant);
}

export default function LandingVariantRoute() {
  const variant = useLoaderData<typeof loader>() as LandingVariantConfig;
  const { headline, subhead } = landingCopy[variant.copyVariant];

  const books = [
    {
      title: "The Bradys and the Chinese Idol",
      author: "Francis Worcester Doughty",
      description: "A chilling mystery of murder and missing treasures in 1890s New York's criminal underworld.",
      longDescription: `When a miserly millionaire is found dead with a dagger in his heart...`,
      hook: "Will you solve the case before the Bradys do?",
      image: variant.bookGridImages[0],
    },
    {
      title: "Bat Wing",
      author: "Sax Rohmer",
      description: "A cryptic warning leads detective Paul Harley into a world where shadow and superstition are deadly real.",
      longDescription: `When Paul Harley, a brilliant criminologist known for his unrelenting pursuit of truth...`,
      hook: "Who can you trust when the darkness comes for you?",
      image: variant.bookGridImages[1],
    },
    {
      title: "The Expressman and the Detective",
      author: "Allan Pinkerton",
      description: "Based on a true case: $40,000 vanishes and America's first private detective takes the case.",
      longDescription: `When a package containing $40,000 disappears under mysterious circumstances...`,
      hook: "Crime. Grit. Real justice.",
      image: variant.bookGridImages[2],
    },
    {
      title: "Into the Heart of Australia",
      author: "Author of Old Broadbrim",
      description: "Old Broadbrim, the Quaker detective, follows a deadly conspiracy from Manhattan to the Australian outback.",
      longDescription: `In the shadows of New York's wealthiest avenues...`,
      hook: "This isn't just vintage — it's a masterclass in suspense.",
      image: variant.bookGridImages[3],
    },
    {
      title: "The Dead Secret",
      author: "Wilkie Collins",
      description: "A dying woman's secret threatens to unravel her family in this gothic mystery of guilt and buried truths.",
      longDescription: `On the mist-shrouded coast of Cornwall...`,
      hook: "Can some truths remain buried forever?",
      image: variant.bookGridImages[4],
    },
  ];

  const guaranteeImage = "/assets/img/donation/richcook_a_video_of_a_65_or_older_woman_donating_a_paperback_no_4e0afd90-f02a-4226-be35-f4721c9ac9ad.png";

  const isEbook = variant.id.includes('ebook');
  let crossLinkHref = '';
  let crossLinkText = '';
  if (isEbook) {
    crossLinkHref = `/${variant.id.replace('ebook', 'a5')}`;
    crossLinkText = 'Prefer print? Get the Print Bundle here';
  } else if (variant.id.includes('a5')) {
    crossLinkHref = `/${variant.id.replace('a5', 'ebook')}`;
    crossLinkText = 'Prefer ebook? Get the Ebook Bundle here';
  }

  const checkoutUrl = shopifyCheckoutLinks[variant.id];

  return (
    <LandingTemplate
      headline={headline}
      subhead={subhead}
      heroImageDesktop={variant.heroImageDesktop}
      heroImageMobile={variant.heroImageMobile}
      offerSection={
        <OfferSection
          offerTitle={variant.offerTitle}
          offerPrice={variant.offerPrice}
          offerOldPrice={variant.offerOldPrice}
          offerBadge={variant.offerBadge}
          ctaText={variant.ctaText}
          checkoutUrl={checkoutUrl}
        >
          {crossLinkHref && (
            <div className="mt-2">
              <Link to={crossLinkHref} className="text-[#8B0000] underline text-base hover:text-[#5a0000] focus:outline-none">
                {crossLinkText}
              </Link>
            </div>
          )}
        </OfferSection>
      }
      problemSection={<ProblemSection problems={variant.problems} />}
      solutionSection={<SolutionSection mainText={variant.solutionMainText} features={variant.solutionFeatures} />}
      bookGridSection={<BookGrid books={books} />}
      testimonialsSection={<TestimonialsSection testimonials={variant.testimonials} variantType={variant.id.includes('ebook') ? 'ebook' : 'print'} />}
      whyDifferentSection={<WhyDifferentSection mainText={variant.whyMainText} features={variant.whyFeatures} />}
      guaranteeSection={<GuaranteeSection image={guaranteeImage} variantType={variant.id.includes('ebook') ? 'ebook' : 'print'} />}
      faqSection={<FAQSection faqs={variant.faqs} />}
      copyVariant={variant.copyVariant}
      floatingCtaPrice={variant.offerPrice}
      crossLinkHref={crossLinkHref}
      crossLinkText={crossLinkText}
      checkoutUrl={checkoutUrl}
    />
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div style={{ color: 'red', padding: 32 }}>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  );
} 