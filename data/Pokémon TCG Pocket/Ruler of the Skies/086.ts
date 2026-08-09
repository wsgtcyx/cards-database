import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/086",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/086",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/086",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/086",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/086",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/086",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/086"
    },
    name: {
        en: "Excadrill",
        fr: "Minotaupe",
        es: "Excadrill",
        it: "Excadrill",
        de: "Stalobor",
        "pt-br": "Excadrill",
        "zh-tw": "龍頭地鼠",
        ko: "몰드류",
        ja: "ドリュウズ"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fighting"],
    dexId: [530],
    evolveFrom: {
        en: "Drilbur",
        fr: "Rototaupe",
        es: "Drilbur",
        it: "Drilbur",
        de: "Rotomurf",
        "pt-br": "Drilbur",
        "zh-tw": "螺釘地鼠",
        ko: "두더류",
        ja: "モグリュー"
    },
    stage: "Stage1",
    description: {
        en: "Its drill, which has evolved into steel, is strong enough to bore through iron plates. This Pokémon is a great help in tunnel construction.",
        fr: "Suite à son évolution, ses forets sont désormais en acier et lui permettent de transpercer les plaques de fer. Il aide souvent à la construction de tunnels.",
        es: "Su taladro se ha vuelto de acero tras evolucionar y es capaz de atravesar planchas metálicas. Es de gran ayuda en la construcción de túneles.",
        it: "La trivella si è evoluta diventando d'acciaio e può perforare una lastra di ferro. È molto utile per scavare tunnel.",
        de: "Seine zu Stahl weiterentwickelten Bohrer sind kräftig genug, um Eisenplatten zu durchbohren. Beim Tunnelbau ist es sehr hilfreich.",
        "pt-br": "Sua broca evoluiu para aço e é forte o suficiente para perfurar placas de ferro. Este Pokémon é muito útil em construções de túneis.",
        "zh-tw": "進化為鋼的鑽頭有著\n能穿透鐵板的破壞力。\n在隧道工程裡可幫上大忙。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Mud Shot",
                fr: "Tir de Boue",
                es: "Disparo Lodo",
                it: "Colpodifango",
                de: "Lehmschuss",
                "pt-br": "Tiro de Lama",
                "zh-tw": "泥巴射擊"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
