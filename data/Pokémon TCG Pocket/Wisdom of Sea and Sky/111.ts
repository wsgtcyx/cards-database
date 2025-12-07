import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Ariados",
        "fr": "Ariados",
        "es": "Ariadós",
        "it": "Ariadi",
        "de": "Ariados",
        "pt-br": "Ariados",
        "zh-tw": "阿里亞多斯"
    },
    illustrator: "Shinji Kanda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    evolveFrom: {
        en: "Spinarak",
        "fr": "Spinarak",
        "es": "espinarak",
        "it": "Spinarak",
        "de": "Spinarak",
        "pt-br": "Espinaraque",
        "zh-tw": "斯皮納拉克"
    },
    description: {
        en: "Every night, it wanders around in search of\nprey, whose movements it restrains by spewing\nthreads before it bites into them with its fangs.",
        "fr": "Chaque nuit, il erre à la recherche de\nproie dont il retient les mouvements en vomissant\nfils avant de les mordre avec ses crocs.",
        "es": "Cada noche deambula en busca de\npresa, cuyos movimientos restringe escupiendo\nhilos antes de morderlos con sus colmillos.",
        "it": "Ogni notte va in giro alla ricerca\npreda, di cui frena i movimenti vomitando\nfili prima di morderli con le zanne.",
        "de": "Jede Nacht wandert es auf der Suche umher\nBeute, deren Bewegungen es durch Ausstoßen einschränkt\nFäden, bevor es mit seinen Reißzähnen hineinbeißt.",
        "pt-br": "Todas as noites ele vagueia em busca de\npresa, cujos movimentos ela restringe vomitando\nfios antes de mordê-los com suas presas.",
        "zh-tw": "每天晚上，它都會四處遊蕩，尋找\n獵物，通過噴吐來限制其行動\n在它用尖牙咬住它們之前。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bind Down",
                "fr": "Lier",
                "es": "Atar",
                "it": "Legarsi",
                "de": "Binde dich fest",
                "pt-br": "Vincular",
                "zh-tw": "綁定"
            },
            damage: 40,
            cost: ["Darkness"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
