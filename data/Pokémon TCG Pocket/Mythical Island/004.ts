import { Card } from "../../../interfaces";
import Set from "../Mythical Island";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1a/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1a/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1a/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1a/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1a/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1a/004",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1a/004"
    },
    name: {
        en: "Snivy",
        fr: "Vipélierre",
        es: "Snivy",
        it: "Snivy",
        de: "Serpifeu",
        'pt-br': "Snivy",
        ko: "주리비얀",
        "zh-tw": "藤藤蛇",
    },
    illustrator: "Kagemaru Himeno",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "Being exposed to sunlight makes its movements swifter. It uses vines more adeptly than its hands.",
        fr: "La lumière du soleil augmente fortement son agilité.\nSes lianes sont plus habiles que ses mains.",
        es: "Cuando recibe los rayos de sol, se mueve\nmucho más rápido que de costumbre.\nUsa mejor sus lianas que sus manos.",
        it: "Quando è esposto alla luce solare può muoversi più\nvelocemente. Usa le sue liane meglio dei suoi stessi arti.",
        de: "Im Sonnenlicht erhöht sich das Tempo\nseiner Bewegungen. Es ist mit seinen\nSchlingen geschickter als mit den Händen.",
        'pt-br': "Quando exposto à luz solar, seus movimentos tornam-se mais\nrápidos. Ele usa as trepadeiras com mais destreza que suas mãos.",
        ko: "태양의 빛을 받으면\n평소보다 빨리 움직일 수 있다.\n손보다 덩굴을 잘 사용한다.",
        "zh-tw": "暴露在陽光下使它的動作更快。它比雙手更擅長使用藤蔓。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Vine Whip",
                fr: "Fouet Lianes",
                es: "Látigo Cepa",
                it: "Frustata",
                de: "Rankenhieb",
                'pt-br': "Chicote de Vinha",
                ko: "덩굴채찍",
                "zh-tw": "藤鞭"
            },
            damage: 40,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond"
};
export default card;
