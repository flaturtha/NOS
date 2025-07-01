import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { landingVariants, LandingVariantConfig } from "../variants/landingVariantConfig";
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
  const variant = landingVariants.find(v => v.id === params["*"]);
  if (!variant) {
    throw new Response("Not found", { status: 404 });
  }
  return json(variant);
}

export default function LandingVariantRoute() {
  const variant = useLoaderData<typeof loader>() as LandingVariantConfig;
  const { headline, subhead } = landingCopy[variant.copyVariant];

  // Placeholder book data (titles/descriptions static, images from config)
  const books = [
    {
      title: "The Bradys and the Chinese Idol",
      author: "Francis Worcester Doughty",
      description: "A chilling mystery of murder and missing treasures in 1890s New York's criminal underworld.",
      hook: "Will you solve the case before the Bradys do?",
      image: variant.bookGridImages[0],
    },
    {
      title: "Bat Wing",
      author: "Sax Rohmer",
      description: "A cryptic warning leads detective Paul Harley into a world where shadow and superstition are deadly real.",
      hook: "Who can you trust when the darkness comes for you?",
      image: variant.bookGridImages[1],
    },
    {
      title: "The Expressman and the Detective",
      author: "Allan Pinkerton",
      description: "Based on a true case: $40,000 vanishes and America's first private detective takes the case.",
      hook: "Crime. Grit. Real justice.",
      image: variant.bookGridImages[2],
    },
    {
      title: "Into the Heart of Australia",
      author: "Author of Old Broadbrim",
      description: "Old Broadbrim, the Quaker detective, follows a deadly conspiracy from Manhattan to the Australian outback.",
      hook: "This isn't just vintage — it's a masterclass in suspense.",
      image: variant.bookGridImages[3],
    },
    {
      title: "The Dead Secret",
      author: "Wilkie Collins",
      description: "A dying woman's secret threatens to unravel her family in this gothic mystery of guilt and buried truths.",
      hook: "Can some truths remain buried forever?",
      image: variant.bookGridImages[4],
    },
  ];

  // Use the donation video poster image as the guarantee background
  const guaranteeImage = "/assets/img/donation/richcook_a_video_of_a_65_or_older_woman_donating_a_paperback_no_4e0afd90-f02a-4226-be35-f4721c9ac9ad.png";

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
        />
      }
      problemSection={<ProblemSection problems={variant.problems} />}
      solutionSection={<SolutionSection mainText={variant.solutionMainText} features={variant.solutionFeatures} />}
      bookGridSection={<BookGrid books={books} />}
      testimonialsSection={<TestimonialsSection testimonials={variant.testimonials} />}
      whyDifferentSection={<WhyDifferentSection mainText={variant.whyMainText} features={variant.whyFeatures} />}
      guaranteeSection={<GuaranteeSection image={guaranteeImage} />}
      faqSection={<FAQSection faqs={variant.faqs} />}
    />
  );
} 