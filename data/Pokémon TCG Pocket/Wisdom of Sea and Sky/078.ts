import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Togepi",
        "fr": "Togépi",
        "es": "Togepi",
        "it": "Togepi",
        "de": "Togepi",
        "pt-br": "Togepi",
        "zh-tw": "托蓋皮"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "The shell seems to be filled with joy. It is said\nthat it will share good luck when treated kindly.",
        "fr": "La coquille semble remplie de joie. On dit\nqu'il partagera la chance s'il est traité avec gentillesse.",
        "es": "El caparazón parece estar lleno de alegría. se dice\nque compartirá buena suerte si se le trata con amabilidad.",
        "it": "Il guscio sembra pieno di gioia. Si dice\nche condividerà la buona fortuna se trattato con gentilezza.",
        "de": "Die Hülle scheint voller Freude zu sein. Es heißt\ndass es viel Glück bringt, wenn es freundlich behandelt wird.",
        "pt-br": "A concha parece estar cheia de alegria. É dito\nque compartilhará boa sorte quando tratado com gentileza.",
        "zh-tw": "貝殼裡似乎充滿了喜悅。據說\n如果受到善待，它會分享好運。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Charm",
                "fr": "Charme",
                "es": "Encanto",
                "it": "Fascino",
                "de": "Charme",
                "pt-br": "Charme",
                "zh-tw": "魅力"
            },
            cost: ["Colorless"],
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
                "fr": "Lors du prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent -20 dégâts.",
                "es": "Durante el próximo turno de tu rival, los ataques utilizados por el Pokémon Defensor causan −20 de daño.",
                "it": "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -20 danni.",
                "de": "Während des nächsten Zuges deines Gegners verursachen Angriffe des verteidigenden Pokémon −20 Schadenspunkte.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados ​​pelo Pokémon Defensor causam -20 de dano.",
                "zh-tw": "在對手的下一個回合中，防御神奇寶貝使用的攻擊造成−20點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
