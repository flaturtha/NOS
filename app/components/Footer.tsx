import { useState } from 'react';

export default function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <footer className="bg-gray-100 text-gray-600 py-6 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <p>&copy; 2024 Tales of Murder Press. All rights reserved.</p>
          <button 
            onClick={() => setShowContactForm(true)}
            className="hover:text-gray-800 transition-colors duration-200"
          >
            Contact
          </button>
          <a href="#" className="hover:text-gray-800 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800 transition-colors duration-200">Terms of Service</a>
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
    </footer>
  );
}
