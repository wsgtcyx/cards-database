import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/044",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/044",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/044",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/044",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/044",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/044"
    },
    name: {
        en: "Drednaw",
        "fr": "Torgamord",
        "es": "Drednaw",
        "it": "Drednaw",
        "de": "Kamalm",
        "pt-br": "Drednaw",
        "zh-tw": "暴噬龜"
    },
    illustrator: "kodama",
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
                en: "Heavy Impact",
                "fr": "Fort impact",
                "es": "Impacto pesado",
                "it": "Impatto pesante",
                "de": "Schwerer Aufprall",
                "pt-br": "Impacto Pesado",
                "zh-tw": "重擊"
            },
            damage: 120,
            cost: ["Water", "Water", "Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
