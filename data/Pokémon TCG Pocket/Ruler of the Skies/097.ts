import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/097",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/097"
    },
    name: {
        en: "Galarian Obstagoon",
        fr: "Ixon de Galar",
        es: "Obstagoon de Galar",
        it: "Obstagoon di Galar",
        de: "Galar-Barrikadax",
        "pt-br": "Obstagoon de Galar",
        "zh-tw": "伽勒爾堵攔熊",
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
        "pt-br": "Este Pokémon evoluiu depois de travar muitas batalhas. Ao cruzar os braços, solta um grito que causa hesitação em qualquer oponente.",
        "zh-tw": "在不斷的鬥爭中得到了進化。\n牠交叉著雙臂發出的怒吼\n能讓一切對手都為之膽怯。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless", "Colorless"],
            name: {
                en: "Bass Control",
                fr: "Super Basse",
                es: "Control de Bajos",
                it: "Controllo dei Bassi",
                "pt-br": "Controle de Baixo",
                "zh-tw": "重低音",
                "de": "Basskontrolle"
            },
            effect: {
                en: "This attack does 80 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 80 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 80 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 80 danni a uno dei Pokémon del tuo avversario.",
                "pt-br": "Este ataque causa 80 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到80點傷害。",
                "de": "Diese Attacke fügt 1 Pokémon deines Gegners 80 Schadenspunkte zu."
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
