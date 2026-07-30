import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/097"
    },
    name: {
        en: "Galarian Obstagoon",
        fr: "Ixon de Galar",
        es: "Obstagoon de Galar",
        it: "Obstagoon di Galar",
        de: "Galar-Barrikadax",
        "pt-br": "Obstagoon de Galar",
        "zh-tw": "伽勒爾的伽勒爾 堵攔熊",
        ko: "가라르 가라르 가로막구리",
        ja: "ガラル ガラル タチフサグマ"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    evolveFrom: {
        en: "Galarian Linoone",
        fr: "Linéon de Galar",
        es: "Linoone de Galar",
        it: "Linoone di Galar",
        de: "Galar-Geradaks",
        "pt-br": "Linoone de Galar",
        "zh-tw": "伽勒爾的伽勒爾 直衝熊",
        ko: "가라르 가라르 직구리",
        ja: "ガラル ガラル マッスグマ"
    },
    stage: "Stage2",
    description: {
        en: "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch.",
        fr: "Il a évolué après avoir enchaîné de nombreux\ncombats. Le cri qu’il pousse lorsqu’il fait un « X »\navec ses bras ébranle n’importe quel ennemi.",
        es: "Evoluciona tras haber librado numerosas peleas.\nEl grito de guerra que profiere mientras pone los\nbrazos en cruz atemoriza a cualquier rival.",
        it: "Si è evoluto a forza di lottare. L’urlo di guerra\nche lancia mentre mette le braccia a X è in\ngrado di terrorizzare qualsiasi avversario.",
        de: "Durch das Austragen unzähliger Kämpfe hat es\nsich entwickelt. Formt es mit den Armen ein „X“\nund stößt einen Schrei aus, verschreckt das jeden.",
        "zh-tw": "在不斷的鬥爭中得到了進化。\n牠交叉著雙臂發出的怒吼\n能讓一切對手都為之膽怯。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless", "Colorless"],
            name: {
                en: "Bass Control"
            },
            effect: {
                en: "This attack does 80 damage to 1 of your opponent's Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
