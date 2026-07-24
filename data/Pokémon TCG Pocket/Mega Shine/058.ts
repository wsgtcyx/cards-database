import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/058"
    },
    name: {
        en: "Jigglypuff",
        fr: "Rondoudou",
        es: "Jigglypuff",
        it: "Jigglypuff",
        de: "Pummeluff",
        "pt-br": "Jigglypuff",
        "zh-tw": "胖丁",
        ko: "푸린",
        ja: "プリン"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [39],
    stage: "Basic",
    description: {
        en: "If it inflates to sing a lullaby, it can perform longer and cause sure drowsiness in its audience.",
        fr: "En se gonflant, il peut chanter une longue berceuse\nqui endort inévitablement ses adversaires.",
        es: "Si se hincha para cantar una nana, cantará más tiempo\ny podría causar sopor en el público.",
        it: "Se si gonfia e usa il suo Canto diventa più resistente\ne causa una forte sonnolenza in chi lo ascolta.",
        de: "Wenn es Gesang einsetzt, steigt seine Ausdauer\nund seine Zuhörer werden in Tiefschlaf versetzt.",
        "pt-br": "Se inflar para cantar uma canção de ninar, pode durar mais tempo e causar certa sonolência no público.",
        "zh-tw": "如果它充氣來唱搖籃曲，它可以表演更長時間並導致觀眾昏昏欲睡。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Stampede",
                fr: "Ruée",
                es: "Estampida",
                it: "Fuggi Fuggi",
                de: "Zertrampeln",
                "pt-br": "Estouro",
                "zh-tw": "踩"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
