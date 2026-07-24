import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/012",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/012"
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
    illustrator: "SATOSHI NAKAI",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    dexId: [118],
    stage: "Basic",
    description: {
        en: "Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots.",
        fr: "Ses nageoires dorsales et pectorales sont très\ndéveloppées. Elles lui permettent de nager\nà une vitesse de cinq nœuds.",
        es: "La aleta dorsal y las aletas pectorales están tan\ndesarrolladas que actúan como músculos. Puede\nnadar a una velocidad de cinco nudos.",
        it: "Le pinne dorsali e pettorali sono sviluppate\ncome potenti muscoli. Può raggiungere\nla velocità di 5 nodi.",
        de: "Seine Rücken- und Brustflossen sind muskelähnlich\nentwickelt. Es erreicht beim Schwimmen eine\nGeschwindigkeit von bis zu fünf Knoten.",
        "pt-br": "Suas nadadeiras dorsal e peitoral são fortemente desenvolvidas como músculos. Pode nadar a uma velocidade de cinco nós.",
        "zh-tw": "背鰭和尾鰭像肌肉\n那樣發達。能夠以\n５節的速度在水中游泳。"
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
