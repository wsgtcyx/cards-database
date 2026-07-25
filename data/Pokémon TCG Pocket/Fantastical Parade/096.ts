import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/096",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/096",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/096",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/096"
    },
    name: {
        en: "Alolan Grimer",
        "fr": "Alolan Grimer",
        "es": "Grimer de Alola",
        "it": "Grimer di Alola",
        "de": "Alolan Grimer",
        "pt-br": "Alola Grimer",
        "zh-tw": "阿羅蘭·格里默"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    description: {
        en: "Alolan Grimer will gladly gobble up any kind\nof trash, making it a widely used and popular\nPokémon at garbage disposal facilities.",
        "fr": "Alolan Grimer engloutira volontiers n'importe quel type\nde déchets, ce qui en fait un produit largement utilisé et populaire\nPokémon dans les décharges.",
        "es": "Alolan Grimer devorará con gusto cualquier tipo\nde basura, lo que la convierte en un producto ampliamente utilizado y popular.\nPokémon en instalaciones de eliminación de basura.",
        "it": "Alolan Grimer divorerà volentieri qualsiasi tipo\ndi spazzatura, rendendolo un oggetto ampiamente utilizzato e popolare\nPokémon negli impianti di smaltimento dei rifiuti.",
        "de": "Alolan Grimer verschlingt gerne jede Sorte\nvon Müll, was es zu einem weit verbreiteten und beliebten Gerät macht\nPokémon bei Müllentsorgungsanlagen.",
        "pt-br": "Alolan Grimer engolirá com prazer qualquer tipo\nde lixo, tornando-o um recurso amplamente utilizado e popular\nPokémon em instalações de coleta de lixo.",
        "zh-tw": "阿羅蘭·格里默會很樂意吞噬任何種類\n垃圾，使其成為廣泛使用和流行的\n垃圾處理設施中的神奇寶貝。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pound",
                "fr": "Livre",
                "es": "Libra",
                "it": "Libbra",
                "de": "Pfund",
                "pt-br": "Libra",
                "zh-tw": "磅"
            },
            damage: 20,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
