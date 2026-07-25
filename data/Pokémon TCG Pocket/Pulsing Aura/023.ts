import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/023",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/023",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/023",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/023",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/023"
    },
    name: {
        en: "Mega Camerupt ex",
        fr: "Méga-Camérupt-ex",
        es: "Mega-Camerupt ex",
        it: "Mega Camerupt-ex",
        de: "Mega-Camerupt-ex",
        "pt-br": "Mega Camerupt ex",
        "zh-tw": "超級噴火駝ex",
        ko: "메가폭타 ex",
        ja: "メガバクーダex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 210,
    types: ["Fire"],
    dexId: [323],
    evolveFrom: {
        en: "Numel",
        fr: "Chamallot",
        es: "Numel",
        it: "Numel",
        de: "Camaub",
        "pt-br": "Numel",
        "zh-tw": "呆火駝",
        ko: "둔타",
        ja: "ドンメル"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Fire", "Fire", "Fire", "Colorless"],
            name: {
                en: "Volcanic Kaboom",
                fr: "Boum Volcanique",
                es: "Bum Volcánico",
                it: "Bomba Vulcanica",
                de: "Vulkangetöse",
                "pt-br": "Cabum Vulcânico",
                "zh-tw": "火山爆"
            },
            effect: {
                en: "1 of your opponent's Pokémon is chosen at random. Do 160 damage to it.",
                fr: "1 des Pokémon de votre adversaire est choisi au hasard. Faites-lui 160 dégâts.",
                es: "1 de los Pokémon de tu oponente se elige al azar. Hazle 160 de daño.",
                it: "Viene scelto a caso 1 dei Pokémon del tuo avversario. Infliggigli 160 danni.",
                de: "1 Pokémon deines Gegners wird zufällig ausgewählt. Füge ihm 160 Schaden zu.",
                "pt-br": "1 dos Pokémon do seu oponente é escolhido aleatoriamente. Cause 160 de dano a ele.",
                "zh-tw": "隨機選出 1 隻對手的寶可夢。對其造成 160 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
