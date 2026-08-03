import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/030"
    },
    name: {
        en: "Cetitan",
        fr: "Balbalèze",
        es: "Cetitan",
        it: "Cetitan",
        de: "Kolowal",
        "pt-br": "Cetitan",
        "zh-tw": "浩大鯨",
        pt: "Cetitan"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    dexId: [975],
    evolveFrom: {
        en: "Cetoddle",
        fr: "Piétacé",
        es: "Cetoddle",
        it: "Cetoddle",
        de: "Flaniwal",
        "pt-br": "Cetoddle",
        "zh-tw": "走鯨",
        pt: "Cetoddle",
        'es-mx': "Cetoddle"
    },
    description: {
        en: "Ice energy builds up in the horn on its upper jaw, causing the horn to reach cryogenic temperatures that freeze its surroundings.",
        "fr": "L'énergie de la glace s'accumule dans la corne sur sa mâchoire supérieure, ce qui amène la corne à atteindre des températures cryogéniques qui gèlent son environnement.",
        "es": "La energía del hielo se acumula en el cuerno de su mandíbula superior, lo que hace que el cuerno alcance temperaturas criogénicas que congelan su entorno.",
        "it": "L'energia del ghiaccio si accumula nel corno sulla mascella superiore, facendo sì che il corno raggiunga temperature criogeniche che congelano l'ambiente circostante.",
        "de": "Im Horn an seinem Oberkiefer baut sich Eisenergie auf, die dazu führt, dass das Horn kryogene Temperaturen erreicht, die seine Umgebung gefrieren lassen.",
        "pt-br": "A energia do gelo se acumula no chifre da mandíbula superior, fazendo com que o chifre atinja temperaturas criogênicas que congelam o ambiente.",
        "zh-tw": "冰能量在其上顎的角中積聚，導致角達到低溫，凍結周圍環境。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Ice Punch",
                fr: "Poinglace",
                "es": "Ponche de hielo",
                "it": "Pugno di ghiaccio",
                de: "Ice Punch",
                "pt-br": "Ponche de Gelo",
                "zh-tw": "冰拳"
            },
            damage: "80",
            cost: ["Water", "Water", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Defensor ahora queda Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon difensore è paralizzato.",
                de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Defensor agora está Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則防禦寶可夢現在處於麻痺狀態。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],
    retreat: 4,
};
export default card;
