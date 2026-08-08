import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/002",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/002",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/002"
    },
    name: {
        en: "Silcoon",
        fr: "Armulys",
        es: "Silcoon",
        it: "Silcoon",
        de: "Schaloko",
        "pt-br": "Silcoon",
        "zh-tw": "甲殼繭",
        ko: "실쿤",
        ja: "カラサリス"
    },
    illustrator: "Satoshi Shirai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [266],
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
        en: "It drinks dew that collects on its silk and waits for evolution. Its hard cocoon repels attacks.",
        fr: "Il boit la rosée récoltée par sa soie en attendant\nd’évoluer. Il est à l’abri dans son robuste cocon.",
        es: "Bebe el rocío que recoge con su seda mientras espera\nevolucionar. Se defiende en su capullo.",
        it: "Beve la rugiada che si posa sulla seta e aspetta\nl’evoluzione. Il suo bozzolo duro respinge gli attacchi.",
        de: "Es trinkt den Tau, der sich in der Seide fängt, und\nwartet auf seine Entwicklung. Sein Kokon schützt es."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Cocoon Collector",
                fr: "Collectionneur de Cocons",
                es: "Colección de Crisálidas",
                "pt-br": "Colecionador de Casulos",
                "zh-tw": "繭聚一堂",
                "it": "Collezionista di Crisalidi",
                "de": "Kokonsammler"
            },
            effect: {
                en: "Put 3 random cards from among Silcoon and Cascoon from your deck onto your Bench.",
                fr: "Placez 3 cartes au hasard parmi Armulys et Blindalys de votre deck sur votre Banc.",
                es: "Pon 3 cartas aleatorias de entre Silcoon y Cascoon de tu baraja en tu Banca.",
                "pt-br": "Coloque 3 cartas aleatórias dentre Silcoon e Cascoon do seu baralho no seu Banco.",
                "zh-tw": "從自己的牌庫隨機將3張「甲殼繭」或「盾甲繭」放置於備戰區。",
                "it": "Prendi 3 Pokémon a caso tra Silcoon e Cascoon dal tuo mazzo e mettili nella tua panchina.",
                "de": "Lege von den Karten Schaloko und Panekon 3 zufällige aus deinem Deck auf deine Bank."
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
