import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Varoom",
        fr: "Vrombi",
        es: "Varoom",
        it: "Varoom",
        de: "Knattox",
        "pt-br": "Varoom",
        "zh-tw": "噗隆隆",
        pt: "Varoom"
    },
    illustrator: "nagimiso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [965],
    description: {
        en: "The steel section is Varoom's actual body. This Pokémon clings to rocks and converts the minerals within into energy to fuel its activities.",
        "fr": "La section en acier est le corps réel du Vrombi. Ce Pokémon s'accroche aux rochers et convertit les minéraux qu'ils contiennent en énergie pour alimenter ses activités.",
        "es": "La sección de acero es la carrocería real de Varoom. Este Pokémon se aferra a las rocas y convierte los minerales que contiene en energía para impulsar sus actividades.",
        "it": "La sezione in acciaio è il vero corpo di Varoom. Questo Pokémon si aggrappa alle rocce e converte i minerali al suo interno in energia per alimentare le sue attività.",
        "de": "Der Stahlabschnitt ist der eigentliche Körper von Knattox. Dieses Pokémon klammert sich an Steine ​​und wandelt die darin enthaltenen Mineralien in Energie um, um seine Aktivitäten anzutreiben.",
        "pt-br": "A seção de aço é o corpo real do Varoom. Este Pokémon se agarra às rochas e converte os minerais contidos em energia para alimentar suas atividades.",
        "zh-tw": "鋼截面是噗隆隆的實體。這種寶可夢會附著在岩石上，並將其中的礦物質轉化為能量來為其活動提供燃料。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Bater",
                "zh-tw": "內存",
                'es-mx': "Colisión",
                pt: "Aríete"
            },
            damage: "20",
            cost: ["Metal"],
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
