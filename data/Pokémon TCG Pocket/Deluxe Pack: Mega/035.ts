import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/035",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/035",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/035",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/035"
    },
    name: {
        en: "Rapidash ex",
        fr: "Galopa-ex",
        es: "Rapidash ex",
        it: "Rapidash-ex",
        de: "Gallopa-ex",
        "pt-br": "Rapidash ex",
        "zh-tw": "烈焰馬ex",
        ja: "ギャロップex",
        ko: "날쌩마 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: [
        "Fire"
    ],
    evolveFrom: {
        en: "Ponyta",
        fr: "Ponyta",
        es: "Ponyta",
        it: "Ponyta",
        de: "Ponita",
        "pt-br": "Ponyta",
        "zh-tw": "小火馬",
        ja: "ポニータ",
        ko: "포니타"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Sprinting Flare",
                fr: "Sprint Flamboyant",
                es: "Sprint Flamígero",
                it: "Galoppo Fiammeggiante",
                de: "Lodersprint",
                "pt-br": "Corrida de Flamas",
                "zh-tw": "閃焰疾衝",
                ja: "フレアスプリンター",
                ko: "플레어 스프린터"
            },
            damage: 110,
            cost: [
                "Fire",
                "Fire",
                "Fire"
            ],
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的1隻備戰寶可夢也受到20點傷害。",
                ja: "相手のベンチポケモン1匹にも20ダメージ。",
                ko: "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
