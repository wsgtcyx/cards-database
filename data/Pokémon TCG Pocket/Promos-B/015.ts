import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/015",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/015",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/015",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/015",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/015",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/015",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/015",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-B/015",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/P-B/015"
    },
    name: {
        en: "Mareep",
        fr: "Wattouat",
        es: "Mareep",
        it: "Mareep",
        de: "Voltilamm",
        "pt-br": "Mareep",
        "zh-tw": "咩利羊",
        ko: "메리프",
        ja: "メリープ"
    },
    illustrator: "okayamatakatoshi",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [179],
    stage: "Basic",
    description: {
        en: "Its fleece grows continually. In the summer, the fleece is fully shed, but it grows back in a week.",
        fr: "Sa toison s'agrandit continuellement. En été, la toison tombe entièrement, mais elle repousse en une semaine.",
        es: "Su vellón crece continuamente. En verano, el vellón se muda por completo, pero vuelve a crecer en una semana.",
        it: "Il suo vello cresce continuamente. In estate il vello cade completamente, ma ricresce in una settimana.",
        de: "Sein Fell wächst kontinuierlich. Im Sommer wird das Vlies vollständig abgeworfen, aber es wächst innerhalb einer Woche wieder nach.",
        "pt-br": "Seu velo cresce continuamente. No verão, o velo cai completamente, mas volta a crescer em uma semana.",
        "zh-tw": "它的羊毛不斷生長。夏天，羊毛會完全脫落，但一週後又會長回來。",
        ja: "体毛は どんどん 伸びる。 夏になると 全部 抜け落ちるが 1週間で 元通りになる。",
        ko: "몸의 털은 점점 자란다.\n여름이 되면 전부 빠지지만\n일주일 정도면 원래대로 자라난다."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Rear Kick",
                fr: "Ruade",
                es: "Patada Trasera",
                it: "Retrocalcio",
                de: "Rückwärtskick",
                "pt-br": "Chute Traseiro",
                "zh-tw": "後踢",
                ja: "うしろげり",
                ko: "뒤로 차기"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol2"]
};

export default card;
