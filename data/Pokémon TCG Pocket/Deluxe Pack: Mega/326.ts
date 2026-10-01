import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/326",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/326",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/326",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/326",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/326",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/326",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/326"
    },
    name: {
        en: "Gastly",
        fr: "Fantominus",
        es: "Gastly",
        it: "Gastly",
        de: "Nebulak",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ja: "ゴース",
        ko: "고오스"
    },
    illustrator: "Nobuhiro Imagawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Darkness"
    ],
    dexId: [
        92
    ],
    stage: "Basic",
    description: {
        en: "Its body is made of gas. Despite lacking substance, it can envelop an opponent of any size and cause suffocation.",
        fr: "Son corps est composé de gaz. Il peut ainsi envelopper un adversaire de n'importe quelle taille et le faire suffoquer.",
        es: "Su etéreo cuerpo está hecho de gas. Puede envolver a un oponente de cualquier tamaño hasta ahogarlo.",
        it: "Il suo corpo impalpabile è fatto di gas. Avvolge nemici di ogni dimensione, soffocandoli.",
        de: "Mit seinem gasförmigen Körper kann es Gegner jeder Größe einhüllen und ersticken.",
        "pt-br": "Seu corpo é feito de gás. Apesar da falta de consistência, pode envolver um oponente de qualquer tamanho e causar sufocamento.",
        "zh-tw": "不管對手的體型多大，在氣體狀態的身體緊緊纏繞後，會讓對手窒息失去生命。",
        ja: "Its body is made of gas. Despite lacking substance, it can envelop an opponent of any size and cause suffocation.",
        ko: "Its body is made of gas. Despite lacking substance, it can envelop an opponent of any size and cause suffocation."
    },
    attacks: [
        {
            cost: [
                "Darkness"
            ],
            name: {
                en: "Mumble",
                fr: "Murmure",
                es: "Farfullar",
                it: "Borbottio",
                de: "Grummeln",
                "pt-br": "Resmungo",
                "zh-tw": "囈語",
                ja: "Mumble",
                ko: "Mumble"
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
