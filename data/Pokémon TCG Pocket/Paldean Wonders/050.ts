import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/050"
    },
    name: {
        en: "Flittle",
        fr: "Flotillon",
        es: "Flittle",
        it: "Flittle",
        de: "Flattutu",
        "pt-br": "Flittle",
        "zh-tw": "飄飄雛",
        pt: "Flittle"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    dexId: [955],
    description: {
        en: "It spends its time running around wastelands. If anyone steals its beloved berries, it will chase them down and exact its revenge.",
        "fr": "Il passe son temps à courir dans les terrains vagues. Si quelqu’un vole ses baies bien-aimées, il les poursuivra et se vengera.",
        "es": "Pasa su tiempo corriendo por terrenos baldíos. Si alguien roba sus queridas bayas, los perseguirá y se vengará.",
        "it": "Trascorre il suo tempo correndo per le terre desolate. Se qualcuno ruba le sue amate bacche, lo inseguirà e si vendicherà.",
        "de": "Es verbringt seine Zeit damit, durch Ödland zu rennen. Wenn jemand seine geliebten Beeren stiehlt, wird er sie jagen und Rache üben.",
        "pt-br": "Ele passa o tempo correndo por terrenos baldios. Se alguém roubar suas queridas frutas, ele irá persegui-los e se vingar.",
        "zh-tw": "它花時間在荒地裡奔跑。如果有人偷了它心愛的漿果，它就會追捕並實施報復。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Flop",
                fr: "Flop",
                "es": "Fracaso",
                "it": "Flop",
                de: "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌"
            },
            damage: "10",
            cost: ["Psychic"],
        },
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
