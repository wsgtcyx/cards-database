import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/060",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/060",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/060",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/060",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/060",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/060"
    },
    name: {
        en: "Team Rocket's Meowth",
        fr: "Miaouss de la Team Rocket",
        es: "Meowth del Team Rocket",
        it: "Meowth del Team Rocket",
        de: "Team Rockets Mauzi",
        "pt-br": "Meowth da Equipe Rocket",
        "zh-tw": "火箭隊的喵喵",
        ko: "로켓단의 나옹",
        ja: "ロケット団のニャース"
    },
    illustrator: "Yuriko Akase",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    stage: "Basic",
    description: {
        en: "It loves things that sparkle. When it sees a shiny object, the gold coin on its head shines, too.",
        fr: "Il est fasciné par les objets brillants. Lorsqu'il en voit un, la pièce sur son front se met à luire.",
        es: "Le fascina todo lo que brilla. Si ve algo que destelle, la moneda de oro que tiene en la frente brillará.",
        it: "Ama gli oggetti scintillanti. Se nota qualcosa che brilla, anche la moneta sulla sua fronte risplende.",
        de: "Glänzende Dinge faszinieren es. Findet es etwas Schimmerndes, leuchtet auch die Münze an seinem Kopf aus unbekanntem Grund auf.",
        "pt-br": "Ama coisas reluzentes. Quando vê um objeto brilhante, a moeda dourada na sua cabeça brilha também.",
        "zh-tw": "非常喜歡耀眼的發光物。找到發光物時，不知為何額頭的金幣也會跟著發光。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Scratch",
                fr: "Griffe",
                es: "Arañazo",
                it: "Graffio",
                de: "Kratzer",
                "pt-br": "Arranhão",
                "zh-tw": "抓"
            },
            damage: 30
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
