import { useState, useEffect } from "react";

interface GHLFormModalProps {
  showModal: boolean;
  onClose: () => void;
  selectedOption?: 'collection' | 'single' | null;
}

export default function GHLFormModal({ showModal, onClose, selectedOption = null }: GHLFormModalProps) {
  useEffect(() => {
    // Load GHL form script
    if (showModal && !document.querySelector('script[src*="form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://link.goexpandnow.com/js/form_embed.js';
      document.body.appendChild(script);
    }
  }, [showModal]);

  if (!showModal) return null;

  // Determine which form ID to use based on selected option
  const formId = selectedOption === 'single' 
    ? 'J71JO53Sh7Lp1v6Vi029'  // Single ebook form
    : '9oIwOEVxyUx4GgEzgNPK'; // Bundle form (default)

  const title = selectedOption === 'single' 
    ? 'Reserve Your Single Ebook Today'
    : 'Reserve Your 10-Book Bundle Today';

  const formName = selectedOption === 'single' 
    ? 'single IDOL ($7.99) - ebook CTA form'
    : '10-book bundle - ebook CTA form';

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-[3px] flex items-center justify-center p-4 z-50"
      onClick={handleModalClick}
    >
      <div className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 text-2xl"
        >
          ✕
        </button>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl sm:text-base font-semibold text-gray-800 uppercase">
            {title}
          </h3>
        </div>
        
        {/* Progress Bar */}
        <div className="relative mb-4">
          <div className="meter">
            <span style={{ width: '50%' }}></span>
          </div>
          <div className="absolute inset-0 flex items-center">
            <p className="text-sm text-white ml-4">Order Processing &hellip;</p>
          </div>
        </div>
        
        {/* Headline */}
        <div className="text-center mb-3">
          <h4 className="text-base sm:text-lg font-medium text-gray-800 font-bold leading-relaxed">
            To reserve your copy, please enter your email address below:
          </h4>
        </div>
        
        {/* GHL Form Embed */}
        <div className="w-full" style={{ height: '240px', overflow: 'hidden' }}>
          <iframe
            src={`https://link.goexpandnow.com/widget/form/${formId}`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '3px',
              margin: 0,
              padding: 0
            }}
            id={`inline-${formId}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={formName}
            data-height="240"
            data-layout-iframe-id={`inline-${formId}`}
            data-form-id={formId}
            title={formName}
          />
        </div>
        
        {/* Disclaimer */}
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500 leading-relaxed italic">
            By submitting, you'll reserve your {selectedOption === 'single' ? 'ebook' : '10-book bundle'}. And get updates &amp; exclusive offers. We respect your privacy—unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
