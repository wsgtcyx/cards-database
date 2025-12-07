import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Drednaw",
        "fr": "Drednaw",
        "es": "Drednaw",
        "it": "Drednaw",
        "de": "Drednaw",
        "pt-br": "Drednaw",
        "zh-tw": "德雷德諾"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Chewtle",
        "fr": "Mâcher",
        "es": "masticar",
        "it": "Masticare",
        "de": "Chewtle",
        "pt-br": "Mastigar",
        "zh-tw": "咀嚼"
    },
    description: {
        en: "Drednaw lurks along the shoreline. When prey\ncome to drink water, Drednaw stretches its neck\nout and chomps down on them.",
        "fr": "Drednaw se cache le long du rivage. Quand une proie\nviens boire de l'eau, Drednaw tend le cou\ndehors et les ronge.",
        "es": "Drednaw acecha a lo largo de la costa. cuando presa\nven a beber agua, Drednaw estira el cuello\nsale y los muerde.",
        "it": "Drednaw si nasconde lungo la costa. Quando preda\nvenuto a bere acqua, Drednaw allunga il collo\nfuori e li mastica.",
        "de": "Drednaw lauert an der Küste. Wenn Beute\nDrednaw kommt, um Wasser zu trinken, und streckt seinen Hals\nraus und kaut auf ihnen herum.",
        "pt-br": "Drednaw espreita ao longo da costa. Quando presa\nvem beber água, Drednaw estica o pescoço\ne os mastiga.",
        "zh-tw": "雷德諾潛伏在海岸線上。當獵物\n來喝水了，Drednaw 伸長了脖子\n出來並咬住它們。"
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
                "zh-tw": "顎鎖"
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
                "zh-tw": "在對手的下一個回合中，守方寶可夢不能撤退。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
