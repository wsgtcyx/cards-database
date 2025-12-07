import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Clefable",
        "fr": "Mélodelfe",
        "es": "Clefable",
        "it": "Clefable",
        "de": "Schlüsselbar",
        "pt-br": "Clefável",
        "zh-tw": "克萊夫布爾"
    },
    illustrator: "miki kudo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Clefairy",
        "fr": "Cléfée",
        "es": "Clefairy",
        "it": "Clefairy",
        "de": "Clefairy",
        "pt-br": "Clefairy",
        "zh-tw": "克萊菲爾"
    },
    description: {
        en: "A timid fairy Pokémon that is rarely seen, it will\nrun and hide the moment it senses people.",
        "fr": "Un Pokémon Fée timide que l'on voit rarement, il le fera\ncourir et se cacher dès qu'il détecte des gens.",
        "es": "Un Pokémon hada tímido que rara vez se ve.\ncorre y se esconde en el momento en que detecta gente.",
        "it": "Un timido Pokémon fatato che si vede raramente, lo farà\nscappa e nasconditi nel momento in cui percepisce la gente.",
        "de": "Es ist ein schüchternes Feen-Pokémon, das man selten sieht\nrenne und verstecke dich, sobald es Menschen wahrnimmt.",
        "pt-br": "Um Pokémon fada tímido que raramente é visto, ele irá\ncorra e se esconda no momento em que sente as pessoas.",
        "zh-tw": "很少見到的膽怯的精靈寶可夢，它會\n當它感知到有人的時候就逃跑並躲起來。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Moon Kick",
                "fr": "Coup de Lune",
                "es": "patada lunar",
                "it": "Calcio della Luna",
                "de": "Mondkick",
                "pt-br": "Chute da Lua",
                "zh-tw": "月踢"
            },
            damage: 60,
            cost: ["Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
