import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/061"
    },
    name: {
        en: "Snubbull",
        "fr": "Snobbull",
        "es": "desaire",
        "it": "Snubbull",
        "de": "Snubbull",
        "pt-br": "Esnobado",
        "zh-tw": "斯納布爾"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Its growls make its opponents uneasy. This\nlaid-back Pokémon tends to sleep half the day.",
        "fr": "Ses grognements inquiètent ses adversaires. Ceci\nLes Pokémon décontractés ont tendance à dormir la moitié de la journée.",
        "es": "Sus gruñidos inquietan a sus oponentes. esto\nLos Pokémon relajados tienden a dormir la mitad del día.",
        "it": "I suoi ringhi mettono a disagio i suoi avversari. Questo\ni Pokémon rilassati tendono a dormire metà giornata.",
        "de": "Sein Knurren verunsichert seine Gegner. Dies\nEntspannte Pokémon neigen dazu, den halben Tag zu schlafen.",
        "pt-br": "Seus rosnados deixam seus oponentes inquietos. Isto\nPokémon descontraídos tendem a dormir metade do dia.",
        "zh-tw": "它的咆哮讓對手感到不安。這個\n悠閒的神奇寶貝往往會睡半天。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sharp Fang",
                "fr": "Croc acéré",
                "es": "Colmillo afilado",
                "it": "Zanna affilata",
                "de": "Scharfer Fangzahn",
                "pt-br": "Presa Afiada",
                "zh-tw": "尖牙"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
