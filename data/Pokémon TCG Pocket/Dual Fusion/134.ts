import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/134",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/134",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/134",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/134",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/134",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/134",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/134",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/134"
    },
    name: {
        en: "Deerling",
        fr: "Vivaldaim",
        es: "Deerling",
        "pt-br": "Deerling",
        "zh-tw": "四季鹿",
        ja: "シキジカ",
        ko: "사철록",
        it: "Deerling",
        de: "Sesokitz"
    },
    illustrator: "saino misaki",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Flop",
                fr: "Flop",
                es: "Vuelta",
                it: "Tonfo",
                de: "Plumps",
                "pt-br": "Baque",
                "zh-tw": "活蹦亂跳",
                ja: "はねまわる",
                ko: "Flop"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "These Pokémon are not shy—they will behave as they please, even in front of people. If you feed one of them, it will quickly take a liking to you.",
        fr: "Peu farouche, il n’hésite pas à faire ce qui lui plaît, même en présence d’êtres humains. Il s’attache à quiconque le nourrit.",
        es: "No es nada tímido y hace lo que quiere incluso delante de la gente. Se encariña enseguida con quien le da de comer.",
        it: "Non è timido e si trova a suo agio anche davanti agli esseri umani. Basta dargli da mangiare perché si affezioni.",
        de: "Da es nicht schüchtern ist, fühlt es sich auch in Gegenwart von Menschen wohl. Wenn man es füttert, freundet es sich sofort mit einem an.",
        "pt-br": "Estes Pokémon não são tímidos e agem como bem entenderem, mesmo na frente de pessoas. Se você alimentar um, ele logo gostará de você.",
        "zh-tw": "毫不怕生的性格使牠在人類面前也會做任何動作，只要給牠食物，就能立刻對牠拉近關係。",
        ja: "人見知りしない 性格なので 人間の 前でも マイペース。 エサを あげると すぐ 懐くよ。",
        ko: "These Pokémon are not shy—they will behave as they please, even in front of people. If you feed one of them, it will quickly take a liking to you."
    }
};

export default card;
