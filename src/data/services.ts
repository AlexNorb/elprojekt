export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  longDescription: string;
  features: string[];
  image: string;
  processSteps?: { step: number; title: string; description: string }[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'solceller-energi',
    title: 'Solceller & Energi',
    description: 'Nyckelfärdiga solcellsanläggningar och batterilagring. Vi hjälper dig från kalkyl till färdig installation.',
    icon: 'bolt',
    longDescription: 'Att installera solceller är en av de bästa investeringarna du kan göra för både plånboken och miljön. På ELPROJEKT är vi experter på att dimensionera och installera anläggningar som är optimerade för svenska förhållanden. Vi använder endast paneler och växelriktare från ledande tillverkare för att garantera lång livslängd och hög verkningsgrad. Vi hjälper dig även med batterilagring så att du kan spara din solenergi till kvällen eller sälja den när priset är högt.',
    features: [
      'Nyckelfärdig installation',
      'Marknadsledande garantier',
      'Hjälp med Grön Teknik-avdrag',
      'Föranmälan till nätägare'
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
    processSteps: [
      {
        step: 1,
        title: 'Kostnadsfritt hembesök',
        description: 'Vi kommer ut, mäter taket och tittar på förutsättningarna för din elcentral.'
      },
      {
        step: 2,
        title: 'Offert & Kalkyl',
        description: 'Du får en tydlig offert med beräknad produktion och återbetalningstid.'
      },
      {
        step: 3,
        title: 'Installation & Driftstart',
        description: 'Våra montörer sätter upp panelerna och elektrikern driftsätter anläggningen. Klart!'
      }
    ]
  },
  {
    id: 2,
    slug: 'laddbox-elbil',
    title: 'Laddboxar & Elbil',
    description: 'Installation av Zaptec och Easee. Säkra laddboxar med lastbalansering för hem och BRF.',
    icon: 'battery',
    longDescription: 'Att ladda bilen hemma ska vara säkert och effektivt. Vi är experter på laddboxar från marknadsledande Zaptec och Easee. Vi installerar lastbalansering som skyddar din huvudsäkring och ser till att laddningen sker när elen är som billigast. Vi hjälper bostadsrättsföreningar, företag och privatpersoner att hitta rätt laddlösning.',
    features: ['Upp till 10x snabbare laddning', 'Lastbalansering', '50% Skatteavdrag (Grön teknik)', 'Statistik & Rapporter'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    slug: 'smarta-hem',
    title: 'Smarta Hem & Styrning',
    description: 'Vi integrerar belysning, värme och säkerhet. Plejd, KNX och Wiser för ett uppkopplat hem.',
    icon: 'home-modern',
    longDescription: 'Ett smart hem handlar inte bara om teknik, utan om att förenkla din vardag. Tänk dig att belysningen automatiskt dimras ner på kvällen, eller att "Hejdå"-knappen vid dörren släcker hela huset och larmar på. Vi installerar system som KNX, Plejd och Wiser som låter dig styra belysning, värme och solskydd direkt från mobilen.',
    features: ['App-styrning & Scenarier', 'Smart belysning', 'Värmestyrning', 'Solskydd & Gardiner'],
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    slug: 'renovering-nybyggnation',
    title: 'Renovering & Nybyggnation',
    description: 'Kompletta elinstallationer för kök, badrum, villor och entreprenad.',
    icon: 'home-modern',
    longDescription: 'Vi är din partner vid både nybyggnation och renovering. Oavsett om det gäller ett stambyte, en köksrenovering eller en helt ny villa tar vi ansvar för hela elinstallationen. Vi utför ljusberäkningar, upprättar ritningar och samarbetar tätt med andra hantverkare för ett perfekt resultat. Vi täcker även butiksanpassningar och kontorsombyggnader.',
    features: ['Elritningar & Projektering', 'Golvvärme & Belysning', 'Kök & Badrum', 'Entreprenad för byggbolag'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 5,
    slug: 'service-underhall',
    title: 'Service & Underhåll',
    description: 'Felsökning, reparation och utbyte av elcentraler. Snabb hjälp när elen krånglar.',
    icon: 'cpu-chip',
    longDescription: 'Elen är hjärtat i varje fastighet. När något slutar fungera kan det få stora konsekvenser. Våra servicetekniker är snabbt på plats för att felsöka och åtgärda problem. Vi utför allt från byte av trasiga uttag till utbyte av gamla proppskåp mot moderna automatsäkringar med jordfelsbrytare. Vi erbjuder även serviceavtal för BRF:er.',
    features: ['Akut felsökning', 'Byte av elcentral', 'Jordfelsbrytare', 'Periodisk tillsyn'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
  }
];
