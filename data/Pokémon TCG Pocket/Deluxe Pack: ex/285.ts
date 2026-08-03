import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/285",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/285",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/285",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/285",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/285",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/285"
    },
    name: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Its ability to evolve into many forms allows it to\nadapt smoothly and perfectly to any environment.",
        "fr": "Sa capacité à évoluer vers de nombreuses formes lui permet de\ns'adapter en douceur et parfaitement à n'importe quel environnement.",
        "es": "Su capacidad para evolucionar en muchas formas le permite\nadaptarse suave y perfectamente a cualquier entorno.",
        "it": "La sua capacità di evolversi in molte forme glielo consente\nadattarsi agevolmente e perfettamente a qualsiasi ambiente.",
        "de": "Seine Fähigkeit, sich in viele Formen zu entwickeln, ermöglicht es ihm\npassen sich jeder Umgebung reibungslos und perfekt an.",
        "pt-br": "Sua capacidade de evoluir em muitas formas permite que ele\nadapta-se suavemente e perfeitamente a qualquer ambiente.",
        "zh-tw": "它能夠進化成多種形式，使其能夠\n順利、完美地適應任何環境。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Collect",
                "fr": "Collecter",
                "es": "Recolectar",
                "it": "Raccogliere",
                "de": "Sammeln",
                "pt-br": "Coletar",
                "zh-tw": "收集"
            },
            cost: ["Colorless"],
            effect: {
                en: "Draw a card.",
                "fr": "Piochez une carte.",
                "es": "Saca una carta.",
                "it": "Pesca una carta.",
                "de": "Ziehe eine Karte.",
                "pt-br": "Compre uma carta.",
                "zh-tw": "畫一張卡片。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
