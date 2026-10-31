import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/049",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/049",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/049",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/049"
    },
    name: {
        en: "Trubbish",
        "fr": "Miamiasme",
        "es": "Trubbish",
        "it": "Trubbish",
        "de": "Unratütox",
        "pt-br": "Trubbish",
        "zh-tw": "破破袋",
        ja: "ヤブクロン",
        ko: "깨봉이"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "Its favorite places are unsanitary ones. If you\nleave trash lying around, you could even find\none of these Pokémon living in your room.",
        "fr": "Ses endroits préférés sont les endroits insalubres. Si vous\nlaissez traîner les déchets, vous pourriez même trouver\nun de ces Pokémon vivant dans votre chambre.",
        "es": "Sus lugares favoritos son los insalubres. si tu\ndeja basura tirada por ahí, incluso podrías encontrar\nuno de estos Pokémon viviendo en tu habitación.",
        "it": "I suoi posti preferiti sono quelli antigenici. Se tu\nlascia la spazzatura in giro, potresti persino trovarla\nuno di questi Pokémon che vive nella tua stanza.",
        "de": "Seine Lieblingsorte sind unhygienische Orte. Wenn Sie\nLassen Sie Müll herumliegen, den Sie sogar finden könnten\neines dieser Pokémon, das in deinem Zimmer lebt.",
        "pt-br": "Seus lugares favoritos são os insalubres. Se você\ndeixe lixo espalhado, você pode até encontrar\num desses Pokémon morando no seu quarto.",
        "zh-tw": "它最喜歡的地方是不衛生的地方。如果你\n把垃圾隨地亂扔，你甚至可以找到\n住在你房間裡的這些神奇寶貝之一。",
        ja: "不衛生な 場所が 好き。 ゴミで 汚したまま 放っておくと 部屋にも 現れて 棲みつく。",
        ko: "비위생적인 장소를 좋아한다.\n쓰레기를 어질러놓은 채 내버려 두면\n방에 나타나 그대로 눌러앉는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Drool",
                "fr": "Baver",
                "es": "Babear",
                "it": "Sbavare",
                "de": "Sabbern",
                "pt-br": "Babar",
                "zh-tw": "流口水",
                ja: "よだれ",
                ko: "침"
            },
            damage: 30,
            cost: ["Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
