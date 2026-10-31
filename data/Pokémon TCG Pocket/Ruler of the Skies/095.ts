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
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/095",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/095",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/095"
    },
    name: {
        en: "Galarian Zigzagoon",
        fr: "Zigzaton de Galar",
        es: "Zigzagoon de Galar",
        it: "Zigzagoon di Galar",
        de: "Galar-Zigzachs",
        "pt-br": "Zigzagoon de Galar",
        "zh-tw": "伽勒爾蛇紋熊",
        ko: "가라르 지그제구리",
        ja: "ガラルジグザグマ"
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
        "zh-tw": "被認為是蛇紋熊最古老\n的樣子，會之字形走，\n把周圍弄得一團糟。",
        ja: "この姿が いちばん 古い ジグザグマの 姿 らしい。 ジグザグ動いて あたりを 荒らす。",
        ko: "이 모습이 가장 오래된 지그제구리의\n모습인 듯하다. 지그재그로 움직이며\n주변을 엉망으로 만든다."
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
                "zh-tw": "撞擊",
                ja: "たいあたり",
                ko: "몸통박치기"
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
