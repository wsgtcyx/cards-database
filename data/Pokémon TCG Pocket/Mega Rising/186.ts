import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Ambipom",
        "fr": "Ambipome",
        "es": "ambipom",
        "it": "Ambipom",
        "de": "Ambipom",
        "pt-br": "Ambipom",
        "zh-tw": "雙尾怪手",
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Aipom",
        "fr": "Aipom",
        "es": "Aipom",
        "it": "Aipom",
        "de": "Aipom",
        "pt-br": "Aipom",
        "zh-tw": "長尾怪手",
    },
    description: {
        en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you.",
        "fr": "Il utilise sa queue pour tout. Si ça enveloppe les deux\nde ses queues autour de vous et vous serre,\nc'est la preuve qu'il t'aime vraiment.",
        "es": "Utiliza sus colas para todo. Si envuelve a ambos\nde sus colas te rodea y te da un apretón,\nEsa es la prueba de que realmente le gustas.",
        "it": "Usa la coda per tutto. Se avvolge entrambi\ndelle sue code intorno a te e ti stringe,\nquesta è la prova che gli piaci davvero.",
        "de": "Es nutzt seinen Schwanz für alles. Wenn es beides umhüllt\nseiner Schwänze um dich herum und drückt dich,\nDas ist der Beweis, dass es dich wirklich mag.",
        "pt-br": "Ele usa a cauda para tudo. Se envolver ambos\nde suas caudas ao seu redor e lhe dá um aperto,\nisso é prova de que ele realmente gosta de você.",
        "zh-tw": "它用尾巴做一切事情。如果它包住了兩個\n它的尾巴圍繞著你並擠壓你，\n這就是它真的喜歡你的證據。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Excited Tail",
                "fr": "Queue excitée",
                "es": "Cola emocionada",
                "it": "Coda emozionante",
                "de": "Aufgeregter Schwanz",
                "pt-br": "Cauda Animada",
                "zh-tw": "興奮的尾巴"
            },
            damage: 30,
            cost: ["Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads. If this Pokémon has Lucky Mittens attached, flip 4 coins instead.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque tête. Si ce Pokémon est attaché à des Mitaines Chanceuses, lancez 4 pièces à la place.",
                "es": "Lanza 2 monedas. Este ataque hace 30 daños por cada cabeza. Si este Pokémon tiene Lucky Mittens adjuntos, lanza 4 monedas en su lugar.",
                "it": "Lancia 2 monete. Questo attacco infligge 30 danni per ogni testa. Se questo Pokémon ha Guanti Portafortuna assegnati, lancia invece 4 monete.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf. Wenn an diesem Pokémon Glücksfäustlinge angebracht sind, wirf stattdessen 4 Münzen.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 30 de dano para cada cabeça. Se este Pokémon tiver Lucky Mittens anexado, jogue 4 moedas.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。如果這只神奇寶貝附有幸運手套，則拋擲 4 個硬幣。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
