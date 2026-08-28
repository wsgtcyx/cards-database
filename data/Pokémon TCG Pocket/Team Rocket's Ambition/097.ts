import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/097",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/097"
    },
    name: {
        en: "Goldeen",
        fr: "Poissirène",
        es: "Goldeen",
        it: "Goldeen",
        de: "Goldini",
        "pt-br": "Goldeen",
        "zh-tw": "角金魚",
        ko: "콘치",
        ja: "トサキント"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    dexId: [118],
    stage: "Basic",
    description: {
        en: "Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots.",
        fr: "Ses nageoires dorsales et pectorales sont très développées. Elles lui permettent de nager à une vitesse de cinq nceuds.",
        es: "La aleta dorsal y las aletas pectorales están tan desarrolladas que actúan como músculos. Puede nadar a una velocidad de cinco nudos.",
        it: "Le pinne dorsali e pettorali sono sviluppate come potenti muscoli. Può raggiungere la velocità di 5 nodi.",
        de: "Seine Rücken- und Brustflossen sind muskelähnlich entwickelt. Es erreicht beim Schwimmen eine Geschwindigkeit von bis zu fünf Knoten.",
        "pt-br": "Suas barbatanas dorsais e peitorais são tão desenvolvidas quanto músculos e Goldeen consegue nadar a velocidades de cinco nós.",
        "zh-tw": "背鰭和尾鰭像肌肉那樣發達。能夠以５節的速度在水中游泳。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Horn Attack",
                fr: "Koud'Korne",
                es: "Cornada",
                it: "Incornata",
                de: "Hornattacke",
                "pt-br": "Ataque de Chifre",
                "zh-tw": "角撞"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
