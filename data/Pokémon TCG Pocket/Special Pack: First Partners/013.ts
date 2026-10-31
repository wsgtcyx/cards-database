import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/013",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/013",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/013",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/013",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/013",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/013",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/013",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/013",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/SP1/013"
    },
    name: {
        en: "Snivy",
        fr: "Vipélierre",
        es: "Snivy",
        "pt-br": "Snivy",
        "zh-tw": "藤藤蛇",
        ja: "ツタージャ",
        ko: "주리비얀",
        it: "Snivy",
        de: "Serpifeu"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Vine Whip",
                fr: "Fouet Lianes",
                es: "Látigo Cepa",
                it: "Frustata",
                de: "Rankenhieb",
                "pt-br": "Chicote de Vinha",
                "zh-tw": "藤鞭",
                ja: "つるのムチ",
                ko: "덩굴채찍"
            },
            cost: [
                "Grass"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "It is very intelligent and calm. Being exposed to lots of sunlight makes its movements swifter.",
        fr: "Un Pokémon intelligent et très calme. Il se déplace beaucoup plus rapidement s'il est exposé à la lumière du soleil.",
        es: "Es muy inteligente y tranquilo. Se mueve ágilmente si recibe mucha luz solar.",
        it: "È dotato di un'intelligenza e sangue freddo straordinari. Se viene esposto a tanta luce solare, i suoi movimenti si fanno più rapidi.",
        de: "Das sehr intelligente Pokémon ist sehr ruhig. Sonnenlicht erhöht die Geschwindigkeit seiner Bewegungen.",
        "pt-br": "É muito inteligente e calmo. Quando exposto a muita luz solar, seus movimentos tornam-se mais rápidos.",
        "zh-tw": "非常聰明且冷靜。沐浴在陽光下越久，動作就會變得越敏捷。",
        ja: "知能が 高く とても 冷静。 太陽の 光を たっぷり 浴びると 動きが 鋭くなる。",
        ko: "지능이 높고 매우 냉정하다.\n태양의 빛을 듬뿍 받으면\n움직임이 민첩해진다."
    }
};

export default card;
