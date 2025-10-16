export default function SocialProof_v2() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 hero-subheadline">
          What Readers Say About These Restorations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <div className="mb-4">
              <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
              <picture>
                <source srcSet="/images/landing/testimonials/eleanor.avif" type="image/avif" />
                <source srcSet="/images/landing/testimonials/eleanor.webp" type="image/webp" />
                <img 
                  src="/images/landing/testimonials/eleanor.jpg" 
                  alt="Eleanor V."
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
              </picture>
            </div>
            <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">
              "Finally, readable versions! I've searched for years and this is the first time I can actually enjoy them."
            </p>
            <p className="text-gray-600 font-semibold">— Eleanor V., 72</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <div className="mb-4">
              <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
              <picture>
                <source srcSet="/images/landing/testimonials/doris.avif" type="image/avif" />
                <source srcSet="/images/landing/testimonials/doris.webp" type="image/webp" />
                <img 
                  src="/images/landing/testimonials/doris.jpg" 
                  alt="Doris W."
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
              </picture>
            </div>
            <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">
              "You can tell these were made by someone who loves the originals, not just another public domain dump. The quality is night and day."
            </p>
            <p className="text-gray-600 font-semibold">— Doris W., 68</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
            <div className="mb-4">
              <div className="text-2xl mb-2">⭐⭐⭐⭐⭐</div>
              <picture>
                <source srcSet="/images/landing/testimonials/bill.avif" type="image/avif" />
                <source srcSet="/images/landing/testimonials/bill.webp" type="image/webp" />
                <img 
                  src="/images/landing/testimonials/bill.jpg" 
                  alt="Bill R."
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
              </picture>
            </div>
            <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">
              "I bought one, came back for the collection. Should have just started there. Worth every penny."
            </p>
            <p className="text-gray-600 font-semibold">— Bill R., 75</p>
          </div>
        </div>
      </div>
    </section>
  );
}
