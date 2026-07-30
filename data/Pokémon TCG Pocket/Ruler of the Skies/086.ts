import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/086"
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
        en: "Its drill, which has evolved into steel, is strong enough to bore through iron plates. This Pokémon is a great help in tunnel construction."
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
