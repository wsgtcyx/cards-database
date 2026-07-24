import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/074",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/074"
    },
    name: {
        en: "Tinkaton",
        fr: "Forgelina",
        es: "Tinkaton",
        it: "Tinkaton",
        de: "Granforgita",
        "pt-br": "Tinkaton",
        "zh-tw": "巨鍛匠",
        pt: "Tinkaton"
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "Three Diamond",
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
        'pt-br': "Tinkatuff",
        "zh-tw": "巧鍛匠",
        ko: "벼리짱"
    },
    description: {
        en: "The hammer tops 220 pounds, yet it gets swung around easily by Tinkaton as it steals whatever it pleases and carries its plunder back home.",
        "fr": "Le marteau pèse 220 livres, mais Forgelina le fait pivoter facilement alors qu'il vole tout ce qu'il veut et ramène son butin chez lui.",
        "es": "El martillo pesa más de 220 libras, pero Tinkaton lo mueve fácilmente mientras roba lo que quiere y lleva su botín a casa.",
        "it": "Il martello pesa più di 220 libbre, ma Tinkaton lo fa girare facilmente mentre ruba tutto ciò che vuole e trasporta il suo bottino a casa.",
        "de": "Der Hammer wiegt mehr als 220 Pfund, lässt sich aber leicht von Granforgita hin und her schwingen, indem er alles stiehlt, was er will, und die Beute nach Hause trägt.",
        "pt-br": "O martelo chega a pesar 220 libras, mas é facilmente usado por Tinkaton enquanto rouba tudo o que deseja e leva seu saque de volta para casa.",
        "zh-tw": "這把錘子重達 220 磅，但它很容易被 巨鍛匠 揮舞，因為它可以偷走任何牠喜歡的東西，並將其戰利品帶回家。"
    },
    stage: "Stage2",
    attacks: [
        {
            name: {
                en: "Gigaton Hammer",
                fr: "Marteau Mastoc",
                es: "Martillo Colosal",
                it: "Martello Colossale",
                de: "Gigaton-Hammer",
                "pt-br": "Martelo Gigaton",
                "zh-tw": "十億噸錘",
                'es-mx': "Martillo Colosal",
                pt: "Martelo Colossal"
            },
            damage: "140",
            cost: ["Metal", "Metal", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't use Gigaton Hammer.",
                fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Marteau Mastoc.",
                es: "Durante tu próximo turno, este Pokémon no puede usar Martillo Colosal.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può usare Martello Colossale.",
                de: "Während deines nächsten Zuges kann dieses Pokémon Gigaton-Hammer nicht einsetzen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá usar Martelo Gigaton.",
                "zh-tw": "在你的下一個回合中，這隻寶可夢無法使用十億噸錘。",
                'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Martillo Colosal.",
                pt: "Durante o seu próximo turno, este Pokémon não poderá usar Martelo Colossal."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
