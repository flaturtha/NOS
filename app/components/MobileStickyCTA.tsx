interface MobileStickyCTAProps {
  showStickyCta: boolean;
  onCtaClick: () => void;
  onSingleClick?: () => void;
}

export default function MobileStickyCTA({ showStickyCta, onCtaClick, onSingleClick }: MobileStickyCTAProps) {
  if (!showStickyCta) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-[3000ms] ease-in-out ${
      showStickyCta ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="bg-gray-800 shadow-lg">
        <div className="flex items-center gap-2 py-3 px-4">
          {/* Single Ebook Option */}
          <div className="flex-1">
            <button
              onClick={onSingleClick}
              className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-3 rounded text-xs transition-colors duration-200"
            >
              <div className="text-xs font-semibold">📘 Single Ebook</div>
              <div className="text-xs">$7.99</div>
            </button>
          </div>
          
          {/* Bundle Option */}
          <div className="flex-1">
            <button
              onClick={onCtaClick}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-3 rounded text-xs transition-colors duration-200"
            >
              <div className="text-xs font-semibold">🔥 10-Book Bundle</div>
              <div className="text-xs">
                <span className="line-through opacity-75">$99.99</span> <span className="text-yellow-400 font-bold">$49.99</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
