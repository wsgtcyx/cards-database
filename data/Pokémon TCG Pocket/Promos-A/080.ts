import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/080/86fa3d174cacfc08",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/080/86fa3d174cacfc08",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/080/86fa3d174cacfc08",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/080/86fa3d174cacfc08",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/080/86fa3d174cacfc08",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/080/86fa3d174cacfc08",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/080/86fa3d174cacfc08",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/080/86fa3d174cacfc08",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/080/86fa3d174cacfc08"
    },
    name: {
        en: "Stakataka",
        es: "Stakataka",
        "fr": "Ama-Ama",
        "it": "Stakataka",
        "de": "Muramura",
        "pt-br": "Stakataka",
        "zh-tw": "壘磊石",
        ja: "ツンデツンデ",
        ko: "차곡차곡",
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    description: {
        en: "It appeared from an Ultra Wormhole. Each one\nappears to be made up of many life-forms\nstacked one on top of each other.",
        es: "Surgió de un Ultraumbral. Parece estar compuesto de varias\n criaturas que se han combinado para formar un solo ser.",
        "fr": "Il est sorti d'une Ultra-Brèche. Il est composé de plusieurs petites entités qui s'assemblent pour n'en former qu'une seule.",
        "it": "È arrivato attraverso un Ultravarco. Sembra essere costituito da più creature impilate che formano una singola unità.",
        "de": "Diese Kreatur kam durch eine Ultrapforte. Sie besteht anscheinend aus mehreren aufeinandergestapelten Wesen.",
        "pt-br": "Surgiram de uma Ultrafenda Espacial. Cada um parece ser composto de várias formas de vida empilhadas uma sobre a outra.",
        "zh-tw": "從究極之洞中出現。似乎是由多數的生命堆積起來形成的個體。",
        ja: "ウルトラホールから 出現した。 複数の 生命が 積み上がり １匹を 形成している ようだ。",
        ko: "울트라홀에서 출현했다.\n여러 개의 생명이 쌓여\n1마리를 형성하고 있는 듯하다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Brass Rock",
                es: "Brass Rock",
                "fr": "Brass Rock",
                "it": "Brass Rock",
                "de": "Brass Rock",
                "pt-br": "Brass Rock",
                "zh-tw": "銅搖石滾",
                ja: "ブラスロック",
                ko: "브라스록"
            },
            damage: 40,
            cost: ["Metal", "Colorless"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
                es: "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
                "fr": "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 20 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá −20 pontos de dano de ataques.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到招式的傷害-20點。",
                ja: "次の相手の番、このポケモンが受けるワザのダメージを-20する。",
                ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["vol9"]
};
export default card;
