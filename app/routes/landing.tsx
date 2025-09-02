import { useState, useEffect } from "react";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);
  const [selectedCover, setSelectedCover] = useState<any>(null);

  // Book cover data - duplicated for infinite scrolling effect
  const bookCovers = [
    {
      image: "/images/covers/copper-king.jpg",
      title: "The Copper King",
      date: "1923",
      teaser: "A tale of power, corruption, and redemption in the copper mines of Montana.",
      blurb: "When young engineer John Sterling discovers a massive copper deposit, he becomes embroiled in a web of corporate intrigue, political corruption, and family secrets that threaten to destroy everything he holds dear."
    },
    {
      image: "/images/covers/missing-girl.jpg",
      title: "The Missing Girl",
      date: "1924",
      teaser: "A detective's desperate search through the dark underbelly of the city.",
      blurb: "Private investigator Sarah Chen must navigate the dangerous world of organized crime and political corruption to find a missing heiress, uncovering a conspiracy that reaches the highest levels of society."
    },
    {
      image: "/images/covers/gov-gum.png",
      title: "Government Gum",
      date: "1925",
      teaser: "A satirical look at bureaucracy gone mad in the roaring twenties.",
      blurb: "When a simple gum wrapper becomes classified as government property, it sets off a chain reaction of bureaucratic absurdity that threatens to bring the entire city to a standstill."
    },
    {
      image: "/images/covers/among-the-chinamen.jpg",
      title: "Among the Chinamen",
      date: "1926",
      teaser: "A western adventure that challenges cultural boundaries and prejudices.",
      blurb: "Rancher Tom Wilson finds himself stranded in a Chinese mining camp, where he must overcome his own prejudices and learn to survive in a world completely foreign to his experience."
    },
    {
      image: "/images/covers/ding.jpg",
      title: "Ding",
      date: "1927",
      teaser: "A mysterious bell that tolls for the dead and the living alike.",
      blurb: "When the ancient bell of St. Mary's begins ringing on its own, it heralds a series of supernatural events that force the townspeople to confront their deepest fears and darkest secrets."
    },
    {
      image: "/images/covers/hi-lo-jak.jpg",
      title: "Hi-Lo Jak",
      date: "1928",
      teaser: "A high-stakes poker game where the stakes are life and death.",
      blurb: "Professional gambler Hi-Lo Jak finds himself in a deadly game of poker where the chips are worth more than money, and losing means losing everything he's ever loved."
    },
    {
      image: "/images/covers/desert-trail.jpg",
      title: "Desert Trail",
      date: "1929",
      teaser: "A journey through the unforgiving desert that tests the limits of human endurance.",
      blurb: "Three travelers become lost in the vast desert, where they must rely on each other to survive while being hunted by something that doesn't belong in this world."
    },
    {
      image: "/images/covers/yellow-crooks.jpg",
      title: "Yellow Crooks",
      date: "1930",
      teaser: "A gang of criminals with a mysterious connection to the color yellow.",
      blurb: "Detective Mike O'Connor investigates a series of robberies committed by criminals who leave behind yellow calling cards, leading him into a world of organized crime and supernatural mystery."
    },
    {
      image: "/images/covers/chinese-idol.jpg",
      title: "The Chinese Idol",
      date: "1931",
      teaser: "An ancient artifact that brings both fortune and doom to its possessor.",
      blurb: "When archaeologist Dr. Emily Chen discovers a mysterious Chinese idol, she unleashes forces that have been dormant for centuries, forcing her to choose between knowledge and survival."
    },
    {
      image: "/images/covers/juggler.png",
      title: "The Juggler",
      date: "1932",
      teaser: "A circus performer whose act conceals a deadly secret.",
      blurb: "The mysterious juggler who never speaks performs impossible feats that defy the laws of physics, but when a series of deaths occur during his performances, the truth becomes more terrifying than anyone could imagine."
    }
  ];

  // Create infinite scrolling array by duplicating the covers
  const infiniteCovers = [...bookCovers, ...bookCovers];



  // Auto-scroll mobile carousel with infinite scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCoverIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // When we reach the end of the first set, seamlessly continue to the second set
        if (nextIndex >= bookCovers.length) {
          // Reset to 0 but maintain the visual position
          return 0;
        }
        return nextIndex;
      });
    }, 4000); // Change cover every 4 seconds

    return () => clearInterval(interval);
  }, [bookCovers.length]);

  const handleCtaClick = () => {
    setShowModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with GHL
    // For now, we'll simulate the redirect
    console.log("Form submitted with email:", email);
    
    // Redirect to GHL funnel (you'll need to replace this URL)
    const ghlUrl = `https://your-ghl-funnel.com?email=${encodeURIComponent(email)}`;
    window.location.href = ghlUrl;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Background Image with Overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Background */}
          <img
            src="/images/landing/hero_mobile.png"
            alt="Mystery Collection Background"
            className="w-full h-full object-cover lg:hidden"
          />
          {/* Desktop Background */}
          <img
            src="/images/landing/hero_desktop.png"
            alt="Mystery Collection Background"
            className="hidden lg:block w-full h-full object-cover"
          />
          {/* Slight Darkening Overlay for Better Text Readability */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.50)'}}></div>
        </div>

        {/* Logo - Positioned directly on hero section */}
                       {/* Mobile Logo - Centered at top */}
               <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 lg:hidden">
                 <img
                   src="/images/logos/atticus_e.png"
                   alt="Atticus E Logo"
                   className="h-10 sm:h-12"
                 />
               </div>
               {/* Desktop Logo - Top-left */}
               <div className="absolute top-4 left-8 z-20 hidden lg:block">
                 <img
                   src="/images/logos/logo_full_w.png"
                   alt="Tales of Murder Logo"
                   className="h-12 sm:h-16"
                 />
               </div>

                       {/* Content Overlay */}
               <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 max-w-3xl mx-auto lg:max-w-5xl">
                           {/* Main Headline and other content - Centered with minimal top padding */}
                 <div className="text-center w-full pt-8 sm:pt-12 lg:pt-16">
            {/* Yellow Ad Headline Block */}
            <div className="bg-yellow-400/65 text-black px-6 py-4 rounded-lg mb-8 mx-auto max-w-2xl">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                I came for the mystery. I stayed for the rooftop chases and secret panels.
              </p>
            </div>

                             {/* Main Headline */}
                 <div className="space-y-1 lg:space-y-0 mb-6">
                   <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-white leading-tight lg:leading-none tracking-tight hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                     10 LOST MYSTERIES.
                   </h2>
                   <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-white leading-tight lg:leading-none tracking-tight hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                     ONE BUNDLE.
                   </h2>
                   <h2 className="text-6xl sm:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-yellow-400 leading-tight lg:leading-none tracking-tight hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                     YOURS TONIGHT.
                   </h2>
                 </div>

            

            {/* Price Display */}
            <div className="mb-6">
              <p className="text-white text-xl sm:text-2xl line-through mb-1">
                ONLY $99.99
              </p>
              <p className="text-yellow-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none">
                $44.99
              </p>
            </div>

                               {/* CTA Button */}
                   <button
                     onClick={handleCtaClick}
                     className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl sm:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-red-500 hover:border-red-400 animate-pulse hover:animate-none"
                   >
                     Yes—Send Me All 10 Gaslight Pulp Novels!
                   </button>

                   {/* $1 Ebook Alternative Link */}
                   <div className="text-sm text-gray-300 hover:text-white italic transition-colors duration-200 font-fold mt-8 text-center">
                    <p className="mb-2 uppercase">Not ready to commit to the full 10&#8209;book&nbsp;library?</p>
                     <a 
                       href="#" 
                       className="text-sm text-gray-300 hover:text-white italic transition-colors duration-200 underline font-bolder"
                     >
                      Click to get your $1 ebook.
                     </a>
                     <p className="mt-2 text-xs text-white/80 mt-2 italic">(But I'm giving up more than $120 in savings&nbsp;with&nbsp;this&nbsp;bundle!)</p>
                   </div>
          </div>
        </div>
                   </section>

             {/* Book Cover Carousel Section */}
             <section className="py-12 sm:py-16 bg-gray-100">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 hero-subheadline">
                   BINGE TEN THRILLING GASLIGHT PULP NOVELS
                 </h2>
                 
                 {/* Mobile Carousel - Full Width Covers */}
                 <div className="lg:hidden">
                   <div className="relative overflow-hidden w-full">
                     <div className="flex transition-transform duration-500 ease-in-out w-full" style={{
                       transform: `translateX(-${currentCoverIndex * 100}%)`
                     }}>
                       {bookCovers.map((cover, index) => (
                         <div key={index} className="w-full flex-shrink-0 px-4">
                           <div 
                             className="relative cursor-pointer group w-full"
                             onClick={() => setSelectedCover(cover)}
                           >
                             <img
                               src={cover.image}
                               alt={cover.title}
                               className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl"
                               onError={(e) => {
                                 console.error('Image failed to load:', cover.image);
                                 e.currentTarget.style.backgroundColor = 'red';
                               }}
                             />
                             
                             {/* Eye icon overlay on each cover */}
                             <div className="absolute inset-0 flex items-center justify-center">
                               <div className="bg-white/70 w-12 h-12 rounded-full flex items-center justify-center">
                                 <span className="text-black/50 text-3xl font-bold">👁</span>
                               </div>
                             </div>
                             
                           </div>
                         </div>
                       ))}
                     </div>
                     
                     {/* Navigation Dots */}
                     <div className="flex justify-center mt-6 space-x-2">
                       {bookCovers.map((_, index) => (
                         <button
                           key={index}
                           onClick={() => setCurrentCoverIndex(index)}
                           className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                             index === currentCoverIndex ? 'bg-red-600' : 'bg-gray-300'
                           }`}
                         />
                       ))}
                     </div>
                   </div>
                 </div>
                 
                 {/* Desktop Carousel - Single Row with Smooth Horizontal Scrolling */}
                 <div className="hidden lg:block">
                   <div className="overflow-hidden group">
                     <div className="flex gap-6 animate-scroll group-hover:pause" style={{ 
                       minWidth: 'max-content',
                       animation: 'scroll 30s linear infinite'
                     }}>
                       {infiniteCovers.map((cover, index) => (
                         <div key={index} className="relative cursor-pointer group flex-shrink-0" style={{ width: '200px' }}>
                           <div 
                             className="relative"
                             onClick={() => setSelectedCover(cover)}
                           >
                             <img
                               src={cover.image}
                               alt={cover.title}
                               className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                               onError={(e) => {
                                 console.error('Image failed to load:', cover.image);
                                 e.currentTarget.style.backgroundColor = 'red';
                               }}
                             />

                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
                          </section>

             {/* Book Cover Detail Modal */}
             {selectedCover && (
               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                 <div className="bg-white rounded-lg max-w-sm sm:max-w-md w-full p-4 sm:p-6">
                   <div className="flex justify-between items-center mb-4">
                     <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{selectedCover.title}</h3>
                     <button
                       onClick={() => setSelectedCover(null)}
                       className="text-gray-400 hover:text-gray-600 text-xl"
                     >
                       ✕
                     </button>
                   </div>
                   
                   <div className="space-y-4">
                     <img
                       src={selectedCover.image}
                       alt={selectedCover.title}
                       className="w-full h-auto max-h-48 object-contain rounded-lg shadow-md"
                     />
                     
                     <div className="text-center">
                       <p className="text-sm text-gray-500 mb-2">{selectedCover.date}</p>
                       <p className="text-base font-semibold text-gray-700 mb-3">{selectedCover.teaser}</p>
                       <p className="text-sm text-gray-600 leading-relaxed">{selectedCover.blurb}</p>
                     </div>
                   </div>
                 </div>
               </div>
             )}

             {/* GHL Form Modal - Mobile Optimized */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Reserve Your Copy</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-gray-700">50%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '50%' }}></div>
              </div>
            </div>
            
            {/* Headline */}
            <div className="text-center mb-6">
              <h4 className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed">
                To reserve your copy, please enter your email address below.
              </h4>
            </div>
            
            {/* GHL Form */}
            <div className="w-full">
              <iframe
                src="https://link.goexpandnow.com/widget/form/9oIwOEVxyUx4GgEzgNPK"
                style={{ width: '100%', height: '432px', border: 'none', borderRadius: '3px' }}
                id="inline-9oIwOEVxyUx4GgEzgNPK" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="test for html embed"
                data-height="432"
                data-layout-iframe-id="inline-9oIwOEVxyUx4GgEzgNPK"
                data-form-id="9oIwOEVxyUx4GgEzgNPK"
                title="test for html embed"
              >
              </iframe>
            </div>
            
            {/* GHL Script */}
            <script src="https://link.goexpandnow.com/js/form_embed.js"></script>
          </div>
        </div>
      )}
    </div>
  );
}
