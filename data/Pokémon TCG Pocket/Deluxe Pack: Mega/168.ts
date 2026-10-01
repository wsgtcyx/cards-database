import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/168",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/168",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/168",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/168",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/168",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/168",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/168"
    },
    name: {
        en: "Gholdengo ex",
        fr: "Gromago-ex",
        es: "Gholdengo ex",
        it: "Gholdengo-ex",
        de: "Monetigo-ex",
        "pt-br": "Gholdengo ex",
        "zh-tw": "賽富豪ex",
        ja: "サーフゴーex",
        ko: "타부자고 ex"
    },
    suffix: "EX",
    illustrator: "takuyoa",
    rarity: "Four Diamond",
    category: "Pokemon",
    dexId: [
        1000
    ],
    hp: 150,
    types: [
        "Metal"
    ],
    evolveFrom: {
        en: "Gimmighoul",
        fr: "Mordudor",
        es: "Gimmighoul",
        it: "Gimmighoul",
        de: "Gierspenst",
        "pt-br": "Gimmighoul",
        "zh-tw": "索財靈",
        ja: "Gimmighoul",
        ko: "Gimmighoul"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Spending Rush",
                fr: "Ruée Dépensière",
                es: "Derroche",
                it: "Spese Pazze",
                de: "Freudiges Ausgeben",
                "pt-br": "Golpe de Gastança",
                "zh-tw": "亂灑一通",
                ja: "Spending Rush",
                ko: "Spending Rush"
            },
            cost: [
                "Metal"
            ],
            effect: {
                en: "1 of your opponent's Pokémon is chosen at random for each {M} Energy attached to this Pokémon. For each time a Pokémon was chosen, do 40 damage to it.",
                fr: "Un des Pokémon de votre adversaire est choisi au hasard pour chaque Énergie {M} attachée à ce Pokémon. Pour chaque fois où un Pokémon est choisi, il subit 40 dégâts.",
                es: "Se elige a un Pokémon aleatorio de tu rival por cada Energía {M} unida a este Pokémon. Haz a cada uno 40 puntos de daño por cada vez que haya resultado elegido.",
                it: "Per ogni Energia {M} assegnata a questo Pokémon, viene scelto a caso un Pokémon avversario. Ogni volta che un Pokémon viene scelto in questo modo, subisce 40 danni.",
                de: "Für jede an dieses Pokémon angelegte {M}-Energie wird zufällig 1 Pokémon des Gegners ausgewählt. Füge jedes Mal, wenn ein Pokémon ausgewählt wird, diesem Pokémon 40 Schadenspunkte zu.",
                "pt-br": "Um dos Pokémon do seu oponente é escolhido aleatoriamente para cada Energia {M} ligada a este Pokémon. Para cada vez que um Pokémon for escolhido, cause 40 pontos de dano a ele.",
                "zh-tw": "對手的寶可夢會隨機被選擇與這隻寶可夢身上的{M}能量相同數量的次數,被選擇的所有寶可夢受到被選擇的次數×40點傷害。",
                ja: "1 of your opponent's Pokémon is chosen at random for each {M} Energy attached to this Pokémon. For each time a Pokémon was chosen, do 40 damage to it.",
                ko: "1 of your opponent's Pokémon is chosen at random for each {M} Energy attached to this Pokémon. For each time a Pokémon was chosen, do 40 damage to it."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
