import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/087",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/087",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/087",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/087",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/087",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/087",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/087"
    },
    name: {
        en: "Zorua",
        fr: "Zorua",
        es: "Zorua",
        "pt-br": "Zorua",
        "zh-tw": "索羅亞",
        ja: "ゾロア",
        ko: "조로아",
        it: "Zorua",
        de: "Zorua"
    },
    illustrator: "Toyste Beach",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Darkness"
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
                en: "Scratch",
                fr: "Griffe",
                es: "Arañazo",
                it: "Graffio",
                de: "Kratzer",
                "pt-br": "Arranhão",
                "zh-tw": "抓",
                ja: "Scratch",
                ko: "Scratch"
            },
            cost: [
                "Colorless"
            ],
            damage: 10
        }
    ],
    abilities: [],
    description: {
        en: "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child.",
        fr: "Il prend l’apparence des autres afin de les surprendre. On dit qu’il se transforme souvent en petit enfant silencieux.",
        es: "Se transforma en otros para crear desconcierto. A menudo, adopta la forma de un niño parco en palabras.",
        it: "Sorprende gli altri assumendo il loro aspetto. Pare che si trasformi spesso in un bambino taciturno.",
        de: "Es überrumpelt andere, indem es deren Gestalt annimmt. Angeblich tarnt es sich oft als wortkarges Kind.",
        "pt-br": "Ele muda para as formas de outros para surpreendê-los. Aparentemente, transforma-se com frequência em uma criança quieta.",
        "zh-tw": "會為了讓對手卸下戒心而變化成各種樣子。據說經常會變成沉默寡言的小孩。",
        ja: "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child.",
        ko: "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child."
    }
};

export default card;
