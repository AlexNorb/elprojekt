export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  longDescription: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'smarta-hem',
    title: 'Smarta Hem & Styrning',
    description: 'Vi integrerar belysning, värme och säkerhet. Plejd, KNX och Wiser för ett uppkopplat hem.',
    icon: 'home-modern',
    longDescription: 'Ett smart hem handlar inte bara om bekvämlighet, det handlar om energieffektivitet och säkerhet. Vi installerar system som KNX, Plejd och Wiser som låter dig styra hela ditt hem från fickan. Tänd belysningen automatiskt när solen går ner, eller sänk värmen när ingen är hemma.',
    features: ['App-styrning', 'Röststyrning', 'Energiövervakning', 'Automatiska scenarier'],
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    slug: 'laddbox-elbil',
    title: 'Laddboxar & Elbil',
    description: 'Installation av Zaptec och Easee. Säkra laddboxar med lastbalansering för hem och BRF.',
    icon: 'battery',
    longDescription: 'Att ladda bilen hemma ska vara säkert och effektivt. Vi är experter på laddboxar från marknadsledande Zaptec och Easee. Vi installerar lastbalansering som skyddar din huvudsäkring och ser till att laddningen sker när elen är som billigast (om du har timpris).',
    features: ['Zaptec & Easee', 'Lastbalansering', 'Skatteavdrag (Grön teknik)', 'Statistik & Rapporter'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    slug: 'renovering-nybyggnation',
    title: 'Renovering & Nybyggnation',
    description: 'Kompletta elinstallationer för kök, badrum och nyproduktion. Vi ordnar ritningar.',
    icon: 'bolt',
    longDescription: 'Ska du renovera köket eller bygga nytt hus? Vi hjälper till med allt från planering och ritningar till slutbesiktning. Vi har stor erfarenhet av badrumsrenovering med golvvärme och moderna belysningslösningar. Vi arbetar tätt ihop med snickare för ett sömlöst resultat.',
    features: ['Golvvärme & Belysning', 'Köksrenovering', 'Elritningar', 'Nyinstallation'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    slug: 'service-elcentral',
    title: 'Service & Elcentral',
    description: 'Byte av elcentral till automatsäkringar, felsökning och utökning av befintlig anläggning.',
    icon: 'cpu-chip',
    longDescription: 'Gamla elinstallationer kan utgöra en brandfara. Vi utför besiktningar och byter ut gamla proppskåp mot moderna normcentraler med jordfelsbrytare. Vi hjälper även till med felsökning och mindre servicejobb i hela vårt upptagningsområde.',
    features: ['Byte av elcentral', 'Jordfelsbrytare', 'Felsökning', 'Snabba åtgärder'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80'
  },
];
