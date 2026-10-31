import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/186",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/186",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/186",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/186",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/186",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/186",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/186",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/186",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/186"
    },
    name: {
        en: "Ambipom",
        "fr": "Capidextre",
        "es": "Ambipom",
        "it": "Ambipom",
        "de": "Ambidiffel",
        "pt-br": "Ambipom",
        "zh-tw": "雙尾怪手",
        ja: "エテボース",
        ko: "겟핸보숭",
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Aipom",
        "fr": "Capumain",
        "es": "Aipom",
        "it": "Aipom",
        "de": "Griffel",
        "pt-br": "Aipom",
        "zh-tw": "長尾怪手",
        ja: "エイパム",
        ko: "에이팜",
    },
    description: {
        en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you.",
        "fr": "Il utilise sa queue pour tout. Si ça enveloppe les deux\nde ses queues autour de vous et vous serre,\nc'est la preuve qu'il t'aime vraiment.",
        "es": "Utiliza sus colas para todo. Si envuelve a ambos\nde sus colas te rodea y te da un apretón,\nEsa es la prueba de que realmente le gustas.",
        "it": "Usa la coda per tutto. Se avvolge entrambi\ndelle sue code intorno a te e ti stringe,\nquesta è la prova che gli piaci davvero.",
        "de": "Es nutzt seinen Schwanz für alles. Wenn es beides umhüllt\nseiner Schwänze um dich herum und drückt dich,\nDas ist der Beweis, dass es dich wirklich mag.",
        "pt-br": "Ele usa a cauda para tudo. Se envolver ambos\nde suas caudas ao seu redor e lhe dá um aperto,\nisso é prova de que ele realmente gosta de você.",
        "zh-tw": "它用尾巴做一切事情。如果它包住了兩個\n它的尾巴圍繞著你並擠壓你，\n這就是它真的喜歡你的證據。",
        ja: "なにを するにも シッポを 使う。 ２本の シッポで 抱きしめられたら 本当に 懐かれた 証。",
        ko: "무엇을 하더라도 꼬리를 사용한다.\n2개의 꼬리로 껴안는다면\n정말로 친밀해졌다는 증거다."
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
                "zh-tw": "興奮的尾巴",
                ja: "エキサイトテール",
                ko: "익사이팅테일"
            },
            damage: "30×",
            cost: ["Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads. If this Pokémon has Lucky Mittens attached, flip 4 coins instead.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque tête. Si ce Pokémon est attaché à des Mitaines Chanceuses, lancez 4 pièces à la place.",
                "es": "Lanza 2 monedas. Este ataque hace 30 daños por cada cabeza. Si este Pokémon tiene Lucky Mittens adjuntos, lanza 4 monedas en su lugar.",
                "it": "Lancia 2 monete. Questo attacco infligge 30 danni per ogni testa. Se questo Pokémon ha Guanti Portafortuna assegnati, lancia invece 4 monete.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf. Wenn an diesem Pokémon Glücksfäustlinge angebracht sind, wirf stattdessen 4 Münzen.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 30 de dano para cada cabeça. Se este Pokémon tiver Lucky Mittens anexado, jogue 4 moedas.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。如果這只神奇寶貝附有幸運手套，則拋擲 4 個硬幣。",
                ja: "コインを2回投げ、オモテの数×30ダメージ。このポケモンに「ラッキーミトン」がついているなら、このワザで投げるコインの数は4回になる。",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 30데미지를 준다. 이 포켓몬에게 「럭키미튼」이 붙어 있다면 이 기술로 던지는 동전의 수는 4번이 된다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
