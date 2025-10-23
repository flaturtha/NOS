interface FinalCTA_v2Props {
  onCollectionClick: () => void;
  onSingleClick: () => void;
}

export default function FinalCTA_v2({ onCollectionClick, onSingleClick }: FinalCTA_v2Props) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 hero-subheadline">
          The Mission Needs You
        </h2>
        
        <div className="text-lg text-gray-700 mb-12 leading-relaxed text-left space-y-4">
          <p>
            I've restored ten Bradys mysteries. Over 1,290 remain. Plus books from authors like Wilke Collins, Allen Pinkerton, Sax Rohmer, or from other thrilling dime novel collections like the OLD CAP COLLIER LIBRARY. Nearly 100 books in my work-in-progress pile.
          </p>
          
          <p>
            Every purchase funds tracking down rare originals, improving restoration workflows, and eventually hiring help to move faster. But the collection purchase makes the biggest impact while giving you the best value and strongest guarantee.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-xl font-semibold text-gray-800 mb-8">
            Choose your option and start reading in minutes:
          </p>
          
          {/* CTA Buttons - Equal Visual Weight */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-4xl mx-auto">
            {/* Single Ebook Button - Left/Top */}
            <div className="flex-1">
              <button
                onClick={onSingleClick}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-gray-600 hover:border-gray-500 h-[120px] flex flex-col items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  📘 Single Ebook Novel - $7.99
                </span>
                <span className="text-sm font-normal mt-1 opacity-90">
                  20% Off — Regularly $9.99
                </span>
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-2">
                  NO REFUNDS; ALL SALES FINAL
                </span>
              </button>
            </div>

            {/* OR Text */}
            <div className="flex items-center justify-center lg:hidden">
              <span className="text-gray-800 text-lg font-bold">OR</span>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <span className="text-gray-800 text-xl font-bold">OR</span>
            </div>

            {/* Collection Button - Right/Bottom */}
            <div className="flex-1">
              <button
                onClick={onCollectionClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400 h-[120px] flex flex-col items-center justify-center"
              >
                <span className="flex items-center gap-2 mt-4">
                  🔥 10-Book Collection - $49.99
                </span>
                <span className="text-sm font-normal mt-1 opacity-90">
                  Buy 5, Get 5 Free — Only $4.99 each
                </span>
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full mt-2 mb-6">
                  BEST VALUE
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
