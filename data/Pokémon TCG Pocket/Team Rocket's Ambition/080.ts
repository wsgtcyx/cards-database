import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/080",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/080",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/080",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/080",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/080",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/080",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/080"
    },
    name: {
        en: "Team Rocket's Articuno ex",
        fr: "Artikodin-ex de la Team Rocket",
        es: "Articuno ex del Team Rocket",
        it: "Articuno-ex del Team Rocket",
        de: "Team Rockets Arktos-ex",
        "pt-br": "Articuno ex da Equipe Rocket",
        "zh-tw": "火箭隊的急凍鳥ex",
        ko: "로켓단의 프리져 ex",
        ja: "ロケット団のフリーザーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    stage: "Basic",
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Ice Wing",
                fr: "Aile Glace",
                es: "Ala Gélida",
                it: "Alagelata",
                de: "Frostschwinge",
                "pt-br": "Asa de Gelo",
                "zh-tw": "冰之翼"
            },
            damage: 40
        },
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Hailstorm",
                fr: "Bec du Blizzard",
                es: "Tormenta Polar",
                it: "Bufera di Grandine",
                de: "Eisiger Sturm",
                "pt-br": "Toró de Granizo",
                "zh-tw": "冰雪風暴"
            },
            effect: {
                en: "This attack also does 20 damage to each of your Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc.",
                es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca.",
                it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina.",
                de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco.",
                "zh-tw": "自己的所有備戰寶可夢也受到20點傷害。"
            },
            damage: 130
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
