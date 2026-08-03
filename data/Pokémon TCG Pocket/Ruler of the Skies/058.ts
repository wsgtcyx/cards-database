import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/058"
    },
    name: {
        en: "Eelektross",
        fr: "Ohmassacre",
        es: "Eelektross",
        it: "Eelektross",
        de: "Zapplarang",
        "pt-br": "Eelektross",
        "zh-tw": "麻麻鰻魚王",
        ko: "저리더프",
        ja: "シビルドン"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    dexId: [604],
    evolveFrom: {
        en: "Eelektrik",
        fr: "Lampéroie",
        es: "Eelektrik",
        it: "Eelektrik",
        de: "Zapplalek",
        "pt-br": "Eelektrik",
        "zh-tw": "麻麻鰻",
        ko: "저리릴",
        ja: "シビビール"
    },
    stage: "Stage2",
    description: {
        en: "It latches on to prey with its sucker mouth, sinking in its fangs and shocking the prey with powerful electricity."
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Energy Crush",
                fr: "Écras'Énergie",
                es: "Comprimir Energía",
                it: "Sgretolenergia",
                de: "Zermalmende Energie",
                "pt-br": "Esmagamento de Energia",
                "zh-tw": "能量粉碎"
            },
            effect: {
                en: "This attack does 20 more damage for each Energy attached to all of your opponent's Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida a todos los Pokémon de tu rival.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a todos os Pokémon do seu oponente.",
                "zh-tw": "增加對手的所有寶可夢身上的能量的數量×20點傷害。"
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
