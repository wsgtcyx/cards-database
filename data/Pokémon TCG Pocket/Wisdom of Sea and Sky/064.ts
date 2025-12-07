import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Chinchou",
        "fr": "Chinchou",
        "es": "Chinchú",
        "it": "Chinchou",
        "de": "Chinchou",
        "pt-br": "Chinchou",
        "zh-tw": "燈籠魚",
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "Its antennae, which evolved from a fin, have both\npositive and negative charges flowing through them.",
        "fr": "Ses antennes, issues d'une nageoire, possèdent à la fois\ndes charges positives et négatives les traversent.",
        "es": "Sus antenas, que evolucionaron a partir de una aleta, tienen ambas\ncargas positivas y negativas que fluyen a través de ellos.",
        "it": "Le sue antenne, evolutesi da una pinna, hanno entrambe le cose\ncariche positive e negative che li attraversano.",
        "de": "Seine Fühler, die sich aus einer Flosse entwickelt haben, haben beides\nDurch sie fließen positive und negative Ladungen.",
        "pt-br": "Suas antenas, que evoluíram a partir de uma nadadeira, possuem tanto\ncargas positivas e negativas fluindo através deles.",
        "zh-tw": "它的觸角由鰭演化而來，具有\n正電荷和負電荷流過它們。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Lightning Ball",
                "fr": "Boule de foudre",
                "es": "Bola de relámpago",
                "it": "Palla fulminea",
                "de": "Blitzball",
                "pt-br": "Bola Relâmpago",
                "zh-tw": "閃電球"
            },
            damage: 10,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
