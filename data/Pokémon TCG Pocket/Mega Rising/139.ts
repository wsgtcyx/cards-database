import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Crabrawler",
        "fr": "Crabrawler",
        "es": "cangrejo",
        "it": "Crabrawler",
        "de": "Krabbenjäger",
        "pt-br": "Caranguejo",
        "zh-tw": "好勝蟹",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "If it loses its pincers, they'll quickly regrow.\nThe pincers are popular ingredients in paella\nsince their shells produce a tasty soup stock.",
        "fr": "S’il perd ses pinces, elles repousseront rapidement.\nLes pinces sont des ingrédients populaires dans la paella\npuisque leurs coquilles produisent un savoureux bouillon de soupe.",
        "es": "Si pierde sus pinzas, rápidamente volverán a crecer.\nLas tenazas son ingredientes populares en la paella\nya que sus conchas producen un sabroso caldo.",
        "it": "Se perde le tenaglie, queste ricresceranno rapidamente.\nLe tenaglie sono un ingrediente popolare nella paella\npoiché dal loro guscio si ricava un gustoso brodo.",
        "de": "Wenn es seine Zangen verliert, wachsen diese schnell nach.\nDie Zange ist eine beliebte Zutat in der Paella\ndenn ihre Schalen ergeben eine schmackhafte Suppenbrühe.",
        "pt-br": "Se perder as pinças, elas crescerão rapidamente.\nAs pinças são ingredientes populares na paella\njá que suas cascas produzem um caldo saboroso.",
        "zh-tw": "如果它失去了鉗子，它們會很快重新長出來。\n鉗子是西班牙海鮮飯中受歡迎的食材\n因為它們的殼可以製作出美味的湯料。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Knuckle Punch",
                "fr": "Coup de poing",
                "es": "Golpe de nudillos",
                "it": "Pugno sulle nocche",
                "de": "Knöchelschlag",
                "pt-br": "Soco de Dedo",
                "zh-tw": "指節拳"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
