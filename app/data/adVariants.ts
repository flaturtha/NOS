export interface AdVariant {
  id: string;
  text: string;
  images: {
    mobile: string;
    desktop: string;
  };
}

export const adVariants: Record<string, AdVariant> = {
  '31TB': {
    id: '31TB',
    text: 'I meant to read one. Ended up tearing through five.',
    images: {
      mobile: '/images/landing/ad-images/31-portrait.png',
      desktop: '/images/landing/ad-images/31-landscape.png'
    }
  },
  '31BT': {
    id: '31BT',
    text: 'I meant to read one. Ended up tearing through five.',
    images: {
      mobile: '/images/landing/ad-images/31-portrait.png',
      desktop: '/images/landing/ad-images/31-landscape.png'
    }
  },
  '37TB': {
    id: '37TB',
    text: 'Murder. Opium. And a butler who definitely didn\'t do it.',
    images: {
      mobile: '/images/landing/ad-images/37-portrait.png',
      desktop: '/images/landing/ad-images/37-landscape.png'
    }
  },
  '32BT': {
    id: '32BT',
    text: 'It\'s like Sherlock Holmes had a street-wise American cousin.',
    images: {
      mobile: '/images/landing/ad-images/32-portrait.png',
      desktop: '/images/landing/ad-images/32-landscape.png'
    }
  },
  '32TB': {
    id: '32TB',
    text: 'It\'s like Sherlock Holmes had a street-wise American cousin.',
    images: {
      mobile: '/images/landing/ad-images/32-portrait.png',
      desktop: '/images/landing/ad-images/32-landscape.png'
    }
  }
};

export function getAdVariant(variantId: string): AdVariant | null {
  return adVariants[variantId] || null;
}
