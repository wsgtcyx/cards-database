import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/100",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/100",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/100",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/100",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/100",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/100"
    },
    name: {
        en: "Gastly",
        fr: "Fantominus",
        es: "Gastly",
        it: "Gastly",
        de: "Nebulak",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ko: "고오스",
        ja: "ゴース"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [92],
    stage: "Basic",
    description: {
        en: "Its body is made of gas. Despite lacking substance, it can envelop an opponent of any size and cause suffocation.",
        fr: "Son corps est composé de gaz. Il peut ainsi\nenvelopper un adversaire et le faire suffoquer.",
        es: "Su etéreo cuerpo está hecho de gas. Puede envolver\na un oponente de cualquier tamaño hasta ahogarlo.",
        it: "Il suo corpo sottile è fatto di gas. Avvolge nemici\ndi ogni dimensione, soffocandoli.",
        de: "Es hat einen gasförmigen Körper. Es kann jeden\nGegner mit Giftgas einnebeln und dadurch ersticken.",
        "pt-br": "Seu corpo é feito de gás. Apesar de não ter substância, pode envolver um oponente de qualquer tamanho e causar asfixia.",
        "zh-tw": "它的身體是由氣體構成的。儘管缺乏實質內容，但它可以包圍任何體型的對手並導致窒息。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Mumble",
                fr: "Murmure",
                es: "Farfullar",
                it: "Borbottio",
                de: "Grummeln",
                "pt-br": "Resmungo",
                "zh-tw": "囈語"
            },
            damage: 20
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
