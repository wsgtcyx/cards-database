import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/106",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/106",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/106",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/106",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/106"
    },
    name: {
        en: "Beldum",
        fr: "Terhal",
        es: "Beldum",
        it: "Beldum",
        de: "Tanhel",
        "pt-br": "Beldum",
        "zh-tw": "鐵啞鈴",
        ko: "메탕",
        ja: "ダンバル"
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [374],
    stage: "Basic",
    description: {
        en: "All its cells are magnets. It communicates with others of its kind by transmitting magnetic forces from its body."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Conductive Body",
                fr: "Corps Conducteur",
                es: "Cuerpo Conductor",
                "pt-br": "Corpo Condutor",
                "zh-tw": "牽引身軀"
            },
            effect: {
                en: "If you have another Beldum in play, this Pokémon's Retreat Cost is 2 less.",
                fr: "Si vous avez un autre Terhal en jeu, le Coût de Retraite de ce Pokémon est diminué de 2.",
                es: "Si tienes otro Beldum en juego, el Coste de Retirada de este Pokémon es de 2 menos.",
                "pt-br": "Se você tiver outro Beldum em jogo, o Custo de Recuo deste Pokémon será 2 a menos.",
                "zh-tw": "若自己的場上有其他的「鐵啞鈴」,則這隻寶可夢撤退所需的能量減少2個。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞"
            },
            damage: 10
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
