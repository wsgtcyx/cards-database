import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/155",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/155",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/155",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/155",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/155",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/155",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/155"
    },
    name: {
        en: "Mega Greninja ex",
        fr: "Méga-Amphinobi-ex",
        es: "Mega-Greninja ex",
        "pt-br": "Mega Greninja ex",
        "zh-tw": "超級甲賀忍蛙ex",
        ja: "メガゲッコウガex",
        ko: "메가개굴닌자 ex",
        it: "Mega Greninja-ex",
        de: "Mega-Quajutsu-ex"
    },
    illustrator: "Keisuke Azuma",
    rarity: "Two Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 200,
    types: [
        "Water",
        "Darkness"
    ],
    stage: "Stage2",
    retreat: 0,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Frogadier",
        fr: "Croâporal",
        es: "Frogadier",
        it: "Frogadier",
        de: "Amphizel",
        "pt-br": "Frogadier",
        "zh-tw": "呱頭蛙",
        ja: "Frogadier",
        ko: "Frogadier"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Splash of Darkness",
                fr: "Éclaboussure Ténébreuse",
                es: "Salpicadura Siniestra",
                it: "Spruzzo Ottenebrante",
                de: "Spritzer der Finsternis",
                "pt-br": "Jato Sombrio",
                "zh-tw": "暗黑水飛濺",
                ja: "Splash of Darkness",
                ko: "Splash of Darkness"
            },
            cost: [
                "Water",
                "Water"
            ],
            damage: 100,
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在下個對手的回合,受到這個招式的寶可夢無法撤退。",
                ja: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                ko: "During your opponent's next turn, the Defending Pokémon can't retreat."
            }
        }
    ],
    abilities: []
};

export default card;
