import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/038",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/038",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/038",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/038"
    },
    name: {
        en: "Simisear",
        "fr": "Flamoutan",
        "es": "Simisear",
        "it": "Simisear",
        "de": "Grillchita",
        "pt-br": "Simisear",
        "zh-tw": "爆香猿",
        ja: "バオッキー",
        ko: "바오키",
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    evolveFrom: {
        en: "Pansear",
        "fr": "Flamajou",
        "es": "Pansear",
        "it": "Pansear",
        "de": "Grillmak",
        "pt-br": "Pansear",
        "zh-tw": "爆香猴",
        ja: "バオップ",
        ko: "바오프",
    },
    description: {
        en: "When it gets excited, embers rise from its head\nand tail and it gets hot. For some reason, it\nloves sweets.",
        "fr": "Quand il s'excite, des braises sortent de sa tête\net la queue et il fait chaud. Pour une raison ou une autre,\naime les sucreries.",
        "es": "Cuando se excita, le salen brasas de la cabeza.\ny cola y se calienta. Por alguna razón,\nle encantan los dulces.",
        "it": "Quando si eccita, le braci si alzano dalla sua testa\ne la coda e fa caldo. Per qualche ragione, esso\nama i dolci.",
        "de": "Wenn es aufgeregt ist, steigt Glut aus seinem Kopf\nund Schwanz und es wird heiß. Aus irgendeinem Grund ist es\nliebt Süßigkeiten.",
        "pt-br": "Quando fica excitado, brasas sobem de sua cabeça\ne cauda e fica quente. Por alguma razão,\nadora doces.",
        "zh-tw": "當它興奮時，餘燼會從頭頂升起\n和尾巴，它會變熱。由於某種原因，它\n喜歡甜食。",
        ja: "興奮すると 頭や 尻尾から 火の粉が 舞いあがって 熱くなる。 なぜか 甘いものが 大好物。",
        ko: "흥분하면 머리나 꼬리에서\n불티가 날아올라 뜨거워진다.\n왜인지 달콤한 것을 매우 좋아한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fury Swipes",
                "fr": "Coups de fureur",
                "es": "Golpes de furia",
                "it": "Colpi di furia",
                "de": "Wut-Swipes",
                "pt-br": "Golpes de Fúria",
                "zh-tw": "狂怒橫掃",
                ja: "みだれひっかき",
                ko: "마구할퀴기"
            },
            damage: "40×",
            cost: ["Fire", "Colorless"],
            effect: {
                en: "Flip 3 coins. This attack does 40 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 40 daños por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 40 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 40 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 40 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 40 點傷害。",
                ja: "コインを3回投げ、オモテの数×40ダメージ。",
                ko: "동전을 3번 던져서 앞면이 나온 수 × 40데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
