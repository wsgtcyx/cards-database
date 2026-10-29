import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/093",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/093",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/093",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/093",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/093",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/093",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/093"
    },
    name: {
        en: "Ferroseed",
        fr: "Grindur",
        es: "Ferroseed",
        "pt-br": "Ferroseed",
        "zh-tw": "種子鐵球",
        ja: "テッシード",
        ko: "철시드",
        it: "Ferroseed",
        de: "Kastadur"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Metal"
    ],
    stage: "Basic",
    retreat: 3,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Pierce",
                fr: "Transpercement",
                es: "Perforar",
                it: "Perforare",
                de: "Durchbohren",
                "pt-br": "Perfurar",
                "zh-tw": "突刺",
                ja: "Pierce",
                ko: "Pierce"
            },
            cost: [
                "Metal",
                "Metal"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "It defends itself by launching spikes, but its aim isn't very good at first. Only after a lot of practice will it improve.",
        fr: "Il se protège en projetant ses épines, mais il lui faut beaucoup d'entraînement pour réussir à tirer dans une direction précise.",
        es: "Se defiende lanzando púas, pero para poder apuntar con precisión a su objetivo necesita ingentes sesiones de práctica.",
        it: "Si protegge sparando i suoi aculei, ma per riuscire a orientarsi con precisione verso il bersaglio ha bisogno di allenarsi a lungo.",
        de: "Es schützt sich, indem es Dornen verschießt. Ein Kastadur muss jahrelang trainieren, um präzise zielen zu können.",
        "pt-br": "Defende-se lançando espinhos, mas sua mira não costuma ser muito boa nas primeiras tentativas e só melhora depois de muito treino.",
        "zh-tw": "會發射尖刺來保護自己，需要反覆訓練才能將尖刺準確地朝向目標。",
        ja: "It defends itself by launching spikes, but its aim isn't very good at first. Only after a lot of practice will it improve.",
        ko: "It defends itself by launching spikes, but its aim isn't very good at first. Only after a lot of practice will it improve."
    }
};

export default card;
