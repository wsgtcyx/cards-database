import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Palossand",
        "fr": "Palosse",
        "es": "Palossand",
        "it": "Palossand",
        "de": "Palossand",
        "pt-br": "Palossand",
        "zh-tw": "噬沙堡爺",
    },
    illustrator: "Hasuno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    evolveFrom: {
        en: "Sandygast",
        "fr": "Sandygast",
        "es": "sandygast",
        "it": "Sandygast",
        "de": "Sandygast",
        "pt-br": "Sandygast",
        "zh-tw": "沙丘娃",
    },
    description: {
        en: "The terrifying Palossand drags smaller Pokémon\ninto its sandy body. Once its victims are trapped,\nit drains them of their vitality whenever it pleases.",
        "fr": "Le terrifiant Palossand entraîne des Pokémon plus petits\ndans son corps sableux. Une fois ses victimes piégées,\ncela les vide de leur vitalité quand bon lui semble.",
        "es": "El aterrador Palossand arrastra Pokémon más pequeños\nen su cuerpo arenoso. Una vez que sus víctimas quedan atrapadas,\nles quita su vitalidad cuando le place.",
        "it": "The terrifying Palossand drags smaller Pokémon\nnel suo corpo sabbioso. Once its victims are trapped,\nli prosciuga della loro vitalità ogni volta che vuole.",
        "de": "Der furchteinflößende Palossand schleppt kleinere Pokémon mit sich\nin seinen sandigen Körper. Sobald seine Opfer gefangen sind,\nes entzieht ihnen ihre Vitalität, wann immer es ihnen gefällt.",
        "pt-br": "O aterrorizante Palossand arrasta Pokémon menores\nem seu corpo arenoso. Uma vez que suas vítimas estão presas,\nisso drena sua vitalidade sempre que lhe agrada.",
        "zh-tw": "可怕的帕羅沙拖曳著較小的神奇寶貝\n進入它的沙質身體。一旦受害者被困，\n它隨時都會耗盡他們的活力。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sand Tomb",
                "fr": "Tombeau de sable",
                "es": "Tumba de arena",
                "it": "Tomba di sabbia",
                "de": "Sandgrab",
                "pt-br": "Tumba de Areia",
                "zh-tw": "沙墓"
            },
            damage: 90,
            cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                "fr": "Lors du prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                "es": "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                "it": "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                "de": "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
