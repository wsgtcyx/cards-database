import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Magby",
        "fr": "Magby",
        "es": "Magby",
        "it": "Magby",
        "de": "Magby",
        "pt-br": "Magby",
        "zh-tw": "小鴨嘴龍",
    },
    illustrator: "Yukiko Baba",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Fire"],
    description: {
        en: "This Pokémon is still small and timid.\nWhenever Magby gets excited or surprised,\nflames leak from its mouth and its nose.",
        "fr": "Ce Pokémon est encore petit et timide.\nChaque fois que Magby est excitée ou surprise,\ndes flammes s'échappent de sa bouche et de son nez.",
        "es": "Este Pokémon todavía es pequeño y tímido.\nCada vez que Magby se emociona o se sorprende,\nLas llamas se escapan de su boca y su nariz.",
        "it": "Questo Pokémon è ancora piccolo e timido.\nOgni volta che Magby si emoziona o si sorprende,\nfiamme fuoriescono dalla sua bocca e dal suo naso.",
        "de": "Dieses Pokémon ist noch klein und schüchtern.\nImmer wenn Magby aufgeregt oder überrascht ist,\nAus seinem Mund und seiner Nase strömen Flammen.",
        "pt-br": "Este Pokémon ainda é pequeno e tímido.\nSempre que Magby fica animado ou surpreso,\nchamas vazam de sua boca e nariz.",
        "zh-tw": "這只神奇寶貝還很小，而且膽怯。\n每當瑪格比感到興奮或驚訝時，\n火焰從它的嘴和鼻子中洩漏出來。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Toasty Toss",
                "fr": "Mélange grillé",
                "es": "Lanzamiento tostado",
                "it": "Lancio Tostato",
                "de": "Toasty Toss",
                "pt-br": "Lançamento quentinho",
                "zh-tw": "烤麵包"
            },
            effect: {
                en: "Take a {R} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon.",
                "fr": "Prenez une Énergie {R} de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Base de Banc.",
                "es": "Toma una Energía {R} de tu Zona de Energía y únela a 1 de tus Pokémon Básicos en Banca.",
                "it": "Prendi un'Energia {R} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon Base in panchina.",
                "de": "Nimm eine {R}-Energie aus deiner Energiezone und lege sie an eines deiner Basis-Pokémon auf deiner Bank an.",
                "pt-br": "Pegue uma Energia {R} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon Básicos no Banco.",
                "zh-tw": "從你的能量區取出一個{R}能量並將其附加到你的1只後備基礎神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["ho-oh"]
};
export default card;
