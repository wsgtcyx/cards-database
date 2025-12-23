import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Type: Null",
        "fr": "Type:0",
        "es": "Type: Null",
        "it": "Type: Null",
        "de": "Typ:Null",
        "pt-br": "Type: Null",
        "zh-tw": "屬性：空"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "A Pokémon weapon developed for a specific\nmission, it went berserk during an experiment,\nso it was cryogenically frozen.",
        "fr": "Une arme Pokémon développée pour un usage spécifique\nmission, il est devenu fou furieux lors d'une expérience,\nil a donc été congelé par cryogénie.",
        "es": "Un arma Pokémon desarrollada para un objetivo específico.\nmisión, se volvió loco durante un experimento,\npor lo que fue congelado criogénicamente.",
        "it": "Un'arma Pokémon sviluppata per uno scopo specifico\nmissione, è impazzito durante un esperimento,\nquindi è stato congelato criogenicamente.",
        "de": "Eine Pokémon-Waffe, die für einen bestimmten Zweck entwickelt wurde\nMission, es ging während eines Experiments durch,\nalso wurde es kryogen eingefroren.",
        "pt-br": "Uma arma Pokémon desenvolvida para um determinado\nmissão, ficou furioso durante um experimento,\nentão foi congelado criogenicamente.",
        "zh-tw": "為特定的神奇寶貝開發的武器\n任務中，它在一次實驗中變得狂暴，\n所以它被低溫冷凍。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Quick Blow",
                "fr": "Coup rapide",
                "es": "golpe rápido",
                "it": "Colpo veloce",
                "de": "Schneller Schlag",
                "pt-br": "Golpe Rápido",
                "zh-tw": "快速打擊"
            },
            damage: 20,
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 20 daños más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
