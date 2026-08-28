import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/017",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/017"
    },
    name: {
        en: "Hisuian Basculin",
        fr: "Bargantua de Hisui",
        es: "Basculin de Hisui",
        it: "Basculin di Hisui",
        de: "Hisui- Barschuft",
        "pt-br": "Basculin de Hisui",
        "zh-tw": "洗翠的野蠻鱸魚",
        ko: "히스이 배쓰나이",
        ja: "ヒスイバスラオ"
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [550],
    stage: "Basic",
    description: {
        en: "Its ecology is starkly different from that of other Basculin, so theories that it's a totally different species have gained traction in recent years.",
        fr: "Son mode de vie diffère tant de celui des autres Bargantua qu'on pense de plus en plus qu'il appartient à une autre espèce.",
        es: "En los últimos años han ganado peso las teorias que arguyen que se trata de una especie distinta a Basculin porque presentan biologías diferentes.",
        it: "Date le marcate differenze di abitudini rispetto agli altri Basculin, negli ultimi anni ha preso piede la teoria che si tratti di specie distinte.",
        de: "Wegen ihrer anderen Lebensweise fand jüngst die These Zuspruch, dass es sich hierbei um eine völlig andere Pokémon-Art als Barschuft handele.",
        "pt-br": "Sua ecologia é nitidamente diferente das de outros Basculin, por isso as teorias de que é uma espécie totalmente distinta ganharam força nos últimos anos.",
        "zh-tw": "由於與野蠻鱸魚的生態相差甚鉅，故將兩者視為不同種類的說法在近年被認為最為有力。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
