import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/080"
    },
    name: {
        en: "Hariyama",
        fr: "Hariyama",
        es: "Hariyama",
        it: "Hariyama",
        de: "Hariyama",
        "pt-br": "Hariyama",
        "zh-tw": "鐵掌力士",
        ko: "하리뭉",
        ja: "ハリテヤマ"
    },
    illustrator: "Hisao Nakamura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [297],
    evolveFrom: {
        en: "Makuhita",
        fr: "Makuhita",
        es: "Makuhita",
        it: "Makuhita",
        de: "Makuhita",
        "pt-br": "Makuhita",
        "zh-tw": "幕下力士",
        ko: "마크탕",
        ja: "マクノシタ"
    },
    stage: "Stage1",
    description: {
        en: "It stomps on the ground to build power. It can send a 10-ton truck flying with a straight-arm punch.",
        fr: "Il piétine le sol violemment pour concentrer son\nénergie. Il peut envoyer en l’air un camion de 10 t\nd’un seul coup de poing.",
        es: "Para aumentar su fuerza, da un pisotón en el suelo.\nPuede lanzar un camión de 10 toneladas por los aires\nde un puñetazo.",
        it: "Pesta i piedi sul terreno per accumulare energia.\nCon uno dei suoi schiaffi può far prendere il volo\na un camion di 10 t.",
        de: "Es stampft auf den Boden, um Energie zu\ngenerieren. Ein einziger Armschlag reicht aus, um\neinen 10 t schweren LKW durch die Luft zu wirbeln."
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Pivot Throw"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes +50 damage from attacks."
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
