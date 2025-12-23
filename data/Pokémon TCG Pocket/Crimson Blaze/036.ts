import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Aromatisse",
        "fr": "Cocotine",
        "es": "Aromatisse",
        "it": "Aromatisse",
        "de": "Parfinesse",
        "pt-br": "Aromatisse",
        "zh-tw": "芳香精"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Spritzee",
        "fr": "Fluvetine",
        "es": "Spritzee",
        "it": "Spritzee",
        "de": "Parfi",
        "pt-br": "Spritzee",
        "zh-tw": "粉香香"
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
                en: "Perfume Blast",
                "fr": "Explosion de parfum",
                "es": "Explosión de perfume",
                "it": "Esplosione di profumo",
                "de": "Parfüm-Explosion",
                "pt-br": "Explosão de perfume",
                "zh-tw": "香水爆炸"
            },
            damage: 60,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more.",
                "fr": "Lors du prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent 1 {C} de plus.",
                "es": "Durante el próximo turno de tu rival, los ataques utilizados por el Pokémon Defensor cuestan 1 {C} más.",
                "it": "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore costano 1 {C} in più.",
                "de": "Während des nächsten Zuges deines Gegners kosten Angriffe des verteidigenden Pokémon 1 {C} mehr.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados ​​pelo Pokémon Defensor custarão 1 {C} a mais.",
                "zh-tw": "在對手的下一個回合中，防御神奇寶貝使用的攻擊額外花費 1 {C} 點。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
