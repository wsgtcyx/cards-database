import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Melmetal ex",
        "fr": "Melmétal ex",
        "es": "Melmetal ex",
        "it": "Melmetal es",
        "de": "Melmetal ex",
        "pt-br": "Melmetal ex",
        "zh-tw": "美錄梅塔 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Metal"],
    evolveFrom: {
        en: "Meltan",
        "fr": "Meltan",
        "es": "Meltán",
        "it": "Meltano",
        "de": "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美爾坦"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 80,
            cost: ["Metal", "Metal", "Colorless"]
        }, {
            name: {
                en: "Metal Arms",
                "fr": "Bras en métal",
                "es": "Brazos Metálicos",
                "it": "Bracci in metallo",
                "de": "Metallarme",
                "pt-br": "Braços Metálicos",
                "zh-tw": "金屬武器"
            },
            damage: 100,
            cost: ["Metal", "Metal", "Metal", "Colorless"],
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
                "fr": "Si ce Pokémon est attaché à un Outil Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene una Herramienta Pokémon adjunta, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 50 danni in più.",
                "de": "Wenn an dieses Pokémon ein Pokémon-Werkzeug angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon anexada, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果該神奇寶貝附加了神奇寶貝工具，則此攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
