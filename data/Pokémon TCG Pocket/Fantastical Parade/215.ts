import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/215",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/215",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/215",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/215",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/215",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/215",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/215"
    },
    name: {
        en: "Clefable",
        "fr": "Mélodelfe",
        "es": "Clefable",
        "it": "Clefable",
        "de": "Pixi",
        "pt-br": "Clefable",
        "zh-tw": "皮可西"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Clefairy",
        "fr": "Mélofée",
        "es": "Clefairy",
        "it": "Clefairy",
        "de": "Piepi",
        "pt-br": "Clefairy",
        "zh-tw": "皮皮"
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
                en: "Magical Shot",
                "fr": "Tir magique",
                "es": "Disparo mágico",
                "it": "Colpo magico",
                "de": "Magischer Schuss",
                "pt-br": "Tiro Mágico",
                "zh-tw": "魔法射擊"
            },
            damage: 40,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
