import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/114",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/114",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/114",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/114",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/114",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/114",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/114"
    },
    name: {
        en: "Gholdengo ex",
        fr: "Gromago-ex",
        es: "Gholdengo ex",
        it: "Gholdengo-ex",
        de: "Monetigo-ex",
        'pt-br': "Gholdengo ex",
        "zh-tw": "賽富豪ex",
        ko: "타부자고"
    },
    suffix: "EX",
    illustrator: "Akira Komayama",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 150,
    types: ["Metal"],
    dexId: [1000],
    evolveFrom: {
        en: "Gimmighoul",
        fr: "Mordudor",
        es: "Gimmighoul",
        it: "Gimmighoul",
        de: "Gierspenst",
        "pt-br": "Gimmighoul",
        "zh-tw": "索財靈",
        pt: "Gimmighoul",
        'es-mx': "Gimmighoul"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Spending Rush",
                "fr": "Ruée vers les dépenses",
                "es": "Fiebre del gasto",
                "it": "Spesa veloce",
                "de": "Ausgabenrausch",
                "pt-br": "Corrida de gastos",
                "zh-tw": "消費熱潮"
            },
            cost: ["Metal"],
            effect: {
                en: "1 of your opponent's Pokémon is chosen at random for each Metal Energy attached to this Pokémon. For each time a Pokémon was chosen, do 40 damage to it.",
                "fr": "1 Pokémon de votre adversaire est choisi au hasard pour chaque Énergie Métal attachée à ce Pokémon. À chaque fois qu'un Pokémon est choisi, infligez-lui 40 dégâts.",
                "es": "Se elige 1 de los Pokémon de tu rival al azar por cada Energía Metal unida a este Pokémon. Por cada vez que se elija un Pokémon, hazle 40 daños.",
                "it": "1 dei Pokémon del tuo avversario viene scelto casualmente per ogni Energia Metal assegnata a questo Pokémon. Per ogni volta che viene scelto un Pokémon, infliggigli 40 danni.",
                "de": "Für jede an dieses Pokémon angelegte Metal-Energie wird zufällig 1 Pokémon deines Gegners ausgewählt. Füge ihm jedes Mal, wenn ein Pokémon ausgewählt wurde, 40 Schadenspunkte zu.",
                "pt-br": "1 dos Pokémon do seu oponente é escolhido aleatoriamente para cada Energia Metal ligada a este Pokémon. Para cada vez que um Pokémon for escolhido, cause 40 de dano a ele.",
                "zh-tw": "對手的寶可夢每附有一個金屬能量，就會隨機選出 1 隻對手的寶可夢。每選擇一隻寶可夢，就會對其造成 40 點傷害。"
            }
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
