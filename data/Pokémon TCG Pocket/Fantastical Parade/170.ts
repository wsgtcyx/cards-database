import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/170",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/170",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/170",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/170",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/170",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/170",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/170"
    },
    name: {
        en: "Sandshrew",
        "fr": "Sabelette",
        "es": "Sandshrew",
        "it": "Sandshrew",
        "de": "Sandan",
        "pt-br": "Sandshrew",
        "zh-tw": "穿山鼠"
    },
    illustrator: "Uninori",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "No matter how high a place it falls from, this\nPokémon can save itself by rolling into a ball\nand bouncing.",
        "fr": "Peu importe la hauteur d'où il tombe, ce\nPokémon peut se sauver en se roulant en boule\net rebondir.",
        "es": "No importa desde qué alto caiga, esto\nPokémon puede salvarse rodando hasta formar una bola\ny rebotando.",
        "it": "Non importa da quanto in alto cada, questo\nI Pokémon possono salvarsi rotolando in una palla\ne rimbalzare.",
        "de": "Egal wie hoch es fällt, das hier\nPokémon können sich retten, indem sie sich zu einer Kugel zusammenrollen\nund hüpfen.",
        "pt-br": "Não importa quão alto seja o lugar de onde caia, este\nPokémon pode se salvar rolando em uma bola\ne saltando.",
        "zh-tw": "不管從多高的地方掉下來\n神奇寶貝可以通過滾成球來拯救自己\n和彈跳。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Double Scratch",
                "fr": "Double rayure",
                "es": "Doble rasguño",
                "it": "Doppio graffio",
                "de": "Doppelter Kratzer",
                "pt-br": "Raspadinha Dupla",
                "zh-tw": "雙划痕"
            },
            damage: 20,
            cost: ["Fighting"],
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
