export interface LandingVariantConfig {
  id: string;
  copyVariant: '33bt' | '34bt' | '34tb';
  heroImageDesktop: string;
  heroImageMobile: string;
  offerTitle: string;
  offerPrice: string;
  offerOldPrice?: string;
  offerBadge?: string;
  ctaText: string;
  problems: string[];
  solutionMainText: string;
  solutionFeatures: { title: string; description: string }[];
  bookGridImages: string[];
  testimonials: { text: string; author: string; rating: number }[];
  whyMainText: string;
  whyFeatures: { icon: string; title: string; description: string }[];
  guaranteeImage?: string;
  faqs: { question: string; answer: string }[];
}

export const landingVariants: LandingVariantConfig[] = [
  // --- PRINT (A5) LANDER VARIANTS ---
  {
    id: "33bt-a5-a",
    copyVariant: '33bt',
    heroImageDesktop: "/assets/33bt/img/33bt_bg_3x4.png",
    heroImageMobile: "/assets/33bt/img/33bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "33bt-a5-b",
    copyVariant: '33bt',
    heroImageDesktop: "/assets/33bt/img/33bt_bg_3x4.png",
    heroImageMobile: "/assets/33bt/img/33bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  // --- PLACEHOLDER: Remaining variants below. Customize as needed. ---
  {
    id: "34bt-a5-a",
    copyVariant: '34bt',
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34bt-a5-b",
    copyVariant: '34bt',
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34tb-a5-a",
    copyVariant: '34tb',
    heroImageDesktop: "/assets/34tb/img/34tb_bg_3x4.png",
    heroImageMobile: "/assets/34tb/img/34tb_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34tb-a5-b",
    copyVariant: '34tb',
    heroImageDesktop: "/assets/34tb/img/34tb_bg_3x4.png",
    heroImageMobile: "/assets/34tb/img/34tb_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/print/chinese-idol_3dmock.png",
      "/assets/covers/print/bat-wing-3dmock-front2.png",
      "/assets/covers/print/expressman_3dmock.png",
      "/assets/covers/print/australia_3dmock1.png",
      "/assets/covers/print/dead-secret_3dmock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  // --- EBOOK LANDER VARIANTS ---
  {
    id: "33bt-ebook-a",
    copyVariant: '33bt',
    heroImageDesktop: "/assets/33bt/img/33bt_bg_3x4.png",
    heroImageMobile: "/assets/33bt/img/33bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "33bt-ebook-b",
    copyVariant: '33bt',
    heroImageDesktop: "/assets/33bt/img/33bt_bg_3x4.png",
    heroImageMobile: "/assets/33bt/img/33bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34bt-ebook-a",
    copyVariant: '34bt',
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34bt-ebook-b",
    copyVariant: '34bt',
    heroImageDesktop: "/assets/34bt/img/34bt_bg_3x4.png",
    heroImageMobile: "/assets/34bt/img/34bt_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34tb-ebook-a",
    copyVariant: '34tb',
    heroImageDesktop: "/assets/34tb/img/34tb_bg_3x4.png",
    heroImageMobile: "/assets/34tb/img/34tb_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  },
  {
    id: "34tb-ebook-b",
    copyVariant: '34tb',
    heroImageDesktop: "/assets/34tb/img/34tb_bg_3x4.png",
    heroImageMobile: "/assets/34tb/img/34tb_bg_9x16.png",
    offerTitle: "The Vintage Mystery Sampler Bundle",
    offerPrice: "$52.49",
    offerOldPrice: "$69.99",
    offerBadge: "Save 25%",
    ctaText: "YES, I WANT MY BUNDLE",
    problems: [
      "Tiny, eye-straining print in mass-market paperbacks makes reading a chore.",
      "Online archives are filled with yellowed, error-ridden scans that ruin the story.",
      "The ebooks you 'buy' from Amazon aren't really yours—they're locked with DRM and can disappear from your library without warning.",
      "You're cautious about ordering online, worried about confusing checkouts and non-existent customer support."
    ],
    solutionMainText: "We believe great stories deserve to be held in your hands. That's why we created the Vintage Mystery Sampler Bundle: five brilliant, forgotten classics, meticulously restored and published in a format designed for true reading enjoyment.",
    solutionFeatures: [
      { title: "Read with Comfort and Ease", description: "Each book is a reader-friendly A5 paperback (5.8\" x 8.3\") with clean, 11-point type. They're light enough to hold for hours without strain." },
      { title: "Own Your Books, Forever", description: "No DRM. No Amazon. No tracking. No censorship. These books are yours to keep, display on your shelf, and share with family and friends." },
      { title: "Discover Genuine Hidden Gems", description: "We've rescued these thrilling stories from obscurity, editing them for clarity while preserving every ounce of their vintage charm." },
      { title: "Support a Preservation Mission", description: "Every purchase you make helps us find and save another wonderful story from being forgotten forever." }
    ],
    bookGridImages: [
      "/assets/covers/ebooks/chinese-idol_ebook-mock.png",
      "/assets/covers/ebooks/batwing-ebook-mock.png",
      "/assets/covers/ebooks/expressman_ebook-mock.png",
      "/assets/covers/ebooks/australia_ebook-mock.png",
      "/assets/covers/ebooks/dead-secret_ebook-mock.png"
    ],
    testimonials: [
      { text: "Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I'm hooked on these forgotten classics.", author: "Bob M.", rating: 5 },
      { text: "If you're a mystery fan who thinks they've read it all, try BRADYS AND THE CHINESE IDOL. Suspenseful, unpredictable, and filled with old school detective charm.", author: "R. Mitchel", rating: 5 },
      { text: "No foul language, no over-the-top ****. Just good clean murder and mayhem!", author: "Audrey Z.", rating: 5 },
      { text: "This guy invented detective work before Sherlock was born.", author: "Daniel I.", rating: 4 },
      { text: "These detective stories feel like forgotten treasures from mystery's golden age. If you're tired of modern mysteries you'll love the Old Cap Collier Library.", author: "Hunter J.", rating: 5 },
      { text: "If Brontë wrote a mystery... this.", author: "Sean A.", rating: 4 }
    ],
    whyMainText: "Our approach is simple: put readers and stories first.",
    whyFeatures: [
      { icon: "📖", title: "Truly Own Your Books", description: "Unlike other platforms, we give you books without Digital Rights Management (DRM). You own them forever. No tracking, no auto-deletes, no censorship. Period." },
      { icon: "🔎", title: "A Mission of Preservation", description: "We are archivists at heart. We hunt down brilliant stories that have been forgotten, restore them with care, and bring them back to life for new generations to enjoy." },
      { icon: "❤️", title: "Designed for Readers, Not Screens", description: "Every detail, from the easy-to-hold A5 size to the legible 11-point font, is chosen to make reading a comfortable, immersive pleasure." }
    ],
    guaranteeImage: "/pass-the-mystery-on.png",
    faqs: [
      { question: "Do I truly own these books?", answer: "Yes, 100%. The paperback collection is yours to keep, share, or pass down. Your purchase also includes free, instant access to the digital versions (EPUB and Kindle files), which are also yours to own forever. No strings attached." },
      { question: "What formats do I get with this bundle?", answer: "You will receive the 5-book paperback collection shipped directly to you. Your purchase also includes links to download both EPUB (for Kobo, Nook, and other e-readers) and Kindle (MOBI) files for all five books." },
      { question: "Is shipping included?", answer: "We offer flat-rate shipping within the U.S. The final cost will be calculated at checkout. Our 'Pass the Mystery On' guarantee ensures that if you request a refund, your full purchase price, including the original shipping cost, will be returned to you." },
      { question: "What if I have trouble with my order?", answer: "We're here to help! You can email us directly at atticus@crowmail.co. You will be talking to a real person who is dedicated to making sure you have a great experience." }
    ]
  }
  // --- END PLACEHOLDER VARIANTS ---
]; 