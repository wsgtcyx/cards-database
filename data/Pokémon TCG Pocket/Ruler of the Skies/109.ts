import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/109",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/109",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/109",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/109",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/109",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/109",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/109"
    },
    name: {
        en: "Mega Metagross ex",
        fr: "Méga-Métalosse-ex",
        es: "Mega-Metagross ex",
        it: "Mega Metagross-ex",
        de: "Mega-Metagross-ex",
        "pt-br": "Mega Metagross ex",
        "zh-tw": "超級巨金怪ex",
        ko: "메가메타그로스 ex",
        ja: "メガメタグロスex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 230,
    types: ["Metal"],
    dexId: [376],
    evolveFrom: {
        en: "Metang",
        fr: "Métang",
        es: "Metang",
        it: "Metang",
        de: "Metang",
        "pt-br": "Metang",
        "zh-tw": "金屬怪",
        ko: "메탕구",
        ja: "メタング"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Gatling Slug",
                fr: "Frappe Répétée",
                es: "Ráfaga de Puñetazos",
                "pt-br": "Chumbo Grosso",
                "zh-tw": "機槍猛擊"
            },
            effect: {
                en: "This attack does 10 more damage for each {M} Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie {M} attachée à ce Pokémon.",
                es: "Este ataque hace 10 puntos de daño más por cada Energía {M} unida a este Pokémon.",
                "pt-br": "Este ataque causa 10 pontos de dano a mais para cada Energia {M} ligada a este Pokémon.",
                "zh-tw": "增加這隻寶可夢身上的{M}能量的數量×10點傷害。"
            },
            damage: "100+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
