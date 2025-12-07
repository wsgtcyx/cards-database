import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Ultra Necrozma ex",
        es: "Ultra-Necrozma ex",
        "fr": "Ultra Necrozma ex",
        "it": "UltraNecrozma es",
        "de": "Ultra Necrozma ex",
        "pt-br": "Ultra Necrozma ex",
        "zh-tw": "究極奈克洛茲瑪 ex"
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Photon Claw",
                es: "Garra Fotónica",
                "fr": "Griffe photonique",
                "it": "Artiglio fotonico",
                "de": "Photonenklaue",
                "pt-br": "Garra de Fóton",
                "zh-tw": "光子爪"
            },
            damage: 60,
            cost: ["Colorless", "Colorless", "Colorless"]
        },
        {
            name: {
                en: "Shoegaze",
                es: "Shoegaze",
                "fr": "Regard sur les chaussures",
                "it": "Shoegaze",
                "de": "Shoegaze",
                "pt-br": "Sapato",
                "zh-tw": "凝視鞋"
            },
            damage: 120,
            cost: ["Psychic", "Psychic", "Metal", "Metal"],
            effect: {
                en: "Discard the top 5 cards of each player's deck.",
                es: "Descarta las 5 primeras cartas de la baraja de cada jugador.",
                "fr": "Défaussez les 5 premières cartes du deck de chaque joueur.",
                "it": "Scarta le prime 5 carte del mazzo di ogni giocatore.",
                "de": "Wirf die obersten 5 Karten des Decks jedes Spielers ab.",
                "pt-br": "Descarte as 5 primeiras cartas do baralho de cada jogador.",
                "zh-tw": "丟棄每個玩家牌組頂部的 5 張牌。"
            }
        }],
    retreat: 2,
    boosters: ["vol9"],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }]
};
export default card;
