import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/032",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/032",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/032",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/032",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/032",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/032"
    },
    name: {
        en: "Alolan Vulpix",
        fr: "Goupix d'Alola",
        es: "Vulpix de Alola",
        it: "Vulpix di Alola",
        de: "Alola-Vulpix",
        "pt-br": "Vulpix de Alola",
        "zh-tw": "阿羅拉 六尾",
        ko: "알로라 식스테일",
        ja: "アローラ ロコン"
    },
    illustrator: "nagimiso",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [37],
    stage: "Basic",
    description: {
        en: "In hot weather, this Pokémon makes ice shards with its six tails and sprays them around to cool itself off.",
        fr: "Par temps chaud, ce Pokémon fabrique des éclats de glace avec ses six queues et les pulvérise pour se rafraîchir.",
        es: "Cuando hace calor, este Pokémon fabrica fragmentos de hielo con sus seis colas y los rocía para refrescarse.",
        it: "Quando fa caldo, questo Pokémon crea frammenti di ghiaccio con le sue sei code e li spruzza intorno per rinfrescarsi.",
        de: "Bei heißem Wetter bildet dieses Pokémon mit seinen sechs Schwänzen Eissplitter und versprüht diese, um sich abzukühlen.",
        "pt-br": "Em clima quente, este Pokémon faz pedaços de gelo com suas seis caudas e os espalha para se refrescar.",
        "zh-tw": "在炎熱的天氣裡，這隻寶可夢會用六條尾巴製造冰碎片並將其噴灑到周圍以給自己降溫。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Gnaw",
                fr: "Ronge",
                es: "Roer",
                it: "Rosicchiamento",
                de: "Nagen",
                "pt-br": "Roída",
                "zh-tw": "咬"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
