import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/123",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/123",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/123",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/123",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/123",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/123"
    },
    name: {
        en: "Melmetal",
        fr: "Melmetal",
        es: "Melmetal",
        it: "Melmetal",
        de: "Melmetal",
        "pt-br": "Melmetal",
        "zh-tw": "美錄梅塔",
        ko: "멜메탈",
        ja: "メルメタル"
    },
    illustrator: "Jerky",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    dexId: [809],
    evolveFrom: {
        en: "Meltan",
        fr: "Meltan",
        es: "Meltan",
        it: "Meltan",
        de: "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美錄坦",
        ko: "멜탄",
        ja: "メルタン"
    },
    stage: "Stage1",
    description: {
        en: "Centrifugal force is behind the punches of Melmetal’s heavy hex-nut arms. Melmetal is said to deliver the strongest punches of all Pokémon.",
        fr: "On dit que, grâce à la force centrifuge, les coups\nde poing qu’il assène avec ses lourds écrous\nseraient les plus dévastateurs parmi les Pokémon.",
        es: "Gracias a la inercia y la fuerza centrífuga, los\npuñetazos que propina con sus pesadas tuercas\nson los más potentes del mundo Pokémon.",
        it: "Sferra pugni con i suoi dadi metallici sfruttando la\nforza centrifuga. Si dice che nessun altro Pokémon\nsia capace di sferrarne di altrettanto potenti.",
        de: "Es holt mit Fliehkraft Schwung, um mit seinen\nschweren Muttern Hiebe auszuteilen, die stärker\nsein sollen als die aller anderen Pokémon.",
        "pt-br": "A força centrífuga está por trás dos golpes dos pesados ​​braços hexagonais do Melmetal. Diz-se que Melmetal desfere os socos mais fortes de todos os Pokémon.",
        "zh-tw": "美錄梅塔利用離心力帶動\n沉重的螺帽揮出的拳擊\n被認為是寶可夢界之最。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Metal"],
            name: {
                en: "Overdrive Smash",
                fr: "Boost Atomisant",
                es: "Sacudida Superdirecta",
                it: "Devastacolpo",
                de: "Turbosmash",
                "pt-br": "Golpe Exaustivo",
                "zh-tw": "超頻擊碎"
            },
            effect: {
                en: "During your next turn, this Pokémon's Overdrive Smash attack does +60 damage.",
                fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige + 60 dégâts.",
                es: "Durante tu próximo turno, el ataque Sacudida Superdirecta de este Pokémon hace Overdrive Smash+60 puntos[/Ctrl:NoBreak] de daño.",
                it: "Durante il tuo prossimo turno, l'attacco Devastacolpo di questo Pokémon infligge +60 danni.",
                de: "Während deines nächsten Zuges fügt die Attacke Turbosmash von diesem Pokémon + 60 Schadenspunkte zu.",
                "pt-br": "Durante o seu próximo turno, o ataque Golpe Exaustivo deste Pokémon causará + 60 pontos de dano.",
                "zh-tw": "在你的下一個回合中，這只寶可夢的超速粉碎攻擊造成+60點傷害。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
