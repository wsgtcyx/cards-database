import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Aggron",
        "fr": "Agron",
        "es": "Aggrón",
        "it": "Agron",
        "de": "Aggron",
        "pt-br": "Agron",
        "zh-tw": "波士可多拉",
    },
    illustrator: "Satoshi Shirai",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Metal"],
    evolveFrom: {
        en: "Lairon",
        "fr": "Lairon",
        "es": "Lairón",
        "it": "Lairón",
        "de": "Lairon",
        "pt-br": "Lairón",
        "zh-tw": "可多拉",
    },
    description: {
        en: "Aggron has a horn sharp enough to perforate\nthick iron sheets. It brings down its opponents by\nramming into them horn first.",
        "fr": "Aggron a une corne suffisamment pointue pour perforer\ntôles de fer épaisses. Il fait tomber ses adversaires en\nen les enfonçant d'abord dans la corne.",
        "es": "Aggron tiene un cuerno lo suficientemente afilado como para perforar.\nthick iron sheets. Derriba a sus oponentes por\nembistiendo primero la bocina.",
        "it": "Aggron ha un corno abbastanza affilato da poterlo perforare\nspesse lamiere di ferro. Abbatte i suoi avversari\nsperonandoli prima con il corno.",
        "de": "Aggron hat ein Horn, das scharf genug ist, um zu durchbohren\ndicke Eisenbleche. Es bringt seine Gegner um\nrammt sie zuerst mit der Hupe.",
        "pt-br": "Aggron tem um chifre afiado o suficiente para perfurar\ngrossas chapas de ferro. Ele derruba seus oponentes por\nbatendo neles com a buzina primeiro.",
        "zh-tw": "阿格隆有一隻鋒利的角，足以刺穿\n厚鐵片。它通過以下方式打倒對手\n首先撞向他們的號角。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Giga Impact",
                "fr": "Giga-Impact",
                "es": "Gigaimpacto",
                "it": "Gigaimpatto",
                "de": "Giga-Impact",
                "pt-br": "Giga Impacto",
                "zh-tw": "千兆影響"
            },
            damage: 150,
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Durante tu próximo turno, este Pokémon no puede atacar.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝無法攻擊。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4
};
export default card;
