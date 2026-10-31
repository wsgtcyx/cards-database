import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/127",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/127",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/127",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/127",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/127",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/127",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/127",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/127",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/127"
    },
    name: {
        en: "Hariyama",
        "fr": "Hariyama",
        "es": "Hariyama",
        "it": "Hariyama",
        "de": "Hariyama",
        "pt-br": "Hariyama",
        "zh-tw": "鐵掌力士",
        ja: "ハリテヤマ",
        ko: "하리뭉",
    },
    illustrator: "Scav",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    evolveFrom: {
        en: "Makuhita",
        "fr": "Makuhita",
        "es": "Makuhita",
        "it": "Makuhita",
        "de": "Makuhita",
        "pt-br": "Makuhita",
        "zh-tw": "幕下力士",
        ja: "マクノシタ",
        ko: "마크탕",
    },
    description: {
        en: "It stomps on the ground to build power.\nIt can send a 10-ton truck flying with a\nstraight-arm punch.",
        "fr": "Il piétine le sol pour construire son pouvoir.\nIl peut envoyer voler un camion de 10 tonnes avec un\ncoup de poing à bras droit.",
        "es": "Pisotea el suelo para generar poder.\nPuede hacer volar un camión de 10 toneladas con un\ngolpe con el brazo recto.",
        "it": "Calpesta il terreno per costruire potere.\nPuò far volare un camion da 10 tonnellate con a\npugno a braccio teso.",
        "de": "Es stampft auf den Boden, um Kraft aufzubauen.\nEs kann einen 10-Tonnen-Lkw mit einem fliegen lassen\nSchlag mit geradem Arm.",
        "pt-br": "Ele pisa no chão para construir poder.\nEle pode enviar um caminhão de 10 toneladas voando com um\nsoco com o braço reto.",
        "zh-tw": "它踩踏地面來產生能量。\n它可以讓一輛10噸重的卡車帶著\n直臂拳。",
        ja: "両足で 地面を 踏み鳴らして パワーを ためる。張り手 １発で １０トン トラックを 吹っ飛ばす。",
        ko: "두 다리로 땅을 힘껏 밟아서\n파워를 모은다. 손바닥 치기 한 방으로\n10톤 트럭을 날려 버린다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slapping Knockdown",
                "fr": "Gifler le renversement",
                "es": "Derribo de bofetadas",
                "it": "Atterramento con schiaffi",
                "de": "Ohrfeigen Knockdown",
                "pt-br": "Golpe nocauteado",
                "zh-tw": "拍擊擊倒",
                ja: "はりておとし",
                ko: "뺨때려떨구기"
            },
            damage: 110,
            cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
            effect: {
                en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
                "fr": "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
                "es": "Antes de hacer daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
                "it": "Prima di infliggere danni, scarta tutti gli Strumenti Pokémon dal Pokémon attivo del tuo avversario.",
                "de": "Bevor du Schaden verursachst, wirf alle Pokémon-Werkzeuge vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
                "zh-tw": "在造成傷害之前，丟棄對手的活躍神奇寶貝中的所有神奇寶貝工具。",
                ja: "ダメージを与える前に、相手のバトルポケモンから「ポケモンのどうぐ」をトラッシュ。",
                ko: "데미지를 주기 전에 상대의 배틀 포켓몬으로부터 「포켓몬의 도구」를 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 4,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
