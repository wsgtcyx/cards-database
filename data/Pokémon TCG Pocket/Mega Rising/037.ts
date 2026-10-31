import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/037",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/037",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/037",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/037",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/037",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/037",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/037",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/037"
    },
    name: {
        en: "Pansear",
        "fr": "Flamajou",
        "es": "Pansear",
        "it": "Pansear",
        "de": "Grillmak",
        "pt-br": "Pansear",
        "zh-tw": "爆香猴",
        ja: "バオップ",
        ko: "바오프",
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "This Pokémon lives in caves in volcanoes.\nThe fire within the tuft on its head can reach\n600 degrees Fahrenheit.",
        "fr": "Ce Pokémon vit dans les grottes des volcans.\nLe feu dans la touffe sur sa tête peut atteindre\n600 degrés Fahrenheit.",
        "es": "Este Pokémon vive en cuevas de volcanes.\nEl fuego dentro del mechón de su cabeza puede alcanzar\n600 grados Fahrenheit.",
        "it": "Questo Pokémon vive nelle caverne dei vulcani.\nIl fuoco all'interno del ciuffo sulla sua testa può raggiungere\n600 gradi Fahrenheit.",
        "de": "Dieses Pokémon lebt in Höhlen in Vulkanen.\nDas Feuer im Büschel auf seinem Kopf kann reichen\n600 Grad Fahrenheit.",
        "pt-br": "Este Pokémon vive em cavernas de vulcões.\nO fogo dentro do tufo em sua cabeça pode atingir\n600 graus Fahrenheit.",
        "zh-tw": "這只神奇寶貝生活在火山的洞穴中。\n其頭上毛簇內的火焰可達到\n600 華氏度。",
        ja: "火山の 洞穴で 暮らす。 頭の ふさの 中が 燃えていて ３００度の 高温になる。",
        ko: "화산 동굴에서 산다.\n머리의 송아리 속이 불타고 있어\n300도나 되는 높은 온도가 된다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beat",
                "fr": "Battre",
                "es": "Derrotar",
                "it": "Colpo",
                "de": "Schlagen",
                "pt-br": "Bater",
                "zh-tw": "打",
                ja: "たたく",
                ko: "때리기"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
