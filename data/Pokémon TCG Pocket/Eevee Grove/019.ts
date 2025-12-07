import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Vanillish",
        "fr": "Vanillé",
        "es": "vainilla",
        "it": "Vanillish",
        "de": "Vanillin",
        "pt-br": "Vanilizado",
        "zh-tw": "多多冰",
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Vanillite",
        "fr": "Vanillite",
        "es": "vainillita",
        "it": "Vanillite",
        "de": "Vanillit",
        "pt-br": "Vanilita",
        "zh-tw": "香蘭石"
    },
    description: {
        en: "By drinking pure water, it grows its icy body.\nThis Pokémon can be hard to find on days with\nwarm, sunny weather.",
        "fr": "En buvant de l’eau pure, il développe son corps glacé.\nCe Pokémon peut être difficile à trouver les jours où\ntemps chaud et ensoleillé.",
        "es": "Al beber agua pura, su cuerpo helado crece.\nEste Pokémon puede ser difícil de encontrar en días con\nclima cálido y soleado.",
        "it": "Bevendo acqua pura, fa crescere il suo corpo ghiacciato.\nQuesto Pokémon può essere difficile da trovare nei giorni in cui è presente\nclima caldo e soleggiato.",
        "de": "Durch das Trinken von reinem Wasser wächst sein eisiger Körper.\nAn manchen Tagen kann es schwierig sein, dieses Pokémon zu finden\nwarmes, sonniges Wetter.",
        "pt-br": "Ao beber água pura, seu corpo gelado cresce.\nEste Pokémon pode ser difícil de encontrar em dias com\nclima quente e ensolarado.",
        "zh-tw": "通過飲用純淨水，它會長出冰冷的身體。\n在有的日子裡很難找到這個神奇寶貝\n天氣溫暖、陽光明媚。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sweets Relay",
                "fr": "Relais des Bonbons",
                "es": "Relevo de dulces",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽"
            },
            damage: 30,
            cost: ["Water"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 20 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 20 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 20 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 20 danos a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 20 點。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
