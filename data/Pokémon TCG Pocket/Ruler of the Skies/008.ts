import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/008",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/008"
    },
    name: {
        en: "Kricketot",
        fr: "Crikzik",
        es: "Kricketot",
        it: "Kricketot",
        de: "Zirpurze",
        "pt-br": "Kricketot",
        "zh-tw": "圓法師",
        ko: "귀뚤뚜기",
        ja: "コロボーシ"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [401],
    stage: "Basic",
    description: {
        en: "When its antennae hit each other, it sounds like the music of a xylophone.",
        fr: "Quand ses antennes s’entrechoquent, elles laissent échapper\nun bruit de xylophone.",
        es: "Si choca sus antenas, emite un sonido similar al de un\nxilófono.",
        it: "Le antenne, scontrandosi, producono un suono simile allo\nxilofono: klon, klon!",
        de: "Wenn seine zwei Antennen sich berühren, erklingt ein Ruf\nwie das Spiel eines Xylophons."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Beat",
                fr: "Bataille",
                es: "Toque",
                it: "Colpo",
                de: "Schlagen",
                "pt-br": "Pulso",
                "zh-tw": "敲擊"
            },
            damage: 10
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
