import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/077",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/077",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/077",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/077",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/077",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/077",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/077",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/077"
    },
    name: {
        en: "Barboach",
        fr: "Barloche",
        es: "Barboach",
        "pt-br": "Barboach",
        "zh-tw": "泥泥鰍",
        ja: "ドジョッチ",
        ko: "미꾸리",
        it: "Barboach",
        de: "Schmerbe"
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Vibration",
                fr: "Vibration",
                es: "Vibración",
                it: "Vibrazione",
                de: "Schwingung",
                "pt-br": "Vibração",
                "zh-tw": "震動",
                ja: "しんどう",
                ko: "Vibration"
            },
            cost: [
                "Fighting"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Its two whiskers provide a sensitive radar. Even in muddy waters, it can detect its prey’s location.",
        fr: "Il se sert de ses barbillons comme d’un radar ultrasophistiqué. Ils lui permettent de détecter ses proies même dans l’eau boueuse.",
        es: "Sus bigotes son muy sensibles y le sirven de radar. Puede detectar la posición de su presa incluso en el agua turbia de los lodazales.",
        it: "I suoi baffi sono un radar sensibilissimo in grado di individuare la preda persino nelle acque più torbide.",
        de: "Seine zwei Barteln dienen ihm als empfindliches Radarsystem. Selbst in schlammigem Wasser kann es so die Position seiner Beute ausmachen.",
        "pt-br": "Seus dois bigodes fornecem um radar sensível. Pode localizar as suas presas até mesmo em águas lamacentas.",
        "zh-tw": "2根鬍子是靈敏的雷達，即使在混濁湍急的水中，也能偵測到獵物的位置。",
        ja: "２本のヒゲは 敏感なレーダー。 泥で 濁った 水の 中でも 獲物の 位置を 察知するぞ。",
        ko: "Its two whiskers provide a sensitive radar. Even in muddy waters, it can detect its prey’s location."
    }
};

export default card;
