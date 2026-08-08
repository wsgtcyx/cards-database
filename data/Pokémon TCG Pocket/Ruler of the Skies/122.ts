import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/122",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/122",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/122",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/122",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/122",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/122",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/122"
    },
    name: {
        en: "Noivern",
        fr: "Bruyverne",
        es: "Noivern",
        it: "Noivern",
        de: "UHaFnir",
        "pt-br": "Noivern",
        "zh-tw": "音波龍",
        ko: "음번",
        ja: "オンバーン"
    },
    illustrator: "aoki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [715],
    evolveFrom: {
        en: "Noibat",
        fr: "Sonistrelle",
        es: "Noibat",
        it: "Noibat",
        de: "eF-eM",
        "pt-br": "Noibat",
        "zh-tw": "嗡蝠",
        ko: "음뱃",
        ja: "オンバット"
    },
    stage: "Stage1",
    description: {
        en: "In the dark, even Hydreigon are terrified of this Pokémon. But in the light, Noivern is the one that avoids battle."
    },
    attacks: [
        {
            cost: ["Psychic", "Darkness", "Darkness"],
            name: {
                en: "Draco Meteor",
                fr: "Draco-Météore",
                es: "Cometa Draco",
                it: "Dragobolide",
                de: "Draco Meteor",
                "pt-br": "Meteoro do Dragão",
                "zh-tw": "流星群"
            },
            effect: {
                en: "1 of your opponent's Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, do 60 damage to it.",
                fr: "Un des Pokémon de votre adversaire est choisi au hasard 3 fois. Pour chaque fois où un Pokémon est choisi, il subit 60 dégâts.",
                es: "Se elige 3 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 60 puntos de daño por cada vez que haya resultado elegido.",
                "pt-br": "3 vezes, um Pokémon do oponente é escolhido aleatoriamente. Para cada vez que um Pokémon for escolhido, cause 60 pontos de dano a ele.",
                "zh-tw": "對手的寶可夢會隨機被選擇3次,被選擇的所有寶可夢受到被選擇的次數×60點傷害。"
            }
        }
    ],
    retreat: 1
};

export default card;
