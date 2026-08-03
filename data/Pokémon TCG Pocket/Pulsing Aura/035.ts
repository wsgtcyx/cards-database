import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/035",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/035"
    },
    name: {
        en: "Politoed",
        fr: "Tarpaud",
        es: "Politoed",
        it: "Politoed",
        de: "Quaxo",
        "pt-br": "Politoed",
        "zh-tw": "蚊香蛙皇",
        ko: "왕구리",
        ja: "ニョロトノ"
    },
    illustrator: "okayamatakatoshi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    dexId: [186],
    evolveFrom: {
        en: "Poliwhirl",
        fr: "Têtarte",
        es: "Poliwhirl",
        it: "Poliwhirl",
        de: "Quaputzi",
        "pt-br": "Poliwhirl",
        "zh-tw": "蚊香君",
        ko: "슈륙챙이",
        ja: "ニョロゾ"
    },
    stage: "Stage2",
    description: {
        en: "It’s the leader of Poliwag and Poliwhirl. When Politoed roars, they all cower in fear.",
        fr: "Les Ptitard et Têtarte lui obéissent. Il n’a qu’à\ndonner de la voix pour les faire trembler comme\ndes feuilles.",
        es: "Lidera a Poliwag y a Poliwhirl. Cuando Politoed\nemite un bramido, todos se esconden en el acto\nasustados.",
        it: "È il re dei Poliwag e dei Poliwhirl. Il suo verso\ntonante fa fuggire atterriti gli avversari.",
        de: "Es ist der Anführer von Quapsel und Quaputzi.\nFängt Quaxo an seinen Unmut zu äußern,\nnehmen alle vor lauter Angst sofort Reißaus.",
        "pt-br": "É o líder de Poliwag e Poliwhirl. Quando Politoed ruge, todos eles se encolhem de medo.",
        "zh-tw": "蚊香蝌蚪和蚊香君的領袖。\n蚊香蛙皇一聲吼，\n大家都嚇得伏在地上一動不動。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Raid",
                fr: "Razzia Obscure",
                es: "Raid Oscuro",
                it: "Raid",
                de: "Überfall",
                "pt-br": "Reide",
                "zh-tw": "襲擊"
            },
            effect: {
                en: "If this Pokémon evolved from Poliwhirl during this turn, this attack does 50 more damage.",
                fr: "Si ce Pokémon a évolué à partir de Têtarte pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si este Pokémon evolucionó de Poliwhirl durante este turno, este ataque hace 50 puntos de daño más.",
                it: "Se questo Pokémon si è evoluto da Poliwhirl durante questo turno, questo attacco infligge 50 danni in più.",
                de: "Wenn sich dieses Pokémon in diesem Zug aus Quaputzi entwickelt hat, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon evoluiu de Poliwhirl durante este turno, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果這隻寶可夢在本回合中從 蚊香君 進化，則此攻擊造成的傷害增加 50 點。"
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
