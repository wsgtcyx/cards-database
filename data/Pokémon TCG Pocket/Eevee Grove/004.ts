import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Steenee",
        "fr": "Steenee",
        "es": "Steenee",
        "it": "Steenee",
        "de": "Steenee",
        "pt-br": "Steenee",
        "zh-tw": "斯蒂尼"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Bounsweet",
        "fr": "Bonbon",
        "es": "dulce",
        "it": "Dolcezza",
        "de": "Bounsweet",
        "pt-br": "Doce",
        "zh-tw": "邦斯威特"
    },
    description: {
        en: "Steenee spreads a sweet scent that\nmakes others feel invigorated. This same\nscent is popular for antiperspirants.",
        "fr": "Steenee répand un doux parfum qui\ndonne aux autres un sentiment de revigoration. Ce même\nle parfum est populaire pour les antisudorifiques.",
        "es": "Steenee difunde un dulce aroma que\nhace que los demás se sientan vigorizados. este mismo\nEl aroma es popular para los antitranspirantes.",
        "it": "Steenee diffonde un dolce profumo che\nfa sentire gli altri rinvigoriti. Questo stesso\nil profumo è popolare per gli antitraspiranti.",
        "de": "Steenee verbreitet einen süßen Duft\nsorgt dafür, dass sich andere gestärkt fühlen. Das Gleiche\nDuft ist für Antitranspirantien beliebt.",
        "pt-br": "Steenee espalha um perfume doce que\nfaz os outros se sentirem revigorados. Este mesmo\nperfume é popular para antitranspirantes.",
        "zh-tw": "Steene 散發出甜美的香氣\n讓別人感到精神振奮。這個同樣的\n香味在止汗劑中很受歡迎。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Leaf Step",
                "fr": "Étape de la feuille",
                "es": "Paso de hoja",
                "it": "Passo delle foglie",
                "de": "Blattschritt",
                "pt-br": "Passo Folha",
                "zh-tw": "葉步"
            },
            damage: 40,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
