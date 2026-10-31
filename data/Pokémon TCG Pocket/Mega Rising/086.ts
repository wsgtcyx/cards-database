import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/086",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/086",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/086",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/086",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/086",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/086",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/086",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/086",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/086"
    },
    name: {
        en: "Shinx",
        "fr": "Lixy",
        "es": "Shinx",
        "it": "Shinx",
        "de": "Sheinux",
        "pt-br": "Shinx",
        "zh-tw": "小貓怪",
        ja: "コリンク",
        ko: "꼬링크",
    },
    illustrator: "Uta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "The extension and contraction of its muscles\ngenerates electricity. Its fur glows when it's\nin trouble.",
        "fr": "L'extension et la contraction de ses muscles\nproduit de l’électricité. Sa fourrure brille quand elle est\nen difficulté.",
        "es": "La extensión y contracción de sus músculos.\ngenera electricidad. Su pelaje brilla cuando está\nen problemas.",
        "it": "L'estensione e la contrazione dei suoi muscoli\ngenera elettricità. La sua pelliccia si illumina quando lo è\nnei guai.",
        "de": "Die Dehnung und Kontraktion seiner Muskeln\nerzeugt Strom. Sein Fell leuchtet, wenn es ist\nin Schwierigkeiten.",
        "pt-br": "A extensão e contração de seus músculos\ngera eletricidade. Seu pelo brilha quando está\nem apuros.",
        "zh-tw": "肌肉的伸展和收縮\n發電。當它的皮毛髮光時\n遇到麻煩了。",
        ja: "筋肉が 伸び縮み することで 電気が 発生。 ピンチになると 体毛が まぶしく 光る。",
        ko: "근육이 늘었다 줄었다 하면서\n전기가 발생한다. 위급해지면\n털이 눈부시게 빛난다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌",
                ja: "はねまわる",
                ko: "돌아다니며 뛰기"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
