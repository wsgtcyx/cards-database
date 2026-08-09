import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/051",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/051",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/051",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/051",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/051",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/051",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/051"
    },
    name: {
        en: "Shinx",
        fr: "Lixy",
        es: "Shinx",
        it: "Shinx",
        de: "Sheinux",
        "pt-br": "Shinx",
        "zh-tw": "小貓怪",
        ko: "꼬링크",
        ja: "コリンク"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [403],
    stage: "Basic",
    description: {
        en: "The extension and contraction of its muscles generates electricity. Its fur glows when it’s in trouble.",
        fr: "Lorsqu'il fait travailler ses muscles, il génère de l'électricité. Sa fourrure étincelle en cas de danger.",
        "es": "Produce electricidad contrayendo sus músculos. Si siente peligro, su pelaje brilla resplandeciente",
        it: "Il movimento dei suoi muscoli produce elettricità. In caso di pericolo, la sua pelliccia si illumina tanto da diventare abbagliante.",
        de: "Es erzeugt Elektrizität, indem es seine Muskeln streckt und wieder zusammenzieht. Steckt es in der Klemme, leuchtet sein Fell gleißend hell.",
        "pt-br": "A expansão e contração de seus músculos gera eletricidade. Seu pelo brilha quando está em perigo.",
        "zh-tw": "只要伸縮肌肉就能夠\n產生電流。身陷危機時\n體毛會發出刺眼的亮光。"
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Static Shock",
                fr: "Choc Statique",
                es: "Impacto Estático",
                it: "Shock Statico",
                de: "Statischer Schock",
                "pt-br": "Choque de Estática",
                "zh-tw": "劈哩啪啦"
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
    retreat: 1
};
export default card;
