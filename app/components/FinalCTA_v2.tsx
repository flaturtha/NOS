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
          
          {/* CTA Buttons with Hierarchy */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-3xl mx-auto">
            {/* Primary CTA - Collection (Larger) */}
            <div className="flex-1">
              <button
                onClick={onCollectionClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-8 rounded-lg text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400 relative"
              >
                <span className="flex items-center justify-center gap-2">
                  🔥 Complete 10-Book Collection - $49.99
                </span>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </button>
            </div>

            {/* Secondary CTA - Single PDF (Smaller) */}
            <div className="flex-1">
              <button
                onClick={onSingleClick}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg border-2 border-gray-500 hover:border-gray-400"
              >
                📘 Single PDF Novel - $6.99
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
