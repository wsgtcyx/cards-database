import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/046",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/046",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/046",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/046",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/046",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/046",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/046"
    },
    name: {
        en: "Stunfisk",
        fr: "Limonde",
        es: "Stunfisk",
        "pt-br": "Stunfisk",
        "zh-tw": "泥巴魚",
        ja: "マッギョ",
        ko: "메더",
        it: "Stunfisk",
        de: "Flunschlik"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 100,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Electric Ball",
                fr: "Boule de Foudre",
                es: "Bola Eléctrica",
                it: "Lemposfera",
                de: "Stromball",
                "pt-br": "Bola de Eletricidade",
                "zh-tw": "雷電球",
                ja: "ライトニングボール",
                ko: "Electric Ball"
            },
            cost: [
                "Colorless",
                "Lightning",
                "Lightning"
            ],
            damage: 80
        }
    ],
    abilities: [],
    description: {
        en: "Thanks to bacteria that lived in the mud flats with it, this Pokémon developed the organs it uses to generate electricity.",
        fr: "Les vasières sont son habitat de prédilection. Il a développé un organe générant de l’électricité grâce aux bactéries présentes dans la boue.",
        es: "Vive en humedales costeros. Ha desarrollado un órgano que produce electricidad gracias a una bacteria que vive en el lodo.",
        it: "Abita i fondali che emergono durante la bassa marea. Ha sviluppato un organo che produce elettricità grazie a un batterio che vive nel fango.",
        de: "Dieses Pokémon lebt im Morast. Dank der dortigen Bakterien hat es ein Organ entwickelt, mit dem es Strom erzeugen kann.",
        "pt-br": "Graças às bactérias que viviam no lamaçal com ele, este Pokémon desenvolveu os órgãos que usa para gerar eletricidade.",
        "zh-tw": "潮間帶是牠的巢穴。製造電的器官由於泥裡的細菌而發達起來。",
        ja: "干潟が すみか。 泥に 棲む 細菌に よって 電気を つくる 器官が 発達した。",
        ko: "Thanks to bacteria that lived in the mud flats with it, this Pokémon developed the organs it uses to generate electricity."
    }
};

export default card;
