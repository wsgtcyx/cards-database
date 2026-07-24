import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/032"
    },
    name: {
        en: "Naclstack",
        fr: "Amassel",
        es: "Naclstack",
        it: "Naclstack",
        de: "Sedisal",
        "pt-br": "Naclstack",
        "zh-tw": "鹽石壘",
        ko: "스태솔트",
        ja: "ジオヅム"
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fighting"],
    dexId: [933],
    evolveFrom: {
        en: "Nacli",
        fr: "Selutin",
        es: "Nacli",
        it: "Nacli",
        de: "Geosali",
        "pt-br": "Nacli",
        "zh-tw": "鹽石寶",
        ko: "베베솔트",
        ja: "コジオ"
    },
    stage: "Stage1",
    description: {
        en: "It compresses rock salt inside its body and shoots out hardened salt pellets with enough force to perforate an iron sheet.",
        fr: "Il comprime le sel gemme à l'intérieur de son corps et projette des boulettes de sel durci avec suffisamment de force pour perforer une tôle de fer.",
        es: "Comprime sal de roca dentro de su cuerpo y dispara bolitas de sal endurecidas con fuerza suficiente para perforar una lámina de hierro.",
        it: "Comprime il salgemma all'interno del suo corpo e spara fuori pellet di sale indurito con una forza sufficiente a perforare una lamiera di ferro.",
        de: "Es komprimiert Steinsalz in seinem Körper und schießt gehärtete Salzkügelchen mit genügend Kraft heraus, um ein Eisenblech zu durchbohren.",
        "pt-br": "Ele comprime sal-gema dentro de seu corpo e dispara bolinhas de sal endurecido com força suficiente para perfurar uma chapa de ferro.",
        "zh-tw": "它將岩鹽壓縮在體內，並以足夠的力量射出硬化的鹽粒，足以刺穿鐵皮。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Rock Throw",
                fr: "Jet-Pierres",
                es: "Lanzarrocas",
                it: "Sassata",
                de: "Steinwurf",
                "pt-br": "Lançamento de Rocha",
                "zh-tw": "落石"
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
