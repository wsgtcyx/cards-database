import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/083",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/083",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/083",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/083",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/083",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/083",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/083"
    },
    name: { en: "Noivern", fr: "Bruyverne", es: "Noivern", it: "Noivern", de: "UHaFnir", "pt-br": "Noivern", "zh-tw": "音波龍", ko: "음번", ja: "オンバーン" },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [715],
    evolveFrom: { en: "Noibat", fr: "Sonistrelle", es: "Noibat", it: "Noibat", de: "eF-eM", "pt-br": "Noibat", "zh-tw": "嗡蝠", ko: "음뱃", ja: "オンバット" },
    stage: "Stage1",
    attacks: [{
        cost: ["Psychic", "Darkness", "Darkness"],
        name: { en: "Draco Meteor", fr: "Draco-Météore", es: "Cometa Draco", it: "Dragobolide", de: "Draco Meteor", "pt-br": "Meteoro do Dragão", "zh-tw": "流星群" },
        effect: {
            en: "1 of your opponent's Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, do 60 damage to it.",
            fr: "Un des Pokémon de votre adversaire est choisi au hasard 3 fois. Pour chaque fois où un Pokémon est choisi, il subit 60 dégâts.",
            es: "Se elige 3 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 60 puntos de daño por cada vez que haya resultado elegido.",
            it: "Un Pokémon del tuo avversario viene scelto a caso 3 volte. Per ogni volta che un Pokémon è stato scelto, infliggigli 60 danni.",
            de: "1 Pokémon deines Gegners wird 3-mal zufällig ausgewählt. Füge ihm jedes Mal, wenn es ausgewählt wurde, 60 Schadenspunkte zu.",
            "pt-br": "3 vezes, um Pokémon do oponente é escolhido aleatoriamente. Para cada vez que um Pokémon for escolhido, cause 60 pontos de dano a ele.",
            "zh-tw": "對手的寶可夢會隨機被選擇3次，被選擇的所有寶可夢受到被選擇的次數×60點傷害。"
        }
    }],
    retreat: 1,
    boosters: ["vol11"]
};

export default card;
