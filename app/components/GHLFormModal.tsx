interface GHLFormModalProps {
  showModal: boolean;
  onClose: () => void;
}

export default function GHLFormModal({ showModal, onClose }: GHLFormModalProps) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[3px] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl sm:text-base font-semibold text-gray-800 uppercase"><span className="">Reserve Your 10-Book Bundle Today</span></h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            ✕
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="relative">
          <div className="meter">
            <span style={{ width: '50%' }}></span>
          </div>
          <div className="absolute inset-0 flex items-center">
            <p className="text-sm text-white ml-4">Order Processing &hellip;</p>
          </div>
        </div>
        
        {/* Headline */}
        <div className="text-center mt-8 mb-8">
          <h4 className="text-lg sm:text-2xl font-medium text-gray-800 font-bold leading-relaxed">
            To reserve your copy, please enter your email address below:
          </h4>
        </div>
        
        {/* GHL Form */}
        <div className="w-full" id="ghl-form">
          <div className="form-iframe-wrapper">
            <iframe
              src="https://link.goexpandnow.com/widget/form/9oIwOEVxyUx4GgEzgNPK"
              style={{
                width: "100%",
                height: "195px",
                border: "none",
                borderRadius: "3px"
              }}
              id="inline-9oIwOEVxyUx4GgEzgNPK"
              data-layout="{'id':'9oIwOEVxyUx4GgEzgNPK','name':'NOS Landing Page Form','type':'form','width':400,'height':432,'layout':'embed','data-height':'432','data-layout-iframe-id':'inline-9oIwOEVxyUx4GgEzgNPK','data-form-id':'9oIwOEVxyUx4GgEzgNPK'}"
              title="NOS Landing Page Form"
            />
          </div>
          <script src="https://link.goexpandnow.com/js/form_embed.js"></script>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500 leading-relaxed italic">
          By submitting, you'll reserve your 10-book bundle. And get updates &amp; exclusive offers. We respect your privacy—unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
