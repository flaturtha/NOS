import { useState } from 'react';

export default function Guarantee() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="py-12 sm:py-16 relative">
      {/* Desktop: Full width GIF background */}
      <div className="hidden sm:block absolute inset-0 bg-white">
        <img 
          src="/images/landing/guarantee.gif" 
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Mobile: GIF below headline */}
      <div className="block sm:hidden mb-8">
        <img 
          src="/images/landing/guarantee.gif" 
          alt=""
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 hero-subheadline">
            The Reader's Honor Guarantee
          </h2>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-left">
          I do things differently here at <span className="text-[#8b0000] uppercase font-[Breamcatcher] font-bold tracking-wider">Tales of Murder Press</span> — because I'm not just selling books, I'm building a community of readers who value trust as much as stories.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-left">
          If you're not absolutely delighted with the mysteries in this collection, I'll give you a full 100% refund. No forms. No hoops. Just hit "reply" on your order confirmation email and let me know. Of course, I'd like to hear why — formatting issues, download problems — so I can improve them for other readers.
        </p>
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-left">
          I trust you to be honest. I'd rather lose a sale than leave a reader unhappy. Your satisfaction will always matter more to me than the money.
        </p>
        
        <div className="text-center mb-8">
          <button 
            onClick={() => setShowContactForm(true)}
            className="text-lg font-semibold text-[#8b0000] hover:text-[#6b0000] underline transition-colors"
          >
            Click here to contact.
          </button>
        </div>
        
        <div className="text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <p className="text-xl font-semibold text-gray-800">
            <strong>100% Money-Back Guarantee</strong>
          </p>
          <p className="text-gray-700 leading-relaxed">
            No questions asked
          </p>
        </div>
      </div>
      </div>
      
      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <iframe
                src="https://link.goexpandnow.com/widget/form/m7VF0MVPU0vSI4tSmvPz"
                style={{width:'100%',height:'500px',border:'none',borderRadius:'3px'}}
                id="popup-m7VF0MVPU0vSI4tSmvPz" 
                data-layout="{'id':'POPUP'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact/Support Form"
                data-height="667"
                data-layout-iframe-id="popup-m7VF0MVPU0vSI4tSmvPz"
                data-form-id="m7VF0MVPU0vSI4tSmvPz"
                title="Contact/Support Form"
              />
            </div>
          </div>
        </div>
      )}
      <script src="https://link.goexpandnow.com/js/form_embed.js"></script>
    </section>
  );
}
