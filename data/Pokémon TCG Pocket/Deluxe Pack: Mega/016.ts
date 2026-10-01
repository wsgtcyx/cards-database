import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/016",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/016",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/016"
    },
    name: {
        en: "Cottonee",
        fr: "Doudouvet",
        es: "Cottonee",
        it: "Cottonee",
        de: "Waumboll",
        "pt-br": "Cottonee",
        "zh-tw": "木棉球",
        ja: "モンメン",
        ko: "소미안"
    },
    illustrator: "Yuka Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Grass"
    ],
    description: {
        en: "It shoots cotton from its body to protect itself.\nIf it gets caught up in hurricane-strength winds,\nit can get sent to the other side of the Earth.",
        fr: "Il sème du coton pour se protéger. Il lui arrive d'être emporté par une tempête à l'autre bout du monde.",
        es: "Lanza bolas de algodón para defenderse. A veces, la fuerza de un tifón llega a arrastrarlo hasta el otro extremo del mundo.",
        it: "Si difende creando una nuvola di cotone. A volte viene trasportato fino all'altro capo del mondo dai tifoni.",
        de: "Sie schützen sich, indem sie Watte verstreuen. Manche werden vom Wind bis ans andere Ende der Welt getragen.",
        "pt-br": "Dispara algodão do seu corpo para se proteger. Se este Pokémon for carregado por um furacão, pode ir parar do outro lado da Terra.",
        "zh-tw": "會噴出棉花保護身體。有時會被颱風吹到地球的另一邊。",
        ja: "It shoots cotton from its body to protect itself.\nIf it gets caught up in hurricane-strength winds,\nit can get sent to the other side of the Earth.",
        ko: "It shoots cotton from its body to protect itself.\nIf it gets caught up in hurricane-strength winds,\nit can get sent to the other side of the Earth."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Razor Leaf",
                fr: "Tranch'Herbe",
                es: "Hoja Afilada",
                it: "Foglielama",
                de: "Rasierblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "飛葉快刀",
                ja: "Razor Leaf",
                ko: "Razor Leaf"
            },
            damage: 20,
            cost: [
                "Grass"
            ]
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
