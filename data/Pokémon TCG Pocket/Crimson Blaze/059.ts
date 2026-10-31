import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/059",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/059",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/059",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/059",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/059"
    },
    name: {
        en: "Starly",
        "fr": "Étourmi",
        "es": "Starly",
        "it": "Starly",
        "de": "Staralili",
        "pt-br": "Starly",
        "zh-tw": "姆克兒",
        ja: "ムックル",
        ko: "찌르꼬"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Because they are weak individually, they form\ngroups. However, they bicker if the group grows\ntoo big.",
        "fr": "Parce qu'ils sont faibles individuellement, ils forment\ngroupes. Cependant, ils se chamaillent si le groupe s'agrandit\ntrop gros.",
        "es": "Debido a que son débiles individualmente, forman\ngrupos. Sin embargo, discuten si el grupo crece.\ndemasiado grande.",
        "it": "Poiché sono deboli individualmente, si formano\ngruppi. Tuttavia, litigano se il gruppo cresce\ntroppo grande.",
        "de": "Weil sie einzeln schwach sind, bilden sie sich\nGruppen. Allerdings streiten sie sich, wenn die Gruppe wächst\nzu groß.",
        "pt-br": "Por serem fracos individualmente, eles formam\ngrupos. No entanto, eles brigam se o grupo crescer\nmuito grande.",
        "zh-tw": "因為它們個體較弱，所以形成\n組。然而，如果團體壯大，他們就會爭吵\n太大了。",
        ja: "群れを 作ることで 1匹での 弱さを カバーし合っているが 群れが 大きくなると もめだす。",
        ko: "무리를 만드는 것으로 한 마리로는\n약하다는 단점을 커버하고 있지만\n무리가 커지면 다투기 시작한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Call for Family",
                "fr": "Appel à la famille",
                "es": "Llamada para la familia",
                "it": "Chiamata per la famiglia",
                "de": "Aufruf zur Familie",
                "pt-br": "Ligue para a família",
                "zh-tw": "呼喚家人",
                ja: "なかまをよぶ",
                ko: "동료부르기"
            },
            cost: ["Colorless"],
            effect: {
                en: "Put 1 random Starly from your deck onto your Bench.",
                "fr": "Placez 1 Starly aléatoire de votre deck sur votre Banc.",
                "es": "Coloca 1 Starly aleatorio de tu mazo en tu Banca.",
                "it": "Metti 1 Starly casuale dal tuo mazzo nella tua panchina.",
                "de": "Lege 1 zufälligen Starly aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Starly aleatória do seu deck no seu Banco.",
                "zh-tw": "從你的牌組中隨機將 1 顆星星放到你的替補席上。",
                ja: "自分の山札から「ムックル」をランダムに1枚、ベンチに出す。",
                ko: "자신의 덱에서 「찌르꼬」를 랜덤으로 1장 벤치로 내보낸다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
