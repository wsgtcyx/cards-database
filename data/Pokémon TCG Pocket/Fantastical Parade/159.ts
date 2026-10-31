import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/159",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/159",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/159",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/159",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/159",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/159",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/159",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/159",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/159"
    },
    name: {
        en: "Buzzwole",
        "fr": "Mouscoto",
        "es": "Buzzwole",
        "it": "Buzzwole",
        "de": "Masskito",
        "pt-br": "Buzzwole",
        "zh-tw": "爆肌蚊",
        ja: "マッシブーン",
        ko: "매시붕"
    },
    illustrator: "Dsuke",
    rarity: "One Star",
    category: "Pokemon",
    hp: 110,
    types: ["Grass"],
    description: {
        en: "Buzzwole goes around showing off its\nabnormally swollen muscles. It is one kind\nof Ultra Beast.",
        "fr": "Buzzwole se promène en exhibant ses\nmuscles anormalement gonflés. C'est une sorte\nd'Ultra Bête.",
        "es": "Buzzwole anda mostrando su\nmúsculos anormalmente hinchados. es un tipo\nde Ultra Bestia.",
        "it": "Buzzwole va in giro a sfoggiare le sue\nmuscoli insolitamente gonfi. È un tipo\ndell'Ultracreatura.",
        "de": "Buzzwole geht umher und zeigt es\nungewöhnlich geschwollene Muskeln. Es ist eine Art\nvon Ultra Beast.",
        "pt-br": "Buzzwole sai por aí exibindo seu\nmúsculos anormalmente inchados. É um tipo\nda Ultra Besta.",
        "zh-tw": "Buzzwole 到處炫耀它的\n肌肉異常腫脹。它是一種\n究極異獸。",
        ja: "異常な までに 膨張する 筋肉を 見せつけてきた。 ウルトラビーストの 一種。",
        ko: "이상할 정도로 팽창하는\n근육을 자랑한다.\n울트라비스트의 일종."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ground Beat",
                "fr": "Battement au sol",
                "es": "Golpe de tierra",
                "it": "Battito a terra",
                "de": "Bodenschlag",
                "pt-br": "Batida no solo",
                "zh-tw": "地面震動",
                ja: "グラウンドビート",
                ko: "그라운드비트"
            },
            damage: "40+",
            cost: ["Grass", "Grass"],
            effect: {
                en: "If your opponent has gotten exactly 1 points, this attack does 40 more damage.",
                "fr": "Si votre adversaire a obtenu exactement 1 point, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si tu oponente ha conseguido exactamente 1 punto, este ataque hace 40 daños más.",
                "it": "Se il tuo avversario ha ottenuto esattamente 1 punto, questo attacco infligge 40 danni in più.",
                "de": "Wenn dein Gegner genau 1 Punkt erreicht hat, fügt dieser Angriff 40 Schadenspunkte mehr zu.",
                "pt-br": "Se o seu oponente obteve exatamente 1 ponto, este ataque causa 40 de dano a mais.",
                "zh-tw": "如果你的對手恰好獲得 1 點，則此攻擊會造成 40 點額外傷害。",
                ja: "相手がすでにとったポイントが1ポイントなら、40ダメージ追加。",
                ko: "상대가 이미 가져간 포인트가 1포인트라면 40데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
