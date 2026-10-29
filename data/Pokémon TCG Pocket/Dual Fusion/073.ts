import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/073",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/073",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/073",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/073",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/073",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/073",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/073"
    },
    name: {
        en: "Paldean Wooper",
        fr: "Axoloto de Paldea",
        es: "Wooper de Paldea",
        "pt-br": "Wooper de Paldea",
        "zh-tw": "帕底亞烏波",
        ja: "パルデアウパー",
        ko: "팔데아우파",
        it: "Wooper di Paldea",
        de: "Paldea-Felino"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Mud-Slap",
                fr: "Coud'Boue",
                es: "Bofetón Lodo",
                it: "Fangosberla",
                de: "Lehmschelle",
                "pt-br": "Tapa de Lama",
                "zh-tw": "擲泥",
                ja: "Mud-Slap",
                ko: "Mud-Slap"
            },
            cost: [
                "Fighting"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
        fr: "Depuis qu’une dispute territoriale l’a contraint à vivre sur la terre ferme, il protège son corps en le recouvrant d’un fluide toxique.",
        es: "Tras perder una disputa territorial, se vio forzado a vivir en tierra firme y desarrolló una membrana mucosa tóxica con la que proteger su cuerpo.",
        it: "Vive sulla terraferma da quando perse una lotta territoriale. Per proteggere il corpo ha sviluppato una membrana mucosa tossica.",
        de: "Ein verlorener Revierkampf zwang es, an Land zu leben. Um sich zu schützen, entwickelte es eine giftige Schleimschicht auf seinem Körper.",
        "pt-br": "Após perder uma disputa por território, Wooper passou a viver em terra firme. Seu corpo mudou ao longo do tempo, desenvolvendo uma camada venenosa para protegê-lo.",
        "zh-tw": "因搶輸地盤而被迫在地上生活，久而久之變成了會用帶毒的黏膜來保護身體。",
        ja: "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
        ko: "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body."
    }
};

export default card;
