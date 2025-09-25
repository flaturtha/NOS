interface StickyHelloBarProps {
  hasScrolled: boolean;
}

export default function StickyHelloBar({ hasScrolled }: StickyHelloBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#8b0000] text-white py-2 px-4 text-center text-sm z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
        <a href="https://offers.talesofmurder.com/choose-your-1-dollar-ebook" className="hover:underline font-bolder">Click to just get your $1 ebook!</a>
        {!hasScrolled && (
          <>
            <span className="hidden sm:inline">•</span>
            <span className="italic">Read about the special offer below</span>
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-[#8b0000] transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
