import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Cryogonal",
        "fr": "Cryogonal",
        "es": "criogonal",
        "it": "Criogonale",
        "de": "Kryogonal",
        "pt-br": "Criogonal",
        "zh-tw": "冷凍"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "Cryogonal appear during cold seasons. It is said\nthat people and Pokémon who die on snowy\nmountains are reborn into these Pokémon.",
        "fr": "Les cryogonaux apparaissent pendant les saisons froides. On dit\nque les gens et les Pokémon qui meurent dans la neige\nles montagnes renaissent dans ces Pokémon.",
        "es": "Los criogonales aparecen durante las estaciones frías. se dice\nque personas y Pokémon que mueren en la nieve\nLas montañas renacen en estos Pokémon.",
        "it": "I criogonali compaiono durante le stagioni fredde. Si dice\nquelle persone e Pokémon che muoiono nella neve\nle montagne rinascono in questi Pokémon.",
        "de": "Kryogonale treten in der kalten Jahreszeit auf. Es heißt\ndass Menschen und Pokémon, die im Schnee sterben\nBerge werden in diesen Pokémon wiedergeboren.",
        "pt-br": "Criogonais aparecem durante as estações frias. É dito\nque pessoas e Pokémon que morrem na neve\nmontanhas renascem nesses Pokémon.",
        "zh-tw": "冷凍出現在寒冷季節。據說\n那些死在雪地裡的人和神奇寶貝\n山脈在這些神奇寶貝中重生。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ice Blade",
                "fr": "Lame de glace",
                "es": "Hoja de hielo",
                "it": "Lama di ghiaccio",
                "de": "Eisklinge",
                "pt-br": "Lâmina de Gelo",
                "zh-tw": "冰刃"
            },
            cost: ["Water", "Water"],
            effect: {
                en: "This attack does 40 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 40 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 40 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
