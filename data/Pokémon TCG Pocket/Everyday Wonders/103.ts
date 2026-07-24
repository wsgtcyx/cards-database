import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/103",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/103"
    },
    name: {
        en: "Mega Ampharos ex",
        fr: "Méga-Pharamp-ex",
        es: "Mega-Ampharos ex",
        it: "Mega Ampharos-ex",
        de: "Mega-Ampharos-ex",
        "pt-br": "Mega Ampharos ex",
        "zh-tw": "超級電龍ex",
        ko: "메가전룡 ex",
        ja: "メガデンリュウex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 210,
    types: ["Lightning"],
    dexId: [181],
    evolveFrom: {
        en: "Flaaffy",
        fr: "Lainergie",
        es: "Flaaffy",
        it: "Flaaffy",
        de: "Waaty",
        "pt-br": "Flaaffy",
        "zh-tw": "茸茸羊",
        ko: "보송송",
        ja: "モココ"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                en: "Lightning Lancer",
                fr: "Lances Foudroyantes",
                es: "Lancero Eléctrico",
                it: "Lancia Folgorante",
                de: "Blitzlanze",
                "pt-br": "Lanceiro Relâmpago",
                "zh-tw": "雷電槍矛"
            },
            effect: {
                en: "1 of your opponent's Benched Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, also do 20 damage to it.",
                fr: "1 des Pokémon de Banc de votre adversaire est choisi au hasard 3 fois. À chaque fois qu'un Pokémon est choisi, infligez-lui également 20 dégâts.",
                es: "1 de los Pokémon en Banca de tu rival se elige al azar 3 veces. Por cada vez que se elija un Pokémon, también hazle 20 daños.",
                it: "1 dei Pokémon nella panchina del tuo avversario viene scelto casualmente 3 volte. Per ogni volta che viene scelto un Pokémon, infliggigli anche 20 danni.",
                de: "1 Pokémon auf der Bank deines Gegners wird dreimal zufällig ausgewählt. Füge ihm jedes Mal, wenn ein Pokémon ausgewählt wurde, außerdem 20 Schadenspunkte zu.",
                "pt-br": "1 dos Pokémon no Banco do seu oponente é escolhido aleatoriamente 3 vezes. Para cada vez que um Pokémon for escolhido, cause também 20 de dano a ele.",
                "zh-tw": "隨機選擇對手 1 只後備寶可夢 3 次。每次選擇一隻寶可夢，也會對其造成 20 點傷害。"
            },
            damage: 100
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
