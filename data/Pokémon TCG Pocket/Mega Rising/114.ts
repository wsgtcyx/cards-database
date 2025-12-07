import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Gothitelle",
        "fr": "Gothitelle",
        "es": "Gothitelle",
        "it": "Gothitelle",
        "de": "Gothitelle",
        "pt-br": "Gothitelle",
        "zh-tw": "哥德小姐",
    },
    illustrator: "Eri Yamaki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    evolveFrom: {
        en: "Gothorita",
        "fr": "Gothorite",
        "es": "gothorita",
        "it": "Gothorita",
        "de": "Gothorita",
        "pt-br": "Gothorita",
        "zh-tw": "哥托里塔"
    },
    description: {
        en: "It gazes at the stars to predict the future. It acts\nsomewhat detached because it has seen the end\nof all existence.",
        "fr": "Il regarde les étoiles pour prédire l’avenir. Il agit\nun peu détaché car il a vu la fin\nde toute existence.",
        "es": "Mira las estrellas para predecir el futuro. Actúa\nalgo desapegado porque ha visto el final\nde toda existencia.",
        "it": "Guarda le stelle per predire il futuro. Agisce\nun po’ distaccato perché ha visto la fine\ndi tutta l'esistenza.",
        "de": "Es blickt in die Sterne, um die Zukunft vorherzusagen. Es wirkt\netwas distanziert, weil es das Ende gesehen hat\naller Existenz.",
        "pt-br": "Ele olha para as estrelas para prever o futuro. Ele atua\num pouco desapegado porque viu o fim\nde toda a existência.",
        "zh-tw": "它凝視星星來預測未來。它的作用\n有點超然，因為它已經看到了結局\n所有存在的。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Stellar Cradle",
                "fr": "Berceau stellaire",
                "es": "Cuna estelar",
                "it": "Culla stellare",
                "de": "Stellare Wiege",
                "pt-br": "Berço Estelar",
                "zh-tw": "恆星搖籃"
            },
            damage: 70,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "During your opponent's next turn, if they attach Energy from their Energy Zone to the Defending Pokémon, that Pokémon will be Asleep.",
                "fr": "Lors du prochain tour de votre adversaire, s'il attache de l'Énergie de sa Zone d'Énergie au Pokémon Défenseur, ce Pokémon sera Endormi.",
                "es": "Durante el próximo turno de tu rival, si une Energía de su Zona de Energía al Pokémon Defensor, ese Pokémon quedará Dormido.",
                "it": "Durante il prossimo turno del tuo avversario, se assegna Energia dalla sua Zona di Energia al Pokémon Difensore, quel Pokémon sarà Addormentato.",
                "de": "Wenn dein Gegner im nächsten Zug Energie aus seiner Energiezone an das verteidigende Pokémon anlegt, schläft dieses Pokémon.",
                "pt-br": "Durante o próximo turno do seu oponente, se ele anexar Energia da sua Zona de Energia ao Pokémon Defensor, esse Pokémon ficará Adormecido.",
                "zh-tw": "在對手的下一個回合中，如果他們將能量區中的能量附加到防守神奇寶貝上，該神奇寶貝將進入睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
