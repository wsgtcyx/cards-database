import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/006",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/006",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/006",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/006"
    },
    name: {
        en: "Pinsir",
        fr: "Scarabrute",
        es: "Pinsir",
        "pt-br": "Pinsir",
        "zh-tw": "凱羅斯",
        ja: "カイロス",
        ko: "쁘사이저",
        it: "Pinsir",
        de: "Pinsir"
    },
    illustrator: "Yuya Oka",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 90,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Vise Grip",
                fr: "Force Poigne",
                es: "Agarre",
                it: "Presa",
                de: "Klammer",
                "pt-br": "Agarramento Compressor",
                "zh-tw": "夾住",
                ja: "はさむ",
                ko: "Vise Grip"
            },
            cost: [
                "Grass"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
        fr: "Ses cornes déterminent son rang au sein du groupe. Plus elles sont imposantes, plus les membres du sexe opposé l’apprécient.",
        es: "Los Pinsir se juzgan entre ellos por la robustez de la cornamenta. Cuanto más imponente sea, más agradará a sus congéneres del sexo opuesto.",
        it: "I Pinsir si giudicano a vicenda in base alle corna. Quelli con corna grosse e imponenti hanno più successo con gli esemplari dell’altro sesso.",
        de: "Der Status eines Pinsirs hängt von seinen Hörnern ab. Je dicker und stattlicher diese sind, desto beliebter ist es beim anderen Geschlecht.",
        "pt-br": "Estes Pokémon se julgam de acordo com suas pinças. As pinças mais grossas e notáveis são mais populares com o gênero oposto.",
        "zh-tw": "會以角來判斷彼此的地位。頭頂兩側的角越是粗壯彎曲，就越能得到異性的愛戴。",
        ja: "ツノで 互いを 格付けする。 太く 立派な ツノを 持つ カイロスほど 異性に 人気。",
        ko: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender."
    }
};

export default card;
