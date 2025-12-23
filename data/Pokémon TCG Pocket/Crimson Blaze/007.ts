import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Sunkern",
        "fr": "Tournegrin",
        "es": "Sunkern",
        "it": "Sunkern",
        "de": "Sonnkern",
        "pt-br": "Sunkern",
        "zh-tw": "向日種子"
    },
    illustrator: "Saboteri",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "It is very weak. Its only means of defense is to\nshake its leaves desperately at its attacker.",
        "fr": "C'est très faible. Son seul moyen de défense est de\nsecoue désespérément ses feuilles contre son attaquant.",
        "es": "Es muy débil. Su único medio de defensa es\nAgite sus hojas desesperadamente hacia su atacante.",
        "it": "È molto debole. Il suo unico mezzo di difesa è\nagita disperatamente le foglie contro il suo aggressore.",
        "de": "Es ist sehr schwach. Seine einzige Verteidigungsmöglichkeit besteht darin\nschüttelt verzweifelt seine Blätter gegen seinen Angreifer.",
        "pt-br": "É muito fraco. Seu único meio de defesa é\nagite suas folhas desesperadamente para seu atacante.",
        "zh-tw": "它非常弱。它唯一的防御手段是\n向攻擊者拼命搖動葉子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Seed Bomb",
                "fr": "Bombe à graines",
                "es": "Bomba de semillas",
                "it": "Bomba di semi",
                "de": "Samenbombe",
                "pt-br": "Bomba de sementes",
                "zh-tw": "種子炸彈"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
