import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/007",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/007"
    },
    name: {
        en: "Scyther",
        fr: "Insécateur",
        es: "Scyther",
        it: "Scyther",
        de: "Sichlor",
        "pt-br": "Scyther",
        "zh-tw": "飛天螳螂",
        ja: "ストライク",
        ko: "스라크"
    },
    illustrator: "GIDORA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Grass"
    ],
    dexId: [
        123
    ],
    stage: "Basic",
    description: {
        en: "The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.",
        fr: "À force de trancher des objets solides, ses avant-bras en forme de faux deviennent de plus en plus acérés.",
        es: "Las cortantes guadañas de sus antebrazos se vuelven más afiladas cada vez que cortan objetos duros.",
        it: "Le falci sulle sue zampe anteriori diventano sempre più affilate man mano che tranciano oggetti duri.",
        de: "Die scharfen Sicheln an den Unterarmen werden durch das Schneiden harter Objekte noch schärfer.",
        "pt-br": "As foices afiadas em seus antebraços se tornam cada vez mais afiadas ao cortarem objetos duros.",
        "zh-tw": "雙手的鐮刀鋒利無比，砍斷越多堅硬的東西，其鋒利程度也會隨之提升。",
        ja: "The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.",
        ko: "The sharp scythes on its forearms become increasingly sharp by cutting through hard objects."
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "U-turn",
                fr: "Demi-Tour",
                es: "Ida y Vuelta",
                it: "Retromarcia",
                de: "Kehrtwende",
                "pt-br": "Fazer Retorno",
                "zh-tw": "急速折返",
                ja: "U-turn",
                ko: "U-turn"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這隻寶可夢與備戰寶可夢互換。",
                ja: "Switch this Pokémon with 1 of your Benched Pokémon.",
                ko: "Switch this Pokémon with 1 of your Benched Pokémon."
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
    retreat: 1
};

export default card;
