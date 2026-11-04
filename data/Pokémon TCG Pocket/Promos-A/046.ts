import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/046/9027ee2d5e02c5aa",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/046/9027ee2d5e02c5aa",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/046/9027ee2d5e02c5aa",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/046/9027ee2d5e02c5aa",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/046/9027ee2d5e02c5aa",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/046/9027ee2d5e02c5aa",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/046/9027ee2d5e02c5aa",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/046/9027ee2d5e02c5aa",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/046/9027ee2d5e02c5aa"
    },
    name: {
        en: "Gible",
        fr: "Griknot",
        es: "Gible",
        it: "Gible",
        de: "Kaumalat",
        'pt-br': "Gible",
        ja: "フカマル",
        ko: "딥상어동",
        "zh-tw": "圓陸鯊",
    },
    illustrator: "Uninori",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It skulks in caves, and when prey or an enemy\npasses by, it leaps out and chomps them.\nThe force of its attack sometimes chips its teeth.",
        fr: "Il attend qu'une proie passe pour bondir hors de son trou\net la croquer. Dans son élan, il se casse parfois les dents.",
        es: "Permanece oculto en cuevas y, cuando pasa una\npresa, se abalanza sobre ella y la muerde con\ntanta fuerza que hasta se le rompen los dientes.",
        it: "Aspetta nemici e prede in agguato nella sua\ntana. Quando gli arrivano a tiro, li addenta\ncon tale forza che a volte si spezza i denti.",
        de: "Es verbirgt sich in kleinen Höhlen, aus denen es\nherausspringt und vorbeilaufende Gegner oder\nBeute beißt. Manchmal bricht dabei ein Zahn ab.",
        'pt-br': "Esconde-se em cavernas e quando presas ou inimigos\npassam, sai e os devora. A força do seu ataque às vezes\nquebra seus dentes.",
        ja: "穴倉に 潜み 獲物や 敵が 横切ると 飛びだして 噛みつく。 勢い余り 歯が 欠けることも。",
        ko: "구멍에 숨어서 먹이나 적이\n지나가면 뛰쳐나가 문다.\n기세가 대단해 이가 빠질 때도 있다.",
        "zh-tw": "潛伏在地洞內，如果有獵物或敵人經過，就會撲出來咬住。有時會用力過猛而咬壞牙齒。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                'pt-br': "Investida",
                ja: "たいあたり",
                ko: "몸통박치기",
                "zh-tw": "撞擊"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol5"]
};
export default card;
