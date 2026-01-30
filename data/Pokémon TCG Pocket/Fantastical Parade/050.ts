import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Raichu",
        "fr": "Raichu d'Alola",
        "es": "Raichu de Alola",
        "it": "Raichu di Alola",
        "de": "Alolan Raichu",
        "pt-br": "Raichu de Alola",
        "zh-tw": "阿羅拉雷丘"
    },
    illustrator: "Akira Komayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Lightning"],
    evolveFrom: {
        en: "Pikachu",
        "fr": "Pikachu",
        "es": "Pikachu",
        "it": "Pikachu",
        "de": "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘"
    },
    description: {
        en: "This Pokémon rides on its tail while it uses\nits psychic powers to levitate. It attacks with\nstar-shaped thunderbolts.",
        "fr": "Ce Pokémon monte sur sa queue lorsqu'il utilise\nses pouvoirs psychiques pour léviter. Il attaque avec\ndes éclairs en forme d'étoile.",
        "es": "Este Pokémon se monta sobre su cola mientras usa\nsus poderes psíquicos para levitar. ataca con\nrayos en forma de estrella.",
        "it": "Questo Pokémon cavalca sulla sua coda mentre usa\ni suoi poteri psichici per levitare. Attacca con\nfulmini a forma di stella.",
        "de": "Dieses Pokémon reitet auf seinem Schwanz, während es es benutzt\nseine psychischen Kräfte zum Schweben. Es greift mit an\nsternförmige Blitze.",
        "pt-br": "Este Pokémon anda na sua cauda enquanto usa\nseus poderes psíquicos para levitar. Ele ataca com\nraios em forma de estrela.",
        "zh-tw": "這只神奇寶貝在使用時騎在尾巴上\n它的靈力可以懸浮。它攻擊與\n星狀雷電。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Surge Surfer",
                "fr": "Surfeur de surtension",
                "es": "Surfista de oleada",
                "it": "Surfista in sovratensione",
                "de": "Surge Surfer",
                "pt-br": "Surfista",
                "zh-tw": "衝浪者"
            },
            effect: {
                en: "If a Stadium is in play, this Pokémon has no Retreat Cost.",
                "fr": "Si un Stade est en jeu, ce Pokémon n'a pas de Coût de Retraite.",
                "es": "Si hay un Estadio en juego, este Pokémon no tiene Coste de Retirada.",
                "it": "Se è in gioco uno Stadio, questo Pokémon non ha costo di ritirata.",
                "de": "Wenn ein Stadion im Spiel ist, hat dieses Pokémon keine Rückzugskosten.",
                "pt-br": "Se um Estádio estiver em jogo, este Pokémon não terá custo de Recuo.",
                "zh-tw": "如果體育場正在進行中，則該神奇寶貝沒有撤退成本。"
            }
        }],
    attacks: [{
            name: {
                en: "Thunder Spear",
                "fr": "Lance-Éclair",
                "es": "Lanza del Trueno",
                "it": "Tuonolancia",
                "de": "Donnerspeer",
                "pt-br": "Lança do Trovão",
                "zh-tw": "雷霆之矛"
            },
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 50 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 50 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
