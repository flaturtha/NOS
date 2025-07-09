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
// random comment
export default function LandingVariantRoute() {
  const variant = useLoaderData<typeof loader>() as LandingVariantConfig;
  const { headline, subhead } = landingCopy[variant.copyVariant];

  const books = [
    {
      title: "The Bradys and the Chinese Idol",
      author: "Francis Worcester Doughty",
      description: "A chilling mystery of murder and missing treasures in 1890s New York's criminal underworld.",
      longDescription: `*A Secret Service Adventure with Old and Young King Brady*\n\nWhen a miserly millionaire is found dead with a dagger in his heart, New York's most baffling mystery falls into the hands of the legendary Brady Detective Bureau. The murder scene—a shadowy office concealing hidden panels, peculiar treasures, and the lingering scent of secrets—yields no will, no clear suspect, and no answers. But when a mysterious Chinese idol is stolen and whispers of counterfeit pearls and ancient grudges emerge, Old and Young King Brady find themselves tangled in a sinister web stretching from Chinatown's darkest alleys to a clandestine society plotting in secret.\n\nAs the Bradys pursue a trail of murder, deceit, and greed, each clue reveals deeper layers of treachery. With danger closing in, they must uncover the idol's secrets, expose a criminal empire, and solve the murder before the truth slips away forever.\n\nFast-paced, chilling, and packed with intrigue, *Chinese Idol* delivers a mystery filled with unexpected twists that will keep you guessing until the final revelation.\n\n**Will you solve the case before the Bradys do?**\n\nClick **BUY NOW** to uncover the truth behind the idol and its deadly secrets!`,
      hook: "Will you solve the case before the Bradys do?",
      image: variant.bookGridImages[0],
    },
    {
      title: "Bat Wing",
      author: "Sax Rohmer",
      description: "A cryptic warning leads detective Paul Harley into a world where shadow and superstition are deadly real.",
      longDescription: `**Prepare to lose yourself in the shadows of intrigue and dread …**\n\nWhen Paul Harley, a brilliant criminologist known for his unrelenting pursuit of truth, is called to investigate a string of chilling events in a quiet English countryside, he enters a world steeped in whispers of the macabre.\n\nIt begins with a single, eerie token: the delicate, sinister image of a bat wing, a harbinger of death that strikes fear into the heart of a desperate man. But as Harley digs deeper, the seemingly quaint setting unravels to reveal a labyrinth of ancient curses, exotic secrets, and the dark tendrils of an evil that knows no borders.\n\nRacing against time, Harley must confront an enemy who moves like a shadow and kills without hesitation. As each clue pulls him further into a chilling conspiracy, Harley discovers that those he trusts may hold the most dangerous secrets of all. From misty English manors to the far reaches of forbidden lore, Bat Wing is a masterclass in atmospheric suspense that will keep you breathless until the final page.\n\nFor fans of Sherlock Holmes and *The Hound of the Baskervilles*, Sax Rohmer delivers a haunting mystery teeming with twists, terror, and the lure of the unknown.\n\n**Who can you trust when the darkness comes for you?**\n\nClick BUY NOW to immerse yourself in a tale that will haunt your dreams and keep you turning pages deep into the night!`,
      hook: "Who can you trust when the darkness comes for you?",
      image: variant.bookGridImages[1],
    },
    {
      title: "The Expressman and the Detective",
      author: "Allan Pinkerton",
      description: "Based on a true case: $40,000 vanishes and America's first private detective takes the case.",
      longDescription: `***A Missing Fortune. A Web of Deception. One Detective Who Won't Quit.***\n\nWhen a package containing $40,000 disappears under mysterious circumstances, the Adams Express Company turns to one man: Allan Pinkerton, the legendary detective who has never met a case he couldn't crack.\n\nDive into this electrifying account of 19th-century crime and justice, where shadowy figures, hidden schemes, and unexpected twists keep you guessing until the final revelation. Pinkerton's dogged pursuit of the truth unveils not only a high-stakes mystery but a fascinating portrait of Southern society during the turbulent years leading to the Civil War.\n\nBased on true events and told with sharp insight and vivid detail, *THE EXPRESSMAN AND THE DETECTIVE* is more than a story—it's a masterclass in crime-solving, straight from the man who redefined detective work.\n\n*Who stole the money—and why? The truth is stranger than fiction.*\n\nClick **BUY** now to uncover the secrets behind one of history's most confounding heists!`,
      hook: "Crime. Grit. Real justice.",
      image: variant.bookGridImages[2],
    },
    {
      title: "Into the Heart of Australia",
      author: "Author of Old Broadbrim",
      description: "Old Broadbrim, the Quaker detective, follows a deadly conspiracy from Manhattan to the Australian outback.",
      longDescription: `In the shadows of New York's wealthiest avenues, where secrets fester behind gilded doors, a peculiar invitation draws the sharp-eyed Quaker Detective, Old Broadbrim, into the labyrinth of luxury and deceit.\n\nOn a seemingly uneventful Thursday, a letter from one of Fifth Avenue's wealthiest magnates, Custer Kipp, lures the detective into a strange bargain he cannot refuse. Kipp, a man surrounded by immense wealth yet haunted by whispers of betrayal, offers Broadbrim a puzzle with no apparent crime—until the detective digs deeper.\n\nIn a mansion where every polished surface reflects more than opulence, Old Broadbrim must navigate the lives of Kipp's ward, the captivating young Nora Doon, and his wayward son Foster, whose absence hints at dark secrets lurking beneath the surface. As the walls close in, alliances blur, and every clue brings the detective closer to a dangerous truth—one that could cost him everything.\n\nIntrigue, power, and mystery collide in a high-stakes game where nothing is as it seems. Can Old Broadbrim unravel the enigma before it consumes them all?\n\nFor fans of Sherlock Holmes and tales of hidden treachery, Old Broadbrim's Strange Bargain is an unmissable journey into the heart of 19th-century suspense. Click "Buy Now" and uncover the truth that will leave you breathless!`,
      hook: "This isn't just vintage — it's a masterclass in suspense.",
      image: variant.bookGridImages[3],
    },
    {
      title: "The Dead Secret",
      author: "Wilkie Collins",
      description: "A dying woman's secret threatens to unravel her family in this gothic mystery of guilt and buried truths.",
      longDescription: `***A Hidden Letter. A Dying Wish. A Secret That Could Destroy Everything.***\n\nOn the mist-shrouded coast of Cornwall, a dying woman compels her maid to take an oath—to guard a perilous secret that threatens the very foundation of the Treverton family. But secrets have a way of unearthing themselves, and this one is buried deep within Porthgenna Tower, a mansion haunted by mysteries of the past.\n\nAs the years pass, the secret lies dormant, until the new mistress of Porthgenna unwittingly steps closer to uncovering a truth that could unravel her world. With suspense that will keep you turning pages late into the night, Wilkie Collins weaves a gripping tale of guilt, love, and redemption.\n\n*Can some truths remain buried forever? Or will the dead have their revenge?*\n\nDive into this *Gothic masterpiece* where every shadow holds a story, and every revelation could shatter lives. Click **BUY** now to uncover the chilling twists of **THE DEAD SECRET**!`,
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
          isEbook={isEbook}
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
      isEbook={isEbook}
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