import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/087",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/087"
    },
    name: {
        en: "Scyther",
        fr: "Insécateur",
        es: "Scyther",
        it: "Scyther",
        de: "Sichlor",
        "pt-br": "Scyther",
        "zh-tw": "飛天螳螂",
        ko: "스라크",
        ja: "ストライク"
    },
    illustrator: "Krgc",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    dexId: [123],
    stage: "Basic",
    description: {
        en: "The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.",
        fr: "Les faux tranchantes de ses avant-bras deviennent de plus en plus tranchantes en coupant des objets durs.",
        es: "Las afiladas guadañas de sus antebrazos se vuelven cada vez más afiladas al cortar objetos duros.",
        it: "Le falci affilate sui suoi avambracci diventano sempre più affilate tagliando oggetti duri.",
        de: "Die scharfen Sensen an seinen Unterarmen werden beim Schneiden durch harte Gegenstände immer schärfer.",
        "pt-br": "As foices afiadas em seus antebraços tornam-se cada vez mais afiadas ao cortar objetos duros.",
        "zh-tw": "前臂上的鋒利鐮刀在切割堅硬的物體時變得越來越鋒利。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "U-turn",
                fr: "Demi-Tour",
                es: "Ida y Vuelta",
                it: "Retromarcia",
                de: "Kehrtwende",
                "pt-br": "Fazer Retorno",
                "zh-tw": "急速折返"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                de: "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此寶可夢與你的 1 個備戰寶可夢交換。"
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
