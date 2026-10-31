import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/061",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/061",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/061",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/061",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/061",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/061",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/061",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/061",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/061"
    },
    name: {
        en: "Panpour",
        "fr": "Flotajou",
        "es": "Panpour",
        "it": "Panpour",
        "de": "Sodamak",
        "pt-br": "Panpour",
        "zh-tw": "冷水猴",
        ja: "ヒヤップ",
        ko: "앗차프",
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "The water stored inside the tuft on its head is full of\nnutrients. Plants that receive its water grow large.",
        "fr": "L'eau stockée à l'intérieur de la touffe sur sa tête est pleine de\nnutriments. Les plantes qui reçoivent son eau grandissent.",
        "es": "El agua almacenada dentro del mechón de su cabeza está llena de\nnutrientes. Las plantas que reciben su agua crecen grandes.",
        "it": "L'acqua immagazzinata all'interno del ciuffo sulla sua testa è piena di\nnutrienti. Le piante che ricevono la sua acqua diventano grandi.",
        "de": "Das im Büschel auf seinem Kopf gespeicherte Wasser ist voll\nNährstoffe. Pflanzen, die das Wasser aufnehmen, werden groß.",
        "pt-br": "A água armazenada dentro do tufo em sua cabeça está cheia de\nnutrientes. As plantas que recebem sua água crescem grandes.",
        "zh-tw": "它頭上的絨毛里儲存的水充滿了\n營養素。吸收水分的植物會長得很大。",
        ja: "頭の ふさに ためた 水は 栄養 たっぷり。 植物に かけると 大きく 育つのだ。",
        ko: "머리의 송아리에 모은 물은\n영양이 가득하다. 식물에\n뿌려주면 크게 자란다."
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
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
