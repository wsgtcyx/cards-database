import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/038",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/038"
    },
    name: {
        en: "Tinkaton",
        fr: "Forgelina",
        es: "Tinkaton",
        it: "Tinkaton",
        de: "Granforgita",
        "pt-br": "Tinkaton",
        "zh-tw": "巨鍛匠",
        ko: "두드리짱",
        ja: "デカヌチャン"
    },
    illustrator: "DOM",
    rarity: "None",
    category: "Pokemon",
    hp: 150,
    types: ["Metal"],
    dexId: [959],
    evolveFrom: {
        en: "Tinkatuff",
        fr: "Forgella",
        es: "Tinkatuff",
        it: "Tinkatuff",
        de: "Tafforgita",
        "pt-br": "Tinkatuff",
        "zh-tw": "巧鍛匠",
        ko: "벼리짱",
        ja: "ナカヌチャン"
    },
    stage: "Stage2",
    description: {
        en: "The hammer tops 220 pounds, yet it gets swung around easily by Tinkaton as it steals whatever it pleases and carries its plunder back home.",
        fr: "Le marteau pèse 220 livres, mais Forgelina le fait pivoter facilement alors qu'il vole tout ce qu'il veut et ramène son butin chez lui.",
        es: "El martillo pesa más de 220 libras, pero Tinkaton lo mueve fácilmente mientras roba lo que quiere y lleva su botín a casa.",
        it: "Il martello pesa più di 220 libbre, ma Tinkaton lo fa girare facilmente mentre ruba tutto ciò che vuole e trasporta il suo bottino a casa.",
        de: "Der Hammer wiegt mehr als 220 Pfund, lässt sich aber leicht von Granforgita hin und her schwingen, indem er alles stiehlt, was er will, und die Beute nach Hause trägt.",
        "pt-br": "O martelo chega a pesar 220 libras, mas é facilmente usado por Tinkaton enquanto rouba tudo o que deseja e leva seu saque de volta para casa.",
        "zh-tw": "這把錘子重達 220 磅，但它很容易被 巨鍛匠 揮舞，因為它可以偷走任何牠喜歡的東西，並將其戰利品帶回家。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless"],
            name: {
                en: "Gigaton Hammer",
                fr: "Marteau Mastoc",
                es: "Martillo Colosal",
                it: "Granmartello",
                de: "Riesenhammer",
                "pt-br": "Martelo Gigatônico",
                "zh-tw": "巨力錘"
            },
            effect: {
                en: "During your next turn, this Pokémon can't use Gigaton Hammer.",
                fr: "Lors de votre prochain tour, ce Pokémon ne pourra pas utiliser Gigaton Hammer.",
                es: "Durante tu próximo turno, este Pokémon no puede usar Gigaton Hammer.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gigatonmartello.",
                de: "Während deines nächsten Zuges kann dieses Pokémon Gigaton Hammer nicht verwenden.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Martelo Gigaton.",
                "zh-tw": "在你的下一個回合中，這隻寶可夢無法使用十億噸錘。"
            },
            damage: 140
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol5"]
};

export default card;
