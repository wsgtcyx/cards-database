import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/027",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/027",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/027",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/027"
    },
    name: {
        en: "Hearthflame Mask Ogerpon",
        "fr": "Ogerpon Masque du Fourneau",
        "es": "Ogerpon Máscara Horno",
        "it": "Ogerpon Maschera Focolare",
        "de": "Ofenmaske-Ogerpon",
        "pt-br": "Ogerpon Máscara Fornalha",
        "zh-tw": "厄鬼椪火灶面具",
        ja: "オーガポンかまどのめん",
        ko: "오거폰 화덕의 가면"
    },
    illustrator: "Nurikabe",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    description: {
        en: "In this form, it draws on the power of fire.\nIt spears its enemies with thorn-covered ivy.",
        "fr": "Sous cette forme, il fait appel au pouvoir du feu.\nIl transperce ses ennemis avec du lierre couvert d'épines.",
        "es": "De esta forma, recurre al poder del fuego.\nClava a sus enemigos con hiedra cubierta de espinas.",
        "it": "In questa forma, attinge al potere del fuoco.\nTrafigge i suoi nemici con l'edera ricoperta di spine.",
        "de": "In dieser Form nutzt es die Kraft des Feuers.\nEs spießt seine Feinde mit dornenbedecktem Efeu auf.",
        "pt-br": "Nesta forma, ele utiliza o poder do fogo.\nEle perfura seus inimigos com hera coberta de espinhos.",
        "zh-tw": "在這種形式下，它利用了火的力量。\n它用長滿荊棘的常春藤來攻擊敵人。",
        ja: "炎の力を 引き出す 姿。 トゲの ついた ツタを 槍のように 操り 敵を 貫く。",
        ko: "불꽃의 힘을 끌어올린 모습.\n가시가 난 덩굴을 창을 다루듯\n조종하여 적을 꿰뚫는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hearthflame Dance",
                "fr": "Danse des flammes du foyer",
                "es": "Danza de la llama del hogar",
                "it": "Danza del focolare",
                "de": "Hearthflame-Tanz",
                "pt-br": "Dança da Chama da Lareira",
                "zh-tw": "爐火之舞",
                ja: "かまどのまい",
                ko: "화덕의춤"
            },
            damage: 40,
            cost: ["Fire", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, take 2 {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, prenez 2 {R} Énergie de votre Zone d'Énergie et attachez-la à 1 de vos Pokémon de Banc.",
                "es": "Lanza una moneda. Si sale cara, toma 2 Energías {R} de tu Zona de Energía y únelas a 1 de tus Pokémon en Banca.",
                "it": "Lancia una moneta. Se esce testa, prendi 2 Energie {R} dalla tua Zona Energetica e assegnale a 1 dei tuoi Pokémon in panchina.",
                "de": "Wirf eine Münze. Bei „Kopf“ nimm 2 {R}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Jogue uma moeda. Se der cara, pegue 2 {R} Energias da sua Zona de Energia e ligue-as a 1 dos seus Pokémon no Banco.",
                "zh-tw": "拋一枚硬幣。如果正面，從你的能量區取出 2 個 {R} 能量並將其附加到你的 1 只後備神奇寶貝上。",
                ja: "コインを1回投げオモテなら、自分のエネルギーゾーンから{R}エネルギーを2個出し、ベンチポケモン1匹につける。",
                ko: "동전을 1번 던져서 앞면이 나오면 자신의 에너지존에서 {R}에너지를 2개 내보내 벤치 포켓몬 1마리에게 붙인다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
