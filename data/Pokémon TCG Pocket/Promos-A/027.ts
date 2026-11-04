import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/027/f4087aed73bde903",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/027/f4087aed73bde903",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/027/f4087aed73bde903",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/027/f4087aed73bde903",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/027/f4087aed73bde903",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/027/f4087aed73bde903",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/027/f4087aed73bde903",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/027/f4087aed73bde903",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/027/f4087aed73bde903"
    },
    name: {
        en: "Snivy",
        fr: "Vipélierre",
        es: "Snivy",
        it: "Snivy",
        de: "Serpifeu",
        'pt-br': "Snivy",
        ja: "ツタージャ",
        ko: "주리비얀",
        "zh-tw": "藤藤蛇",
    },
    illustrator: "Yoriyuki Ikegami",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "Being exposed to sunlight makes its movements\nswifter. It uses vines more adeptly than its hands.",
        fr: "La lumière du soleil augmente fortement son agilité.\nSes lianes sont plus habiles que ses mains.",
        es: "Cuando recibe los rayos de sol, se mueve\nmucho más rápido que de costumbre.\nUsa mejor sus lianas que sus manos.",
        it: "Quando è esposto alla luce solare può muoversi più\nvelocemente. Usa le sue liane meglio dei suoi stessi arti.",
        de: "Im Sonnenlicht erhöht sich das Tempo\nseiner Bewegungen. Es ist mit seinen\nSchlingen geschickter als mit den Händen.",
        'pt-br': "Quando exposto à luz solar, seus movimentos tornam-se mais\nrápidos. Ele usa as trepadeiras com mais destreza que suas mãos.",
        ja: "太陽の 光を 浴びると いつもよりも 素早く 動ける。 手よりも ツルを うまく使う。",
        ko: "태양의 빛을 받으면\n평소보다 빨리 움직일 수 있다.\n손보다 덩굴을 잘 사용한다.",
        "zh-tw": "只要沐浴在陽光下，動作就會變得比平常更加迅速。用起蔓藤時比用手更加靈活。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                'pt-br': "Investida",
                ja: "たいあたり",
                ko: "몸통박치기",
                "zh-tw": "撞擊"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol3"]
};
export default card;
