import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/035/6c15269e36a1845f",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/035/6c15269e36a1845f",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/035/6c15269e36a1845f",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/035/6c15269e36a1845f",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/035/6c15269e36a1845f",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/035/6c15269e36a1845f",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/035/6c15269e36a1845f",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/035/6c15269e36a1845f",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/035/6c15269e36a1845f"
    },
    name: {
        en: "Turtwig",
        fr: "Tortipouss",
        es: "Turtwig",
        it: "Turtwig",
        de: "Chelast",
        'pt-br': "Turtwig",
        ja: "ナエトル",
        ko: "모부기",
        "zh-tw": "草苗龜",
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    description: {
        en: "It uses its whole body to photosynthesize when\nexposed to sunlight. Its shell is made from\nhardened soil.",
        fr: "Il s'expose à la lumière du soleil pour que\nson corps l'assimile par photosynthèse.\nSa carapace est composée de terre durcie.",
        es: "Al bañarlo los rayos de sol, realiza la fotosíntesis con todo\nel cuerpo. Su caparazón está formado por tierra endurecida.",
        it: "Si espone ai raggi solari ed esegue la fotosintesi con\ntutto il corpo. La sua corazza è fatta di terra rassodata.",
        de: "Es badet im Sonnenlicht und betreibt dabei mit\ndem ganzen Körper Fotosynthese. Sein Panzer\nbesteht aus hartem Lehm.",
        'pt-br': "Usa o corpo todo para fazer fotossíntese ao se expor\nà luz do sol. Seu casco é feito de solo endurecido.",
        ja: "太陽の 光を 浴びて 全身で 光合成を する。 甲羅は 土が 硬くなったもの。",
        ko: "태양의 빛을 쬐어\n전신으로 광합성을 한다.\n등껍질은 흙이 딱딱해진 것이다.",
        "zh-tw": "沐浴著陽光，用全身進行光合作用。甲殼是泥土變硬後形成的。"
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
                ja: "かみつく",
                ko: "물기",
                "zh-tw": "咬住"
            },
            damage: 30,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol4"]
};
export default card;
