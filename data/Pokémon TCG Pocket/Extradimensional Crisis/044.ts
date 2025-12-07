import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Poipole",
        "fr": "Poipole",
        "es": "poipole",
        "it": "Poipole",
        "de": "Poipole",
        "pt-br": "Poipole",
        "zh-tw": "毒貝比",
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "This Ultra Beast is well enough liked to be\nchosen as a first partner in its own world.",
        "fr": "Cette Ultra Beast est assez appréciée pour être\nchoisi comme premier partenaire dans son propre monde.",
        "es": "Esta Ultra Bestia es bastante apreciada como para ser\nelegido como primer socio en su propio mundo.",
        "it": "Questa Ultracreatura piace abbastanza da essere\nscelto come primo partner nel proprio mondo.",
        "de": "Dieses Ultra-Biest ist durchaus beliebt\nals erster Partner in seiner eigenen Welt ausgewählt.",
        "pt-br": "Esta Ultra Besta é bastante apreciada para ser\nescolhido como primeiro parceiro no seu próprio mundo.",
        "zh-tw": "這個終極野獸很受歡迎\n被選為自己世界中的第一個合作夥伴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "2-Step",
                "fr": "2 étapes",
                "es": "2 pasos",
                "it": "2 passaggi",
                "de": "2-stufig",
                "pt-br": "2 etapas",
                "zh-tw": "2步"
            },
            damage: 20,
            cost: ["Darkness"],
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
