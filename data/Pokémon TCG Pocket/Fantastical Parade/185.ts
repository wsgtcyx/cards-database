import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/185"
    },
    name: {
        en: "Mega Gardevoir ex",
        "fr": "Méga Gardevoir ex",
        "es": "Mega Gardevoir ex",
        "it": "Mega Gardevoir ex",
        "de": "Mega Guardevoir ex",
        "pt-br": "Mega Gardevoir ex",
        "zh-tw": "Mega Gardevoir 前"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 210,
    types: ["Psychic"],
    evolveFrom: {
        en: "Kirlia",
        "fr": "Kirlia",
        "es": "kirlia",
        "it": "Kirlia",
        "de": "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "基利亞"
    },
    description: {
        en: "When it opens the red plate on its chest and\nunleashes its heart, its strongest psychic power\nis released.",
        "fr": "Lorsqu'il ouvre la plaque rouge sur sa poitrine et\nlibère son cœur, son pouvoir psychique le plus puissant\nest libéré.",
        "es": "Cuando abre la placa roja en su pecho y\ndesata su corazón, su poder psíquico más fuerte\nes liberado.",
        "it": "Quando apre la placca rossa sul petto e\nscatena il suo cuore, il suo potere psichico più forte\nviene rilasciato.",
        "de": "Wenn es die rote Platte auf seiner Brust öffnet und\nentfesselt sein Herz, seine stärkste psychische Kraft\nwird freigegeben.",
        "pt-br": "Quando abre a placa vermelha em seu peito e\nlibera seu coração, seu poder psíquico mais forte\né liberado.",
        "zh-tw": "當它打開胸前的紅色盤子並\n釋放它的心臟，它最強大的精神力量\n被釋放。"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Fantasia Force",
                "fr": "Force fantastique",
                "es": "Fuerza de fantasía",
                "it": "Forza Fantasia",
                "de": "Fantasia Force",
                "pt-br": "Força Fantasia",
                "zh-tw": "幻想曲力量"
            },
            damage: 110,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Take 3 {P} Energy from your Energy Zone and attach it to your {P} Pokémon in any way you like.",
                "fr": "Prenez 3 {P} Énergie de votre Zone d'Énergie et attachez-les à votre {P} Pokémon comme vous le souhaitez.",
                "es": "Toma 3 Energías {P} de tu Zona de Energía y únelas a tu Pokémon {P} de la forma que quieras.",
                "it": "Prendi 3 Energie {P} dalla tua Zona Energetica e assegnale ai tuoi Pokémon {P} nel modo che preferisci.",
                "de": "Nimm 3 {P}-Energie aus deiner Energiezone und lege sie auf beliebige Weise an dein {P}-Pokémon an.",
                "pt-br": "Pegue 3 {P} Energias da sua Zona de Energia e ligue-as aos seus {P} Pokémon da maneira que desejar.",
                "zh-tw": "從你的能量區取出 3 個 {P} 能量，並以你喜歡的任何方式將其附加到你的 {P} 神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
