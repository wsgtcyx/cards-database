import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/004",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/004"
    },
    name: {
        en: "Cascoon",
        fr: "Blindalys",
        es: "Cascoon",
        it: "Cascoon",
        de: "Panekon",
        "pt-br": "Cascoon",
        "zh-tw": "盾甲繭",
        ko: "카스쿤",
        ja: "マユルド"
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [268],
    evolveFrom: {
        en: "Wurmple",
        fr: "Chenipotte",
        es: "Wurmple",
        it: "Wurmple",
        de: "Waumpel",
        "pt-br": "Wurmple",
        "zh-tw": "刺尾蟲",
        ko: "개무소",
        ja: "ケムッソ"
    },
    stage: "Stage1",
    description: {
        en: "It never forgets any attack it endured while in the cocoon. After evolution, it seeks payback.",
        fr: "Rancunier, il n’oublie aucune des attaques subies\ndans le cocon et se venge une fois qu’il a évolué.",
        es: "Jamás olvida a quienes lo atacaron mientras estaba\nen su capullo. Cuando evoluciona, busca venganza.",
        it: "Non dimentica mai gli attacchi subiti dentro il bozzolo.\nDopo l’evoluzione cerca di vendicarsi.",
        de: "Es vergisst keinen Angriff, den es im Kokon erdulden\nmusste. Nach der Entwicklung sinnt es auf Rache."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Cocoon Collector",
                fr: "Collectionneur de Cocons",
                es: "Colección de Crisálidas",
                "pt-br": "Colecionador de Casulos",
                "zh-tw": "繭聚一堂"
            },
            effect: {
                en: "Put 3 random cards from among Silcoon and Cascoon from your deck onto your Bench.",
                fr: "Placez 3 cartes au hasard parmi Armulys et Blindalys de votre deck sur votre Banc.",
                es: "Pon 3 cartas aleatorias de entre Silcoon y Cascoon de tu baraja en tu Banca.",
                "pt-br": "Coloque 3 cartas aleatórias dentre Silcoon e Cascoon do seu baralho no seu Banco.",
                "zh-tw": "從自己的牌庫隨機將3張「甲殼繭」或「盾甲繭」放置於備戰區。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
