import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/064",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/064",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/064",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/064",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/064",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/064"
    },
    name: {
        en: "Palpitoad",
        "fr": "Batracné",
        "es": "Palpitoad",
        "it": "Palpitoad",
        "de": "Mebrana",
        "pt-br": "Palpitoad",
        "zh-tw": "藍蟾蜍",
    },
    illustrator: "Shimaris Yukichi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Tympole",
        "fr": "Tritonde",
        "es": "Tympole",
        "it": "Tympole",
        "de": "Schallquap",
        "pt-br": "Tympole",
        "zh-tw": "圓蝌蚪",
    },
    description: {
        en: "On occasion, their cries are sublimely pleasing to\nthe ear. Palpitoad with larger lumps on their\nbodies can sing with a wider range of sounds.",
        "fr": "Parfois, leurs cris plaisent sublimement\nl'oreille. Palpitoad avec de plus gros morceaux sur leur\nles corps peuvent chanter avec une gamme de sons plus large.",
        "es": "En ocasiones, sus gritos son sublimemente agradables para\nla oreja. Palpitoad con bultos más grandes en sus\nLos cuerpos pueden cantar con una gama más amplia de sonidos.",
        "it": "A volte, le loro grida sono estremamente piacevoli\nl'orecchio. Palpitoad con grumi più grandi sui loro\ni corpi possono cantare con una gamma più ampia di suoni.",
        "de": "Gelegentlich sind ihre Schreie überaus erfreulich\ndas Ohr. Palpitoad mit größeren Klumpen auf ihrem\nKörper können mit einem größeren Spektrum an Klängen singen.",
        "pt-br": "Ocasionalmente, seus gritos são sublimemente agradáveis\na orelha. Palpitoad com caroços maiores em seus\ncorpos podem cantar com uma gama mais ampla de sons.",
        "zh-tw": "有時，他們的哭聲令人無比愉悅\n耳朵。心悸蟾蜍身上有較大的腫塊\n身體可以用更廣泛的聲音唱歌。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Hyper Voice",
                "fr": "Hyper voix",
                "es": "Hipervoz",
                "it": "Ipervoce",
                "de": "Hyperstimme",
                "pt-br": "Hiper Voz",
                "zh-tw": "超級語音"
            },
            damage: 60,
            cost: ["Water", "Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
