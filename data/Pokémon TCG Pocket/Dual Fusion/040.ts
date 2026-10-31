import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/040",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/040",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/040",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/040",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/040",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/040",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/040",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/040",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/040"
    },
    name: {
        en: "Froakie",
        fr: "Grenousse",
        es: "Froakie",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
        ja: "ケロマツ",
        ko: "개구마르",
        it: "Froakie",
        de: "Froxy"
    },
    illustrator: "Atsuya Uki",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Pound",
                fr: "Écras'Face",
                es: "Destructor",
                it: "Botta",
                de: "Klaps",
                "pt-br": "Pancada",
                "zh-tw": "拍擊",
                ja: "はたく",
                ko: "막치기"
            },
            cost: [
                "Water"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Its happy-go-lucky look is an act intended to fool its enemies. It will suddenly drop the facade and overwhelm its foes with its blinding speed.",
        fr: "Son apparence nonchalante est trompeuse. Il change soudainement d’attitude et domine ses adversaires en un clin d’œil.",
        es: "Su aire despreocupado no es más que una fachada con la que engaña a sus enemigos para después arrollarlos a una velocidad abrumadora.",
        it: "La sua aria spensierata è solo una messinscena per ingannare il nemico e sopraffarlo d’improvviso a gran velocità.",
        de: "Es wirkt unbekümmert, doch damit täuscht es nur Gegner, um sie dann plötzlich mit unbegreiflicher Geschwindigkeit zu überwältigen.",
        "pt-br": "Seu ar alegre e despreocupado é uma farsa para enganar seus oponentes. De repente, abandona a fachada e os atordoa com sua velocidade ofuscante.",
        "zh-tw": "看起來悠哉的樣子其實是欺騙敵人的演技。會冷不防地用迅雷不及掩耳的速度壓制敵人。",
        ja: "呑気に 見えるが 敵を 欺く 演技。 一転 目にも留まらない スピードで 敵を 圧倒する。",
        ko: "태평해 보이는 것은\n적을 속이기 위한 연기다.\n눈에 보이지 않는 스피드로 적을 압도한다."
    }
};

export default card;
