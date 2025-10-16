export default function WhyComparison_v2() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
          Why the Collection is the Smarter Choice
        </h2>
        
        <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
          The single PDF gives you one story to test at 30% off. Fair enough.
        </p>
        
        <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
          But the collection gives you:
        </p>

        <div className="space-y-8">
          {/* Better formats */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Better formats:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              ePub and Kindle files read beautifully on phones and tablets. The single PDF is print-layout—fine for computers or printing (this one is 112 pages!), harder on mobile.
            </p>
          </div>

          {/* Better economics */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Better economics:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              $4.99 per book (50% off) vs $6.99 for one (30% off). If you buy the single book and love it, you'll pay $9.99 each for more. Ten books that way costs $96.90.
            </p>
          </div>

          {/* Better protection */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Better protection:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The collection has a full Reader's Honor Guarantee. The single PDF … all sales final; no refunds.
            </p>
          </div>

          {/* Better convenience */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Better convenience:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Download links never expire. Share freely with anyone. Get bonus materials and voting rights on future restorations (coming soon).
            </p>
          </div>

          {/* Better mission impact */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Better mission impact:</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your $49.99 funds significantly more restoration work than $6.99.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg border-2 border-yellow-200">
          <p className="text-lg text-gray-800 font-semibold text-center leading-relaxed">
            <strong>The reality:</strong> Readers who start with one almost always come back for more. The collection saves you money and decision fatigue while supporting the mission at full strength.
          </p>
        </div>
      </div>
    </section>
  );
}
