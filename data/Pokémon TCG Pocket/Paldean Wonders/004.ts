import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/004",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/004"
    },
    name: {
        en: "Tarountula",
        fr: "Tissenboule",
        es: "Tarountula",
        it: "Tarountula",
        de: "Tarundel",
        "pt-br": "Tarountula",
        "zh-tw": "團珠蛛",
        pt: "Tarountula"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    dexId: [917],
    description: {
        en: "The thread it secretes from its rear is as strong as wire. The secret behind the thread's strength is the topic of ongoing research.",
        "fr": "Le fil qu’il sécrète par l’arrière est aussi résistant qu’un fil. Le secret de la solidité du fil fait l'objet de recherches en cours.",
        "es": "El hilo que segrega desde su trasero es tan fuerte como un alambre. El secreto detrás de la fuerza del hilo es tema de investigación en curso.",
        "it": "Il filo che secerne dalla parte posteriore è forte come un filo. Il segreto dietro la forza del filo è l'argomento della ricerca continua.",
        "de": "Der Faden, den es von hinten absondert, ist so stark wie Draht. Das Geheimnis hinter der Stärke des Threads ist Gegenstand laufender Forschung.",
        "pt-br": "O fio que ele secreta pela parte traseira é tão forte quanto um arame. O segredo por trás da força do fio é tema de pesquisas contínuas.",
        "zh-tw": "它從後方分泌出的絲線，堅韌如鐵絲。線程強度背後的秘密是正在進行的研究主題。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Hook",
                fr: "Crochet",
                "es": "Gancho",
                "it": "Gancio",
                de: "Hook",
                "pt-br": "Gancho",
                "zh-tw": "鉤"
            },
            damage: 20,
            cost: ["Grass"],
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
