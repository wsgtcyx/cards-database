import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/140",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/140",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/140",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/140",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/140",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/140",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/140",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/140"
    },
    name: {
        en: "Palkia",
        fr: "Palkia",
        es: "Palkia",
        "pt-br": "Palkia",
        "zh-tw": "帕路奇亞",
        ja: "パルキア",
        ko: "펄기아",
        it: "Palkia",
        de: "Palkia"
    },
    illustrator: "Taira Akitsu",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Spacial Rend",
                fr: "Spatio-Rift",
                es: "Corte Vacío",
                it: "Fendispazio",
                de: "Raumschlag",
                "pt-br": "Laceração Espacial",
                "zh-tw": "亞空裂斬",
                ja: "あくうせつだん",
                ko: "Spacial Rend"
            },
            cost: [
                "Colorless",
                "Water",
                "Water"
            ],
            damage: 70,
            effect: {
                en: "If your opponent has a Stadium in play, discard it.",
                fr: "Si votre adversaire a une carte Stade en jeu, défaussez‐la.",
                es: "Si tu rival tiene un Estadio en juego, descártalo.",
                it: "Se il tuo avversario ha una carta Stadio in gioco, scartala.",
                de: "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel.",
                "pt-br": "Se o seu oponente tiver um Estádio em jogo, descarte-o.",
                "zh-tw": "將場上的對手的競技場卡丟棄。",
                ja: "場に出ている相手のスタジアムをトラッシュ。",
                ko: "If your opponent has a Stadium in play, discard it."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology.",
        fr: "On dit que ce Pokémon vit dans l’interstice entre deux dimensions parallèles. Il apparaît dans la mythologie.",
        es: "Se dice que vive en una dimensión espacial paralela. Aparece en la mitología.",
        it: "Di lui si narra nella mitologia. Si dice che viva in uno squarcio fra dimensioni parallele.",
        de: "Man sagt, es lebe in einem Spalt in einer Paralleldimension. Es wird in der Mythologie erwähnt.",
        "pt-br": "Dizem que vive em uma dimensão espacial paralela à nossa. Aparece em mitologias.",
        "zh-tw": "據說住在互相平行的空間之間的裂縫，是在神話中登場的寶可夢。",
        ja: "並行して 並ぶ 空間の 狭間に 住むと 言われている。 神話に 登場する ポケモン。",
        ko: "It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology."
    }
};

export default card;
