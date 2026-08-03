import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/094",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/094",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/094",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/094",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/094",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/094"
    },
    name: {
        en: "Coalossal",
        fr: "Monthracite",
        es: "Coalossal",
        it: "Coalossal",
        de: "Montecarbo",
        "pt-br": "Coalossal",
        "zh-tw": "巨炭山",
        ko: "석탄산",
        ja: "セキタンザン"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    dexId: [839],
    evolveFrom: {
        en: "Carkol",
        fr: "Wagomine",
        es: "Carkol",
        it: "Carkol",
        de: "Wagong",
        "pt-br": "Carkol",
        "zh-tw": "大炭車",
        ko: "탄차곤",
        ja: "トロッゴン"
    },
    stage: "Stage2",
    description: {
        en: "To intimidate its opponents, Coalossal will vigorously shake its body, scattering coal from its smoldering back.",
        fr: "Pour intimider ses adversaires, Monthracite secouera vigoureusement son corps, dispersant du charbon de son dos fumant.",
        es: "Para intimidar a sus oponentes, Coalossal sacudirá vigorosamente su cuerpo, esparciendo carbón de su espalda humeante.",
        it: "Per intimidire i suoi avversari, Coalossal scuoterà vigorosamente il suo corpo, spargendo carbone dalla sua schiena fumante.",
        de: "Um seine Gegner einzuschüchtern, schüttelt Montecarbo kräftig seinen Körper und verstreut dabei Kohle von seinem glimmenden Rücken.",
        "pt-br": "Para intimidar seus oponentes, Coalossal sacudirá vigorosamente seu corpo, espalhando carvão de suas costas fumegantes.",
        "zh-tw": "為了恐嚇對手，巨炭山會劇烈晃動身體，將悶燒的背部散落煤炭。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Mountain Crush",
                fr: "Casse-Montagnes",
                es: "Machaque Montaña",
                it: "Sgretolamonti",
                de: "Bergbruch",
                "pt-br": "Pulverização Montanhosa",
                "zh-tw": "山岳粉碎"
            },
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez la carte du dessus du deck de votre adversaire.",
                es: "Lanza una moneda hasta que obtengas cruz. Por cada cara, descarta la carta superior del mazo de tu oponente.",
                it: "Lancia una moneta finché non esce croce. Per ogni testa, scarta la prima carta del mazzo del tuo avversario.",
                de: "Wirf eine Münze, bis du „Zahl“ erhältst. Lege für jede „Kopf“-Karte die oberste Karte des Decks deines Gegners ab.",
                "pt-br": "Jogue uma moeda até obter coroa. Para cada cara, descarte a carta do topo do baralho do seu oponente.",
                "zh-tw": "拋一枚硬幣，直到出現反面。對於每個正面，丟棄對手牌組頂牌。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
