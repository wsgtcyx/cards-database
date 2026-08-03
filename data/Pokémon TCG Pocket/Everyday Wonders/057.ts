import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/057",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/057"
    },
    name: {
        en: "Ursaring",
        fr: "Ursaring",
        es: "Ursaring",
        it: "Ursaring",
        de: "Ursaring",
        "pt-br": "Ursaring",
        "zh-tw": "圈圈熊",
        ko: "링곰",
        ja: "リングマ"
    },
    illustrator: "Hiroki Asanuma",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    dexId: [217],
    evolveFrom: {
        en: "Teddiursa",
        fr: "Teddiursa",
        es: "Teddiursa",
        it: "Teddiursa",
        de: "Teddiursa",
        "pt-br": "Teddiursa",
        "zh-tw": "熊寶寶",
        ko: "깜지곰",
        ja: "ヒメグマ"
    },
    stage: "Stage1",
    description: {
        en: "It is quite skilled at climbing trees. If it comes across a Primeape while searching for berries in the treetops, trouble will surely ensue.",
        fr: "Il est très doué pour grimper aux arbres. S'il rencontre un Colossinge en cherchant des baies dans la cime des arbres, des problèmes s'ensuivront sûrement.",
        es: "Es bastante hábil trepando a los árboles. Si se encuentra con un Primeape mientras busca bayas en las copas de los árboles, seguramente surgirán problemas.",
        it: "È abbastanza abile nell'arrampicarsi sugli alberi. Se incontra uno Primeape mentre cerca bacche tra le cime degli alberi, sicuramente arriveranno dei guai.",
        de: "Es ist ziemlich geschickt darin, auf Bäume zu klettern. Wenn es bei der Suche nach Beeren in den Baumwipfeln auf einen Rasaff stößt, wird es sicherlich Ärger geben.",
        "pt-br": "É bastante habilidoso em subir em árvores. Se ele encontrar um Primeape enquanto procura frutas nas copas das árvores, certamente surgirão problemas.",
        "zh-tw": "它爬樹的技術相當熟練。如果它在樹頂尋找漿果時遇到了火爆猴，麻煩肯定會接踵而至。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Confront",
                fr: "Affronter",
                es: "Confrontar",
                it: "Confrontarsi",
                de: "Konfrontieren",
                "pt-br": "Enfrentar",
                "zh-tw": "正面對決"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
