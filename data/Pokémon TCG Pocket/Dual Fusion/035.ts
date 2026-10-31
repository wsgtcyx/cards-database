import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/035",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/035",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/035",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/035"
    },
    name: {
        en: "Cloyster",
        fr: "Crustabri",
        es: "Cloyster",
        "pt-br": "Cloyster",
        "zh-tw": "刺甲貝",
        ja: "パルシェン",
        ko: "파르셀",
        it: "Cloyster",
        de: "Austos"
    },
    illustrator: "MAHOU",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Water"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Shellder",
        fr: "Kokiyas",
        es: "Shellder",
        it: "Shellder",
        de: "Muschas",
        "pt-br": "Shellder",
        "zh-tw": "大舌貝",
        ja: "シェルダー",
        ko: "셀러"
    },
    attacks: [
        {
            name: {
                en: "Blizzard",
                fr: "Blizzard",
                es: "Ventisca",
                it: "Bora",
                de: "Blizzard",
                "pt-br": "Nevasca",
                "zh-tw": "暴風雪",
                ja: "ふぶき",
                ko: "눈보라"
            },
            cost: [
                "Colorless",
                "Water",
                "Water"
            ],
            damage: 60,
            effect: {
                en: "This attack also does 20 damage to each of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à chaque Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a cada Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的所有備戰寶可夢也受到20點傷害。",
                ja: "相手のベンチポケモン全員にも20ダメージ。",
                ko: "상대의 벤치 포켓몬 전원에게도 20데미지를 준다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
        fr: "Les Crustabri vivant dans des mers aux courants forts développent des dards particulièrement imposants et aiguisés sur leur coquille.",
        es: "A los Cloyster que viven en las fuertes corrientes marinas les crecen largas y afiladas púas en la concha.",
        it: "Ai Cloyster che vivono in mari con forti correnti crescono grandi aculei appuntiti sul guscio.",
        de: "Austos, die in Meeren mit starker Strömung leben, entwickeln große und scharfe Stacheln an ihrer Schale.",
        "pt-br": "Cloyster que vivem em mares com correntes intensas desenvolvem espinhos grandes e afiados em suas conchas.",
        "zh-tw": "刺甲貝棲息在潮流湍急的海域，殼上的刺又大又尖銳。",
        ja: "潮の 流れが 激しい 海に 生息している パルシェンの 殻の トゲは 大きく 鋭い。",
        ko: "조수의 흐름이 격한 바다에 서식하는\n파르셀의 껍데기에 붙은 가시는\n크고 날카롭다."
    }
};

export default card;
