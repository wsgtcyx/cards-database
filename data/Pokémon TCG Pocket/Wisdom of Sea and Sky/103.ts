import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/103",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/103",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/103",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/103",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/103",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/103",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/103",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/103",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/103"
    },
    name: {
        en: "Larvitar",
        "fr": "Embrylex",
        "es": "Larvitar",
        "it": "Larvitar",
        "de": "Larvitar",
        "pt-br": "Larvitar",
        "zh-tw": "幼基拉斯",
        ja: "ヨーギラス",
        ko: "애버라스",
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "Born deep underground, this Pokémon\nbecomes a pupa after eating enough\ndirt to make a mountain.",
        "fr": "Né profondément sous terre, ce Pokémon\ndevient une pupe après avoir mangé suffisamment\nterre pour faire une montagne.",
        "es": "Nacido en las profundidades de la tierra, este Pokémon\nse convierte en pupa después de comer lo suficiente\ntierra para hacer una montaña.",
        "it": "Nato nelle profondità del sottosuolo, questo Pokémon\ndiventa una pupa dopo aver mangiato abbastanza\nterra per fare una montagna.",
        "de": "Dieses Pokémon wurde tief unter der Erde geboren\nWird nach ausreichender Nahrungsaufnahme zur Puppe\nDreck, um einen Berg zu machen.",
        "pt-br": "Nascido nas profundezas do subsolo, este Pokémon\nvira uma pupa depois de comer o suficiente\nsujeira para fazer uma montanha.",
        "zh-tw": "這只神奇寶貝出生在地下深處\n吃飽後變成蛹\n泥土可以造山。",
        ja: "地面 深くで 生まれ 山ほどの 土を 食べ終わると 体を つくるため サナギになる。",
        ko: "땅속 깊은 곳에서 태어나\n산을 이룰 정도의 흙을 먹고 나면\n몸을 만들기 위해 번데기가 된다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理",
                ja: "たいあたり",
                ko: "몸통박치기"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
