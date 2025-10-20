import React from 'react';

interface ExitIntentPopupProps {
  showExitPopup: boolean;
  onClose: () => void;
  onBundleClick: () => void;
  onSingleClick: () => void;
  onAltOfferClick?: () => void; // Free chapter + 10% off
}

export default function ExitIntentPopup({ showExitPopup, onClose, onBundleClick, onSingleClick, onAltOfferClick }: ExitIntentPopupProps) {
  const [showForm, setShowForm] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  if (!showExitPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className={`rounded-lg max-w-md w-full p-6 shadow-2xl relative overflow-hidden ${
        !showForm && !showSuccess ? 'bg-white' : 'bg-white'
      }`}>
        {/* Background image for initial message only */}
        {!showForm && !showSuccess && (
          <div className="absolute inset-0 opacity-10 z-0">
            <picture>
              <source srcSet="/images/covers/chinese-idol.avif" type="image/avif" />
              <source srcSet="/images/covers/chinese-idol.webp" type="image/webp" />
              <img
                src="/images/covers/chinese-idol.jpg"
                alt="The Bradys and the Chinese Idol book cover"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </picture>
          </div>
        )}
        <div className="flex justify-between items-center mb-4 relative z-10">
          <h3 className="text-lg font-semibold text-gray-800">Don't Leave the Crime Scene Yet…</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xl"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4 relative z-10">
          {!showForm && !showSuccess && (
            <>
              <p className="text-gray-700 leading-relaxed">
                Before you vanish into the night, grab a <span className="font-bold" style={{color: '#8b0000'}}>free chapter</span> from one of our classic mysteries — and a <span className="font-bold">10% Off coupon</span> for your next case.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These are the tales that made armchair detectives famous — restored and republished for readers who still crave a good murder before bed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Claim your <span className="font-bold" style={{color: '#8b0000'}}>free first chapter</span> and we'll send you a <span className="font-bold">10% Off coupon</span> for any full-length mystery — ebook, print, or bundle.
              </p>

              {/* Accept / Decline CTAs */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-blue-500 hover:border-blue-400"
                >
                  ✅ Yes, please — I'll take the free chapter & coupon!
                </button>
                <button
                  onClick={onClose}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg text-sm transition-all duration-200 border border-gray-300"
                >
                  🚫 No, I'd rather read grainy old PDFs.
                </button>
              </div>
            </>
          )}

          {showForm && !showSuccess && (
            <div>
              <iframe
                src="https://link.goexpandnow.com/widget/form/jhfx98ikeEMp7EYtF0OS"
                style={{width: '100%', height: '400px', border: 'none', borderRadius: '3px'}}
                id="inline-jhfx98ikeEMp7EYtF0OS" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="free sample chapter (Idol) CTA form"
                data-height="undefined"
                data-layout-iframe-id="inline-jhfx98ikeEMp7EYtF0OS"
                data-form-id="jhfx98ikeEMp7EYtF0OS"
                title="free sample chapter (Idol) CTA form"
                onLoad={() => {
                  // Listen for form submission
                  const iframe = document.getElementById('inline-jhfx98ikeEMp7EYtF0OS');
                  if (iframe) {
                    iframe.addEventListener('load', () => {
                      // Check if form was submitted (this is a simplified approach)
                      setTimeout(() => {
                        setShowSuccess(true);
                      }, 2000); // Show success after 2 seconds as placeholder
                    });
                  }
                }}
              >
              </iframe>
              <script src="https://link.goexpandnow.com/js/form_embed.js"></script>
            </div>
          )}

          {showSuccess && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Success!</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your <span className="font-bold" style={{color: '#8b0000'}}>free chapter</span> and <span className="font-bold">10% Off coupon</span> are on their way to your inbox!
              </p>
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
