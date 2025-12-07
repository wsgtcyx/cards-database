import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Incineroar",
        "fr": "Incineroar",
        "es": "Incineroar",
        "it": "Incineroar",
        "de": "Verbrennungsanlage",
        "pt-br": "Incineroar",
        "zh-tw": "熾焰咆哮虎",
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fire"],
    evolveFrom: {
        en: "Torracat",
        "fr": "Torracat",
        "es": "torracat",
        "it": "Torracat",
        "de": "Torracat",
        "pt-br": "Torracat",
        "zh-tw": "托拉卡特"
    },
    description: {
        en: "Although it's rough mannered and egotistical, it\nfinds beating down unworthy opponents boring.\nIt gets motivated for stronger opponents.",
        "fr": "Même si c'est brutal et égoïste,\ntrouve ennuyeux de battre des adversaires indignes.\nCela motive les adversaires plus forts.",
        "es": "Aunque es egoísta y de malos modales,\nle resulta aburrido derrotar a oponentes indignos.\nSe motiva ante oponentes más fuertes.",
        "it": "Anche se è rozzo ed egoista, lo è\ntrova noioso abbattere avversari indegni.\nViene motivato per gli avversari più forti.",
        "de": "Obwohl es unhöflich und egoistisch ist, ist es\nfindet es langweilig, unwürdige Gegner niederzuschlagen.\nEs wird für stärkere Gegner motiviert.",
        "pt-br": "Embora seja rude e egoísta,\nacha chato derrotar oponentes indignos.\nFica motivado para oponentes mais fortes.",
        "zh-tw": "雖然態度粗魯而且自負，但\n覺得打敗不值得的對手很無聊。\n它會為更強大的對手提供動力。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Darkest Lariat",
                "fr": "Lariat le plus sombre",
                "es": "Lariat más oscuro",
                "it": "Lariat più oscuro",
                "de": "Dunkelstes Lariat",
                "pt-br": "Lariat mais escuro",
                "zh-tw": "黑暗套索"
            },
            damage: 100,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 100 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 100 de daño por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 100 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 100 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 100 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。此攻擊對每個頭造成 100 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
