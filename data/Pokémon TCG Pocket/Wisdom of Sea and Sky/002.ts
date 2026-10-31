import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/002",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/002",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/002",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/002",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/002"
    },
    name: {
        en: "Gloom",
        "fr": "Ortide",
        "es": "Gloom",
        "it": "Gloom",
        "de": "Duflor",
        "pt-br": "Gloom",
        "zh-tw": "臭臭花",
        ja: "クサイハナ",
        ko: "냄새꼬",
    },
    illustrator: "Kyoko Umemoto",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Oddish",
        "fr": "Mystherbe",
        "es": "Oddish",
        "it": "Oddish",
        "de": "Myrapla",
        "pt-br": "Oddish",
        "zh-tw": "走路草",
        ja: "ナゾノクサ",
        ko: "뚜벅쵸",
    },
    description: {
        en: "Its pistils exude an incredibly foul odor.\nThe horrid stench can cause fainting at a distance\nof 1.25 miles.",
        "fr": "Ses pistils dégagent une odeur incroyablement nauséabonde.\nL'horrible odeur peut provoquer des évanouissements à distance\nde 1,25 milles.",
        "es": "Sus pistilos exudan un olor increíblemente fétido.\nEl horrible hedor puede provocar desmayos a distancia.\nde 1,25 millas.",
        "it": "I suoi pistilli emanano un odore incredibilmente disgustoso.\nL'orrendo fetore può provocare svenimenti a distanza\ndi 1,25 miglia.",
        "de": "Seine Stempel verströmen einen unglaublich üblen Geruch.\nDer schreckliche Gestank kann aus der Ferne zu Ohnmachtsanfällen führen\nvon 1,25 Meilen.",
        "pt-br": "Seus pistilos exalam um odor incrivelmente desagradável.\nO fedor horrível pode causar desmaios à distância\nde 1,25 milhas.",
        "zh-tw": "它的雌蕊散發著令人難以置信的惡臭。\n可怕的惡臭會導致遠處暈厥\n1.25 英里。",
        ja: "めしべが 放つ とてつもなく 臭い においは ２キロ先まで とどき 気を 失わせる。",
        ko: "암술에서 내뿜는 지독하게\n구린 냄새는 2km 떨어진 곳까지\n퍼져 정신을 잃게 만든다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Leaf Step",
                "fr": "Étape de la feuille",
                "es": "Paso de hoja",
                "it": "Passo delle foglie",
                "de": "Blattschritt",
                "pt-br": "Passo Folha",
                "zh-tw": "葉步",
                ja: "リーフステップ",
                ko: "리프스텝"
            },
            damage: 40,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
