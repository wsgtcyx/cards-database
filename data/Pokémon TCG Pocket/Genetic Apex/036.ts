import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/036",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/036",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/036",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/036",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/036",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/036",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/036",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A1/036",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A1/036"
    },
    name: {
        en: "Charizard ex",
        fr: "Dracaufeu-ex",
        es: "Charizard ex",
        it: "Charizard-ex",
        de: "Glurak-ex",
        'pt-br': "Charizard ex",
        ja: "リザードンex",
        ko: "리자몽 ex",
        "zh-tw": "噴火龍ex",
    },
    illustrator: "PLANETA Mochizuki",
    category: "Pokemon",
    hp: 180,
    types: ["Fire"],
    stage: "Stage2",
    evolveFrom: {
        en: "Charmeleon",
        "fr": "Reptincel",
        "es": "Charmeleon",
        "it": "Charmeleon",
        "de": "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
        ja: "リザード",
        ko: "리자드"
    },
    suffix: "EX",
    attacks: [{
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                'pt-br': "Talho",
                ja: "きりさく",
                ko: "베어가르기",
                "zh-tw": "削減"
            },
            damage: "60"
        }, {
            cost: ["Fire", "Fire", "Colorless", "Colorless"],
            name: {
                en: "Crimson Storm",
                fr: "Tempête Écarlate",
                es: "Tormenta Carmesí",
                it: "Tempestarossa",
                de: "Feuerroter Sturm",
                'pt-br': "Tempestade Carmim",
                ja: "ぐれんのあらし",
                ko: "홍련의바람",
                "zh-tw": "猩紅風暴"
            },
            effect: {
                en: "Discard 2 {R} Energy from this Pokémon.",
                fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
                es: "Descarta 2 Energías {R} de este Pokémon.",
                it: "Rimuovi 2 Energie {R} da questo Pokémon.",
                de: "Lege 2 {R}-Energien von diesem Pokémon ab.",
                'pt-br': "Descarte 2 Energias {R} deste Pokémon.",
                ja: "このポケモンから{R}エネルギーを2個トラッシュ。",
                ko: "이 포켓몬에서 {R}에너지를 2개 트래쉬한다.",
                "zh-tw": "丟棄該神奇寶貝的 2 個 {R} 能量。"
            },
            damage: "200"
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    rarity: "Four Diamond",
    boosters: ["charizard"]
};
export default card;
