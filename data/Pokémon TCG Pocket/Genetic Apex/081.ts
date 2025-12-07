import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Omanyte",
        fr: "Amonita",
        es: "Omanyte",
        it: "Omanyte",
        de: "Amonitas",
        'pt-br': "Omanyte",
        ko: "암나이트",
        "zh-tw": "阿曼人"
    },
    illustrator: "Suwama Chiaki",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    stage: "Stage1",
    evolveFrom: {
        en: "Helix Fossil",
        "fr": "Hélice fossile",
        "es": "Fósil de hélice",
        "it": "Fossile dell'elica",
        "de": "Helix-Fossil",
        "pt-br": "Hélice Fóssil",
        "zh-tw": "螺旋化石"
    },
    attacks: [{
            cost: ["Water"],
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                'pt-br': "Revólver d'Água",
                ko: "물대포",
                "zh-tw": "水槍"
            },
            damage: "40"
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Diamond",
    description: {
        en: "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
        fr: "Ce Pokémon commence à poser problème,\ncar certains spécimens se sont enfuis ou\nont été relâchés après avoir été ressuscités.",
        es: "Varios ejemplares han escapado o bien han\nsido liberados tras su restauración, lo que\ncomienza a suscitar una serie de problemas.",
        it: "Questo Pokémon si sta rivelando un problema\nperché a volte fugge o viene liberato dopo\nessere stato rigenerato.",
        de: "Diese Pokémon entwickeln sich allmählich zu\neinem Problem, da einige wiederbelebte\nExemplare fliehen oder freigelassen werden.",
        'pt-br': "Alguns Omanyte escapam após serem restaurados\nou são soltos por pessoas na natureza. Por conta\ndisso, esta espécie está se tornando um problema.",
        ko: "복원된 후 도망치거나\n놓쳐버리는 경우가 생겨서\n문제시되고 있다.",
        "zh-tw": "由於一些阿曼人在被恢復後設法逃脫或被人類釋放到野外，這個物種正在成為一個問題。"
    },
    boosters: ["pikachu"]
};
export default card;
