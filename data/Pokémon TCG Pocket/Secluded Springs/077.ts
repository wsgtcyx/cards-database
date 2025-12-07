import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Azurill",
        "fr": "Azurille",
        "es": "azurill",
        "it": "Azuril",
        "de": "Azurill",
        "pt-br": "Azurill",
        "zh-tw": "阿祖瑞爾"
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Star",
    category: "Pokemon",
    hp: 30,
    types: ["Colorless"],
    description: {
        en: "Its tail bounces like a rubber ball. It flings that tail\naround to fight opponents bigger than itself.",
        "fr": "Sa queue rebondit comme une balle en caoutchouc. Il jette cette queue\nautour pour combattre des adversaires plus grands que lui.",
        "es": "Su cola rebota como una pelota de goma. Lanza esa cola\nalrededor para luchar contra oponentes más grandes que él mismo.",
        "it": "La sua coda rimbalza come una palla di gomma. Lancia quella coda\nin giro per combattere avversari più grandi di lui.",
        "de": "Sein Schwanz hüpft wie ein Gummiball. Es wirft diesen Schwanz\nherum, um gegen Gegner zu kämpfen, die größer sind als er selbst.",
        "pt-br": "Sua cauda salta como uma bola de borracha. Ele arremessa aquela cauda\nao redor para lutar contra adversários maiores que ele.",
        "zh-tw": "它的尾巴像橡皮球一樣彈跳。它甩動那條尾巴\n四處對抗比自己強大的對手。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Squishy Healing",
                "fr": "Guérison visqueuse",
                "es": "Curación blanda",
                "it": "Guarigione molle",
                "de": "Squishy-Heilung",
                "pt-br": "Cura Mole",
                "zh-tw": "軟軟的治療"
            },
            effect: {
                en: "Heal 50 damage from 1 of your Benched Pokémon.",
                "fr": "Soignez 50 dégâts à l'un de vos Pokémon de Banc.",
                "es": "Cura 50 puntos de daño de 1 de tus Pokémon en Banca.",
                "it": "Cura 50 danni da 1 dei tuoi Pokémon in panchina.",
                "de": "Heile 50 Schadenspunkte bei 1 Pokémon auf deiner Bank.",
                "pt-br": "Cure 50 de dano de 1 dos seus Pokémon no Banco.",
                "zh-tw": "治療你 1 只後備神奇寶貝造成的 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0
};
export default card;
