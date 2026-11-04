import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/026/8086dc1d1d7d9bfb",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/026/8086dc1d1d7d9bfb",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/026/8086dc1d1d7d9bfb",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/026/8086dc1d1d7d9bfb",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/026/8086dc1d1d7d9bfb",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/026/8086dc1d1d7d9bfb",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/026/8086dc1d1d7d9bfb",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/026/8086dc1d1d7d9bfb",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/026/8086dc1d1d7d9bfb"
    },
    name: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        'pt-br': "Pikachu",
        ja: "ピカチュウ",
        ko: "피카츄",
        "zh-tw": "皮卡丘"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "When it is angered, it immediately discharges the\nenergy stored in the pouches in its cheeks.",
        fr: "Quand il s'énerve, il libère instantanément\nl'énergie emmagasinée dans les poches de\nses joues.",
        es: "Cuando se enfada, este Pokémon\ndescarga la energía que almacena en\nel interior de las bolsas de las mejillas.",
        it: "Quando s'arrabbia, libera subito l'energia\naccumulata nelle sacche sulle guance.",
        de: "Ist es wütend, entlädt sich augenblicklich die\nElektrizität, die es in seinen Backentaschen\ngespeichert hat.",
        'pt-br': "Quando está com raiva, descarrega\nimediatamente a energia armazenada\nnas bolsas em suas bochechas.",
        ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
        ko: "양 볼에는 전기를 저장하는 주머니가 있다.\n화가 나면 저장한 전기를 단숨에 방출한다.",
        "zh-tw": "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力一口氣釋放出來。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Gnaw",
                fr: "Ronge",
                es: "Roer",
                it: "Rosicchiamento",
                de: "Nagen",
                'pt-br': "Roída",
                ja: "かじる",
                ko: "갉기",
                "zh-tw": "咬"
            },
            damage: 20,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: []
};
export default card;
