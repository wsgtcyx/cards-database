import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/045",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/045",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/045",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/045"
    },
    name: {
        en: "Miraidon",
        fr: "Miraidon",
        es: "Miraidon",
        it: "Miraidon",
        de: "Miraidon",
        "pt-br": "Miraidon",
        "zh-tw": "密勒頓",
        pt: "Miraidon"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    dexId: [1008],
    description: {
        en: "This seems to be the Iron Serpent mentioned in an old book. The Iron Serpent is said to have turned the land to ash with its lightning.",
        "fr": "Cela semble être le Serpent de Fer mentionné dans un vieux livre. On dit que le Serpent de Fer a réduit la terre en cendres avec ses éclairs.",
        "es": "Esta parece ser la Serpiente de Hierro mencionada en un libro antiguo. Se dice que la Serpiente de Hierro convirtió la tierra en cenizas con su rayo.",
        "it": "Questo sembra essere il Serpente di Ferro menzionato in un vecchio libro. Si dice che il Serpente di Ferro abbia ridotto la terra in cenere con i suoi fulmini.",
        "de": "Dies scheint die Eiserne Schlange zu sein, die in einem alten Buch erwähnt wird. Die Eiserne Schlange soll mit ihrem Blitz das Land in Asche verwandelt haben.",
        "pt-br": "Esta parece ser a Serpente de Ferro mencionada em um livro antigo. Diz-se que a Serpente de Ferro transformou a terra em cinzas com seus raios.",
        "zh-tw": "這似乎就是一本古書中提到的鐵蛇。據說鐵蛇用閃電將大地化為灰燼。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Lightning Laser",
                fr: "Laser Éclair",
                es: "Láser Relámpago",
                it: "Laser Fulminante",
                de: "Blitzlaser",
                "pt-br": "Laser relâmpago",
                "zh-tw": "閃電雷射",
                pt: "Laser Relampejante"
            },
            damage: "60",
            cost: ["Lightning", "Lightning", "Lightning"],
            effect: {
                en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只寶可夢造成 30 點傷害。",
                pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
