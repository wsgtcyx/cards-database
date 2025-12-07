import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Slurpuff",
        "fr": "Slurpuff",
        "es": "sorbete",
        "it": "Slurpuff",
        "de": "Slurpuff",
        "pt-br": "Slurpuff",
        "zh-tw": "胖甜妮",
    },
    illustrator: "Kyoko Umemoto",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    evolveFrom: {
        en: "Swirlix",
        "fr": "Tourbillon",
        "es": "remolino",
        "it": "Swirlix",
        "de": "Swirlix",
        "pt-br": "Redemoinho",
        "zh-tw": "綿綿泡芙",
    },
    description: {
        en: "By taking in a person's scent, it can sniff out their\nmental and physical condition. It's hoped that\nthis skill will have many medical applications.",
        "fr": "En captant l'odeur d'une personne, il peut renifler son\nétat mental et physique. On espère que\ncette compétence aura de nombreuses applications médicales.",
        "es": "Al absorber el olor de una persona, puede detectar su\ncondición física y mental. Se espera que\nEsta habilidad tendrá muchas aplicaciones médicas.",
        "it": "Assorbendo l'odore di una persona, può fiutarne l'odore\ncondizione mentale e fisica. Lo si spera\nquesta abilità avrà molte applicazioni mediche.",
        "de": "Indem es den Geruch einer Person aufnimmt, kann es sie erschnüffeln\ngeistige und körperliche Verfassung. Das ist zu hoffen\nDiese Fähigkeit wird viele medizinische Anwendungen haben.",
        "pt-br": "Ao absorver o cheiro de uma pessoa, ele pode farejar seu\ncondição mental e física. Espera-se que\nessa habilidade terá muitas aplicações médicas.",
        "zh-tw": "通過吸收人的氣味，它可以嗅出他們的氣味\n精神和身體狀況。希望\n這項技能將有許多醫學應用。"
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
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 60 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 60 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 60 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 3
};
export default card;
