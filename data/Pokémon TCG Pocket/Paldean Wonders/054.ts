import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/054",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/054"
    },
    name: {
        en: "Gimmighoul",
        fr: "Mordudor",
        es: "Gimmighoul",
        it: "Gimmighoul",
        de: "Gierspenst",
        "pt-br": "Gimmighoul",
        "zh-tw": "索財靈",
        pt: "Gimmighoul",
        'es-mx': "Gimmighoul"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [999],
    description: {
        en: "It lives inside an old treasure chest. Sometimes it gets left in shop corners since no one realizes it’s actually a Pokémon.",
        "fr": "Il vit dans un vieux coffre au trésor. Parfois, il est laissé dans les coins des magasins car personne ne se rend compte qu’il s’agit en réalité d’un Pokémon.",
        "es": "Vive dentro de un viejo cofre del tesoro. A veces lo dejan en las esquinas de las tiendas porque nadie se da cuenta de que en realidad es un Pokémon.",
        "it": "Vive all'interno di un vecchio scrigno del tesoro. A volte viene lasciato negli angoli dei negozi perché nessuno si rende conto che in realtà è un Pokémon.",
        "de": "Es lebt in einer alten Schatztruhe. Manchmal bleibt es in der Ecke eines Ladens liegen, weil niemand merkt, dass es sich tatsächlich um ein Pokémon handelt.",
        "pt-br": "Ele vive dentro de um antigo baú de tesouro. Às vezes, ele fica nas esquinas das lojas porque ninguém percebe que é realmente um Pokémon.",
        "zh-tw": "它住在一個古老的寶箱裡。有時它會被留在商店角落，因為沒有人意識到它實際上是一隻寶可夢。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Continuous Coin Toss",
                fr: "Lancer de Pièce Continu",
                es: "Lanzamiento Incesante de Monedas",
                it: "Lanciomoneta Continuo",
                de: "Dauermünzwurf",
                "pt-br": "Lançamento Contínuo de Moedas",
                "zh-tw": "連續拋硬幣",
                pt: "Jogadas de Moeda Contínuas"
            },
            damage: "20×",
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
                fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 20 點傷害。",
                pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara."
            },
        },
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
