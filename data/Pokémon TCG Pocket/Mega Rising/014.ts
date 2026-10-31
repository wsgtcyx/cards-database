import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/014",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/014",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/014",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/014",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/014",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/014",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/014",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/014"
    },
    name: {
        en: "Simisage",
        "fr": "Feuiloutan",
        "es": "Simisage",
        "it": "Simisage",
        "de": "Vegichita",
        "pt-br": "Simisage",
        "zh-tw": "花椰猿",
        ja: "ヤナッキー",
        ko: "야나키",
    },
    illustrator: "tetsuya koizumi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Pansage",
        "fr": "Feuillajou",
        "es": "Pansage",
        "it": "Pansage",
        "de": "Vegimak",
        "pt-br": "Pansage",
        "zh-tw": "花椰猴",
        ja: "ヤナップ",
        ko: "야나프",
    },
    description: {
        en: "Ill tempered, it fights by swinging its barbed tail\naround wildly. The leaf growing on its head is\nvery bitter.",
        "fr": "De mauvaise humeur, il se bat en balançant sa queue barbelée\nautour sauvagement. La feuille qui pousse sur sa tête est\ntrès amer.",
        "es": "De mal genio, lucha moviendo su cola con púas.\nalrededor salvajemente. La hoja que crece en su cabeza es\nmuy amargo.",
        "it": "Di cattivo umore, combatte agitando la coda uncinata\nin giro selvaggiamente. La foglia che cresce sulla sua testa lo è\nmolto amaro.",
        "de": "Es ist schlecht gelaunt und kämpft, indem es seinen stacheligen Schwanz schwingt\nwild umher. Das auf seinem Kopf wachsende Blatt ist\nsehr bitter.",
        "pt-br": "Mal humorado, ele luta balançando sua cauda farpada\nao redor descontroladamente. A folha que cresce em sua cabeça é\nmuito amargo.",
        "zh-tw": "脾氣暴躁，會擺動帶刺的尾巴來戰鬥\n瘋狂地四處走動。它頭上長的葉子是\n很苦。",
        ja: "気性が 激しく トゲの ついた 尻尾を 振り回して 戦う。 頭の 葉っぱは とても 苦い。",
        ko: "기질이 격하여 가시가 박힌\n꼬리를 휘두르며 싸운다.\n머리의 잎사귀는 매우 쓰다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fury Swipes",
                "fr": "Coups de fureur",
                "es": "Golpes de furia",
                "it": "Colpi di furia",
                "de": "Wut-Swipes",
                "pt-br": "Golpes de Fúria",
                "zh-tw": "狂怒橫掃",
                ja: "みだれひっかき",
                ko: "마구할퀴기"
            },
            damage: "40×",
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Flip 3 coins. This attack does 40 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 40 daños por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 40 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 40 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 40 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 40 點傷害。",
                ja: "コインを3回投げ、オモテの数×40ダメージ。",
                ko: "동전을 3번 던져서 앞면이 나온 수 × 40데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
