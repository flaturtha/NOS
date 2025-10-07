import { useState } from "react";

interface GHLFormModalProps {
  showModal: boolean;
  onClose: () => void;
}

export default function GHLFormModal({ showModal, onClose }: GHLFormModalProps) {
  const [email, setEmail] = useState("");
  
  if (!showModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirect to checkout with email parameter
    const checkoutUrl = `https://checkout.talesofmurder.com/10-ebook-bundle-checkout?email=${encodeURIComponent(email)}`;
    window.location.href = checkoutUrl;
  };

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
        
        {/* Email Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Reserve My Bundle Now
          </button>
        </form>
        
        {/* Disclaimer */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500 leading-relaxed italic">
          By submitting, you'll reserve your 10-book bundle. And get updates &amp; exclusive offers. We respect your privacy—unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
