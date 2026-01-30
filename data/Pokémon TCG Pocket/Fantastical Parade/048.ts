import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Wellspring Mask Ogerpon",
        "fr": "Masque Wellspring Ogerpon",
        "es": "Máscara de fuente Ogerpon",
        "it": "Maschera della Sorgente Ogerpon",
        "de": "Quellmaske Ogerpon",
        "pt-br": "Máscara de Fonte Ogerpon",
        "zh-tw": "泉水面具奧傑彭"
    },
    illustrator: "Mina Nakai",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "In this form, it draws on the power of water.\nIt attacks unrelentingly with kicks and ivy strikes.",
        "fr": "Sous cette forme, il fait appel à la puissance de l’eau.\nIl attaque sans relâche avec des coups de pied et des coups de lierre.",
        "es": "De esta forma, aprovecha el poder del agua.\nAtaca implacablemente con patadas y golpes de hiedra.",
        "it": "In questa forma, attinge al potere dell'acqua.\nAttacca instancabilmente con calci e colpi di edera.",
        "de": "In dieser Form nutzt es die Kraft des Wassers.\nEs greift unerbittlich mit Tritten und Efeuschlägen an.",
        "pt-br": "Nesta forma, utiliza o poder da água.\nEle ataca implacavelmente com chutes e golpes de hera.",
        "zh-tw": "在這種形式下，它利用了水的力量。\n它用腳踢和常春藤攻擊進行無情的攻擊。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Wellspring Dance",
                "fr": "Danse de la source",
                "es": "Danza de manantial",
                "it": "Danza della Sorgente",
                "de": "Quelltanz",
                "pt-br": "Dança da Fonte",
                "zh-tw": "泉水舞"
            },
            damage: 40,
            cost: ["Water", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack also does 40 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige également 40 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Lanza una moneda. Si sale cara, este ataque también hace 40 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge anche 40 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff außerdem 1 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque também causará 40 de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊也會對對手的 1 只後備神奇寶貝造成 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
