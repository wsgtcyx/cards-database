import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    illustrator: "sowsow",
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
                en: "Find a Friend",
                "fr": "Trouver un ami",
                "es": "encontrar un amigo",
                "it": "Trova un amico",
                "de": "Finde einen Freund",
                "pt-br": "Encontre um amigo",
                "zh-tw": "找朋友"
            },
            cost: ["Colorless"],
            effect: {
                en: "Put a random Pokémon from your deck into your hand.",
                "fr": "Mettez un Pokémon aléatoire de votre deck dans votre main.",
                "es": "Pon un Pokémon aleatorio de tu mazo en tu mano.",
                "it": "Metti nella tua mano un Pokémon casuale dal tuo mazzo.",
                "de": "Nimm ein zufälliges Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque um Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "從你的牌組中隨機將一隻神奇寶貝放入你的手牌。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
