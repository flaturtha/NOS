export default function SocialProofTrust() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
          Readers Can't Get Enough of the Bradys.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="mb-4">
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
              "I've wasted so much time on awful scans. This bundle is a lifesaver — the stories are gripping and finally readable."
            </p>
            <p className="text-gray-600">— Eleanor V., 72</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="mb-4">
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
              "I was hooked from page one. Perfect for quiet afternoons with tea. I couldn't stop at just one."
            </p>
            <p className="text-gray-600">— Doris W., 68</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="mb-4">
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
              "It feels like opening a whole library at once. Ten stories for the price of only four."
            </p>
            <p className="text-gray-600">— Bill R., 75</p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Join Other Readers Who Refuse to Let These Stories Die
        </h3>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 font-bold mb-2">
            If bought separately: <span className="line-through">$164.20</span>
          </p>
          <p className="text-3xl font-bold text-red-600 mb-2">
            Today: $44.95
          </p>
          <p className="text-lg text-gray-700 italic">
            Includes both Kindle & ePub editions — yours&nbsp;forever.
          </p>
        </div>
        
        <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
          I'm not a big company pushing out generic reprints. I'm one reader, doing the work by hand, because I believe these stories are too good to be lost.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
          When you order this bundle, you're not just buying ebooks. You're becoming part of a group of readers who care about preserving our literary past — and keeping the thrill of classic mysteries alive.
        </p>
        
        <p className="text-lg text-gray-700 text-left leading-relaxed">
          Every order supports the restoration of even more forgotten novels. This is bigger than one collection. It's about rescuing hundreds, even thousands, of stories and bringing them back where they belong — in the hands of readers like you.
        </p>
      </div>
    </section>
  );
}
