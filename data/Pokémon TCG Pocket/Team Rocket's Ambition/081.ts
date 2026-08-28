import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/081",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/081",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/081",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/081",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/081",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/081",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/081"
    },
    name: {
        en: "Team Rocket's Zapdos ex",
        fr: "Électhor-ex de la Team Rocket",
        es: "Zapdos ex del Team Rocket",
        it: "Zapdos-ex del Team Rocket",
        de: "Team Rockets Zapdos-ex",
        "pt-br": "Zapdos ex da Equipe Rocket",
        "zh-tw": "火箭隊的閃電鳥ex",
        ko: "로켓단의 썬더 ex",
        ja: "ロケット団のサンダーex"
    },
    illustrator: "PLANETA Mamiya",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    stage: "Basic",
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Electro Ball",
                fr: "Boule Élek",
                es: "Bola Voltio",
                it: "Energisfera",
                de: "Elektroball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電球"
            },
            damage: 40
        },
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                en: "Thunderclaw",
                fr: "Serres du Tonnerre",
                es: "Garra Tronadora",
                it: "Artigli di Tuono",
                de: "Donnernde Klaue",
                "pt-br": "Garra Trovoada",
                "zh-tw": "雷鳴鉤爪"
            },
            effect: {
                en: "This attack also does 50 damage to 1 of your opponent's Benched Pokémon that has damage on it.",
                fr: "Cette attaque inflige aussi 50 dégâts à un des Pokémon de Banc de votre adversaire ayant subi des dégâts.",
                es: "Este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival que ya tenga daño.",
                it: "Questo attacco infligge anche 50 danni a uno dei Pokémon danneggiati nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners, dem bereits Schaden zugefügt wurde, 50 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente que estiver danificado.",
                "zh-tw": "對手有受到傷害的1隻備戰寶可夢也受到50點傷害。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
