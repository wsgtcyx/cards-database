import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/003",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/003",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/003"
    },
    name: {
        en: "Shuckle",
        "fr": "Caratroc",
        "es": "Shuckle",
        "it": "Shuckle",
        "de": "Pottrott",
        "pt-br": "Shuckle",
        "zh-tw": "壺壺"
    },
    illustrator: "Yuriko Akase",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    description: {
        en: "The berries stored in its vaselike shell eventually\nbecome a thick, pulpy juice.",
        "fr": "Les baies stockées dans sa coquille en forme de vase finissent par\ndevenir un jus épais et pulpeux.",
        "es": "Las bayas almacenadas en su cáscara parecida a un jarrón eventualmente\nconvertirse en un jugo espeso y pulposo.",
        "it": "Alla fine le bacche furono conservate nel suo guscio simile a un vaso\ndiventare un succo denso e polposo.",
        "de": "Die Beeren lagerten schließlich in ihrer vasenartigen Schale\nzu einem dicken, breiigen Saft werden.",
        "pt-br": "As bagas armazenadas em sua casca em forma de vaso eventualmente\ntorne-se um suco espesso e carnudo.",
        "zh-tw": "漿果最終儲存在花瓶般的外殼中\n變成濃稠的果肉汁。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Guard Press",
                "fr": "Presse de garde",
                "es": "Prensa de guardia",
                "it": "Stampa della Guardia",
                "de": "Gardepresse",
                "pt-br": "Imprensa da Guarda",
                "zh-tw": "守衛壓力機"
            },
            damage: 40,
            cost: ["Grass", "Grass"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -20 dégâts des attaques.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -20 de daño por ataques.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −20 Schadenspunkte durch Angriffe.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá -20 de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只神奇寶貝受到的攻擊傷害為-20。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
