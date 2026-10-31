import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/137",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/137",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/137",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/137",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/137",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/137",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/137",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/137"
    },
    name: {
        en: "Raboot",
        fr: "Lapyro",
        es: "Raboot",
        "pt-br": "Raboot",
        "zh-tw": "騰蹴小將",
        ja: "ラビフット",
        ko: "래비풋",
        it: "Raboot",
        de: "Kickerlo"
    },
    illustrator: "Keisin",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Fire"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Scorbunny",
        fr: "Flambino",
        es: "Scorbunny",
        it: "Scorbunny",
        de: "Hopplo",
        "pt-br": "Scorbunny",
        "zh-tw": "炎兔兒",
        ja: "ヒバニー",
        ko: "Scorbunny"
    },
    attacks: [
        {
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘",
                ja: "ずつき",
                ko: "Headbutt"
            },
            cost: [
                "Colorless"
            ],
            damage: 30
        }
    ],
    abilities: [
        {
            name: {
                en: "Jumping Coach",
                fr: "Entraînement au Bond",
                es: "Entrenador de Salto",
                it: "Allenatore di Saltelli",
                de: "Sprungtrainer",
                "pt-br": "Instrutor Saltitante",
                "zh-tw": "跳躍指導",
                ja: "ジャンピングコーチ",
                ko: "Jumping Coach"
            },
            effect: {
                en: "As long as this Pokémon is in play, flip 3 more coins for the Rabbit Jumping attack used by your Pokémon.",
                fr: "Tant que ce Pokémon est en jeu, lancez 3 pièces supplémentaires lorsque l'attaque Bond de Lapin est utilisée par vos Pokémon.",
                es: "Mientras este Pokémon esté en juego, lanza 3 monedas más para el ataque Brinconejo de tus Pokémon.",
                it: "Fintanto che questo Pokémon è in gioco, lancia una moneta 3 volte in più quando i tuoi Pokémon usano l'attacco Saltelli da Coniglio.",
                de: "Solange dieses Pokémon im Spiel ist, wirf 3 Münzen mehr, wenn dein Pokémon die Attacke Hasensprung einsetzen.",
                "pt-br": "Enquanto este Pokémon estiver em jogo, jogue 3 moedas a mais para o ataque Salto do Coelho usado pelos seus Pokémon.",
                "zh-tw": "只要這隻寶可夢在場上,自己的寶可夢使用的招式「兔兒跳」擲硬幣的次數增加3次。",
                ja: "このポケモンがいるかぎり、自分のポケモンが使うワザ「ラビットジャンプ」で投げるコインの数を、3回多くする。",
                ko: "As long as this Pokémon is in play, flip 3 more coins for the Rabbit Jumping attack used by your Pokémon."
            },
            type: "Ability"
        }
    ],
    description: {
        en: "Thanks to its soft and fluffy fur, Raboot can easily heat up its fire energy and produce flames with more power.",
        fr: "Son pelage doux et épais lui permet de mobiliser facilement son énergie incandescente, et ainsi de produire des flammes encore plus puissantes.",
        es: "Su suave pelaje le permite calentar energía ígnea con mayor facilidad y así expulsar llamas todavía más potentes.",
        it: "Grazie alla folta pelliccia, riesce a scaldare facilmente l'energia Fuoco e quindi a sprigionare fiamme ancora più potenti.",
        de: "Dank seines flauschigen Fells kann es leichter Feuer-Energie aufbauen und dadurch noch heißere Flammen ausstoßen.",
        "pt-br": "Graças ao seu pelo macio e fofinho, Raboot consegue aquecer rapidamente sua energia de fogo e produzir chamas mais poderosas.",
        "zh-tw": "蓬鬆的體毛幫助牠迅速 提升火之能量的溫度 釋放出更強烈的火焰。",
        ja: "ふかふかの 体毛の おかげで 炎エネルギーを 温めやすく さらに 強い 炎を 出せる。",
        ko: "Thanks to its soft and fluffy fur, Raboot can easily heat up its fire energy and produce flames with more power."
    }
};

export default card;
