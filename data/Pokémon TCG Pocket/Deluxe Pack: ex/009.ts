import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Kakuna",
        "fr": "Kakuna",
        "es": "Kakuna",
        "it": "Kakuna",
        "de": "Kakuna",
        "pt-br": "Kakuna",
        "zh-tw": "鐵殼蛹",
    },
    illustrator: "Yuka Morii",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Weedle",
        "fr": "Mauvaise herbe",
        "es": "weedle",
        "it": "Weedle",
        "de": "Unkraut",
        "pt-br": "erva daninha",
        "zh-tw": "雜草"
    },
    description: {
        en: "Almost incapable of moving, this Pokémon can only\nharden its shell to protect itself when it is\nin danger.",
        "fr": "Presque incapable de bouger, ce Pokémon ne peut que\ndurcir sa coquille pour se protéger lorsqu'il est\nen danger.",
        "es": "Casi incapaz de moverse, este Pokémon sólo puede\nendurece su caparazón para protegerse cuando está\nen peligro.",
        "it": "Quasi incapace di muoversi, questo Pokémon può solo farlo\nindurire il suo guscio per proteggersi quando lo è\nin pericolo.",
        "de": "Dieses Pokémon ist fast unfähig, sich zu bewegen, kann es aber nur\nHärten Sie seine Schale aus, um sich selbst zu schützen, wenn es beschädigt ist\nin Gefahr.",
        "pt-br": "Quase incapaz de se mover, este Pokémon só consegue\nendurecer sua casca para se proteger quando for\nem perigo.",
        "zh-tw": "該神奇寶貝幾乎無法移動，只能\n當它遇到危險時，它會硬化外殼以保護自己\n處於危險之中。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "String Shot",
                "fr": "Tir à cordes",
                "es": "Tiro de cuerda",
                "it": "Tiro a corda",
                "de": "String Shot",
                "pt-br": "Tiro de corda",
                "zh-tw": "弦擊"
            },
            damage: 20,
            cost: ["Grass"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
