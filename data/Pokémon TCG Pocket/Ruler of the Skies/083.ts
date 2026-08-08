import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/083",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/083",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/083",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/083",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/083",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/083",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/083"
    },
    name: {
        en: "Groudon",
        fr: "Groudon",
        es: "Groudon",
        it: "Groudon",
        de: "Groudon",
        "pt-br": "Groudon",
        "zh-tw": "固拉多",
        ko: "그란돈",
        ja: "グラードン"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    dexId: [383],
    stage: "Basic",
    description: {
        en: "This legendary POKéMON is said to represent the land. It went to sleep after dueling KYOGRE."
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Fighting"],
            name: {
                en: "Earthquake",
                fr: "Séisme",
                es: "Terremoto",
                it: "Terremoto",
                de: "Erdbeben",
                "pt-br": "Terremoto",
                "zh-tw": "地震"
            },
            effect: {
                en: "This attack also does 10 damage to each of your Benched Pokémon.",
                fr: "Cette attaque inflige aussi 10 dégâts à chacun de vos Pokémon de Banc.",
                es: "Este ataque también hace 10 puntos de daño a cada uno de tus Pokémon en Banca.",
                it: "Questo attacco infligge anche 10 danni a ciascuno dei tuoi Pokémon in panchina.",
                de: "Dieser Angriff fügt außerdem jedem Pokémon auf deiner Bank 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a cada um dos seus Pokémon no Banco.",
                "zh-tw": "自己的所有備戰寶可夢也受到10點傷害。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
