import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Dusclops",
        "fr": "Dusclops",
        "es": "Dusclops",
        "it": "Dusclops",
        "de": "Dusclops",
        "pt-br": "Dusclops",
        "zh-tw": "夜巨人",
    },
    illustrator: "Kazuma Koda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Duskull",
        "fr": "Crâne crépusculaire",
        "es": "cráneo oscuro",
        "it": "Teschio crepuscolare",
        "de": "Dämmerung",
        "pt-br": "Crepúsculo",
        "zh-tw": "暮色骷髏"
    },
    description: {
        en: "It seeks drifting will-o'-the-wisps and sucks them\ninto its empty body. What happens inside is\na mystery.",
        "fr": "Il cherche les feux follets à la dérive et les suce\ndans son corps vide. Ce qui se passe à l'intérieur est\nun mystère.",
        "es": "Busca fuegos fatuos a la deriva y los chupa.\nen su cuerpo vacío. Lo que pasa dentro es\nun misterio.",
        "it": "Cerca i fuochi fatui alla deriva e li succhia\nnel suo corpo vuoto. Quello che succede dentro è\nun mistero.",
        "de": "Es sucht nach treibenden Irrlichtern und saugt sie aus\nin seinen leeren Körper. Was im Inneren passiert, ist\nein Geheimnis.",
        "pt-br": "Ele procura fogos-fátuos à deriva e os suga\nem seu corpo vazio. O que acontece lá dentro é\num mistério.",
        "zh-tw": "它尋找漂浮的鬼火併吸走它們\n進入它空虛的身體。裡面發生的事情是\n一個謎。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Will-O-Wisp",
                "fr": "Feu Follet",
                "es": "Fuego fatuo",
                "it": "Fuoco fatuo",
                "de": "Irrlicht",
                "pt-br": "Will-O-Wisp",
                "zh-tw": "鬼火"
            },
            damage: 30,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
