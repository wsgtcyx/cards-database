import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/025",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/025",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/025",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/025",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/025",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/025",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/025",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/025",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/025"
    },
    name: {
        en: "Wiglett",
        fr: "Taupikeau",
        es: "Wiglett",
        it: "Wiglett",
        de: "Schligda",
        'pt-br': "Wiglett",
        "zh-tw": "海地鼠",
        ja: "ウミディグダ",
        ko: "바다그다"
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [960],
    description: {
        en: "Though it looks like Diglett, Wiglett is an entirely different species. The resemblance seems to be a coincidental result of environmental adaptation.",
        "fr": "Bien qu'il ressemble à Taupiqueur, Taupikeau est une espèce totalement différente. La ressemblance semble être le résultat d’une coïncidence de l’adaptation environnementale.",
        "es": "Aunque se parece a Diglett, Wiglett es una especie completamente diferente. El parecido parece ser un resultado coincidente de la adaptación ambiental.",
        "it": "Sebbene assomigli a Diglett, Wiglett è una specie completamente diversa. La somiglianza sembra essere un risultato casuale dell'adattamento ambientale.",
        "de": "Obwohl es wie Digda aussieht, ist Schligda eine völlig andere Spezies. Die Ähnlichkeit scheint ein zufälliges Ergebnis der Anpassung an die Umwelt zu sein.",
        "pt-br": "Embora se pareça com Diglett, Wiglett é uma espécie totalmente diferente. A semelhança parece ser um resultado coincidente da adaptação ambiental.",
        "zh-tw": "雖然它看起來像 地鼠，但 海地鼠 是一個完全不同的物種。這種相似性似乎是環境適應的巧合結果。",
        ja: "ディグダに 似るが まるで 別の 種類。 生息 環境に 適応して 偶然 似たらしい。",
        ko: "디그다를 닮았지만 전혀 다른 종류다.\n서식하는 환경에 적응한 결과,\n우연히 닮게 되었다는 듯하다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                "es": "Pistola de agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍",
                ja: "みずでっぽう",
                ko: "물대포"
            },
            damage: "20",
            cost: ["Water"],
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
