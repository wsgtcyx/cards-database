import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Kangaskhan",
        "fr": "Kangaskhan",
        "es": "Kangaskhan",
        "it": "Kangaskhan",
        "de": "Kangaschan",
        "pt-br": "Kangaskhan",
        "zh-tw": "坎加斯坎"
    },
    illustrator: "Toshinao Aoki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "Although it's carrying its baby in a pouch on\nits belly, Kangaskhan is swift on its feet. It\nintimidates its opponents with quick jabs.",
        "fr": "Bien qu'il porte son bébé dans une pochette\nson ventre, Kangaskhan est rapide sur ses pattes. Il\nintimide ses adversaires avec des coups rapides.",
        "es": "Aunque lleva a su bebé en una bolsa\nsu vientre, Kangaskhan es veloz de pies. eso\nintimida a sus oponentes con golpes rápidos.",
        "it": "Anche se porta il suo bambino in un marsupio\nil suo ventre, Kangaskhan è veloce in piedi. Esso\nintimidisce i suoi avversari con colpi rapidi.",
        "de": "Obwohl es sein Baby in einem Beutel trägt\nMit seinem Bauch ist Kangaskhan schnell auf den Beinen. Es\nschüchtert seine Gegner mit schnellen Stößen ein.",
        "pt-br": "Embora esteja carregando seu bebê em uma bolsa\nsua barriga, Kangaskhan é rápido. Isso\nintimida seus oponentes com golpes rápidos.",
        "zh-tw": "雖然它把寶寶裝在育兒袋裡\n坎加斯坎的腹部，腳步敏捷。它\n用快速刺拳恐嚇對手。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Cross-Cut",
                "fr": "Coupe transversale",
                "es": "Corte transversal",
                "it": "Taglio trasversale",
                "de": "Querschnitt",
                "pt-br": "Corte transversal",
                "zh-tw": "橫切"
            },
            damage: 20,
            cost: ["Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 40 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un Pokémon Evolution, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 40 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 40 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Evolutions-Pokémon ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢是進化寶可夢，則這次攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
