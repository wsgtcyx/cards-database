import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/005",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/005",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/005"
    },
    name: {
        en: "Spidops",
        fr: "Filentrappe",
        es: "Spidops",
        it: "Spidops",
        de: "Spinsidias",
        "pt-br": "Spidops",
        "zh-tw": "操陷蛛",
        pt: "Spidops"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    dexId: [918],
    evolveFrom: {
        en: "Tarountula",
        fr: "Tissenboule",
        es: "Tarountula",
        it: "Tarountula",
        de: "Tarundel",
        "pt-br": "Tarountula",
        "zh-tw": "團珠蛛",
        pt: "Tarountula"
    },
    description: {
        en: "Spidops covers its territory in tough, sticky threads to set up traps for intruders.",
        "fr": "Filentrappe couvre son territoire de fils résistants et collants pour tendre des pièges aux intrus.",
        "es": "Spidops cubre su territorio con hilos resistentes y pegajosos para tender trampas a los intrusos.",
        "it": "Gli Spidops ricoprono il loro territorio con fili resistenti e appiccicosi per creare trappole per gli intrusi.",
        "de": "Spinsidias deckt sein Revier mit zähen, klebrigen Fäden ab, um Fallen für Eindringlinge aufzustellen.",
        "pt-br": "Spidops cobre seu território com fios resistentes e pegajosos para preparar armadilhas para intrusos.",
        "zh-tw": "操陷蛛 用堅韌、黏性的線覆蓋其領地，為入侵者設置陷阱。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Bind Down",
                fr: "Astreinte",
                es: "Amarrar",
                it: "Legafermo",
                de: "Anbinden",
                "pt-br": "Vincular",
                "zh-tw": "綁定",
                pt: "Aprisionamento",
                'es-mx': "Amarrar"
            },
            damage: "40",
            cost: ["Grass"],
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。",
                'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
