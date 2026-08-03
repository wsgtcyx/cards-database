import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/003",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/003"
    },
    name: {
        en: "Beautifly",
        fr: "Charmillon",
        es: "Beautifly",
        it: "Beautifly",
        de: "Papinella",
        "pt-br": "Beautifly",
        "zh-tw": "狩獵鳳蝶",
        ko: "뷰티플라이",
        ja: "アゲハント"
    },
    illustrator: "Suwama Chiaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    dexId: [267],
    evolveFrom: {
        en: "Silcoon",
        fr: "Armulys",
        es: "Silcoon",
        it: "Silcoon",
        de: "Schaloko",
        "pt-br": "Silcoon",
        "zh-tw": "甲殼繭",
        ko: "실쿤",
        ja: "カラサリス"
    },
    stage: "Stage2",
    description: {
        en: "It has an aggressive nature. It stabs prey with its long, narrow mouth to drain the prey’s fluids.",
        fr: "Il est très agressif. Il pique sa proie avec son long\nmuseau étroit et absorbe sa vitalité.",
        es: "Es un Pokémon agresivo. Con su boca larga y afilada\nataca a sus rivales para drenar sus fluidos.",
        it: "Ha un’indole aggressiva. Conficca la sua bocca\nlunga e sottile nelle prede e ne succhia i fluidi.",
        de: "Es besitzt ein aggressives Wesen. Es sticht seinen\nRüssel in seine Beute und saugt sie aus."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Evoflight",
                fr: "Envol Évo",
                es: "Evovuelo",
                "pt-br": "Evoluvoo",
                "zh-tw": "進化飛行"
            },
            effect: {
                en: "This attack does 30 more damage for each Evolution Pokémon on your Bench.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc.",
                es: "Este ataque hace 30 puntos de daño más por cada Pokémon Evolución en tu Banca.",
                it: "Questo attacco infligge 30 danni in più per ogni Pokémon Evoluzione nella tua panchina.",
                de: "Dieser Angriff fügt jedem Evolutions-Pokémon auf deiner Bank 30 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Pokémon de Evolução no seu Banco.",
                "zh-tw": "增加自己的備戰區的進化寶可夢的數量×30點傷害。"
            },
            damage: "30+"
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
