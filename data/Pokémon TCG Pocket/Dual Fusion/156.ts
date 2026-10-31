import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/156",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/156",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/156",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/156",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/156",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/156",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/156",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/156",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/156"
    },
    name: {
        en: "Pikachu ex",
        fr: "Pikachu-ex",
        es: "Pikachu ex",
        "pt-br": "Pikachu ex",
        "zh-tw": "皮卡丘ex",
        ja: "ピカチュウex",
        ko: "피카츄 ex",
        it: "Pikachu-ex",
        de: "Pikachu-ex"
    },
    illustrator: "whomor Inc.",
    rarity: "Two Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Pika Punch",
                fr: "Pika-Poing",
                es: "Pika Puño",
                it: "Pika Pugno",
                de: "Pikahieb",
                "pt-br": "Soco Pikachu",
                "zh-tw": "皮卡拳",
                ja: "ピカパンチ",
                ko: "피카펀치"
            },
            cost: [
                "Lightning"
            ],
            damage: 30
        },
        {
            name: {
                en: "Thundertail",
                fr: "Queue Tonnerre",
                es: "Cola Relámpago",
                it: "Coda Saettante",
                de: "Donnerschweif",
                "pt-br": "Cauda Trovejante",
                "zh-tw": "閃電尾",
                ja: "いなずまテール",
                ko: "천둥번개테일"
            },
            cost: [
                "Colorless",
                "Lightning",
                "Lightning"
            ],
            damage: 130,
            effect: {
                en: "Discard 2 {L} Energy from this Pokémon.",
                fr: "Défaussez 2 Énergies {L} de ce Pokémon.",
                es: "Descarta 2 Energías {L} de este Pokémon.",
                it: "Rimuovi 2 Energie {L} da questo Pokémon.",
                de: "Lege 2 {L}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 Energias {L} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的2個{L}能量丟棄。",
                ja: "このポケモンから{L}エネルギーを2個トラッシュ。",
                ko: "이 포켓몬에서 {L}에너지를 2개 트래쉬한다."
            }
        }
    ],
    abilities: []
};

export default card;
