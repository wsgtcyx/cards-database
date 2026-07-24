import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/094"
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
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
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
        "zh-tw": "它的羊毛不斷生長。夏天，羊毛會完全脫落，但一週後又會長回來。"
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
                "zh-tw": "後踢"
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
    retreat: 1
};

export default card;
