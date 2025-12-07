import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Drifblim",
        "fr": "Dérive",
        "es": "Drifblim",
        "it": "Drifblim",
        "de": "Driftblim",
        "pt-br": "Drifblim",
        "zh-tw": "附和氣球",
    },
    illustrator: "Yumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Drifloon",
        "fr": "Brise-glace",
        "es": "Driflón",
        "it": "Drifloon",
        "de": "Driftloon",
        "pt-br": "Drifloon",
        "zh-tw": "飛龍"
    },
    description: {
        en: "They carry people and Pokémon, but the\nwind can catch them, so there can't be a\nfixed destination.",
        "fr": "Ils transportent des personnes et des Pokémon, mais le\nle vent peut les attraper, donc il ne peut y avoir de\ndestination fixe.",
        "es": "Llevan personas y Pokémon, pero el\nel viento puede atraparlos, por lo que no puede haber\ndestino fijo.",
        "it": "Trasportano persone e Pokémon, ma il\nil vento può catturarli, quindi non può esserci a\ndestinazione fissa.",
        "de": "Sie tragen Menschen und Pokémon, aber die\nDer Wind kann sie einfangen, also kann es keinen geben\nfestes Ziel.",
        "pt-br": "Eles carregam pessoas e Pokémon, mas o\no vento pode pegá-los, então não pode haver\ndestino fixo.",
        "zh-tw": "它們載著人和神奇寶貝，但是\n風可以抓住它們，所以不可能有\n固定目的地。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Balloon Barrage",
                "fr": "Barrage de ballons",
                "es": "Aluvión de globos",
                "it": "Sbarramento di palloncini",
                "de": "Ballonfeuer",
                "pt-br": "Barragem de Balões",
                "zh-tw": "氣球彈幕"
            },
            damage: 20,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each Energy attached to this Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon.",
                "es": "Este ataque hace 20 puntos de daño más por cada Energía unida a este Pokémon.",
                "it": "Questo attacco infligge 20 danni in più per ogni Energia assegnata a questo Pokémon.",
                "de": "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Energie zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a este Pokémon.",
                "zh-tw": "該寶可夢身上每附加一個能量，該攻擊就會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
