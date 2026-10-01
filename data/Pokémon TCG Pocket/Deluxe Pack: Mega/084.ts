import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/084",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/084",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/084",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/084",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/084",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/084",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/084"
    },
    name: {
        en: "Magnemite",
        fr: "Magnéti",
        es: "Magnemite",
        it: "Magnemite",
        de: "Magnetilo",
        "pt-br": "Magnemite",
        "zh-tw": "小磁怪",
        ja: "コイル",
        ko: "코일"
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Lightning"
    ],
    description: {
        en: "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float.",
        fr: "Les ondes électromagnétiques émises par ses extrémités lui permettent de défier les lois de la gravité et de flotter.",
        es: "Las unidades laterales crean ondas electromagnéticas que contrarrestan la gravedad y le permiten flotar.",
        it: "Le onde elettromagnetiche generate dagli elementi laterali neutralizzano la gravità permettendogli di levitare a mezz'aria.",
        de: "Die seitlichen Module halten es in der Luft, indem sie mit elektromagnetischen Wellen die Schwerkraft überlisten.",
        "pt-br": "As ondas eletromagnéticas emitidas pelas unidades nas laterais de sua cabeça geram antigravidade, o que faz com que ele possa flutuar.",
        "zh-tw": "從左右兩邊的組件發出的電磁波能阻隔重力，使牠浮在空中。",
        ja: "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float.",
        ko: "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Electro Ball",
                fr: "Boule Élek",
                es: "Bola Voltio",
                it: "Energisfera",
                de: "Elektroball",
                "pt-br": "Bola Elétrica",
                "zh-tw": "電球",
                ja: "Electro Ball",
                ko: "Electro Ball"
            },
            damage: 30,
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
