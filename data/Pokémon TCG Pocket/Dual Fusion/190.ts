import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/190",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/190",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/190",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/190",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/190",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/190",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/190",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/190"
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
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
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
                en: "Singe",
                fr: "Roussi",
                es: "Quemadura",
                it: "Scottata",
                de: "Versengung",
                "pt-br": "Chamuscada",
                "zh-tw": "灼熱",
                ja: "こがす",
                ko: "Singe"
            },
            cost: [
                "Fire"
            ],
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。",
                ja: "相手のバトルポケモンをやけどにする。",
                ko: "Your opponent's Active Pokémon is now Burned."
            }
        }
    ],
    abilities: [],
    description: {
        en: "The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes.",
        fr: "Les flammes qui émanent de son dos atteignent leur pic d’intensité lorsqu’il est en colère. Elles lui permettent ainsi d’intimider ses adversaires.",
        es: "Cuando se enfada, las llamas que emite por el lomo arden con más vigor que nunca, lo cual intimida a sus rivales.",
        it: "Quando è adirato, le fiamme sul dorso raggiungono la massima intensità e intimoriscono i nemici.",
        de: "Die Flammen auf seinem Rücken lodern am stärksten, wenn es zornig ist. Dadurch schüchtert es seine Feinde ein.",
        "pt-br": "O fogo que sai de suas costas queima mais forte quando este Pokémon está com raiva. As chamas intimidam os inimigos.",
        "zh-tw": "從背上噴出的火焰會在生氣時燃燒得最猛烈，令敵手大嚇一跳。",
        ja: "背中から 吹き出す 炎は 怒ったときが いちばん 強く 燃え上がり 敵を 驚かせる。",
        ko: "The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes."
    }
};

export default card;
