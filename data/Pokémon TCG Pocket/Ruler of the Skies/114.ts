import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/114",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/114",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/114",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/114",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/114",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/114",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/114"
    },
    name: {
        en: "Varoom",
        fr: "Vrombi",
        es: "Varoom",
        it: "Varoom",
        de: "Knattox",
        "pt-br": "Varoom",
        "zh-tw": "噗隆隆",
        ko: "부르롱",
        ja: "ブロロン"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Metal"],
    dexId: [965],
    stage: "Basic",
    description: {
        en: "The steel section is Varoom’s actual body. This Pokémon clings to rocks and converts the minerals within into energy to fuel its activities.",
        fr: "La section en acier est le corps réel du Vrombi. Ce Pokémon s'accroche aux rochers et convertit les minéraux qu'ils contiennent en énergie pour alimenter ses activités.",
        es: "La sección de acero es la carrocería real de Varoom. Este Pokémon se aferra a las rocas y convierte los minerales que contiene en energía para impulsar sus actividades.",
        it: "La sezione in acciaio è il corpo vero e proprio di Varoom. Questo Pokémon si aggrappa alle rocce e converte i minerali al suo interno in energia per alimentare le sue attività.",
        de: "Der Stahlabschnitt ist der eigentliche Körper von Knattox. Dieses Pokémon klammert sich an Steine ​​und wandelt die darin enthaltenen Mineralien in Energie um, um seine Aktivitäten anzutreiben.",
        "pt-br": "A seção de aço é o corpo real do Varoom. Este Pokémon se agarra às rochas e converte os minerais contidos em energia para alimentar suas atividades.",
        "zh-tw": "鋼截面是噗隆隆的實體。這種寶可夢會附著在岩石上，並將其中的礦物質轉化為能量來為其活動提供燃料。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                en: "Headbutt Bounce",
                fr: "Culbute Surprise",
                es: "Bote Cabezazo",
                it: "Rimbalzo della testata",
                de: "Kopfstoß-Abprall",
                "pt-br": "Cabeçada Ricochete",
                "zh-tw": "魯莽頭擊"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
