import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/118",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/118",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/118",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/118",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/118",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/118",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/118",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/118",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/118"
    },
    name: {
        en: "Houndoom",
        "fr": "Démolosse",
        "es": "Houndoom",
        "it": "Houndoom",
        "de": "Hundemon",
        "pt-br": "Houndoom",
        "zh-tw": "黑魯加",
        ja: "ヘルガー",
        ko: "헬가",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    evolveFrom: {
        en: "Houndour",
        "fr": "Malosse",
        "es": "Houndour",
        "it": "Houndour",
        "de": "Hunduster",
        "pt-br": "Houndour",
        "zh-tw": "戴魯比",
        ja: "デルビル",
        ko: "델빌",
    },
    description: {
        en: "If you are burned by the flames it shoots from its\nmouth, the pain will never go away.",
        "fr": "Si vous êtes brûlé par les flammes, elles jaillissent de son\nbouche, la douleur ne disparaîtra jamais.",
        "es": "Si te queman las llamas que dispara desde su\nboca, el dolor nunca desaparecerá.",
        "it": "Se vieni bruciato dalle fiamme spara dalle sue\nbocca, il dolore non andrà mai via.",
        "de": "Wenn Sie von den Flammen verbrannt werden, schießt es daraus\nMund, der Schmerz wird nie verschwinden.",
        "pt-br": "Se você for queimado pelas chamas, elas dispararão de seu\nboca, a dor nunca irá embora.",
        "zh-tw": "如果你被它噴出的火焰燒傷\n嘴裡的疼痛永遠不會消失。",
        ja: "口から 吹き出す 炎で 火傷すると いつまでたっても 傷口が うずいてしまう。",
        ko: "입에서 뿜어내는 불꽃에 의해\n화상을 입으면 시간이 아무리 지나도\n상처 난 자리가 욱신거린다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Diving Swipe",
                "fr": "Balayage de plongée",
                "es": "Deslizamiento de buceo",
                "it": "Scorrimento in immersione",
                "de": "Tauchender Schlag",
                "pt-br": "Mergulho",
                "zh-tw": "潛水滑動",
                ja: "スナッチダイブ",
                ko: "스내치다이브"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Darkness"],
            effect: {
                en: "Discard a random card from your opponent's hand.",
                "fr": "Défaussez une carte aléatoire de la main de votre adversaire.",
                "es": "Descarta una carta aleatoria de la mano de tu oponente.",
                "it": "Scarta una carta a caso dalla mano del tuo avversario.",
                "de": "Wirf eine zufällige Karte aus der Hand deines Gegners ab.",
                "pt-br": "Descarte uma carta aleatória da mão do seu oponente.",
                "zh-tw": "隨機丟棄對手手上的一張牌。",
                ja: "相手の手札からランダムに1枚トラッシュ。",
                ko: "상대의 패에서 랜덤으로 1장 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
