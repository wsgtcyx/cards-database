import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Meowth",
        "fr": "Miaouss d'Alola",
        "es": "Meowth de Alola",
        "it": "Meowth di Alola",
        "de": "Alola-Miau",
        "pt-br": "Meowth de Alola",
        "zh-tw": "阿羅拉喵喵",
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It's accustomed to luxury because it\nused to live with Alolan royalty. As a\nresult, it's very picky about food.",
        "fr": "Il est habitué au luxe parce qu'il\nvivait avec la royauté d'Alola. En tant que\nrésultat, c'est très pointilleux sur la nourriture.",
        "es": "Está acostumbrado al lujo porque\nSolía vivir con la realeza de Alola. como un\nComo resultado, es muy exigente con la comida.",
        "it": "È abituato al lusso perché\nviveva con i reali di Alola. Come a\nrisultato, è molto esigente riguardo al cibo.",
        "de": "Es ist an Luxus gewöhnt, weil es\nlebte früher mit dem Alola-Königshaus zusammen. Als\nDas Ergebnis ist, dass es beim Essen sehr wählerisch ist.",
        "pt-br": "Está acostumado ao luxo porque\ncostumava viver com a realeza de Alola. Como um\nresultado, é muito exigente com a comida.",
        "zh-tw": "它習慣於奢侈，因為它\n曾經和阿羅拉皇室住在一起。作為一個\n結果，它對食物非常挑剔。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Meddle",
                "fr": "Se mêler",
                "es": "Entrometerse",
                "it": "Intromettersi",
                "de": "Einmischen",
                "pt-br": "Intromissão",
                "zh-tw": "插手"
            },
            cost: ["Darkness"],
            effect: {
                en: "Discard a random Pokémon Tool card from your opponent's hand.",
                "fr": "Défaussez une carte Outil Pokémon aléatoire de la main de votre adversaire.",
                "es": "Descarta una carta de Herramienta Pokémon aleatoria de la mano de tu oponente.",
                "it": "Scarta una carta Oggetto Pokémon casuale dalla mano del tuo avversario.",
                "de": "Wirf eine zufällige Pokémon-Ausrüstungskarte aus der Hand deines Gegners ab.",
                "pt-br": "Descarte uma carta aleatória de Ferramenta Pokémon da mão do seu oponente.",
                "zh-tw": "從對手的手牌中隨機捨棄一張神奇寶貝工具卡。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
