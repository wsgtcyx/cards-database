import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Frogadier",
        "fr": "Frogadier",
        "es": "ranadier",
        "it": "Frogadier",
        "de": "Frogadier",
        "pt-br": "Sapo",
        "zh-tw": "呱頭蛙",
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Froakie",
        "fr": "Froakie",
        "es": "Froakie",
        "it": "Froakie",
        "de": "Froakie",
        "pt-br": "Froakie",
        "zh-tw": "弗羅阿基"
    },
    description: {
        en: "Its swiftness is unparalleled.\nIt can scale a tower of more\nthan 2,000 feet in a minute's time.",
        "fr": "Sa rapidité est sans précédent.\nIl peut escalader une tour de plus\nplus de 2 000 pieds en une minute.",
        "es": "Su rapidez es incomparable.\nPuede escalar una torre de más\nde 2.000 pies en un minuto.",
        "it": "La sua rapidità non ha eguali.\nPuò scalare una torre di più\npiù di 2.000 piedi in un minuto.",
        "de": "Seine Schnelligkeit ist beispiellos.\nEs kann einen Turm von mehr erklimmen\nmehr als 2.000 Fuß in einer Minute.",
        "pt-br": "Sua rapidez é incomparável.\nEle pode escalar uma torre de mais\nmais de 2.000 pés em um minuto.",
        "zh-tw": "其速度之快是無與倫比的。\n它可以攀爬更多的塔\n一分鐘內超過 2,000 英尺。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bounce",
                "fr": "Rebond",
                "es": "Rebotar",
                "it": "Rimbalzo",
                "de": "Prallen",
                "pt-br": "Quicar",
                "zh-tw": "彈跳"
            },
            damage: 40,
            cost: ["Water", "Water"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                "fr": "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                "es": "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                "it": "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                "de": "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此神奇寶貝與你的 1 個替補神奇寶貝交換。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
