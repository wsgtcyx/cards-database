import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/077",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/077",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/077",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/077",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/077",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/077",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/077",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/077",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/077"
    },
    name: {
        en: "Drednaw",
        "fr": "Torgamord",
        "es": "Drednaw",
        "it": "Drednaw",
        "de": "Kamalm",
        "pt-br": "Drednaw",
        "zh-tw": "暴噬龜",
        ja: "カジリガメ",
        ko: "갈가부기",
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Chewtle",
        "fr": "Khélocrok",
        "es": "Chewtle",
        "it": "Chewtle",
        "de": "Kamehaps",
        "pt-br": "Chewtle",
        "zh-tw": "咬咬龜",
        ja: "カムカメ",
        ko: "깨물부기",
    },
    description: {
        en: "Drednaw lurks along the shoreline. When prey\ncome to drink water, Drednaw stretches its neck\nout and chomps down on them.",
        "fr": "Drednaw se cache le long du rivage. Quand une proie\nviens boire de l'eau, Drednaw tend le cou\ndehors et les ronge.",
        "es": "Drednaw acecha a lo largo de la costa. cuando presa\nven a beber agua, Drednaw estira el cuello\nsale y los muerde.",
        "it": "Drednaw si nasconde lungo la costa. Quando preda\nvenuto a bere acqua, Drednaw allunga il collo\nfuori e li mastica.",
        "de": "Drednaw lauert an der Küste. Wenn Beute\nDrednaw kommt, um Wasser zu trinken, und streckt seinen Hals\nraus und kaut auf ihnen herum.",
        "pt-br": "Drednaw espreita ao longo da costa. Quando presa\nvem beber água, Drednaw estica o pescoço\ne os mastiga.",
        "zh-tw": "雷德諾潛伏在海岸線上。當獵物\n來喝水了，Drednaw 伸長了脖子\n出來並咬住它們。",
        ja: "岸辺に 潜み 獲物が 水を 飲みに 来たところを 首を 長く 伸ばして がぶりと 噛みつく。",
        ko: "물가에 숨어 있다가\n먹잇감이 물을 마시러 오면\n목을 길게 늘여서 덥석 물어 버린다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Jaw Lock",
                "fr": "Verrouillage de la mâchoire",
                "es": "Bloqueo de mandíbula",
                "it": "Blocco della mascella",
                "de": "Kiefersperre",
                "pt-br": "Bloqueio de mandíbula",
                "zh-tw": "顎鎖",
                ja: "くらいつく",
                ko: "물고버티기"
            },
            damage: 70,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
                "fr": "Lors du prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
                "es": "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
                "it": "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
                "de": "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht zurückziehen.",
                "pt-br": "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。",
                ja: "次の相手の番、このワザを受けたポケモンはにげるができない。",
                ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
