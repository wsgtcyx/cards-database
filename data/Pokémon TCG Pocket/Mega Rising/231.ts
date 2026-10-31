import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/231",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/231",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/231",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/231",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/231",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/231",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/231",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/231",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/231"
    },
    name: {
        en: "Chandelure",
        "fr": "Lugulabre",
        "es": "Chandelure",
        "it": "Chandelure",
        "de": "Skelabra",
        "pt-br": "Chandelure",
        "zh-tw": "水晶燈火靈",
        ja: "シャンデラ",
        ko: "샹델라",
    },
    illustrator: "REND",
    rarity: "One Star",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    evolveFrom: {
        en: "Lampent",
        "fr": "Mélancolux",
        "es": "Lampent",
        "it": "Lampent",
        "de": "Laternecto",
        "pt-br": "Lampent",
        "zh-tw": "燈火幽靈",
        ja: "ランプラー",
        ko: "램프라",
    },
    description: {
        en: "In homes illuminated by Chandelure instead of\nlights, funerals were a constant occurrence—\nor so it's said.",
        "fr": "Dans les maisons éclairées par Chandelure au lieu de\nlumières, les funérailles étaient un événement constant -\nou c'est ce qu'on dit.",
        "es": "En hogares iluminados por Chandelure en lugar de\nluces, los funerales eran una ocurrencia constante—\no eso se dice.",
        "it": "Nelle case illuminate da Chandelure invece\nluci, i funerali erano un evento costante...\no almeno così si dice.",
        "de": "In Häusern wird die Beleuchtung durch Kronleuchter ersetzt\nLichter, Beerdigungen waren an der Tagesordnung –\nso heißt es zumindest.",
        "pt-br": "Em casas iluminadas por Chandelure em vez de\nluzes, funerais eram uma ocorrência constante -\nou assim é dito.",
        "zh-tw": "在被枝形吊燈照亮的家中，而不是\n燈光、葬禮時常發生——\n至少是這麼說的。",
        ja: "シャンデラを 灯りの かわりに していた 屋敷では 葬式が 絶えることが なかった という。",
        ko: "샹델라를 등불 대용으로\n사용했던 저택에서는 장례식이\n끊이지 않았다고 한다."
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Slow Sear",
                "fr": "Saisir lentement",
                "es": "Dorar lento",
                "it": "Lenta cottura",
                "de": "Langsam anbraten",
                "pt-br": "Sear Lento",
                "zh-tw": "慢烤",
                ja: "じわじわあぶる",
                ko: "서서히태우기"
            },
            effect: {
                en: "Once during your turn, you may discard the top card of your opponent's deck.",
                "fr": "Une fois pendant votre tour, vous pouvez défausser la carte du dessus du deck de votre adversaire.",
                "es": "Una vez durante tu turno, puedes descartar la carta superior del mazo de tu oponente.",
                "it": "Una sola volta durante il tuo turno, puoi scartare la prima carta del mazzo del tuo avversario.",
                "de": "Einmal während deines Zuges darfst du die oberste Karte des Decks deines Gegners abwerfen.",
                "pt-br": "Uma vez durante o seu turno, você pode descartar a carta do topo do baralho do seu oponente.",
                "zh-tw": "在你的回合中，你可以丟棄對手牌組頂牌一次。",
                ja: "自分の番に1回使える。相手の山札を上から1枚トラッシュ。",
                ko: "자신의 차례에 1번 사용할 수 있다. 상대의 덱을 위에서부터 1장 트래쉬한다."
            }
        }],
    attacks: [{
            name: {
                en: "Heat Blast",
                "fr": "Coup de chaleur",
                "es": "Explosión de calor",
                "it": "Colpo di calore",
                "de": "Hitzestoß",
                "pt-br": "Explosão de calor",
                "zh-tw": "熱風",
                ja: "ヒートブラスト",
                ko: "히트블라스트"
            },
            damage: 80,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-altaria"
	]
};
export default card;
