import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/010"
    },
    name: {
        en: "Drifblim",
        fr: "Grodrive",
        es: "Drifblim",
        it: "Drifblim",
        de: "Drifzepeli",
        "pt-br": "Drifblim",
        "zh-tw": "隨風球",
        ko: "둥실라이드",
        ja: "フワライド"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "None",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [426],
    evolveFrom: {
        en: "Drifloon",
        fr: "Baudrive",
        es: "Drifloon",
        it: "Drifloon",
        de: "Driftlon",
        "pt-br": "Drifloon",
        "zh-tw": "飄飄球",
        ko: "흔들풍손",
        ja: "フワンテ"
    },
    stage: "Stage1",
    description: {
        en: "They carry people and Pokémon, but the wind can catch them, so there can’t be a fixed destination.",
        fr: "Ils transportent des personnes et des Pokémon, mais le vent peut les attraper, il ne peut donc pas y avoir de destination fixe.",
        es: "Llevan personas y Pokémon, pero el viento puede atraparlos, por lo que no puede haber un destino fijo.",
        it: "Trasportano persone e Pokémon, ma il vento può trasportarli, quindi non può esserci una destinazione fissa.",
        de: "Sie transportieren Menschen und Pokémon, aber der Wind kann sie einfangen, sodass es kein festes Ziel geben kann.",
        "pt-br": "Eles carregam pessoas e Pokémon, mas o vento pode apanhá-los, por isso não pode haver um destino fixo.",
        "zh-tw": "它們載著人和寶可夢，但風會抓住它們，所以不可能有固定的目的地。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Balloon Barrage",
                fr: "Barrage de Ballons",
                es: "Bombardeo de Globos",
                it: "Pioggiapalloni",
                de: "Ballonbeschuss",
                "pt-br": "Barricada de Balões",
                "zh-tw": "氣球爆擊"
            },
            effect: {
                en: "This attack does 20 more damage for each Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata a questo Pokémon.",
                de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Energie zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a este Pokémon.",
                "zh-tw": "該寶可夢身上每附加一個能量，該攻擊就會造成 20 點額外傷害。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: []
};

export default card;
