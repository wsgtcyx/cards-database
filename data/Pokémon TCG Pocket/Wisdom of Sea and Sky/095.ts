import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/095",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/095",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/095",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/095"
    },
    name: {
        en: "Gliscor",
        "fr": "Scorvol",
        "es": "Gliscor",
        "it": "Gliscor",
        "de": "Skorgro",
        "pt-br": "Gliscor",
        "zh-tw": "天蠍王",
        ja: "グライオン",
        ko: "글라이온",
    },
    illustrator: "Shiburingaru",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Gligar",
        "fr": "Scorplane",
        "es": "Gligar",
        "it": "Gligar",
        "de": "Skorgla",
        "pt-br": "Gligar",
        "zh-tw": "天蠍",
        ja: "グライガー",
        ko: "글라이거",
    },
    description: {
        en: "It observes prey while hanging inverted from\nbranches. When the chance presents itself,\nit swoops!",
        "fr": "Il observe ses proies en étant suspendu à l'envers.\nbranches. Quand l'occasion se présente,\nça fonce !",
        "es": "Observa a sus presas mientras cuelga invertido.\nramas. Cuando se presenta la oportunidad,\n¡se lanza en picado!",
        "it": "Osserva la preda mentre pende capovolto\nrami. Quando si presenta l'occasione,\npiomba!",
        "de": "Es beobachtet Beute, während es kopfüber hängt\nZweige. Wenn sich die Chance bietet,\nes schwappt!",
        "pt-br": "Ele observa a presa enquanto está pendurado invertido\nfiliais. Quando a oportunidade se apresenta,\nele desce!",
        "zh-tw": "它倒掛在空中觀察獵物\n分支機構。當機會出現時，\n它猛撲！",
        ja: "尻尾で 木の枝に ぶら下がり 獲物を 観察する。すきを 見て 上空から 襲いかかる。",
        ko: "꼬리로 나뭇가지에 매달려\n먹이를 관찰한다. 틈을\n봐서 상공에서 덮친다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sharp Fang",
                "fr": "Croc acéré",
                "es": "Colmillo afilado",
                "it": "Zanna affilata",
                "de": "Scharfer Fangzahn",
                "pt-br": "Presa Afiada",
                "zh-tw": "尖牙",
                ja: "するどいキバ",
                ko: "예리한이빨"
            },
            damage: 60,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
