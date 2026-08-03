import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/106",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/106",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/106",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/106",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/106",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/106",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/106"
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
    rarity: "Four Diamond",
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
                fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc {D}.",
                es: "Este ataque hace 30 daños por cada uno de tus Pokémon {D} en Banca.",
                it: "Questo attacco infligge 30 danni per ciascuno dei tuoi Pokémon {D} in panchina.",
                de: "Dieser Angriff fügt jedem deiner {D}-Pokémon auf deiner Bank 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon {D} no Banco.",
                "zh-tw": "此攻擊對你的每隻後備 {D} 寶可夢造成 30 點傷害。"
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
