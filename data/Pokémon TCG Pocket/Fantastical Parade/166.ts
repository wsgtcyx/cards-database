import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/166",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/166",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/166",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/166",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/166",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/166"
    },
    name: {
        en: "Toxel",
        "fr": "Toxel",
        "es": "Tóxel",
        "it": "Toxel",
        "de": "Toxel",
        "pt-br": "Toxel",
        "zh-tw": "托克塞爾"
    },
    illustrator: "Taiga Kayama",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "This selfish, attention-seeking Pokémon stores\npoison and electricity in two different sacs inside\nits body.",
        "fr": "Ces magasins Pokémon égoïstes et en quête d'attention\npoison et électricité dans deux sacs différents à l'intérieur\nson corps.",
        "es": "Este Pokémon egoísta y buscador de atención almacena\nVeneno y electricidad en dos sacos diferentes dentro.\nsu cuerpo.",
        "it": "Questo negozio Pokémon egoista e in cerca di attenzione\nveleno ed elettricità in due diverse sacche all'interno\nil suo corpo.",
        "de": "Diese egoistischen, aufmerksamkeitsstarken Pokémon-Shops\nGift und Elektrizität in zwei verschiedenen Säcken im Inneren\nsein Körper.",
        "pt-br": "Este Pokémon egoísta e em busca de atenção armazena\nveneno e eletricidade em dois sacos diferentes dentro\nseu corpo.",
        "zh-tw": "這家自私、尋求關注的神奇寶貝商店\n裡面有兩個不同的毒囊和電\n它的身體。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Static Shock",
                "fr": "Choc statique",
                "es": "Choque estático",
                "it": "Shock statico",
                "de": "Statischer Schock",
                "pt-br": "Choque Estático",
                "zh-tw": "靜電衝擊"
            },
            damage: 30,
            cost: ["Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
