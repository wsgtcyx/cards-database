import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/038",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/038",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/038",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/038"
    },
    name: {
        en: "Barboach",
        "fr": "Barloche",
        "es": "Barboach",
        "it": "Barboach",
        "de": "Schmerbe",
        "pt-br": "Barboach",
        "zh-tw": "泥泥鰍",
        ja: "ドジョッチ",
        ko: "미꾸리",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "Its two whiskers provide a sensitive radar. Even in\nmuddy waters, it can detect its prey's location.",
        "fr": "Ses deux moustaches constituent un radar sensible. Même dans\neaux boueuses, il peut détecter l'emplacement de ses proies.",
        "es": "Sus dos bigotes proporcionan un radar sensible. Incluso en\nEn aguas turbias, puede detectar la ubicación de su presa.",
        "it": "I suoi due baffi forniscono un radar sensibile. Anche dentro\nacque fangose, può rilevare la posizione della sua preda.",
        "de": "Seine beiden Whisker sorgen für ein empfindliches Radar. Sogar in\nIn schlammigen Gewässern kann es den Standort seiner Beute erkennen.",
        "pt-br": "Seus dois bigodes fornecem um radar sensível. Mesmo em\náguas lamacentas, ele pode detectar a localização de sua presa.",
        "zh-tw": "它的兩根鬍鬚提供了靈敏的雷達。即使在\n渾水中，它可以探測獵物的位置。",
        ja: "２本のヒゲは 敏感なレーダー。 泥で 濁った 水の 中でも 獲物の 位置を 察知するぞ。",
        ko: "2개의 수염은 민감한 레이더이다.\n진흙으로 탁해진 물속에서도\n먹이의 위치를 감지한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mud Shot",
                "fr": "Tir de boue",
                "es": "Tiro de barro",
                "it": "Colpo di fango",
                "de": "Schlammschuss",
                "pt-br": "Tiro de lama",
                "zh-tw": "泥彈",
                ja: "マッドショット",
                ko: "머드샷"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
