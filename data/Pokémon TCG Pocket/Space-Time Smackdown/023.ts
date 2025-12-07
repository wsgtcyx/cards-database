import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Magmar",
        fr: "Magmar",
        es: "Magmar",
        it: "Magmar",
        de: "Magmar",
        'pt-br': "Magmar",
        ko: "마그마",
        "zh-tw": "鴨嘴火獸",
    },
    illustrator: "Hiroki Asanuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    description: {
        en: "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
        fr: "Il achève ses proies avec ses flammes, mais\nil lui arrive de les calciner accidentellement,\nà son plus grand regret.",
        es: "Abate a sus presas con las llamas\nque genera y con frecuencia acaba\nreduciéndolas a carbonilla por accidente.",
        it: "Abbatte le sue prede con le fiamme, ma\nfinisce per carbonizzarle accidentalmente,\ncon suo grande rammarico.",
        de: "Magmar erlegt seine Beute mit Feuer. Manchmal\nröstet es diese zu seinem Bedauern so stark,\ndass sie versehentlich verkohlt.",
        'pt-br': "Magmar incendeia suas presas, mas sempre se\narrepende ao perceber que as reduziu a cinzas.",
        ko: "불꽃으로 먹이를 꼼짝 못 하게 한다.\n무의식중에 너무 오래 익혀서\n까맣게 태우고는 후회한다.",
        "zh-tw": "瑪格瑪用火消滅獵物。但一旦它意識到自己已經把它想要的獵物燒成了焦脆的東西，它就會後悔這個習慣。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stoke",
                fr: "Attisement",
                es: "Atizador",
                it: "Attizzatoio",
                de: "Anheizen",
                'pt-br': "Carregar",
                ko: "타오르기",
                "zh-tw": "斯托克"
            },
            cost: ["Fire"],
            effect: {
                en: "Take a {R} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez une Énergie {R} de votre zone Énergie et attachez-la à ce Pokémon.",
                es: "Une 1 Energía {R} de tu área de Energía a este Pokémon.",
                it: "Prendi un'Energia {R} dalla tua Zona Energia e assegnala a questo Pokémon.",
                de: "Lege 1 {R}-Energie aus deinem Energiebereich an dieses Pokémon an.",
                'pt-br': "Pegue 1 Energia {R} da sua Zona de Energia e ligue-a a este Pokémon.",
                ko: "자신의 에너지존에서 {R}에너지를 1개 내보내 이 포켓몬에게 붙인다.",
                "zh-tw": "從你的能量區取出一個{R}能量並將其附加到該神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["palkia"]
};
export default card;
