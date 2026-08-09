import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/122",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/122",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/122",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/122",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/122",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/122",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/122"
    },
    name: {
        en: "Steelix",
        "fr": "Steelix",
        "es": "Steelix",
        "it": "Steelix",
        "de": "Stahlos",
        "pt-br": "Steelix",
        "zh-tw": "大鋼蛇",
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Metal"],
    evolveFrom: {
        en: "Onix",
        "fr": "Onix",
        "es": "Onix",
        "it": "Onix",
        "de": "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇",
    },
    description: {
        en: "It is said that if an Onix lives for over 100 years,\nits composition changes to become diamond-like.",
        "fr": "On dit que si un Onix vit plus de 100 ans,\nsa composition change pour ressembler à un diamant.",
        "es": "Se dice que si un Onix vive más de 100 años,\nsu composición cambia para volverse parecida a un diamante.",
        "it": "Si dice che se un Onix vive per più di 100 anni,\nla sua composizione cambia per diventare simile al diamante.",
        "de": "Es heißt, wenn ein Onix über 100 Jahre lebt,\nseine Zusammensetzung ändert sich und wird diamantenartig.",
        "pt-br": "Diz-se que se um Onix viver mais de 100 anos,\nsua composição muda para se tornar semelhante a um diamante.",
        "zh-tw": "據說，如果Onix能活100歲以上，\n它的成分發生變化，變得像鑽石一樣。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heavy Impact",
                "fr": "Fort impact",
                "es": "Impacto pesado",
                "it": "Impatto pesante",
                "de": "Schwerer Aufprall",
                "pt-br": "Impacto Pesado",
                "zh-tw": "重擊"
            },
            damage: 110,
            cost: ["Metal", "Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["ho-oh"]
};
export default card;
