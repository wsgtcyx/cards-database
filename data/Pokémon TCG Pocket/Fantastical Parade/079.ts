import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/079"
    },
    name: {
        en: "Machop",
        "fr": "Machop",
        "es": "Machop",
        "it": "Machop",
        "de": "Machop",
        "pt-br": "Machop",
        "zh-tw": "馬喬普"
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "Always brimming with power, it passes time by\nlifting boulders. Doing so makes it even stronger.",
        "fr": "Toujours débordant de puissance, il fait passer le temps\nsoulever des rochers. Cela le rend encore plus fort.",
        "es": "Siempre rebosante de poder, pasa el tiempo\nlevantando rocas. Hacerlo lo hace aún más fuerte.",
        "it": "Sempre pieno di potere, passa il tempo\nsollevamento massi. Farlo lo rende ancora più forte.",
        "de": "Stets voller Kraft vertreibt es die Zeit\nHeben von Felsbrocken. Dadurch wird es noch stärker.",
        "pt-br": "Sempre cheio de poder, passa o tempo\nlevantando pedras. Fazer isso o torna ainda mais forte.",
        "zh-tw": "總是充滿力量，流逝時間\n舉起巨石。這樣做會讓它變得更加強大。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Shatter",
                "fr": "Briser",
                "es": "Romper",
                "it": "Frantumare",
                "de": "Zerschmettern",
                "pt-br": "Quebrar",
                "zh-tw": "粉碎"
            },
            damage: 10,
            cost: ["Colorless"],
            effect: {
                en: "Discard a Stadium in play.",
                "fr": "Défaussez un stade en jeu.",
                "es": "Descartar un Estadio en juego.",
                "it": "Scarta uno Stadio in gioco.",
                "de": "Wirf ein im Spiel befindliches Stadion ab.",
                "pt-br": "Descarte um Estádio em jogo.",
                "zh-tw": "丟棄正在進行中的體育場。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
