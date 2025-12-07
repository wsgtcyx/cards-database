import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Rowlet",
        "fr": "Rowlet",
        "es": "Rowlet",
        "it": "Rowlet",
        "de": "Rowlet",
        "pt-br": "Rowlet",
        "zh-tw": "木木梟",
    },
    illustrator: "OKACHEKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It sends its feathers, which are as sharp\nas blades, flying in attack. Its legs are strong,\nso its kicks are also formidable.",
        "fr": "Il envoie ses plumes aussi pointues\ncomme des lames, volant en attaque. Ses jambes sont fortes,\ndonc ses coups de pied sont également redoutables.",
        "es": "Envía sus plumas, que son tan afiladas\ncomo espadas, volando en ataque. Sus piernas son fuertes\npor eso sus patadas también son formidables.",
        "it": "Manda le sue piume, che sono altrettanto affilate\ncome lame, volando in attacco. Le sue gambe sono forti,\nquindi anche i suoi calci sono formidabili.",
        "de": "Es schickt seine Federn, die ebenso scharf sind\nals Klingen, die im Angriff fliegen. Seine Beine sind stark,\nDaher sind auch seine Tritte beeindruckend.",
        "pt-br": "Ele envia suas penas, que são tão afiadas\ncomo lâminas, voando em ataque. Suas pernas são fortes,\nentão seus chutes também são formidáveis.",
        "zh-tw": "它發出它的羽毛，這些羽毛同樣鋒利\n如同刀鋒，飛行攻擊。它的腿很強壯，\n所以它的踢力也很強大。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Fury Attack",
                "fr": "Attaque de fureur",
                "es": "Ataque de furia",
                "it": "Attacco di furia",
                "de": "Wutangriff",
                "pt-br": "Ataque de Fúria",
                "zh-tw": "狂怒攻擊"
            },
            damage: 10,
            cost: ["Grass"],
            effect: {
                en: "Flip 3 coins. This attack does 10 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 10 daños por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 10 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 10 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 10 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
