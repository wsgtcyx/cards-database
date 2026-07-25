import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/080",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/080",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/080",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/080",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/080",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/080"
    },
    name: {
        en: "Lucario",
        fr: "Lucario",
        es: "Lucario",
        it: "Lucario",
        de: "Lucario",
        "pt-br": "Lucario",
        "zh-tw": "路卡利歐",
        ko: "루카리오",
        ja: "ルカリオ"
    },
    illustrator: "NC Empire",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [448],
    evolveFrom: {
        en: "Riolu",
        fr: "Riolu",
        es: "Riolu",
        it: "Riolu",
        de: "Riolu",
        "pt-br": "Riolu",
        "zh-tw": "利歐路",
        ko: "리오르",
        ja: "リオル"
    },
    stage: "Stage1",
    description: {
        en: "It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey.",
        fr: "Il chasse ses proies en se servant d’une force\nappelée aura, dont la puissance est telle qu’elle\nlui permet de réduire un rocher en poussière.",
        es: "Caza a sus presas manipulando una energía,\ndenominada aura, cuya potencia es capaz incluso\nde hacer añicos rocas enormes.",
        it: "Caccia le prede usando un potere chiamato\naura, in grado di ridurre in frantumi anche\ngrossi macigni.",
        de: "Es jagt seine Beute, indem es eine Kraft\nmanipuliert, die Aura genannt wird. Dadurch\nkann es sogar große Felsen pulverisieren.",
        "pt-br": "Ele controla ondas conhecidas como auras, que são poderosas o suficiente para pulverizar rochas enormes. Ele usa essas ondas para abater suas presas.",
        "zh-tw": "操作一種被稱為波導的力量\n來進行狩獵。這種力量就連\n巨大的岩石也能擊得粉碎。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Close Combat",
                fr: "Close Combat",
                es: "A Bocajarro",
                it: "Zuffa",
                de: "Nahkampf",
                "pt-br": "Corpo a Corpo",
                "zh-tw": "近身戰"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes +20 damage from attacks.",
                fr: "Lors du prochain tour de votre adversaire, ce Pokémon subit +20 dégâts des attaques.",
                es: "Durante el próximo turno de tu rival, este Pokémon recibe +20 de daño por ataques.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce +20 danni dagli attacchi.",
                de: "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon +20 Schaden durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá +20 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這隻寶可夢受到的攻擊傷害+20。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
