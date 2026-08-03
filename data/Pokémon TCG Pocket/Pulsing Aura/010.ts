import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/010",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/010"
    },
    name: {
        en: "Masquerain",
        fr: "Maskadra",
        es: "Masquerain",
        it: "Masquerain",
        de: "Maskeregen",
        "pt-br": "Masquerain",
        "zh-tw": "雨翅蛾",
        ko: "비나방",
        ja: "アメモース"
    },
    illustrator: "miki kudo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [284],
    evolveFrom: {
        en: "Surskit",
        fr: "Arakdo",
        es: "Surskit",
        it: "Surskit",
        de: "Gehweiher",
        "pt-br": "Surskit",
        "zh-tw": "溜溜糖球",
        ko: "비구술",
        ja: "アメタマ"
    },
    stage: "Stage1",
    description: {
        en: "The antennae have distinctive patterns that look like eyes. When it rains, they grow heavy, making flight impossible.",
        fr: "Les antennes ont des motifs distinctifs qui ressemblent à des yeux. Lorsqu’il pleut, ils deviennent lourds, rendant la fuite impossible.",
        es: "Las antenas tienen patrones distintivos que parecen ojos. Cuando llueve, se vuelven pesados, imposibilitando el vuelo.",
        it: "Le antenne hanno motivi distintivi che sembrano occhi. Quando piove diventano pesanti, rendendo impossibile il volo.",
        de: "Die Fühler haben markante Muster, die wie Augen aussehen. Bei Regen werden sie schwer und machen ein Fliegen unmöglich.",
        "pt-br": "As antenas têm padrões distintos que se parecem com olhos. Quando chove, eles ficam pesados, impossibilitando o voo.",
        "zh-tw": "觸角具有獨特的圖案，看起來像眼睛。下雨時，它們會變重，無法飛行。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Gust",
                fr: "Tornade",
                es: "Tornado",
                it: "Raffica",
                de: "Windstoß",
                "pt-br": "Lufada de Vento",
                "zh-tw": "起風"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
