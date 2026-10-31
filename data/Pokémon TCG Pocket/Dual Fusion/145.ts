import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/145",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/145",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/145",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/145",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/145",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/145",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/145",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/145",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/145"
    },
    name: {
        en: "Larvitar",
        fr: "Embrylex",
        es: "Larvitar",
        "pt-br": "Larvitar",
        "zh-tw": "幼基拉斯",
        ja: "ヨーギラス",
        ko: "애버라스",
        it: "Larvitar",
        de: "Larvitar"
    },
    illustrator: "Teeziro",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 50,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住",
                ja: "かみつく",
                ko: "물기"
            },
            cost: [
                "Colorless"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain.",
        fr: "Il naît dans les profondeurs terrestres. Après avoir englouti une quantité de terre équivalente à une montagne, il se transforme en chrysalide.",
        es: "Nacido en las profundidades subterráneas, este Pokémon se convierte en pupa al comer la cantidad de tierra equivalente a una montaña.",
        it: "Nasce nel profondo sottosuolo e dopo aver mangiato una montagna di terra si trasforma in una crisalide.",
        de: "Es wird tief im Erdreich geboren. Hat es einen Berg Erde gefressen, verpuppt sich dieses Pokémon.",
        "pt-br": "Este Pokémon nasce no subsolo e se torna uma pupa após comer terra o suficiente para fazer uma montanha.",
        "zh-tw": "誕生在地底深處。當牠吃完滿山的土壤後，就會為了成長而變成蛹。",
        ja: "地面 深くで 生まれ 山ほどの 土を 食べ終わると 体を つくるため サナギになる。",
        ko: "땅속 깊은 곳에서 태어나\n산을 이룰 정도의 흙을 먹고 나면\n몸을 만들기 위해 번데기가 된다."
    }
};

export default card;
