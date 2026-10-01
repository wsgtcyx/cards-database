import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/295",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/295",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/295",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/295",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/295",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/295",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/295"
    },
    name: {
        en: "Mareep",
        fr: "Wattouat",
        es: "Mareep",
        it: "Mareep",
        de: "Voltilamm",
        "pt-br": "Mareep",
        "zh-tw": "咩利羊",
        ja: "メリープ",
        ko: "메리프"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Lightning"
    ],
    description: {
        en: "Its fleece grows continually. In the summer,\nthe fleece is fully shed, but it grows back in\na week.",
        fr: "Sa toison pousse constamment. L'été, toute sa laine tombe, mais elle repousse en moins d'une semaine.",
        es: "Su lana crece continuamente. En verano la pierde toda, pero le vuelve a crecer en una semana.",
        it: "Il vello gli cresce di continuo. In estate lo perde completamente, ma gli si riforma nel giro di una settimana.",
        de: "Sein Fell wächst ständig. Im Sommer wirft es sein ganzes Fell ab, aber dieses wächst binnen einer Woche wieder nach.",
        "pt-br": "Seu pelo cresce sem parar. No verão, perde toda a sua lã, mas ela cresce de volta em uma semana.",
        "zh-tw": "體毛會不斷地變長。即使每到夏天就會掉光，也能在1週內長回原樣。",
        ja: "Its fleece grows continually. In the summer,\nthe fleece is fully shed, but it grows back in\na week.",
        ko: "Its fleece grows continually. In the summer,\nthe fleece is fully shed, but it grows back in\na week."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Rear Kick",
                fr: "Ruade",
                es: "Patada Trasera",
                it: "Retrocalcio",
                de: "Rückwärtskick",
                "pt-br": "Chute Traseiro",
                "zh-tw": "後踢",
                ja: "Rear Kick",
                ko: "Rear Kick"
            },
            damage: 10,
            cost: [
                "Lightning"
            ]
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
