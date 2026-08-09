import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/095",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/095"
    },
    name: {
        en: "Galarian Zigzagoon",
        fr: "Zigzaton de Galar",
        es: "Zigzagoon de Galar",
        it: "Zigzagoon di Galar",
        de: "Galar-Zigzachs",
        "pt-br": "Zigzagoon de Galar",
        "zh-tw": "伽勒爾蛇紋熊",
        ko: "가라르 가라르 지그제구리",
        ja: "ガラル ガラル ジグザグマ"
    },
    illustrator: "En Morikura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    stage: "Basic",
    description: {
        en: "Thought to be the oldest form of Zigzagoon, it moves in zigzags and wreaks havoc upon its surroundings.",
        fr: "C'est l'apparence originelle de Zigzaton, et donc la plus ancienne. Il sème le désordre en courant partout en zigzag.",
        es: "Parece ser que esta es la forma primitiva de Zigzagoon. Arma un alboroto tremendo a su alrededor cuando se mueve en zigzag.",
        it: "Pare che questa sia la forma originaria di Zigzagoon. Si muove a zig zag mettendo a soqquadro tutto ciò che lo circonda.",
        de: "Es hinterlässt überall ein riesiges Chaos, indem es sich im Zickzack bewegt. Hierbei handelt es sich offenbar um die älteste Form von Zigzachs.",
        "pt-br": "Acredita-se que esta seja a forma mais antiga de Zigzagoon, que se move em ziguezague e causa um estrago imenso aos seus arredores.",
        "zh-tw": "被認為是蛇紋熊最古老\n的樣子，會之字形走，\n把周圍弄得一團糟。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
