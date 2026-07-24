import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/002"
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
    illustrator: "kantaro",
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
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Air Slash",
                fr: "Lame d'Air",
                es: "Tajo Aéreo",
                it: "Eterelama",
                de: "Luftschnitt",
                "pt-br": "Golpe de Ar",
                "zh-tw": "空氣斬"
            },
            effect: {
                en: "Discard a random Energy from this Pokémon.",
                fr: "Défaussez une Énergie aléatoire de ce Pokémon.",
                es: "Descarta una Energía aleatoria de este Pokémon.",
                it: "Scarta un'Energia casuale da questo Pokémon.",
                de: "Lege eine zufällige Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia aleatória deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的隨機能量。"
            },
            damage: 70
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
