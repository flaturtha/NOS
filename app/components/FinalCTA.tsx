interface FinalCTAProps {
  onCtaClick: () => void;
}

export default function FinalCTA({ onCtaClick }: FinalCTAProps) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-bold">
          This bundle is available today for less than half price — just $44.95 for all ten novels.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed hidden">
          Why the discount? Because this is the introductory price for the first Brady's collection I've restored. As I add more books to the series, the regular price will return.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Right now is the best time to start your Bradys library — at a price that makes sense.
        </p>
        
        <div className="mb-8">
          <p className="text-2xl text-gray-700 mb-2">
            <span className="line-through">Just $99.99</span> <span className="text-3xl font-bold text-red-600">$44.95</span>
          </p>
        </div>
        
        <button
          onClick={onCtaClick}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl sm:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400"
        >
          Get All 10 BRADYS — <span className="line-through">$99.99</span> <span className="text-yellow-400 font-extrabold">$44.99</span>
        </button>

        {/* $1 Ebook Alternative Link */}
        <div className="text-sm text-gray-600 hover:text-gray-800 italic transition-colors duration-200 font-fold mt-8 text-center">
          <p className="mb-2 uppercase">Not ready to commit to the full 10&#8209;book&nbsp;library?</p>
          <a 
            href="https://checkout.talesofmurder.com/select-your-1-dollar-ebook" 
            className="text-sm text-gray-600 hover:text-gray-800 italic transition-colors duration-200 underline font-bolder"
          >
            Click to get your $1 ebook.
          </a>
          <p className="mt-2 text-xs text-white/80 mt-2 italic">(But I'm giving up more than $120 in savings&nbsp;with&nbsp;this&nbsp;bundle!)</p>
        </div>
      </div>
    </section>
  );
}
