import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/179",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/179",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/179",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/179",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/179",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/179",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/179"
    },
    name: {
        en: "Aipom",
        fr: "Capumain",
        es: "Aipom",
        it: "Aipom",
        de: "Griffel",
        "pt-br": "Aipom",
        "zh-tw": "長尾怪手",
        ko: "에이팜",
        ja: "エイパム"
    },
    illustrator: "osare",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [190],
    stage: "Basic",
    description: {
        en: "Its tail moves with greater dexterity than its hands. Making deft use of this tail, Aipom lives high among the treetops.",
        fr: "Il est encore plus agile avec sa queue qu'avec ses mains, ce qui lui permet de vivre dans les grands arbres.",
        es: "Vive en las copas de árboles de gran tamaño. Puede usar la cola con mayor destreza incluso que las manos.",
        it: "Vive sulla cima degli alberi più alti controllando con destrezza la coda, che ha più mobilità rispetto a una mano.",
        de: "Griffel lebt hoch oben in Baumwipfeln, wo es seinen Schweif geschickt einsetzt. Dieser ist viel beweglicher als seine Hände.",
        "pt-br": "Sua cauda se move com mais destreza do que suas mãos. Fazendo bom uso de seu rabo, Aipom vive entre os topos de árvores.",
        "zh-tw": "會巧妙地操縱比雙手\n還靈活的尾巴，\n生活在高高的樹上。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Playful Kick",
                fr: "Coup de Pied de Garnement",
                es: "Patada Juguetona",
                it: "Calcio Briccone",
                de: "Verspielter Kick",
                "pt-br": "Chute Brincalhão",
                "zh-tw": "調皮踢"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
