interface DesktopExitIntentPopupProps {
  showDesktopExitPopup: boolean;
  onClose: () => void;
  onBundleClick: () => void;
}

export default function DesktopExitIntentPopup({ showDesktopExitPopup, onClose, onBundleClick }: DesktopExitIntentPopupProps) {
  if (!showDesktopExitPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Wait! Don't Miss Out!</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xl"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Not ready to buy a full bundle? Not sure if you'll like the BRADYS SECRET SERVICE DETECTIVES book? No worries!
          </p>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            Remember why you clicked my ad in the 1st place … to get your $1 ebook? Click below to select your story from my small (but growing!) collection!
          </p>
          
          <div className="text-center">
            <a 
              href="https://offers.talesofmurder.com/choose-your-1-dollar-ebook" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              GET MY $1 BRADYS GASLIGHT PULP NOVEL
            </a>
          </div>
          
          <div className="text-center">
            <button
              onClick={onBundleClick}
              className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors duration-200"
            >
              No, I want the 10-book bundle deal!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
