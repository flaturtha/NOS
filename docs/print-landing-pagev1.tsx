"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Truck, CheckCircle, Info, X, Clock, Package } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function VintageMysteryLanding() {
  const [selectedBook, setSelectedBook] = useState<number | null>(null)
  const [showFloatingCTA, setShowFloatingCTA] = useState(true)
  const [animateBottomCTA, setAnimateBottomCTA] = useState(false)
  const bottomCTARef = useRef<HTMLButtonElement>(null)

  const books = [
    {
      title: "The Bradys and the Chinese Idol",
      author: "Francis Worcester Doughty",
      description: "A chilling mystery of murder and missing treasures in 1890s New York's criminal underworld.",
      hook: "Will you solve the case before the Bradys do?",
      detailedDescription:
        "This thrilling detective story follows the famous Brady detectives as they navigate the dangerous underworld of 1890s New York. When wealthy collector Hiram Dodge is found dead in his locked study, the only clue is a missing Chinese idol worth a fortune. Old King Brady and his partner Young King Brady must unravel a web of deception involving counterfeit pearls, secret passages, and a mysterious criminal organization known as the Red Dragon Society. Set against the backdrop of New York's Chinatown, this fast-paced mystery combines classic detective work with exotic intrigue. The Bradys use their street smarts and detective skills to follow clues from the mansions of Fifth Avenue to the opium dens of Mott Street, racing against time to solve the murder before the killers strike again.",
    },
    {
      title: "Bat Wing",
      author: "Sax Rohmer",
      description:
        "A cryptic warning leads detective Paul Harley into a world where shadow and superstition are deadly real.",
      hook: "Who can you trust when the darkness comes for you?",
      detailedDescription:
        "Master of supernatural mystery Sax Rohmer weaves a tale of gothic horror and detective fiction that will keep you guessing until the final page. Private investigator Paul Harley receives a mysterious warning about a 'bat wing' - an ominous symbol of death in Caribbean folklore. When he's called to investigate strange occurrences at a remote English estate, Harley discovers a world where ancient curses seem to come alive. The mansion's inhabitants are plagued by unexplained deaths, ghostly apparitions, and the constant feeling of being watched. As Harley delves deeper into the mystery, he must separate supernatural superstition from very real human evil. This atmospheric thriller combines the best elements of a classic English country house mystery with exotic voodoo elements, creating a unique and unforgettable reading experience.",
    },
    {
      title: "The Expressman and the Detective",
      author: "Allan Pinkerton",
      description: "Based on a true case: $40,000 vanishes and America's first private detective takes the case.",
      hook: "Crime. Grit. Real justice.",
      detailedDescription:
        "This remarkable true crime story is told by Allan Pinkerton himself, the founder of America's first private detective agency. When $40,000 in cash and securities disappears from an Adams Express Company shipment, Pinkerton is called in to solve what seems like an impossible case. Using revolutionary detective techniques for the 1850s - including undercover work, surveillance, and psychological profiling - Pinkerton methodically tracks down the thieves. This isn't fiction; it's a real account of how detective work was born in America. Pinkerton's narrative reveals the gritty reality of 19th-century crime fighting, complete with dangerous undercover operations, corrupt officials, and a justice system still finding its way. The case takes Pinkerton from the streets of Chicago to the backwoods of rural America, showcasing the determination and ingenuity that made him a legend in law enforcement history.",
    },
    {
      title: "Into the Heart of Australia",
      author: "Author of Old Broadbrim",
      description:
        "Old Broadbrim, the Quaker detective, follows a deadly conspiracy from Manhattan to the Australian outback.",
      hook: "This isn't just vintage — it's a masterclass in suspense.",
      detailedDescription:
        "Old Broadbrim, the unconventional Quaker detective, faces his most challenging case yet when he receives a cryptic letter from Australian millionaire Jeremiah Wilkins. The letter hints at a deadly conspiracy that spans two continents and threatens to destroy everything Wilkins holds dear. Following clues from the bustling streets of New York to the remote Australian outback, Old Broadbrim must navigate a world of mining claims, family secrets, and international intrigue. This adventure combines the methodical detective work that made Old Broadbrim famous with exotic locations and high-stakes action. The story explores themes of greed, family loyalty, and justice while painting a vivid picture of both 1890s New York and the rugged Australian frontier. Old Broadbrim's unique Quaker perspective and unorthodox methods make him one of the most interesting detectives in classic mystery fiction.",
    },
    {
      title: "The Dead Secret",
      author: "Wilkie Collins",
      description:
        "A dying woman's secret threatens to unravel her family in this gothic mystery of guilt and buried truths.",
      hook: "Can some truths remain buried forever?",
      detailedDescription:
        "Wilkie Collins, master of Victorian sensation fiction, crafts a haunting tale of family secrets and moral dilemmas. When Mrs. Treverton lies on her deathbed, she confesses a terrible secret to her maid Sarah - a secret that could destroy her husband and daughter's lives forever. Sarah is torn between her loyalty to her dying mistress and her moral obligation to reveal the truth. Years later, the secret continues to cast its shadow over the Treverton family. Young Rosamond Treverton and her husband Leonard decide to investigate the mysterious circumstances surrounding her mother's death, uncovering a web of deception that reaches back decades. Set in the atmospheric Cornish countryside, this gothic mystery explores themes of guilt, redemption, and the price of keeping secrets. Collins masterfully builds suspense while examining the complex moral questions that arise when the truth has the power to destroy innocent lives.",
    },
  ]

  // Scroll effect for floating CTA and bottom CTA animation
  useEffect(() => {
    const handleScroll = () => {
      if (bottomCTARef.current) {
        const rect = bottomCTARef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        const isCenter = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2

        setShowFloatingCTA(!isVisible)
        setAnimateBottomCTA(isCenter)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const TrustSignals = () => (
    <div className="bg-[#f9f9f7] border border-gray-200 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
        <div className="flex flex-col md:flex-row items-center gap-3 py-3 md:py-0 md:px-4">
          <Shield className="w-7 h-7 text-[#8B0000]" />
          <span className="font-semibold text-base text-center md:text-left">Secure Checkout</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 py-3 md:py-0 md:px-4">
          <CheckCircle className="w-7 h-7 text-[#8B0000]" />
          <span className="font-semibold text-base text-center md:text-left">100% Money-Back</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 py-3 md:py-0 md:px-4">
          <Truck className="w-7 h-7 text-[#8B0000]" />
          <span className="font-semibold text-base text-center md:text-left">Ships from U.S.</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 py-3 md:py-0 md:px-4">
          <Clock className="w-7 h-7 text-[#8B0000]" />
          <span className="font-semibold text-base text-center md:text-left">10–14 Days Delivery</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 py-3 md:py-0 md:px-4">
          <Package className="w-7 h-7 text-[#8B0000]" />
          <span className="font-semibold text-base text-center md:text-left">Printed to Order</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontSize: "18px", lineHeight: "1.7" }}>
      {/* Sticky CTA Bar */}
      {showFloatingCTA && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#8B0000] text-white p-4 z-40 shadow-lg transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <Button className="w-full bg-white text-[#8B0000] hover:bg-gray-100 font-bold text-lg py-4 min-h-[48px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:bg-gray-200">
              Get my Bundle – $52.49
            </Button>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedBook !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-serif font-bold text-black max-w-[85%]">{books[selectedBook].title}</h3>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedBook(null)}
                  className="ml-4 min-h-[44px] min-w-[44px] hover:bg-gray-200 transition-colors active:bg-gray-300"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="max-w-[65ch]">
                <p className="text-lg leading-relaxed mb-6">{books[selectedBook].detailedDescription}</p>
                <p className="text-lg font-semibold italic text-[#8B0000]">{books[selectedBook].hook}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative">
        {/* Full-width hero image */}
        <div
          className="w-full h-96 md:h-[500px] relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero1.png')" }}
        >
          {/* Strong overlay for text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight max-w-[20ch] mx-auto text-white drop-shadow-lg">
                Remember When Mysteries Kept You Guessing Until the Very Last Page?
              </h1>

              <div className="max-w-[60ch] mx-auto">
                <p className="text-xl md:text-2xl leading-relaxed text-white drop-shadow-lg">
                  Rediscover the golden age of detective fiction with five forgotten classics, beautifully reborn in a
                  bookshelf-ready paperback collection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Offer section below hero */}
        <div className="px-6 py-12 md:py-16 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-[65ch] mx-auto mb-8">
              <p className="text-xl leading-relaxed text-left">
                Each book is designed for pure reading pleasure—easy to hold, printed in a clear, comfortable font, and
                yours to keep forever.
              </p>
            </div>

            <div className="bg-white shadow-xl border-2 border-[#8B0000] rounded-lg p-8 mb-8 max-w-md mx-auto">
              <p className="text-base font-semibold text-[#8B0000] mb-3">Limited-Time Launch Offer:</p>
              <h2 className="text-2xl font-serif font-bold mb-4">The Vintage Mystery Sampler Bundle</h2>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-xl line-through text-gray-500">$69.99</span>
                <span className="text-3xl font-bold text-[#8B0000]">$52.49</span>
                <Badge className="bg-[#8B0000] text-white text-base px-3 py-1">Save 25%</Badge>
              </div>
            </div>

            <Button className="bg-[#8B0000] hover:bg-[#5a0000] text-white px-10 py-6 text-xl font-semibold rounded-md mb-8 w-full max-w-sm min-h-[56px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:bg-[#4a0000]">
              YES, I WANT MY BUNDLE
            </Button>

            {/* Merged Trust Signals */}
            <TrustSignals />

            {/* Visual divider */}
            <div className="w-full h-px bg-gray-200 mt-8"></div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="px-6 py-12 bg-[#fdfcf9] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="text-3xl">🛡️</div>
              <span className="font-semibold text-lg">Secure Checkout</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="text-3xl">📦</div>
              <span className="font-semibold text-lg">Printed to Order</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="text-3xl">🔄</div>
              <span className="font-semibold text-lg">30-Day Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="text-3xl">🕰️</div>
              <span className="font-semibold text-lg">Delivered in 10–14 Days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            Tired of the Digital Runaround and Disappointing Reads?
          </h2>

          <div className="max-w-[65ch] mx-auto mb-10">
            <p className="text-xl leading-relaxed text-left">
              You just want to curl up with a great mystery, but it's become a frustrating hunt.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
              "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
              "The ebooks you \"buy\" from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
              "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support.",
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-4 h-4 bg-[#8B0000] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <p className="text-xl leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-16 bg-[#fdfcf9] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            The Solution: Real Books, Restored for Real Readers
          </h2>

          <div className="max-w-[65ch] mx-auto mb-12">
            <p className="text-xl leading-relaxed text-left">
              We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery
              Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format
              designed for true reading enjoyment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Read with Comfort and Ease",
                description:
                  'Each book is a reader-friendly A5 paperback (5.8" x 8.3") with clean, 11-point type. They\'re light enough to hold for hours without strain.',
              },
              {
                title: "Own Your Books, Forever",
                description:
                  "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends.",
              },
              {
                title: "Discover Genuine Hidden Gems",
                description:
                  "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm.",
              },
              {
                title: "Support a Preservation Mission",
                description:
                  "Every purchase you make helps us find and save another wonderful story from being forgotten forever.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-[#8B0000] bg-white shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-[#8B0000]">{feature.title}</h3>
                  <div className="max-w-[60ch]">
                    <p className="text-xl leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Photo Section */}
      <section className="px-6 py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-full h-64 md:h-80 bg-gray-300 rounded-lg mb-6 flex items-center justify-center text-gray-600 text-lg">
            Older woman reading comfortably in cozy armchair with warm lighting
          </div>
          <p className="text-xl italic text-gray-700 font-medium">
            "Our readers rediscover the magic of mysteries one page at a time…"
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="px-6 py-16 bg-[#fdfcf9] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            Your Next Great Reads: What's Inside the Bundle?
          </h2>

          <div className="max-w-[65ch] mx-auto mb-12">
            <p className="text-xl leading-relaxed text-left">
              This hand-picked collection features five complete, standalone novels of suspense, detective work, and
              gothic mystery.
            </p>
          </div>

          <div className="space-y-8">
            {books.map((book, index) => (
              <Card
                key={index}
                className="border border-gray-300 hover:border-[#8B0000] transition-colors shadow-sm bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-32 h-48 mx-auto md:mx-0 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-base flex-shrink-0">
                      Book Cover {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-serif font-bold text-black mb-2 leading-tight">
                            {index + 1}. {book.title}
                          </h3>
                          <p className="text-lg text-gray-700 font-medium mb-3">by {book.author}</p>
                        </div>
                        <Button
                          variant="secondary"
                          onClick={() => setSelectedBook(index)}
                          className="min-h-[48px] px-6 flex items-center gap-2 text-base font-medium hover:bg-gray-200 transition-colors border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white active:bg-[#5a0000]"
                        >
                          <Info className="w-5 h-5" />
                          <span>More Details</span>
                        </Button>
                      </div>
                      <div className="max-w-[65ch] space-y-4">
                        <p className="text-xl leading-relaxed">{book.description}</p>
                        <p className="text-xl font-semibold italic text-[#8B0000]">{book.hook}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Profile Images Section */}
      <section className="px-6 py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs border-2 border-gray-200"
              >
                Reader {i}
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-600 mt-4 font-medium">
            Join thousands of satisfied mystery lovers
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-[#fdfcf9] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">What Readers Are Saying...</h2>

          <div className="max-w-[65ch] mx-auto mb-12">
            <p className="text-xl leading-relaxed text-left">
              You're in good company. Thousands of readers have rediscovered the joy of classic mysteries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.",
                author: "Bob M.",
                rating: 5,
              },
              {
                text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.",
                author: "R. Mitchel",
                rating: 5,
              },
              {
                text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!",
                author: "Audrey Z.",
                rating: 5,
              },
              {
                text: "This guy invented detective work before Sherlock was born.",
                author: "Daniel I.",
                rating: 4,
              },
              {
                text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.",
                author: "Hunter J.",
                rating: 5,
              },
              {
                text: "If Brontë wrote a mystery... this.",
                author: "Sean A.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-300 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <div className="max-w-[60ch]">
                    <p className="text-xl leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-lg">– {testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="px-6 py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            Why We're Different (And Proud of It)
          </h2>

          <div className="max-w-[65ch] mx-auto mb-12">
            <p className="text-xl leading-relaxed text-left">Our approach is simple: put readers and stories first.</p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: "📖",
                title: "Truly Own Your Books",
                description:
                  "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period.",
              },
              {
                icon: "🔎",
                title: "A Mission of Preservation",
                description:
                  "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy.",
              },
              {
                icon: "❤️",
                title: "Designed for Readers, Not Screens",
                description:
                  "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border border-gray-300 shadow-sm bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <span className="text-4xl">{feature.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold mb-4 text-[#8B0000]">{feature.title}</h3>
                      <div className="max-w-[60ch]">
                        <p className="text-xl leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="px-6 py-16 bg-[#fdfcf9] border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            Our "Pass the Mystery On" Guarantee
          </h2>

          <div className="max-w-[65ch] mx-auto mb-8">
            <p className="text-xl leading-relaxed text-left">
              We do things a little differently here at Tales of Murder Press—because we're not just selling books,
              we're keeping stories alive.
            </p>
          </div>

          <Card className="border-2 border-[#8B0000] bg-white mb-10 shadow-sm">
            <CardContent className="p-8">
              <div className="max-w-[65ch] mx-auto space-y-4">
                <p className="text-xl leading-relaxed">
                  If you're not thrilled with your purchase, we'll give you a 100% refund, including shipping. No
                  restocking fees. No hoops.
                </p>
                <p className="text-xl leading-relaxed font-semibold">All we ask? Donate your book.</p>
                <p className="text-xl leading-relaxed">
                  Give it a second life by placing it somewhere it can still be enjoyed—your local library, a senior
                  center, a Little Free Library, a school, a hospital, or even a prison literacy program. Just send us a
                  quick photo or a short note showing you passed it along. That's it.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <h4 className="font-semibold text-xl mb-3">Less Waste, Lower Footprint</h4>
              <p className="text-lg">Every book finds a home.</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-xl mb-3">Every Book Deserves a Reader</h4>
              <p className="text-lg">You help share these stories with others.</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-xl mb-3">You Join the Mission</h4>
              <p className="text-lg">You become part of our preservation effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            {[
              {
                question: "Do I truly own these books?",
                answer:
                  "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached.",
              },
              {
                question: "What formats do I get with this bundle?",
                answer:
                  "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books.",
              },
              {
                question: "Is shipping included?",
                answer:
                  'We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our "Pass the Mystery On" guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you.',
              },
              {
                question: "What if I have trouble with my order?",
                answer:
                  "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-300 shadow-sm bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-black">{faq.question}</h3>
                  <div className="max-w-[65ch]">
                    <p className="text-xl leading-relaxed">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-16 bg-[#fdfcf9] pb-32 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            Ready to Uncover Your Next Favorite Mystery?
          </h2>

          <div className="max-w-[65ch] mx-auto mb-12">
            <p className="text-xl leading-relaxed text-left">
              Get five timeless detective and mystery classics delivered to your door. The perfect collection for a cozy
              evening, a long weekend, or any time you crave a story that truly captivates.
            </p>
          </div>

          <div className="bg-white border-2 border-[#8B0000] rounded-lg p-8 mb-8 max-w-md mx-auto shadow-lg">
            <p className="text-xl font-semibold mb-6">
              Get the 5-Book Vintage Mystery Sampler for just <span className="line-through text-gray-500">$69.99</span>{" "}
              <span className="text-3xl font-bold text-[#8B0000]">$52.49</span>
            </p>

            <div className="space-y-3 text-left mb-8">
              {[
                "5 Complete Classic Mysteries",
                "Comfortable A5 Paperback Editions",
                "Includes EPUB + Kindle Digital Files",
                '100% "Pass the Mystery On" Money-Back Guarantee',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            ref={bottomCTARef}
            className={`bg-[#8B0000] hover:bg-[#5a0000] text-white px-10 py-6 text-xl font-semibold rounded-md mb-8 w-full max-w-sm min-h-[56px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] active:bg-[#4a0000] ${
              animateBottomCTA ? "animate-pulse scale-110" : ""
            }`}
          >
            YES, I WANT MY BUNDLE
          </Button>

          {/* Repeated Trust Signals */}
          <div className="mb-8">
            <TrustSignals />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-base">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🇺🇸</span>
              <span>Made in the USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-[#242424] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg">Tales of Murder Press | Our Mission | Refund Policy</p>
          <div className="text-xl font-semibold">
            Need help? Email me at{" "}
            <a href="mailto:atticus@crowmail.co" className="text-white underline hover:text-gray-300">
              atticus@crowmail.co
            </a>
          </div>
          <p className="font-bold text-lg">We stand by our books and our readers.</p>
        </div>
      </footer>
    </div>
  )
}
