import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Wooloo",
        "fr": "Wooloo",
        "es": "lanaoo",
        "it": "Wooloo",
        "de": "Wooloo",
        "pt-br": "Lãoo",
        "zh-tw": "烏魯"
    },
    illustrator: "Yoko Hishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "If its fleece grows too long, Wooloo won't be\nable to move. Cloth made with the wool of this\nPokémon is surprisingly strong.",
        "fr": "Si sa toison devient trop longue, Wooloo ne le sera pas\ncapable de bouger. Tissu fabriqué avec la laine de ce\nPokémon est étonnamment fort.",
        "es": "Si su lana crece demasiado, Wooloo no será\ncapaz de moverse. Tela hecha con la lana de este\nPokémon es sorprendentemente fuerte.",
        "it": "Se il suo vello cresce troppo lungo, Wooloo non lo sarà\nin grado di muoversi. Panno realizzato con la lana di questo\nI Pokémon sono sorprendentemente forti.",
        "de": "Wenn sein Vlies zu lang wird, wächst Wooloo nicht\nin der Lage, sich zu bewegen. Aus dieser Wolle hergestellter Stoff\nPokémon ist überraschend stark.",
        "pt-br": "Se a lã crescer muito, Wooloo não será\ncapaz de se mover. Pano feito com a lã deste\nPokémon é surpreendentemente forte.",
        "zh-tw": "如果羊毛長得太長，Wooloo 就不會\n能夠移動。用這裡的羊毛布料\n神奇寶貝的實力出奇的強。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Continuous Tumble",
                "fr": "Culbutage continu",
                "es": "Caída continua",
                "it": "Caduta continua",
                "de": "Kontinuierlicher Sturz",
                "pt-br": "Queda Contínua",
                "zh-tw": "連續翻滾"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. This attack does 40 damage for each heads.",
                "fr": "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts pour chaque tête.",
                "es": "Lanza una moneda hasta que obtengas cruz. Este ataque hace 40 daños por cada cabeza.",
                "it": "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni per ogni testa.",
                "de": "Wirf eine Münze, bis du „Zahl“ erhältst. Dieser Angriff verursacht 40 Schaden pro Kopf.",
                "pt-br": "Jogue uma moeda até obter coroa. Este ataque causa 40 de dano para cada cabeça.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
