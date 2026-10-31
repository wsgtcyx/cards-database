import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/139",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/139",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/139",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/139",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/139",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/139",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/139",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/139",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/139"
    },
    name: {
        en: "Crabrawler",
        "fr": "Crabagarre",
        "es": "Crabrawler",
        "it": "Crabrawler",
        "de": "Krabbox",
        "pt-br": "Crabrawler",
        "zh-tw": "好勝蟹",
        ja: "マケンカニ",
        ko: "오기지게",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "If it loses its pincers, they'll quickly regrow.\nThe pincers are popular ingredients in paella\nsince their shells produce a tasty soup stock.",
        "fr": "S’il perd ses pinces, elles repousseront rapidement.\nLes pinces sont des ingrédients populaires dans la paella\npuisque leurs coquilles produisent un savoureux bouillon de soupe.",
        "es": "Si pierde sus pinzas, rápidamente volverán a crecer.\nLas tenazas son ingredientes populares en la paella\nya que sus conchas producen un sabroso caldo.",
        "it": "Se perde le tenaglie, queste ricresceranno rapidamente.\nLe tenaglie sono un ingrediente popolare nella paella\npoiché dal loro guscio si ricava un gustoso brodo.",
        "de": "Wenn es seine Zangen verliert, wachsen diese schnell nach.\nDie Zange ist eine beliebte Zutat in der Paella\ndenn ihre Schalen ergeben eine schmackhafte Suppenbrühe.",
        "pt-br": "Se perder as pinças, elas crescerão rapidamente.\nAs pinças são ingredientes populares na paella\njá que suas cascas produzem um caldo saboroso.",
        "zh-tw": "如果它失去了鉗子，它們會很快重新長出來。\n鉗子是西班牙海鮮飯中受歡迎的食材\n因為它們的殼可以製作出美味的湯料。",
        ja: "ハサミは もげても すぐに 生える。 カラから 良い 出汁が でるので パエリアの 具材として 人気。",
        ko: "집게는 떨어져도 금방 다시 자란다.\n껍데기에서 좋은 육수가 나오기 때문에\n파에야의 재료로 인기가 좋다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Knuckle Punch",
                "fr": "Coup de poing",
                "es": "Golpe de nudillos",
                "it": "Pugno sulle nocche",
                "de": "Knöchelschlag",
                "pt-br": "Soco de Dedo",
                "zh-tw": "指節拳",
                ja: "げんこつ",
                ko: "꿀밤"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
