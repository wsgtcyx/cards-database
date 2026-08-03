import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/085",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/085",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/085",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/085",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/085",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/085",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/085"
    },
    name: {
        en: "Terapagos ex",
        fr: "Terapagos-ex",
        es: "Terapagos ex",
        it: "Terapagos-ex",
        de: "Terapagos-ex",
        "pt-br": "Terapagos ex",
        "zh-tw": "太樂巴戈斯ex",
        ko: "테라파고스 ex",
        ja: "テラパゴスex"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    dexId: [1024],
    stage: "Basic",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Prism Impact",
                fr: "Impact du prisme",
                es: "Impacto del prisma",
                it: "Impatto del prisma",
                de: "Prismeneinschlag",
                "pt-br": "Impacto do Prisma",
                "zh-tw": "稜鏡衝擊"
            },
            effect: {
                en: "This attack does 20 more damage for each type of Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque type d'Énergie attaché à ce Pokémon.",
                es: "Este ataque hace 20 puntos de daño más por cada tipo de Energía unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni tipo di Energia assegnata a questo Pokémon.",
                de: "Dieser Angriff verursacht 20 weitere Schadenspunkte für jeden Energietyp, der an dieses Pokémon angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada tipo de energia ligada a este Pokémon.",
                "zh-tw": "對於這隻寶可夢所附加的每種能量類型，此攻擊造成的傷害增加 20 點。"
            },
            damage: "80+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
