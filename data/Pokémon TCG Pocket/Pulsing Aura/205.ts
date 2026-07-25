import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/205",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/205",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/205",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/205",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/205",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/205"
    },
    name: {
        en: "Cottonee",
        fr: "Doudouvet",
        es: "Cottonee",
        it: "Cottonee",
        de: "Waumboll",
        "pt-br": "Cottonee",
        "zh-tw": "木棉球",
        ko: "소미안",
        ja: "モンメン"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    dexId: [546],
    stage: "Basic",
    description: {
        en: "It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.",
        fr: "Il sème du coton pour se protéger.\nIl lui arrive d'être emporté par une\ntempête à l'autre bout du monde.",
        es: "Lanza bolas de algodón para defenderse.\nA veces, la fuerza de un tifón llega a\narrastrarlo hasta el otro extremo del mundo.",
        it: "Si difende creando una nuvola di cotone. A volte viene\ntrasportato fino all'altro capo del mondo dai tifoni.",
        de: "Sie schützen sich, indem sie Watte verstreuen.\nManche werden vom Wind bis ans andere Ende\nder Welt getragen.",
        "pt-br": "Dispara algodão do seu corpo para se proteger.\nSe este Pokémon for carregado por um furacão,\npode ir parar do outro lado da Terra.",
        "zh-tw": "它從體內射出棉花來保護自己。如果它遇到颶風強度的風，它可能會被送到地球的另一邊。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Razor Leaf",
                fr: "Tranch'Herbe",
                es: "Hoja Afilada",
                it: "Foglielama",
                de: "Rasierblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "飛葉快刀"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
