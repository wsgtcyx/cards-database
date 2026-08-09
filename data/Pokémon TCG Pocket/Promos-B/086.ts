import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/086",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/086",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/086",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/086",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/086",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/086",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/086"
    },
    name: { en: "Beldum", fr: "Terhal", es: "Beldum", it: "Beldum", de: "Tanhel", "pt-br": "Beldum", "zh-tw": "鐵啞鈴", ko: "메탕", ja: "ダンバル" },
    illustrator: "Naoyo Kimura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [374],
    stage: "Basic",
    abilities: [{
        type: "Ability",
        name: { en: "Conductive Body", fr: "Corps Conducteur", es: "Cuerpo Conductor", it: "Corpo Conduttore", de: "Leitender Körper", "pt-br": "Corpo Condutor", "zh-tw": "牽引身軀" },
        effect: {
            en: "If you have another Beldum in play, this Pokémon's Retreat Cost is 1 less.",
            fr: "Si vous avez un autre Terhal en jeu, le Coût de Retraite de ce Pokémon est diminué de 1.",
            es: "Si tienes otro Beldum en juego, el Coste de Retirada de este Pokémon es de 1 menos.",
            it: "Se hai un altro Beldum in gioco, il costo di ritirata di questo Pokémon è ridotto di 1.",
            de: "Wenn du ein anderes Tanhel im Spiel hast, sind die Rückzugskosten dieses Pokémon um 1 geringer.",
            "pt-br": "Se você tiver outro Beldum em jogo, o Custo de Recuo deste Pokémon será 1 a menos.",
            "zh-tw": "若自己的場上有其他的「鐵啞鈴」，則這隻寶可夢撤退所需的能量減少1個。"
        }
    }],
    attacks: [{
        cost: ["Metal"],
        name: { en: "Ram", fr: "Collision", es: "Apisonar", it: "Carica", de: "Ramme", "pt-br": "Aríete", "zh-tw": "衝撞" },
        damage: 10
    }],
    weaknesses: [{ type: "Fire", value: "+20" }],
    retreat: 2,
    boosters: []
};

export default card;
