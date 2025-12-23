import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Starly",
        "fr": "Étourmi",
        "es": "Starly",
        "it": "Starly",
        "de": "Staralili",
        "pt-br": "Starly",
        "zh-tw": "姆克兒"
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
        "zh-tw": "因為它們個體較弱，所以形成\n組。然而，如果團體壯大，他們就會爭吵\n太大了。"
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
                "zh-tw": "呼喚家人"
            },
            cost: ["Colorless"],
            effect: {
                en: "Put 1 random Starly from your deck onto your Bench.",
                "fr": "Placez 1 Starly aléatoire de votre deck sur votre Banc.",
                "es": "Coloca 1 Starly aleatorio de tu mazo en tu Banca.",
                "it": "Metti 1 Starly casuale dal tuo mazzo nella tua panchina.",
                "de": "Lege 1 zufälligen Starly aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Starly aleatória do seu deck no seu Banco.",
                "zh-tw": "從你的牌組中隨機將 1 顆星星放到你的替補席上。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
