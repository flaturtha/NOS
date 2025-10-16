interface OptionComparison_v2Props {
  onCollectionClick: () => void;
  onSingleClick: () => void;
}

export default function OptionComparison_v2({ onCollectionClick, onSingleClick }: OptionComparison_v2Props) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 hero-subheadline">
          Two Ways to Start Your Bradys Collection
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Option 1: Single PDF Novel */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 lg:p-8 shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                📘 OPTION 1: Single PDF Novel
              </h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                The Bradys and the Chinese Idol
              </h4>
              <div className="mb-4">
                <p className="text-3xl font-bold text-gray-800">$6.99</p>
                <p className="text-lg text-gray-500 line-through">Regular $9.99</p>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-800 mb-3">What You Get:</h5>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>One complete full-length mystery (not a sample)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>Professionally restored from 1903 original</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>PDF format (print-ready layout)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>Murder, opium conspiracy, jade idol thriller</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>Instant download via BookFunnel</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-800 mb-3">The Tradeoffs:</h5>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">❌</span>
                  <span>PDF only (harder to read on phones/tablets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">❌</span>
                  <span>Download link expires after 7 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">❌</span>
                  <span>All sales final—no refunds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">❌</span>
                  <span>Each additional book $9.99 if you want more</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">❌</span>
                  <span>No bonus materials or priority access</span>
                </li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-600 italic">
                <strong>Best for:</strong> Testing the waters with one story
              </p>
            </div>

            <button
              onClick={onSingleClick}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg border-2 border-gray-500 hover:border-gray-400"
            >
              Get Single PDF - $6.99
            </button>
          </div>

          {/* Option 2: Complete Collection */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-6 lg:p-8 shadow-lg relative">
            {/* Most Popular Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                🔥 OPTION 2: Complete 10-Book Collection
              </h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                All Ten Restored Bradys Mysteries
              </h4>
              <div className="mb-4">
                <p className="text-3xl font-bold text-red-600">$49.99</p>
                <p className="text-lg text-gray-600">— Buy 5, Get 5 Free</p>
                <p className="text-sm text-gray-500">(Only $4.99 per book vs $9.99 regular price)</p>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-800 mb-3">What You Get:</h5>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span><strong>All 10 complete mystery novels</strong> (not samples)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span><strong>Both ePub AND Kindle formats</strong> (perfect for phones/tablets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>Instant access to entire collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>Download anytime, forever—links never expire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>Share freely (let's get more eyes on these stories)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span><strong>Reader's Honor money-back guarantee—fully refundable</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✅</span>
                  <span>Read on any device—optimized for mobile reading</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-800 mb-3">Plus These Bonuses:</h5>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">🎁</span>
                  <span><strong>Priority notification</strong> when new titles launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">🎁</span>
                  <span><strong>Behind-the-scenes restoration notes</strong> (how I save these books)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">🎁</span>
                  <span><strong>Vote on which titles get restored next</strong> (coming soon)</span>
                </li>
              </ul>
            </div>

            {/* The Math Callout */}
            <div className="bg-white border-2 border-red-200 rounded-lg p-4 mb-6">
              <h5 className="text-lg font-semibold text-gray-800 mb-2 text-center">The Math:</h5>
              <div className="text-center space-y-1">
                <p className="text-gray-700">Ten books at single-purchase price: <span className="line-through font-bold">$99.90</span></p>
                <p className="text-gray-700">Collection price today: <span className="font-bold text-red-600">$49.99</span></p>
                <p className="text-lg font-bold text-green-600">You save: $49.91 (50% off)</p>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-600 italic">
                <strong>Best for:</strong> Readers who want the best value, mobile-friendly formats, and maximum impact on the preservation mission
              </p>
            </div>

            <button
              onClick={onCollectionClick}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400"
            >
              Get Complete Collection - $49.99
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
