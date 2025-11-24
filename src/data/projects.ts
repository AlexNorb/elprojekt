export interface Project {
    title: string;
    category: string;
    filterCategory: string;
    description: string;
    image: string;
    images: string[];
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: "Villa Sjöutsikten",
        category: "Villa, Nyproduktion",
        filterCategory: "villa",
        description: "Totalentreprenad vid nybyggnation av exklusiv villa. Vi installerade Plejd för ljusstyrning, Easee laddbox samt drog nätverk i hela huset.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80",
            "https://images.unsplash.com/photo-1594968840742-ac88c03e659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1582268611958-abde6d4f9388?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1549221191-412e87311749?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: true
    },
    {
        title: "Centralgatan Kontor",
        category: "Företag, Renovering",
        filterCategory: "foretag",
        description: "Byte av all belysning till energieffektiv LED i kontorslandskap på 400kvm. Inklusive närvarostyrning och nödutrymningsskyltar.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
            "https://images.unsplash.com/photo-1522071820081-009f0129c7c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1533050186591-7603348008d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1504384764586-bb4be8b900d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: true
    },
    {
        title: "BRF Solbacken",
        category: "Energi, Solceller",
        filterCategory: "energi",
        description: "Installation av 120 solpaneler på BRF-tak. Total effekt 50kW. Anläggningen kopplades mot Ferroamp-system för fasbalansering.",
        image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
        images: [
            "https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1517409548455-b076779435f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1615873968403-ad53199d251f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1621251996144-463d11b8b80e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ],
        featured: true
    },
    {
        title: "Kökrenovering Älvsjö",
        category: "Villa, Renovering",
        filterCategory: "villa",
        description: "Omdragning av el i kök och vardagsrum. Installation av spottar i tak, nya uttag över bänk samt anslutning av vitvaror.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        images: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1588851493721-a20d41e21b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1563214152-32130e565983?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542435503-921d7bda6aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        title: "Laddboxar Parkering",
        category: "Energi, Laddbox",
        filterCategory: "energi",
        description: "Installation av 10st laddboxar för samfällighet. Inklusive markarbete för ny kabeldragning och lastbalansering i central.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
        images: [
            "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
            "https://images.unsplash.com/photo-1627448332560-6425488582d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1619864273822-75d31195ec40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1622616212579-22a76f238590?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        title: "Industrihall Lager",
        category: "Företag, Industri",
        filterCategory: "foretag",
        description: "Drog fram ny matning 63A till maskinpark samt installerade kraftbelysning i taket på 8 meters höjd med saxlift.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1563514210080-60b5403e1e2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1563514210077-0a4a58b22a0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1517409548455-b076779435f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        ]
    }
];
