export default function BeforeAfter_v2() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 hero-subheadline">
          See the Transformation
        </h2>
        
        {/* Desktop Layout: Combined image above, text blocks side by side */}
        <div className="hidden lg:block">
          {/* Combined Before/After Image */}
          <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <picture>
              <source srcSet="/images/landing/old-vs-new_R.avif" type="image/avif" />
              <source srcSet="/images/landing/old-vs-new_R.webp" type="image/webp" />
              <img
                src="/images/landing/old-vs-new_R.jpg"
                alt="Before and After: Original scan vs professionally restored text"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </picture>
          </div>

          {/* Text Content - Side by Side */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Before:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Gray, crooked scans you can barely read. Missing punctuation. You quit after three pages because your eyes hurt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-green-600 mb-4">After:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Crisp, professionally typeset text that honors the 1903 original while being perfectly readable on modern devices.
              </p>
            </div>
          </div>

          {/* Closing Tagline */}
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-200">
            <p className="text-lg text-gray-800 font-semibold text-center italic mb-4">
              This is what happens when someone with three decades of editorial experience refuses to settle for "good enough."
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-700 italic">
                "You can tell these were made by someone who loves the originals, not just another public domain dump." — Doris W.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Image above each text block */}
        <div className="block lg:hidden space-y-8">
          {/* Before Section */}
          <div>
            {/* Before Image */}
            <div className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden p-2">
              <h3 className="text-lg font-bold text-red-600 mb-2 text-center">Before:</h3>
              <picture>
                <source srcSet="/images/landing/old-broadbrim_original_scan_R.avif" type="image/avif" />
                <source srcSet="/images/landing/old-broadbrim_original_scan_R.webp" type="image/webp" />
                <img
                  src="/images/landing/old-broadbrim_original_scan_R.jpg"
                  alt="Original scan - faded, crooked, hard to read"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </picture>
            </div>
            
            {/* Before Text */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Before:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Gray, crooked scans you can barely read. Missing punctuation. You quit after three pages because your eyes hurt.
              </p>
            </div>
          </div>

          {/* After Section */}
          <div>
            {/* After Image */}
            <div className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden p-2">
              <h3 className="text-lg font-bold text-green-600 mb-2 text-center">After:</h3>
              <picture>
                <source srcSet="/images/landing/old-broadbrim_cleaned_page_R.avif" type="image/avif" />
                <source srcSet="/images/landing/old-broadbrim_cleaned_page_R.webp" type="image/webp" />
                <img
                  src="/images/landing/old-broadbrim_cleaned_page_R.jpg"
                  alt="Professionally restored - crisp, clear, readable"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </picture>
            </div>
            
            {/* After Text */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-green-600 mb-4">After:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Crisp, professionally typeset text that honors the 1903 original while being perfectly readable on modern devices.
              </p>
            </div>
          </div>

          {/* Closing Tagline */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-200">
            <p className="text-lg text-gray-800 font-semibold text-center italic mb-4">
              This is what happens when someone with three decades of editorial experience refuses to settle for "good enough."
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-700 italic">
                "You can tell these were made by someone who loves the originals, not just another public domain dump." — Doris W.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
