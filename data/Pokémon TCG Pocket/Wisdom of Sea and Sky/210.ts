import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Ho-Oh ex",
        "fr": "Ho-Oh ex",
        "es": "ho-oh ex",
        "it": "Ho-Oh es",
        "de": "Ho-Oh Ex",
        "pt-br": "Ho-Oh ex",
        "zh-tw": "浩哦EX"
    },
    illustrator: "SIE NANAHARA",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 150,
    types: ["Fire"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Phoenix Turbo",
                "fr": "Phénix Turbo",
                "es": "Fénix Turbo",
                "it": "Fenice Turbo",
                "de": "Phoenix Turbo",
                "pt-br": "Fênix Turbo",
                "zh-tw": "鳳凰渦輪"
            },
            damage: 80,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Take a {R}, {W}, and {L} Energy from your Energy Zone and attach them to your Benched Basic Pokémon in any way you like.",
                "fr": "Prenez une énergie {R}, {W} et {L} de votre zone d'énergie et attachez-les à votre Pokémon de base de banc comme vous le souhaitez.",
                "es": "Toma una Energía {R}, {W} y {L} de tu Zona de Energía y únelas a tus Pokémon Básicos en Banca de la forma que quieras.",
                "it": "Prendi un'Energia {R}, {W} e {L} dalla tua Zona Energetica e assegnale ai tuoi Pokémon Base in panchina nel modo che preferisci.",
                "de": "Nimm eine {R}-, {W}- und {L}-Energie aus deiner Energiezone und lege sie auf beliebige Weise an dein Basis-Pokémon auf deiner Bank an.",
                "pt-br": "Pegue uma energia {R}, {W} e {L} da sua zona de energia e ligue-as aos seus Pokémon Básicos no Banco da maneira que desejar.",
                "zh-tw": "從你的能量區取出 {R}、{W} 和 {L} 能量，並以你喜歡的任何方式將它們附加到你的後備基礎神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
