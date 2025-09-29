export default function SolutionBenefits() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
          Finally — A Mystery Collection You Can Actually Read.
        </h2>
        
        <div className="mb-8">
          {/* Desktop: Side-by-side comparison */}
          <div className="hidden sm:block">
            <picture>
              <source srcSet="/images/landing/old-vs-new_R.avif" type="image/avif" />
              <source srcSet="/images/landing/old-vs-new_R.webp" type="image/webp" />
              <img 
                src="/images/landing/old-vs-new_R.jpg" 
                alt="Comparison showing old newspaper scan vs clean digital text format"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </picture>
            <p className="text-center text-sm text-gray-600 mt-3 font-medium">
              Original scan (left), Cleaned & Restored (right)
            </p>
          </div>

          {/* Mobile: Stacked individual images */}
          <div className="block sm:hidden space-y-8">
            <div className="mx-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Original Scan</h3>
              <picture>
                <source srcSet="/images/landing/old-broadbrim_original_scan_R.avif" type="image/avif" />
                <source srcSet="/images/landing/old-broadbrim_original_scan_R.webp" type="image/webp" />
                <img 
                  src="/images/landing/old-broadbrim_original_scan_R.jpg" 
                  alt="Original newspaper scan showing aged, difficult-to-read text"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </picture>
            </div>
            
            <div className="mx-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Cleaned & Restored</h3>
              <picture>
                <source srcSet="/images/landing/old-broadbrim_cleaned_page_R.avif" type="image/avif" />
                <source srcSet="/images/landing/old-broadbrim_cleaned_page_R.webp" type="image/webp" />
                <img 
                  src="/images/landing/old-broadbrim_cleaned_page_R.jpg" 
                  alt="Clean, digitally restored text that's easy to read"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </picture>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 mb-8 text-left font-bold leading-relaxed">
          10 gripping Brady's adventures, fully restored and bundled for less than half price.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
          I've spent hours restoring these dime novels by hand — fixing errors, cleaning text, and formatting them so they read smoothly on every device.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
          I've done this because I'm a reader too. I wanted editions that were effortless, authentic, and worth keeping forever. And now, you can enjoy them the same way. Ten adventures. Ten evenings of page-turning suspense. All in one unbeatable bundle.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl mb-3">📚</div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>I've Gathered 10 Complete Mysteries</strong> — ten full evenings with Old & Young King Brady
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">👓</div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>I've Restored Every Page</strong> — no typos, no smudges, no frustration
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🔓</div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>I've Made Them Yours Forever</strong> — DRM-free, yours to keep and share
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🚫</div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>I've Protected Them From Junk</strong> — not sloppy retypes, not AI fakes, only authentic text
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">💵</div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>I've Cut the Price in Half</strong> — normally $99.99; today, $44.95 (less than $4.50 per book, <em>only on this page!</em>)
            </p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          But don't just take my word for it — here's what other readers are saying …
        </p>
      </div>
    </section>
  );
}
