import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Shaymin",
        "fr": "Shaymin",
        "es": "shaymin",
        "it": "Shaymin",
        "de": "Shaymin",
        "pt-br": "Shaymin",
        "zh-tw": "謝米",
    },
    illustrator: "Narumi Sato",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It can dissolve toxins in the air to instantly\ntransform ruined land into a lush field of flowers.",
        "fr": "Il peut dissoudre instantanément les toxines dans l'air.\ntransformez une terre en ruine en un champ de fleurs luxuriant.",
        "es": "Puede disolver toxinas en el aire al instante.\ntransforma la tierra en ruinas en un exuberante campo de flores.",
        "it": "Può dissolvere istantaneamente le tossine nell'aria\ntrasformare la terra in rovina in un rigoglioso campo di fiori.",
        "de": "Es kann Giftstoffe in der Luft sofort auflösen\nVerwandeln Sie zerstörtes Land in ein üppiges Blumenfeld.",
        "pt-br": "Pode dissolver toxinas no ar instantaneamente\ntransformar terras em ruínas em um exuberante campo de flores.",
        "zh-tw": "能瞬間溶解空氣中的毒素\n將荒蕪的土地變成鬱鬱蔥蔥的花田。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fragrant Flower Garden",
                "fr": "Jardin de fleurs parfumées",
                "es": "Jardín de flores fragantes",
                "it": "Giardino fiorito profumato",
                "de": "Duftender Blumengarten",
                "pt-br": "Jardim de flores perfumadas",
                "zh-tw": "香花園"
            },
            effect: {
                en: "Once during your turn, you may heal 10 damage from each of your Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez soigner 10 dégâts de chacun de vos Pokémon.",
                "es": "Una vez durante tu turno, puedes curar 10 daños de cada uno de tus Pokémon.",
                "it": "Una sola volta durante il tuo turno, puoi curare 10 danni a ciascuno dei tuoi Pokémon.",
                "de": "Einmal während deines Zuges kannst du 10 Schadenspunkte bei jedem deiner Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, você pode curar 10 pontos de dano de cada um dos seus Pokémon.",
                "zh-tw": "在你的回合中，你可以治療每隻神奇寶貝造成的 10 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌"
            },
            damage: 30,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
