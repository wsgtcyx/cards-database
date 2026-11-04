import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/077/f0f0fcc199aa1d3b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/077/f0f0fcc199aa1d3b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/077/f0f0fcc199aa1d3b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/077/f0f0fcc199aa1d3b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/077/f0f0fcc199aa1d3b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/077/f0f0fcc199aa1d3b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/077/f0f0fcc199aa1d3b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/077/f0f0fcc199aa1d3b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/077/f0f0fcc199aa1d3b"
    },
    name: {
        en: "Xurkitree",
        es: "Xurkitree",
        "fr": "Câblifère",
        "it": "Xurkitree",
        "de": "Voltriant",
        "pt-br": "Xurkitree",
        "zh-tw": "電束木",
        ja: "デンジュモク",
        ko: "전수목",
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    description: {
        en: "Although it's alien to this world and a danger here, it's apparently\na common organism in the world where it normally lives.",
        es: "Para los seres de este mundo resulta extraño y peligroso, pero\nen el mundo del que procede es una criatura muy común.",
        "fr": "Cette créature venue d'ailleurs est dangereuse dans notre monde, mais il semblerait qu'elle soit très commune dans le sien.",
        "it": "Nel nostro mondo il suo aspetto appare strano e minaccioso, ma sembra che in quello da cui proviene sia una creatura molto comune.",
        "de": "In dieser Welt wirkt sein Aussehen gefährlich und fremdartig, doch in seiner ursprünglichen Welt ist es ein ganz gewöhnliches Lebewesen.",
        "pt-br": "Embora seja um alienígena e um perigo para este mundo, parece ser um organismo comum no mundo onde vive normalmente.",
        "zh-tw": "在這個世界是危險的異類，但在原本棲息的世界裡，牠似乎是常見的普通生物。",
        ja: "この世界では 異質で 危険だが 本来 棲んでいる 世界では 普通に 見かける 生物らしい。",
        ko: "이 세계와는 성질이 다르고\n위험하지만 원래 살던 세계에서는\n흔히 볼 수 있는 생물인 듯하다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Electronica",
                es: "Electrónica",
                "fr": "Electronica",
                "it": "Electronica",
                "de": "Electronica",
                "pt-br": "Eletrônica",
                "zh-tw": "束電音",
                ja: "エレクトロニカ",
                ko: "일렉트로니카"
            },
            damage: 60,
            cost: ["Lightning", "Colorless", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido",
                "fr": "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                "it": "Il Pokémon attivo del tuo avversario viene confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "將對手的戰鬥寶可夢混亂。",
                ja: "相手のバトルポケモンをこんらんにする。",
                ko: "상대의 배틀 포켓몬을 혼란으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol9"]
};
export default card;
