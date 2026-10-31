import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/083",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/083",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/083",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/083",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/083",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/083",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/083",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/083",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/083"
    },
    name: {
        en: "Flaaffy",
        "fr": "Lainergie",
        "es": "Flaaffy",
        "it": "Flaaffy",
        "de": "Waaty",
        "pt-br": "Flaaffy",
        "zh-tw": "茸茸羊",
        ja: "モココ",
        ko: "보송송",
    },
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Mareep",
        "fr": "Wattouat",
        "es": "Mareep",
        "it": "Mareep",
        "de": "Voltilamm",
        "pt-br": "Mareep",
        "zh-tw": "咩利羊",
        ja: "メリープ",
        ko: "메리프",
    },
    description: {
        en: "Because of its rubbery, electricity-resistant skin,\nit can store lots of electricity in its fur.",
        "fr": "En raison de sa peau caoutchouteuse et résistante à l'électricité,\nil peut stocker beaucoup d'électricité dans sa fourrure.",
        "es": "Debido a su piel gomosa y resistente a la electricidad,\nPuede almacenar mucha electricidad en su pelaje.",
        "it": "A causa della sua pelle gommosa e resistente all'elettricità,\npuò immagazzinare molta elettricità nella sua pelliccia.",
        "de": "Aufgrund seiner gummiartigen, strombeständigen Haut\nEs kann viel Strom in seinem Fell speichern.",
        "pt-br": "Devido à sua pele emborrachada e resistente à eletricidade,\nele pode armazenar muita eletricidade em seu pelo.",
        "zh-tw": "由於其橡膠狀、耐電的皮膚，\n它的皮毛可以儲存大量的電力。",
        ja: "電気を 通さない 地肌は ゴムのように つるつるだが 体毛は 電気を 溜めやすい。",
        ko: "전기가 통하지 않는 맨살은\n고무처럼 매끈하지만\n털은 전기를 모으기 쉽다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Electric Punch",
                "fr": "Poinçon électrique",
                "es": "Punzón eléctrico",
                "it": "Pugno elettrico",
                "de": "Elektrischer Schlag",
                "pt-br": "Soco Elétrico",
                "zh-tw": "電動沖床",
                ja: "ビリリパンチ",
                ko: "찌리리펀치"
            },
            damage: 40,
            cost: ["Lightning", "Colorless"]
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
