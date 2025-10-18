export default function BottomTestimonials() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 hero-subheadline">
          What Readers Are Saying
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <picture>
                <source srcSet="/images/landing/testimonials/bill.avif" type="image/avif" />
                <source srcSet="/images/landing/testimonials/bill.webp" type="image/webp" />
                <img 
                  src="/images/landing/testimonials/bill.jpg" 
                  alt="Bill R."
                  className="w-12 h-12 rounded-full mx-auto object-cover mb-3"
                />
              </picture>
              <p className="text-gray-700 italic mb-2">
                "I bought one, came back for the collection. Should have just started there. Worth every penny."
              </p>
              <p className="text-gray-600 font-semibold text-sm">— Bill R., 75</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <div className="w-12 h-12 rounded-full mx-auto bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg mb-3">
                GR
              </div>
              <p className="text-gray-700 italic mb-2">
                "It's like Sherlock Holmes had a street-smart American cousin."
              </p>
              <p className="text-gray-600 font-semibold text-sm">— Grace B. (★ 5.0)</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <picture>
                <source srcSet="/images/landing/testimonials/eleanor.avif" type="image/avif" />
                <source srcSet="/images/landing/testimonials/eleanor.webp" type="image/webp" />
                <img 
                  src="/images/landing/testimonials/eleanor.jpg" 
                  alt="Eleanor V."
                  className="w-12 h-12 rounded-full mx-auto object-cover mb-3"
                />
              </picture>
              <p className="text-gray-700 italic mb-2">
                "Finally, readable versions! I've searched for years and this is the first time I can actually enjoy them."
              </p>
              <p className="text-gray-600 font-semibold text-sm">— Eleanor V., 72</p>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <div className="w-12 h-12 rounded-full mx-auto bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-3">
                CH
              </div>
              <p className="text-gray-700 italic mb-2">
                "I meant to read one. Ended up tearing through five."
              </p>
              <p className="text-gray-600 font-semibold text-sm">— Chase H. (★ 4.55)</p>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <picture>
                <source srcSet="/images/landing/testimonials/doris.avif" type="image/avif" />
                <source srcSet="/images/landing/testimonials/doris.webp" type="image/webp" />
                <img 
                  src="/images/landing/testimonials/doris.jpg" 
                  alt="Doris W."
                  className="w-12 h-12 rounded-full mx-auto object-cover mb-3"
                />
              </picture>
              <p className="text-gray-700 italic mb-2">
                "You can tell these were made by someone who loves the originals, not just another public domain dump."
              </p>
              <p className="text-gray-600 font-semibold text-sm">— Doris W., 68</p>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="text-xl mb-2">⭐⭐⭐⭐⭐</div>
              <div className="w-12 h-12 rounded-full mx-auto bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg mb-3">
                AZ
              </div>
              <p className="text-gray-700 italic mb-2">
                "No foul language, no over-the-top ****. Just good clean murder and mayhem!"
              </p>
              <p className="text-gray-600 font-semibold text-sm">— Audrey Z. (★ 4.55)</p>
            </div>
          </div>
        </div>

        {/* Additional single-line testimonials */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            <p className="text-gray-700 italic text-sm">
              "Pure gaslight noir. Grit, grime, and justice." — Piper R.
            </p>
            <p className="text-gray-700 italic text-sm">
              "Fast, clean, smart. No filler. Just pure detective fun." — Eli G.
            </p>
            <p className="text-gray-700 italic text-sm">
              "The Bradys are my new obsession. Didn't see that coming." — Mason L.
            </p>
            <p className="text-gray-700 italic text-sm">
              "Zero fluff. All grit, plot, and clever twists." — Dylan E.
            </p>
            <p className="text-gray-700 italic text-sm">
              "These Bradys stories are pure gaslight pulp brilliance!" — Ruby N.
            </p>
            <p className="text-gray-700 italic text-sm">
              "Feels like finding a secret stash of old-school pulp gold." — Felix Q.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
