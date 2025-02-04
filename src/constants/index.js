import {
  after,
  asmd,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  bizerta,
  canva,
  chourouk,
  chromecast,
  davinci,
  dehancer,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  ifm,
  illustrator,
  instagram,
  keune,
  lightroom,
  medica,
  mosaique,
  notification2,
  notification3,
  notification4,
  notion,
  orange,
  photoshop,
  plusSquare,
  premiere,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  soib,
  techniplast,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#features",
  },
  {
    id: "1",
    title: "Extraits",
    url: "#pricing",
  },
  {
    id: "2",
    title: "À propos",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Contacter nous",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [mosaique , medica ,   keune  ];
export const companyLogos2 = [soib, asmd, bizerta,  chourouk , orange , techniplast  ]; //bergachi 
export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Nous utilisons des technologies de pointe et des équipements modernes pour garantir une qualité exceptionnelle dans tous nos services.";

export const collabContent = [
  {
    id: "0",
    title: "des créations modernes",
    text: collabText,
  },
  {
    id: "1",
    title: "Outils Performants",
  },
  {
    id: "2",
    title: "Qualité Sécurisée",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Premiere Pro",
    icon: premiere,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "after effects",
    icon: after,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "illustrator",
    icon: illustrator,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "davinci resolve",
    icon: davinci,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "dehancer",
    icon: dehancer,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "canva",
    icon: canva,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "lightroom",
    icon: lightroom,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Couverture Événements",
    text: "Captation photo et vidéo professionnelle d'événements, avec prises de vue par drone pour des souvenirs inoubliables.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    videoUrl: "/videos/events.mp4",
    features: [
      "Captation vidéo haute définition",
      "Photographie professionnelle",
      "Prises de vue aériennes par drone",
      "Montage dynamique et créatif",
      "Livraison rapide"
    ],
    tools: [
      { name: "Premiere Pro", icon: premiere },
      { name: "After Effects", icon: after },
      { name: "DaVinci Resolve", icon: davinci },
      { name: "Photoshop", icon: photoshop }
    ]
  },
  {
    id: "1",
    title: "Productions Vidéos de Qualité Industrielle",
    text: "Production de vidéos de haute qualité pour les besoins industriels, comme la certification ISO et les processus de fabrication.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    videoUrl: "/videos/industrial.mp4",
    features: [
      "Vidéos de processus industriels",
      "Documentation ISO",
      "Formation technique",
      "Présentation de produits",
      "Sécurité et conformité"
    ],
    tools: [
      { name: "Premiere Pro", icon: premiere },
      { name: "After Effects", icon: after },
      { name: "DaVinci Resolve", icon: davinci }
    ],
    light: true
  },
  {
    id: "2",
    title: "Couverture Événements Sportifs",
    text: "Filmage et montage de moments clés des événements sportifs, créant des vidéos dynamiques et engageantes pour le public.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    videoUrl: "/videos/sports.mp4",
    features: [
      "Captation multi-caméras",
      "Ralentis et effets spéciaux",
      "Montage dynamique",
      "Diffusion en direct",
      "Highlights et résumés"
    ],
    tools: [
      { name: "Premiere Pro", icon: premiere },
      { name: "After Effects", icon: after },
      { name: "DaVinci Resolve", icon: davinci }
    ]
  },
  {
    id: "3",
    title: "Wedding Films",
    text: "Films de mariage sur mesure, capturant chaque instant avec un montage cinématographique et émotionnel.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    videoUrl: "/videos/wedding.mp4",
    features: [
      "Style cinématographique",
      "Drone aérien",
      "Montage émotionnel",
      "Audio haute qualité",
      "Film highlights"
    ],
    tools: [
      { name: "Premiere Pro", icon: premiere },
      { name: "DaVinci Resolve", icon: davinci },
      { name: "Lightroom", icon: lightroom }
    ],
    light: true
  },
  {
    id: "4",
    title: "Documentaires et Storytelling",
    text: "Production de documentaires captivants et storytelling visuel, mettant en avant des histoires authentiques et inspirantes.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    videoUrl: "/videos/documentary.mp4",
    features: [
      "Narration engageante",
      "Interviews professionnelles",
      "B-roll créatif",
      "Sound design",
      "Color grading cinématique"
    ],
    tools: [
      { name: "Premiere Pro", icon: premiere },
      { name: "After Effects", icon: after },
      { name: "DaVinci Resolve", icon: davinci },
      { name: "Dehancer", icon: dehancer }
    ]
  },
  {
    id: "5",
    title: "Graphisme et Impression Grand Format",
    text: "Création et impression de visuels grand format pour véhicules, vitrines, panneaux et supports publicitaires impactants.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    videoUrl: "/videos/graphics.mp4",
    features: [
      "Design créatif",
      "Impression haute qualité",
      "Habillage véhicules",
      "Signalétique",
      "Supports marketing"
    ],
    tools: [
      { name: "Illustrator", icon: illustrator },
      { name: "Photoshop", icon: photoshop },
      { name: "Canva", icon: canva }
    ]
  }
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const teamMembers = [
  {
    id: "0",
    name: "Walid Ben Slama",
    role: "Fondateur & Directeur Créatif",
    image: "/team/founder.jpg",
    description: "Expert en production audiovisuelle avec plus de 10 ans d'expérience dans la création de contenu de haute qualité.",
    expertise: [
      "Direction créative",
      "Production vidéo",
      "Photographie",
      "Montage"
    ],
    social: {
      linkedin: "https://linkedin.com/in/adem-ben-slama",
      instagram: "https://instagram.com/adem.benslama",
      facebook: "https://facebook.com/adem.benslama"
    }
  },
  {
    id: "1",
    name: "Wael Arifa",
    role: "Co-Fondateur & DirecteurArtistique",
    image: "/team/cofounder.jpg",
    description: "Spécialiste en design graphique et direction artistique, avec une passion pour la création d'identités visuelles uniques.",
    expertise: [
      "Direction artistique",
      "Design graphique",
 
    ],
    social: {
      linkedin: "https://linkedin.com/in/sarah-laurent",
      instagram: "https://instagram.com/sarah.laurent",
      facebook: "https://facebook.com/sarah.laurent"
    }
  }
];
