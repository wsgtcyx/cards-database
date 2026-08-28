import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/042",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/042",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/042",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/042",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/042",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/042"
    },
    name: {
        en: "Team Rocket's Koffing",
        fr: "Smogo de la Team Rocket",
        es: "Koffing del Team Rocket",
        it: "Koffing del Team Rocket",
        de: "Team Rockets Smogon",
        "pt-br": "Koffing da Equipe Rocket",
        "zh-tw": "火箭隊的瓦斯彈",
        ko: "로켓단의 또가스",
        ja: "ロケット団のドガース"
    },
    illustrator: "Takeshi Nakamura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    stage: "Basic",
    description: {
        en: "The poisonous gases it contains are a little bit lighter than air. That's why it's always slightly airborne.",
        fr: "Les gaz toxiques qu'il contient sont un peu plus légers que l'air et le maintiennent en lévitation.",
        es: "Los gases venenosos que contiene son ligeramente menos pesados que el aire, por lo que siempre flota levemente.",
        it: "gas velenosi che contiene sona di paco più leggeri dell'aria, perció resta sollevato da terra.",
        de: "Das giftige Gas in seinem lrneren ist etwas leichter als Luft. Dadurch schwebt es stets Höhe.",
        "pt-br": "Sous gises venenosos são um pouco mais leves que o ar. Por isso, está sempre levemente flutuando.",
        "zh-tw": "體內的毒瓦斯成分比空氣來得輕一點，所以總是微微浮在空中。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Reverse Thrust",
                fr: "Poussée Inverse",
                es: "Invertir Impulso",
                it: "Tornaindietro",
                de: "Umkehrschub",
                "pt-br": "Impulso Reverso",
                "zh-tw": "逆向噴射"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這隻寶可夢與備戰寶可夢互換。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
