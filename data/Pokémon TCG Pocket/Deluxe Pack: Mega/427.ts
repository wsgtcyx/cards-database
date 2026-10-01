import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/427",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/427",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/427",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/427",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/427",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/427",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/427"
    },
    name: {
        en: "Mega Diancie ex",
        fr: "Méga-Diancie-ex",
        es: "Mega-Diancie ex",
        it: "Mega Diancie-ex",
        de: "Mega-Diancie-ex",
        "pt-br": "Mega Diancie ex",
        "zh-tw": "超級蒂安希ex",
        ja: "メガディアンシーex",
        ko: "메가디안시 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 170,
    types: [
        "Psychic"
    ],
    dexId: [
        719
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Brilliant Storm",
                fr: "Tempête Éclatante",
                es: "Tormenta Brillante",
                it: "Tempesta Brillante",
                de: "Strahlender Sturm",
                "pt-br": "Tempestade Brilhante",
                "zh-tw": "晶燦風暴",
                ja: "Brilliant Storm",
                ko: "Brilliant Storm"
            },
            effect: {
                en: "This attack does 20 more damage for each {P} Energy attached to all of your Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {P} attachée à tous vos Pokémon.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía {P} unida a todos tus Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia {P} assegnata ai tuoi Pokémon.",
                de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte {P}-Energie 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia {P} ligada a todos os seus Pokémon.",
                "zh-tw": "增加自己的所有寶可夢身上的{P}能量的數量×20點傷害。",
                ja: "This attack does 20 more damage for each {P} Energy attached to all of your Pokémon.",
                ko: "This attack does 20 more damage for each {P} Energy attached to all of your Pokémon."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
