import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/116",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/116",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/116",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/116",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/116",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/116",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/116"
    },
    name: {
        en: "Aromatisse",
        "fr": "Cocotine",
        "es": "Aromatisse",
        "it": "Aromatisse",
        "de": "Parfinesse",
        "pt-br": "Aromatisse",
        "zh-tw": "芳香精",
    },
    illustrator: "kirisAki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Spritzee",
        "fr": "Fluvetin",
        "es": "Spritzee",
        "it": "Spritzee",
        "de": "Parfi",
        "pt-br": "Spritzee",
        "zh-tw": "粉香香",
    },
    description: {
        en: "The scents Aromatisse can produce range from\nsweet smells that bolster allies to foul smells\nthat sap an opponent's will to fight.",
        "fr": "Les senteurs qu'Aromatisse peut produire vont de\ndes odeurs douces qui renforcent les alliés contre les odeurs nauséabondes\nqui sapent la volonté de combat d'un adversaire.",
        "es": "Los aromas que Aromatisse puede producir van desde\nOlores dulces que refuerzan a los aliados de los malos olores.\nque mina la voluntad de luchar del oponente.",
        "it": "I profumi che Aromatisse può produrre spaziano da\nodori dolci che rafforzano gli alleati contro gli odori sgradevoli\nche indeboliscono la volontà di combattere di un avversario.",
        "de": "Die Düfte, die Aromatisse herstellen kann, reichen von\nsüße Gerüche, die Verbündete gegen üble Gerüche stärken\ndas schwächt den Kampfwillen eines Gegners.",
        "pt-br": "Os aromas que Aromatisse pode produzir vão desde\ncheiros doces que reforçam aliados aos cheiros desagradáveis\nque minam a vontade de lutar do oponente.",
        "zh-tw": "Aromatisse 可以產生的香味範圍包括\n甜蜜的氣味可以增強盟友的惡臭\n削弱對手的戰鬥意志。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Confounding Cologne",
                "fr": "Cologne confondante",
                "es": "Colonia confusa",
                "it": "Colonia confusa",
                "de": "Verwirrendes Köln",
                "pt-br": "Confundindo Colônia",
                "zh-tw": "令人困惑的科隆"
            },
            damage: 40,
            cost: ["Psychic"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
