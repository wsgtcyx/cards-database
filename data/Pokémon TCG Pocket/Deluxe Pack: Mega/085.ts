import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/085",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/085",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/085",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/085",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/085",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/085",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/085"
    },
    name: {
        en: "Magneton",
        fr: "Magnéton",
        es: "Magneton",
        it: "Magneton",
        de: "Magneton",
        "pt-br": "Magneton",
        "zh-tw": "三合一磁怪",
        ja: "レアコイル",
        ko: "레어코일"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Lightning"
    ],
    evolveFrom: {
        en: "Magnemite",
        fr: "Magnéti",
        es: "Magnemite",
        it: "Magnemite",
        de: "Magnetilo",
        "pt-br": "Magnemite",
        "zh-tw": "小磁怪",
        ja: "Magnemite",
        ko: "Magnemite"
    },
    description: {
        en: "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close.",
        fr: "Le lien magnétique qui rattache ces trois Magnéti est si puissant qu'il fait mal aux oreilles si on s'en approche trop.",
        es: "Tres Magnemite se enlazan mediante una intensa fuerza magnética. Provoca un fuerte pitido en los oídos a quien se le acerque.",
        it: "Tre Magnemite sono uniti da una potente forza magnetica. Se ci si avvicina troppo, le orecchie fischiano.",
        de: "Drei Magnetilo sind durch ein starkes Magnetfeld verbunden. In seiner Nähe bekommt man Ohrensausen.",
        "pt-br": "Três Magnemite estão vinculados por uma força magnética muito poderosa. Se você chegar muito perto, ficará com dor de ouvido.",
        "zh-tw": "3隻小磁怪因著強烈的磁力而結合。只要靠近牠就會發生強烈的耳鳴。",
        ja: "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close.",
        ko: "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Spark",
                fr: "Étincelle",
                es: "Chispa",
                it: "Scintilla",
                de: "Funkensprung",
                "pt-br": "Faísca",
                "zh-tw": "電光",
                ja: "Spark",
                ko: "Spark"
            },
            damage: 20,
            cost: [
                "Lightning"
            ],
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的1隻備戰寶可夢也受到20點傷害。",
                ja: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                ko: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
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
