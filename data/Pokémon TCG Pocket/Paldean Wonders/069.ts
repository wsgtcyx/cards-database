import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/069",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/069",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/069",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/069",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/069",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/069"
    },
    name: {
        en: "Shroodle",
        fr: "Gribouraigne",
        es: "Shroodle",
        it: "Shroodle",
        de: "Sproxi",
        "pt-br": "Shroodle",
        "zh-tw": "滋汁鼴",
        pt: "Shroodle",
        'es-mx': "Shroodle"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Darkness"],
    dexId: [944],
    description: {
        en: "To keep enemies away from its territory, it paints markings around its nest using a poisonous liquid that has an acrid odor.",
        "fr": "Pour éloigner les ennemis de son territoire, il peint des marques autour de son nid à l’aide d’un liquide toxique à l’odeur âcre.",
        "es": "Para mantener a los enemigos alejados de su territorio, pinta marcas alrededor de su nido usando un líquido venenoso que tiene un olor acre.",
        "it": "Per tenere i nemici lontani dal suo territorio, dipinge dei segni attorno al suo nido utilizzando un liquido velenoso dall'odore acre.",
        "de": "Um Feinde von seinem Revier fernzuhalten, malt er mit einer giftigen Flüssigkeit, die einen beißenden Geruch hat, Markierungen rund um sein Nest.",
        "pt-br": "Para manter os inimigos longe de seu território, ele pinta marcas ao redor de seu ninho usando um líquido venenoso de odor acre.",
        "zh-tw": "為了讓敵人遠離它的領地，它會使用具有辛辣氣味的有毒液體在巢周圍繪製標記。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Scratch",
                fr: "Griffe",
                "es": "Rascar",
                "it": "Graffio",
                de: "Scratch",
                "pt-br": "Arranhar",
                "zh-tw": "划痕"
            },
            damage: 20,
            cost: ["Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
