import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/230",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/230",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/230",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/230",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/230"
    },
    name: {
        en: "Zoroark ex",
        fr: "Zoroark-ex",
        es: "Zoroark ex",
        it: "Zoroark-ex",
        de: "Zoroark-ex",
        "pt-br": "Zoroark ex",
        "zh-tw": "索羅亞克ex",
        ko: "조로아크 ex",
        ja: "ゾロアークex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Darkness"],
    dexId: [571],
    evolveFrom: {
        en: "Zorua",
        fr: "Zorua",
        es: "Zorua",
        it: "Zorua",
        de: "Zorua",
        "pt-br": "Zorua",
        "zh-tw": "索羅亞",
        ko: "조로아",
        ja: "ゾロア"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Brutal Bash",
                fr: "Ruée Brutale",
                es: "Golpetazo Brutal",
                it: "Granzuccata",
                de: "Rabiate Krallen",
                "pt-br": "Pancada Brutal",
                "zh-tw": "擊倒在地"
            },
            effect: {
                en: "This attack does 30 damage for each of your Benched {D} Pokémon.",
                fr: "Cette attaque inflige 30 dégâts pour chaque Pokémon {D} sur votre Banc.",
                es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon {D} en Banca.",
                it: "Questo attacco infligge 30 danni per ciascuno dei tuoi Pokémon {D} in panchina.",
                de: "Dieser Angriff fügt jedem deiner {D}-Pokémon auf deiner Bank 30 Schadenspunkte zu.",
                "pt-br": "Este Pokémon causa 30 pontos de dano para cada Pokémon {D} no seu Banco.",
                "zh-tw": "造成自己的備戰區的{D}寶可夢的數量×30點傷害。"
            },
            damage: "30x"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
