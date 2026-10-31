import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/005",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/005",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/005",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/005",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/005",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/SP1/005"
    },
    name: {
        en: "Cyndaquil",
        fr: "Héricendre",
        es: "Cyndaquil",
        "pt-br": "Cyndaquil",
        "zh-tw": "火球鼠",
        ja: "ヒノアラシ",
        ko: "브케인",
        it: "Cyndaquil",
        de: "Feurigel"
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
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            cost: [
                "Fire"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "It is timid and always curls itself up in a ball. If attacked, it flares up its back for protection.",
        fr: "Il est timide et se roule en boule pour se protéger. Attaqué, il s’enflamme le dos pour riposter.",
        es: "Es tímido y siempre se enrosca como una pelota. Si es atacado, enciende su lomo para protegerse.",
        it: "Spesso se ne sta appallottolato giacché timido. Se è attaccato, si difende infuocando il dorso.",
        de: "Es ist ruhig und kugelt sich stets zusammen. Zum Schutz entflammt es seinen Rücken.",
        "pt-br": "Ele é tímido e sempre se enrola em uma bola. Se atacado, incendeia suas costas como proteção.",
        "zh-tw": "牠很膽小，總是把身體蜷縮成球。受到攻擊時，會燃起背上的火焰來保護自己。",
        ja: "臆病で いつも 体を まるめている。 襲われると 背中の 炎を 燃え上がらせて 身を守る。",
        ko: "겁이 많아서 늘 몸을 웅크리고\n있다. 습격당하면 등의 불꽃을\n타오르게 해서 몸을 보호한다."
    }
};

export default card;
