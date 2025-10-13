interface ValuePropositionProps {
  onCtaClick: () => void;
}

export default function ValueProposition({ onCtaClick }: ValuePropositionProps) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="hidden text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gray-800 hero-subheadline">
          Value Proposition
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              <strong>I've collected & restored 10 eBooks</strong> (with more coming soon) — complete evening reads
            </h3>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              <strong>I've made them instantly downloadable</strong> — buy now &amp; start reading tonight
            </h3>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              <strong>I'm including Kindle & ePub</strong> — any device, anywhere, yours to share
            </h3>
          </div>
          
          <div className="text-center hidden">
            <div className="text-4xl mb-4">💵??</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              <strong>I've priced them fair</strong> — only $4.50 each
            </h3>
          </div>
        </div>
        
        <div className="mt-12">
          <button
            onClick={onCtaClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl sm:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400"
          >
            Give me 10 Gaslight Pulp Novels — <span className="line-through">$99.99</span> <span className="text-yellow-400 font-extrabold">$44.99</span>
          </button>
        </div>
        {/* $3.99 Ebook Alternative Link */}
        <div className="text-sm text-gray-400 hover:text-gray-600 italic transition-colors duration-200 font-fold mt-8 text-center">
          <p className="mb-2 uppercase">Not ready to commit to the full 10&#8209;book&nbsp;library?</p>
          <a 
            href="https://checkout.talesofmurder.com/select-your-ebook" 
            className="text-sm text-gray-400 hover:text-gray-600 italic transition-colors duration-200 underline font-bolder"
          >
            Click to get your $3.99 ebook.
          </a>
          <p className="mt-2 text-xs text-white/80 mt-2 italic">(But I'm giving up more than $116 in savings&nbsp;with&nbsp;this&nbsp;bundle!)</p>
        </div>
      </div>
    </section>
  );
}
