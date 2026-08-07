import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2/010",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A2/010"
    },
    name: {
        en: "Turtwig",
        fr: "Tortipouss",
        es: "Turtwig",
        it: "Turtwig",
        de: "Chelast",
        'pt-br': "Turtwig",
        ko: "모부기",
        "zh-tw": "草苗龜",
    },
    illustrator: "OOYAMA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    description: {
        en: "It uses its whole body to photosynthesize when exposed to sunlight. Its shell is made from hardened soil.",
        fr: "Il s'expose à la lumière du soleil pour que\nson corps l'assimile par photosynthèse.\nSa carapace est composée de terre durcie.",
        es: "Al bañarlo los rayos de sol, realiza la fotosíntesis con todo\nel cuerpo. Su caparazón está formado por tierra endurecida.",
        it: "Si espone ai raggi solari ed esegue la fotosintesi con\ntutto il corpo. La sua corazza è fatta di terra rassodata.",
        de: "Es badet im Sonnenlicht und betreibt dabei mit\ndem ganzen Körper Fotosynthese. Sein Panzer\nbesteht aus hartem Lehm.",
        'pt-br': "Usa o corpo todo para fazer fotossíntese ao se expor\nà luz do sol. Seu casco é feito de solo endurecido.",
        ko: "태양의 빛을 쬐어\n전신으로 광합성을 한다.\n등껍질은 흙이 딱딱해진 것이다.",
        "zh-tw": "當暴露在陽光下時，它會利用整個身體進行光合作用。它的外殼是由硬化的土壤製成的。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                'pt-br': "Mordida",
                ko: "물기",
                "zh-tw": "咬"
            },
            damage: 30,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["palkia"]
};
export default card;
