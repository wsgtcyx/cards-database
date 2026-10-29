import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/071",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/071",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/071",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/071",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/071",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/071",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/071"
    },
    name: {
        en: "Rhyperior",
        fr: "Rhinastoc",
        es: "Rhyperior",
        "pt-br": "Rhyperior",
        "zh-tw": "超甲狂犀",
        ja: "ドサイドン",
        ko: "거대코뿌리",
        it: "Rhyperior",
        de: "Rihornior"
    },
    illustrator: "Satoshi Shirai",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 160,
    types: [
        "Fighting"
    ],
    stage: "Stage2",
    retreat: 4,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Rhydon",
        fr: "Rhinoféros",
        es: "Rhydon",
        it: "Rhydon",
        de: "Rizeros",
        "pt-br": "Rhydon",
        "zh-tw": "鑽角犀獸",
        ja: "Rhydon",
        ko: "Rhydon"
    },
    attacks: [
        {
            name: {
                en: "Earthen Press",
                fr: "Pression Tellurique",
                es: "Presión Terrestre",
                it: "Pressa Tellurica",
                de: "Bodenpresse",
                "pt-br": "Pressão Terrestre",
                "zh-tw": "大地重壓",
                ja: "Earthen Press",
                ko: "Earthen Press"
            },
            cost: [
                "Fighting",
                "Fighting",
                "Fighting"
            ],
            damage: 110
        }
    ],
    abilities: [],
    description: {
        en: "This Pokémon’s sturdy carapace protects it from volcanic eruptions. It shoots round rocks from the holes in its hands.",
        fr: "Il se protège des éruptions volcaniques à l’aide de ses plaques solides et tire des rochers ronds à travers les trous de ses mains.",
        es: "Repele erupciones volcánicas con sus robustos protectores. Dispara con fuerza rocas redondas a través de las cavidades de las manos.",
        it: "La robusta copertura che ha sul corpo lo protegge dalle eruzioni vulcaniche. Lancia rocce rotonde dalle cavità che ha nei palmi.",
        de: "Durch seine robuste Panzerung hält sein Körper auch Vulkanausbrüchen stand. Aus den Löchern in den Handflächen feuert es runde Felsbrocken ab.",
        "pt-br": "A carapaça resistente deste Pokémon o protege de erupções vulcânicas. Dispara pedras arredondadas pelos buracos em suas mãos.",
        "zh-tw": "堅固的鎧甲能在火山爆發時保護牠不受傷害，牠從手掌的孔洞發射圓形的岩石。",
        ja: "This Pokémon’s sturdy carapace protects it from volcanic eruptions. It shoots round rocks from the holes in its hands.",
        ko: "This Pokémon’s sturdy carapace protects it from volcanic eruptions. It shoots round rocks from the holes in its hands."
    }
};

export default card;
