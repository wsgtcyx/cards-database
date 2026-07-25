import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/003",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/003",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/003"
    },
    name: {
        en: "Froakie",
        fr: "Grenousse",
        es: "Froakie",
        it: "Froakie",
        de: "Froxy",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
        ko: "개구마르",
        ja: "ケロマツ"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [656],
    stage: "Basic",
    description: {
        en: "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
        fr: "Il protège son corps en l’entourant d’une mousse délicate.\nMalgré son apparence insouciante, ce Pokémon est en fait\nconstamment à l’affût.",
        es: "Protege su piel cubriendo el cuerpo con una fina capa de\nburbujas. Aunque parezca despreocupado, no deja de vigilar\ncon astucia lo que le rodea.",
        it: "Si protegge avvolgendo il corpo in una schiuma delicata.\nNonostante l’aria spensierata, scruta sempre l’ambiente\ncircostante con molta attenzione.",
        de: "Es schützt seine Haut mit feinen Blasen, die seinen\nKörper umhüllen. Es mag unbekümmert aussehen,\nbehält die Umgebung aber immer aufmerksam im Auge.",
        "pt-br": "Protege a pele cobrindo o corpo com delicadas bolhas. Sob seu ar despreocupado, ele mantém um olhar atento ao seu entorno.",
        "zh-tw": "它透過用細膩的氣泡覆蓋身體來保護皮膚。在它無憂無慮的外表下，它時時刻刻警戒著周圍的環境。"
    },
    attacks: [
        {
            cost: ["Water", "Water"],
            name: {
                en: "Bubble",
                fr: "Écume",
                es: "Burbuja",
                it: "Bolla",
                de: "Blubber",
                "pt-br": "Bolha",
                "zh-tw": "泡沫"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol1"]
};

export default card;
