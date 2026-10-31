import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/011",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/011"
    },
    name: {
        en: "Chimchar",
        fr: "Ouisticram",
        es: "Chimchar",
        "pt-br": "Chimchar",
        "zh-tw": "小火焰猴",
        ja: "ヒコザル",
        ko: "불꽃숭이",
        it: "Chimchar",
        de: "Panflam"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Fury Swipes",
                fr: "Combo-Griffe",
                es: "Golpes Furia",
                it: "Sfuriate",
                de: "Kratzfurie",
                "pt-br": "Golpes de Fúria",
                "zh-tw": "亂抓",
                ja: "Fury Swipes",
                ko: "Fury Swipes"
            },
            cost: [
                "Fire"
            ],
            damage: "10x",
            effect: {
                en: "Flip 3 coins. This attack does 10 damage for each heads.",
                fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
                es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
                it: "Lancia 3 volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
                de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
                "zh-tw": "擲3次硬幣,造成正面出現的次數×10點傷害。",
                ja: "Flip 3 coins. This attack does 10 damage for each heads.",
                ko: "Flip 3 coins. This attack does 10 damage for each heads."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps.",
        fr: "Il escalade prestement les falaises escarpées et vit sur les sommets. Il éteint sa flamme avant de dormir.",
        es: "Escala acantilados escarpados con agilidad y vive en las cimas de montañas rocosas. Su fuego se apaga cuando duerme.",
        it: "Scala agilmente pareti rocciose e va a vivere sulle cime dei monti. Prima di dormire spegne la sua fiamma.",
        de: "Es lebt auf zerklüfteten Bergen und klettert mit Leichtigkeit steile Felswände hinauf. Bevor es schläft, geht das Feuer an seinem Hintern aus.",
        "pt-br": "Vive no topo de morros e montanhas íngremes e os escala com muita agilidade. Sua chama se apaga quando dorme.",
        "zh-tw": "能夠靈活地爬上斷崖絕壁，並棲息在岩山上。睡覺前會熄滅尾巴的火焰。",
        ja: "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps.",
        ko: "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps."
    }
};

export default card;
