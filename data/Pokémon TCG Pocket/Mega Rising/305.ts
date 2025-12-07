import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Drowzee",
        "fr": "Somnolent",
        "es": "adormilado",
        "it": "Drowzee",
        "de": "Drowzee",
        "pt-br": "Drowzee",
        "zh-tw": "卓爾茲"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "It remembers every dream it eats. It rarely eats\nthe dreams of adults because children's are much\ntastier.",
        "fr": "Il se souvient de chaque rêve qu'il mange. Il mange rarement\nles rêves des adultes parce que ceux des enfants sont beaucoup\nplus savoureux.",
        "es": "Recuerda cada sueño que come. rara vez come\nlos sueños de los adultos porque los de los niños son mucho\nmás sabroso.",
        "it": "Ricorda ogni sogno che mangia. Mangia raramente\ni sogni degli adulti perché quelli dei bambini sono tanti\npiù gustoso.",
        "de": "Es erinnert sich an jeden Traum, den es isst. Es frisst selten\nEs gibt viele Träume von Erwachsenen, weil es Kinderträume gibt\nschmackhafter.",
        "pt-br": "Ele se lembra de cada sonho que come. Raramente come\nos sonhos dos adultos porque os das crianças são muito\nmais saboroso.",
        "zh-tw": "它記得牠吃下的每一個夢。它很少吃東西\n成年人的夢想，因為孩子們的夢想很多\n更美味。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mumble",
                "fr": "Marmonner",
                "es": "Mascullar",
                "it": "Mumble",
                "de": "Murmeln",
                "pt-br": "Resmungar",
                "zh-tw": "咕噥"
            },
            damage: 30,
            cost: ["Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
