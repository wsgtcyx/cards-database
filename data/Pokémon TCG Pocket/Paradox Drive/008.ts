import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/008",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/008",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/008"
    },
    name: {
        en: "Vaporeon",
        fr: "Aquali",
        es: "Vaporeon",
        it: "Vaporeon",
        de: "Aquana",
        "pt-br": "Vaporeon",
        "zh-tw": "水伊布",
        ko: "샤미드",
        ja: "シャワーズ"
    },
    illustrator: "kirisAki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    dexId: [134],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    description: {
        en: "Its cell composition is similar to water molecules. As a result, it can’t be seen when it melts away into water.",
        fr: "Sa composition cellulaire est similaire aux molécules d’eau. En conséquence, on ne peut pas le voir lorsqu’il fond dans l’eau.",
        es: "Su composición celular es similar a las moléculas de agua. Como resultado, no se puede ver cuando se derrite en agua.",
        it: "La sua composizione cellulare è simile alle molecole d'acqua. Di conseguenza, non può essere visto quando si scioglie nell’acqua.",
        de: "Seine Zellzusammensetzung ähnelt der von Wassermolekülen. Daher ist es nicht sichtbar, wenn es in Wasser schmilzt.",
        "pt-br": "Sua composição celular é semelhante às moléculas de água. Como resultado, não pode ser visto quando derrete na água.",
        "zh-tw": "其細胞組成與水分子相似。因此，當它融化成水時就看不見了。"
    },
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Impound",
                fr: "Mettre en fourrière",
                es: "Confiscar",
                it: "Sequestrare",
                de: "Beschlagnahmen",
                "pt-br": "Apreender",
                "zh-tw": "圍困"
            },
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                fr: "Lors du prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                de: "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
