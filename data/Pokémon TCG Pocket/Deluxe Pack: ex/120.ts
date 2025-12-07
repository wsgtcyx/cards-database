import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Primarina ex",
        "fr": "Primarina ex",
        "es": "primarina ex",
        "it": "Primarina es",
        "de": "Primarina ex",
        "pt-br": "Primarina ex",
        "zh-tw": "初級超級"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Water"],
    evolveFrom: {
        en: "Brionne",
        "fr": "Brionne",
        "es": "brionne",
        "it": "Brionne",
        "de": "Brionne",
        "pt-br": "Brionne",
        "zh-tw": "布里奧訥"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Hydro Pump",
                "fr": "Pompe hydraulique",
                "es": "Bomba hidráulica",
                "it": "Pompa idroelettrica",
                "de": "Hydropumpe",
                "pt-br": "Bomba Hidro",
                "zh-tw": "液壓泵"
            },
            damage: 40,
            cost: ["Water"],
            effect: {
                en: "If this Pokémon has at least 1 extra {W} Energy attached, this attack does 40 more damage.",
                "fr": "Si ce Pokémon a au moins 1 Énergie {W} supplémentaire attachée, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene al menos 1 Energía {W} adicional unida, este ataque hace 40 daños más.",
                "it": "Se questo Pokémon ha almeno 1 Energia {W} extra assegnata, questo attacco infligge 40 danni in più.",
                "de": "Wenn an dieses Pokémon mindestens 1 zusätzliche {W}-Energie angelegt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 1 energia {W} extra anexada, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "如果這只神奇寶貝附加了至少 1 個額外的 {W} 能量，則此攻擊造成的傷害增加 40 點。"
            }
        }, {
            name: {
                en: "Sparkling Aria",
                "fr": "Air pétillant",
                "es": "Aria chispeante",
                "it": "Aria frizzante",
                "de": "Funkelnde Arie",
                "pt-br": "Ária Espumante",
                "zh-tw": "閃閃發光的詠嘆調"
            },
            damage: 100,
            cost: ["Water", "Water", "Water"],
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                "fr": "Soignez 20 dégâts de ce Pokémon.",
                "es": "Cura 20 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 20 danni.",
                "de": "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
