import AcuarelaBoho from "./templates/AcuarelaBoho/AcuarelaBoho";
import AlegreLasVegas from "./templates/AlegreLasVegas/AlegreLasVegas";
import ArmoniosoMalta from "./templates/ArmoniosoMalta/ArmoniosoMalta";
import Classic from "./templates/Classic/Classic";
import EleganteParis from "./templates/EleganteParis/EleganteParis";
import EraseUnaVez from "./templates/EraseUnaVez/EraseUnaVez";
import HavanaModerna from "./templates/HavanaModerna/HavanaModerna";
import JardinMelbourne from "./templates/JardinMelbourne/JardinMelbourne";
import SanfranciscoArcoiris from "./templates/SanfranciscoArcoiris/SanfranciscoArcoiris";
import TradicionalLondres from "./templates/TradicionalLondres/TradicionalLondres";

export const TemplateConfig = [
    {
        id: 1,
        img: '/images/Plantilla_0.png',
        link: 'https://www.invited.es/es/invitacion/javier-sandra/70',
        name: "Classic",
        category: "Clasico"
    },
    {
        id: 2,
        img: '/images/Plantilla_1.png',
        link: 'https://www.invited.es/es/invitacion/javier-sandra/71',
        name: "Acuarela Boho",
        category: "Vintage"
    },
    {
        id: 3,
        img: '/images/Plantilla_2.png',
        link: 'https://www.invited.es/es/invitacion/luis-lucas/81',
        name: "Erase Una Vez",
        category: "Fantasia"
    },
    {
        id: 4,
        img: '/images/HavanaModerna.png',
        link: 'https://www.invited.es/es/invitacion/luis-lucas/85',
        name: "Havana Moderna",
        category: "Moderno"
    },
    {
        id: 5,
        img: '/images/JardinMelbourne.png',
        link: 'https://www.invited.es/es/invitacion/javier-sandra/91',
        name: "Jardin Melbourne",
        category: "Vintage"
    },
    {
        id: 6,
        img: '/images/EleganteParis.png',
        link: 'https://www.invited.es/es/invitacion/demo/elegante-paris',
        name: "Elegante Paris",
        category: "Clasico"
    },
    {
        id: 7,
        img: '/images/SanfranciscoArcoiris.png',
        link: 'https://www.invited.es/es/invitacion/demo/sanfrancisco-arcoiris',
        name: "Sanfrancisco Arcoiris",
        category: "Moderno"
    },
    {
        id: 8,
        img: '/images/ArmoniosoMalta.png',
        link: 'https://www.invited.es/es/invitacion/demo/armonioso-malta',
        name: "Armonioso Malta",
        category: "Elegante"
    },
    {
        id: 9,
        img: '/images/AlegreLasVegas.png',
        link: 'https://www.invited.es/es/invitacion/demo/alegre-las-vegas',
        name: "Alegre Las Vegas",
        category: "Moderno"
    },
    {
        id: 10,
        img: '/images/TradicionalLondres.png',
        link: 'https://www.invited.es/es/invitacion/demo/tradicional-londres',
        name: "Tradicional Londres",
        category: "Clasico"
    }
];


export const Categories = [
    "Quitar Filtro",
    "Clasico",
    "Moderno",
    "Vintage",
    "Fantasia"
];

export const AvailableTemplates = {
    Romantica: <Classic />,
    EleganteParis: <EleganteParis />,
    HavanaModerna: <HavanaModerna />,
    SanfranciscoArcoiris: <SanfranciscoArcoiris />,
    JardinMelbourne: <JardinMelbourne />,
    Acuarela: <AcuarelaBoho />,
    EraseunaVez: <EraseUnaVez />,
    ArmoniosoMalta: <ArmoniosoMalta />,
    AlegreLasVegas: <AlegreLasVegas />,
    TradicionalLondres: <TradicionalLondres />,
};
