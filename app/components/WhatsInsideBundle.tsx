export default function WhatsInsideBundle() {
  return (
    <section className="py-12 sm:py-16 relative">
      {/* Background image with blur effect */}
      <div className="absolute inset-0 bg-gray-50">
        <picture>
          <source srcSet="/images/landing/covers-only_desat_blur.avif" type="image/avif" />
          <source srcSet="/images/landing/covers-only_desat_blur.webp" type="image/webp" />
          <img 
            src="/images/landing/covers-only_desat_blur.jpg" 
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </picture>
      </div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
          What's Inside the Bundle?
        </h2>
        
        
        <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
          You're not just getting "some old scans." You're getting 10 full-length novels, restored and formatted so you can enjoy them tonight — and forever.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 text-left leading-relaxed">
          Each ebook is delivered in both Kindle and ePub formats, so you can read on <em className="italic text-[#8b0000]">any device you already own</em> — Kindle, Kobo, iPad, Nook, phone, or computer. No restrictions. No padlocks.
        </p>
        
        <p className="text-lg text-gray-600 font-bold mt-12 text-center leading-relaxed">
          Here's a taste of what's waiting&nbsp;inside:
        </p>

        <p className="text-sm text-gray-600 italic mb-8 text-center leading-relaxed">
          Click on any cover, in the carousel above, to see a short summary of the book.
        </p>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            • <strong>THE BRADYS AND THE CHINESE IDOL</strong> — A miser's murder, a missing idol, rooftop chases, and a secret criminal society in the heart of New York.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            • <strong>THE BRADYS AND THE MISSING GIRL</strong> — A vanished heiress, a forged letter, Southern impostors, and the Bradys racing through Florida's infested swamps to uncover the truth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            • <strong>THE BRADYS AMONG THE CHINAMEN</strong> — A severed head in a basket, a vanished body, opium-den fiends, and the Bradys chasing killers through the shadows of Chinatown.
          </p>
        </div>
        
        <p className="text-lg text-gray-700 text-left leading-relaxed">
          And that's just three of the ten <em>(out of more than 1,300 originally published!)</em>. You'll have an entire library of mysteries to binge, one after another, for less than the price of a single new book.
        </p>
      </div>
      </div>
    </section>
  );
}
