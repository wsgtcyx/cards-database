import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/238",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/238",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/238",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/238",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/238",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/238",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/238",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/238",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/238"
    },
    name: {
        en: "Cofagrigus",
        "fr": "Tutankafer",
        "es": "Cofagrigus",
        "it": "Cofagrigus",
        "de": "Echnatoll",
        "pt-br": "Cofagrigus",
        "zh-tw": "死神棺",
        ja: "デスカーン",
        ko: "데스니칸",
    },
    illustrator: "Apios",
    rarity: "One Star",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    evolveFrom: {
        en: "Yamask",
        "fr": "Tutafeh",
        "es": "Yamask",
        "it": "Yamask",
        "de": "Makabaja",
        "pt-br": "Yamask",
        "zh-tw": "哭哭面具",
        ja: "デスマス",
        ko: "데스마스",
    },
    description: {
        en: "There are many depictions of Cofagrigus\ndecorating ancient tombs. They're symbols\nof the wealth that kings of bygone eras had.",
        "fr": "Il existe de nombreuses représentations de Cofagrigus\ndécorer les tombes anciennes. Ce sont des symboles\nde la richesse que possédaient les rois des époques révolues.",
        "es": "Hay muchas representaciones de Cofagrigus.\ndecorar tumbas antiguas. son simbolos\nde las riquezas que tuvieron los reyes de épocas pasadas.",
        "it": "Molte sono le raffigurazioni di Cofagrigus\ndecorare tombe antiche. Sono simboli\ndella ricchezza che possedevano i re delle epoche passate.",
        "de": "Es gibt viele Darstellungen von Cofagrigus\nDekoration alter Gräber. Es sind Symbole\nvom Reichtum, den die Könige vergangener Epochen besaßen.",
        "pt-br": "Existem muitas representações de Cofagrigus\ndecorando tumbas antigas. Eles são símbolos\nda riqueza que os reis de épocas passadas possuíam.",
        "zh-tw": "關於 Cofagrigus 有很多描述\n裝飾古墓。它們是符號\n過去時代國王所擁有的財富。",
        ja: "古い お墓の 壁に 王様の 富の 象徴 として 描かれて いることが 多い。",
        ko: "오래된 묘지의 벽을 보면\n왕의 부를 드러내고자\n그려져 있는 경우가 많다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Soul Shot",
                "fr": "Tir d'âme",
                "es": "Disparo del alma",
                "it": "Colpo dell'anima",
                "de": "Seelenschuss",
                "pt-br": "Tiro de alma",
                "zh-tw": "靈魂射擊",
                ja: "ソウルシュート",
                ko: "소울슛"
            },
            damage: 120,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Discard 2 cards from your hand. If you can't discard 2 cards, this attack does nothing.",
                "fr": "Défaussez 2 cartes de votre main. Si vous ne pouvez pas défausser 2 cartes, cette attaque ne fait rien.",
                "es": "Descarta 2 cartas de tu mano. Si no puedes descartar 2 cartas, este ataque no hace nada.",
                "it": "Scarta 2 carte dalla tua mano. Se non puoi scartare 2 carte, questo attacco non ha alcun effetto.",
                "de": "Wirf 2 Karten aus deiner Hand ab. Wenn Sie keine 2 Karten abwerfen können, hat dieser Angriff keine Wirkung.",
                "pt-br": "Descarte 2 cartas da sua mão. Se você não puder descartar 2 cartas, este ataque não fará nada.",
                "zh-tw": "棄掉你手上的 2 張牌。如果你無法棄掉兩張牌，則此攻擊無效。",
                ja: "自分の手札を2枚選び、トラッシュ。2枚トラッシュできないなら、このワザは失敗。",
                ko: "자신의 패를 2장 선택해서 트래쉬한다. 2장 트래쉬할 수 없다면 이 기술은 실패한다."
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
