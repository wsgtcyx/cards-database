import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/090",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/090",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/090",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/090",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/090",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/090",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/090"
    },
    name: {
        en: "Mega Ampharos ex",
        fr: "Méga-Pharamp-ex",
        es: "Mega-Ampharos ex",
        it: "Mega Ampharos-ex",
        de: "Mega-Ampharos-ex",
        "pt-br": "Mega Ampharos ex",
        "zh-tw": "超級電龍ex",
        ja: "メガデンリュウex",
        ko: "메가전룡 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 210,
    types: [
        "Lightning"
    ],
    evolveFrom: {
        en: "Flaaffy",
        fr: "Lainergie",
        es: "Flaaffy",
        it: "Flaaffy",
        de: "Waaty",
        "pt-br": "Flaaffy",
        "zh-tw": "茸茸羊",
        ja: "Flaaffy",
        ko: "Flaaffy"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Lightning Lancer",
                fr: "Lances Foudroyantes",
                es: "Lancero Eléctrico",
                it: "Lancia Folgorante",
                de: "Blitzlanze",
                "pt-br": "Lanceiro Relâmpago",
                "zh-tw": "雷電槍矛",
                ja: "Lightning Lancer",
                ko: "Lightning Lancer"
            },
            damage: 100,
            cost: [
                "Lightning",
                "Lightning",
                "Colorless"
            ],
            effect: {
                en: "1 of your opponent's Benched Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, also do 20 damage to it.",
                fr: "Un des Pokémon de Banc de votre adversaire est choisi au hasard 3 fois. Pour chaque fois où un Pokémon est choisi, infligez-lui 20 dégâts.",
                es: "Se elige 3 veces a un Pokémon en Banca aleatorio de tu rival. Haz también a cada uno 20 puntos de daño por cada vez que haya resultado elegido.",
                it: "Per 3 volte, un Pokémon nella panchina del tuo avversario viene scelto a caso. Ogni volta che un Pokémon viene scelto in questo modo, subisce 20 danni.",
                de: "3 Mal wird zufällig 1 Pokémon von der Bank deines Gegners ausgewählt. Füge jedes Mal, wenn ein Pokémon ausgewählt wird, diesem Pokémon auch 20 Schadenspunkte zu.",
                "pt-br": "Um dos Pokémon no Banco do seu oponente é escolhido aleatoriamente 3 vezes. Para cada vez que um Pokémon for escolhido, também cause 20 pontos de dano a ele.",
                "zh-tw": "對手的備戰寶可夢會隨機被選擇3次,被選擇的所有寶可夢也受到被選擇的次數×20點傷害。",
                ja: "1 of your opponent's Benched Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, also do 20 damage to it.",
                ko: "1 of your opponent's Benched Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, also do 20 damage to it."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
