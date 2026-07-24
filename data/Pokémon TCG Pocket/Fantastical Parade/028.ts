import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/028"
    },
    name: {
        en: "Alolan Vulpix",
        "fr": "Goupix d'Alola",
        "es": "Vulpix de Alola",
        "it": "Vulpix di Alola",
        "de": "Alola-Vulpix",
        "pt-br": "Vulpix de Alola",
        "zh-tw": "阿羅拉六尾"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "In hot weather, this Pokémon makes ice shards\nwith its six tails and sprays them around to cool\nitself off.",
        "fr": "Par temps chaud, ce Pokémon fabrique des éclats de glace\navec ses six queues et les pulvérise pour les refroidir\nlui-même.",
        "es": "Cuando hace calor, este Pokémon produce fragmentos de hielo\ncon sus seis colas y las rocía para que se enfríen\napagado.",
        "it": "Quando fa caldo, questo Pokémon crea schegge di ghiaccio\ncon le sue sei code e le spruzza intorno per farle raffreddare\nstesso spento.",
        "de": "Bei heißem Wetter bildet dieses Pokémon Eissplitter\nmit seinen sechs Schwänzen und sprüht sie zum Abkühlen herum\nschaltet sich ab.",
        "pt-br": "Em clima quente, este Pokémon produz cacos de gelo\ncom suas seis caudas e espalha-as para esfriar\ndesligado.",
        "zh-tw": "在炎熱的天氣裡，這只神奇寶貝會製造冰碎片\n用它的六個尾巴噴灑周圍以冷卻\n本身關閉。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Gnaw",
                "fr": "Ronger",
                "es": "Roer",
                "it": "Rosicchiare",
                "de": "Nagen",
                "pt-br": "Roer",
                "zh-tw": "啃"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
