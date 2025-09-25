export interface BookCover {
  image: string;
  title: string;
  date: string;
  teaser: string;
  blurb: string;
}

export const bookCovers: BookCover[] = [
  {
    image: "/images/covers/copper-king.jpg",
    title: "The Copper King",
    date: "1923",
    teaser: "The Bradys probe Montana's Montague Mine after the Copper King vanishes, uncovering greed, betrayal, and a deadly conspiracy in the wild frontier.",
    blurb: "When young engineer John Sterling discovers a massive copper deposit, he becomes embroiled in a web of corporate intrigue, political corruption, and family secrets that threaten to destroy everything he holds dear."
  },
  {
    image: "/images/covers/missing-girl.jpg",
    title: "The Missing Girl",
    date: "1924",
    teaser: "The Bradys chase a forged letter and kidnappers from New York to Florida's swamps, uncovering voodoo charms, betrayal, and a deadly Southern plot.",
    blurb: "Private investigator Sarah Chen must navigate the dangerous world of organized crime and political corruption to find a missing heiress, uncovering a conspiracy that reaches the highest levels of society."
  },
  {
    image: "/images/covers/gov-gum.avif",
    title: "Government Gum",
    date: "1925",
    teaser: "The Bradys track a vanished heiress from New York to San Francisco's Chinatown, facing Highbinders, betrayal, and a deadly fight for millions.",
    blurb: "When a simple gum wrapper becomes classified as government property, it sets off a chain reaction of bureaucratic absurdity that threatens to bring the entire city to a standstill."
  },
  {
    image: "/images/covers/among-the-chinamen.jpg",
    title: "Among the Chinamen",
    date: "1926",
    teaser: "A severed head, opium dens, and a secret society drag the Bradys into Chinatown's deadliest conspiracy of murder, betrayal, and hidden loyalties.",
    blurb: "Rancher Tom Wilson finds himself stranded in a Chinese mining camp, where he must overcome his own prejudices and learn to survive in a world completely foreign to his experience."
  },
  {
    image: "/images/covers/ding.jpg",
    title: "Ding",
    date: "1927",
    teaser: "The Bradys face hypnotism, murder, and a vanished fiancée in Dr. Ding's deadly magic show, chasing truth from New York to San Francisco's Chinatown.",
    blurb: "When the ancient bell of St. Mary's begins ringing on its own, it heralds a series of supernatural events that force the townspeople to confront their deepest fears and darkest secrets."
  },
  {
    image: "/images/covers/hi-lo-jak.jpg",
    title: "Hi-Lo Jak",
    date: "1928",
    teaser: "A reign of terror grips New York as the Bradys face Hi-Lo-Jak, a vengeful mastermind whose Chinatown assassins will stop at nothing to kill them.",
    blurb: "Professional gambler Hi-Lo Jak finds himself in a deadly game of poker where the chips are worth more than money, and losing means losing everything he's ever loved."
  },
  {
    image: "/images/covers/desert-trail.jpg",
    title: "Desert Trail",
    date: "1929",
    teaser: "The Bradys brave Nevada's Deadman's Run, battling thirst, betrayal, and outlaws in search of a vanished colonel, his daughter, and stolen gold.",
    blurb: "Three travelers become lost in the vast desert, where they must rely on each other to survive while being hunted by something that doesn't belong in this world."
  },
  {
    image: "/images/covers/yellow-crooks.jpg",
    title: "Yellow Crooks",
    date: "1930",
    teaser: "Old King Brady hunts stolen diamonds in Chinatown's deadly underworld, only to uncover betrayal and the Yellow Crooks' ruthless empire.",
    blurb: "Detective Mike O'Connor investigates a series of robberies committed by criminals who leave behind yellow calling cards, leading him into a world of organized crime and supernatural mystery."
  },
  {
    image: "/images/covers/chinese-idol.jpg",
    title: "The Chinese Idol",
    date: "1931",
    teaser: "A millionaire's murder, a missing will, and a stolen idol draw the Bradys into New York's Chinatown, where counterfeit pearls hide deadly secrets.",
    blurb: "When archaeologist Dr. Emily Chen discovers a mysterious Chinese idol, she unleashes forces that have been dormant for centuries, forcing her to choose between knowledge and survival."
  },
  {
    image: "/images/covers/juggler.avif",
    title: "The Juggler",
    date: "1932",
    teaser: "A murdered juggler, opium dens, and a sinister secret society drag the Bradys into a deadly Chinatown mystery of deception, vengeance, and illusion.",
    blurb: "The mysterious juggler who never speaks performs impossible feats that defy the laws of physics, but when a series of deaths occur during his performances, the truth becomes more terrifying than anyone could imagine."
  }
];

// Create infinite scrolling array by duplicating the covers
export const infiniteCovers = [...bookCovers, ...bookCovers];
