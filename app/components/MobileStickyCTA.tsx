interface MobileStickyCTAProps {
  showStickyCta: boolean;
  onCtaClick: () => void;
}

export default function MobileStickyCTA({ showStickyCta, onCtaClick }: MobileStickyCTAProps) {
  if (!showStickyCta) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-[3000ms] ease-in-out ${
      showStickyCta ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="bg-red-600 shadow-lg">
        <div className="flex items-center justify-between py-3 px-4">
          <div className="text-left">
            <div className="text-sm font-semibold text-white">
              Get 10 Gaslight Pulp Novels
            </div>
            <div className="text-xs mt-1">
              <span className="line-through text-white opacity-75">$99.99</span> <span className="text-yellow-400 font-bold">$44.99</span>
            </div>
          </div>
          <button
            onClick={onCtaClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded text-sm transition-colors duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
