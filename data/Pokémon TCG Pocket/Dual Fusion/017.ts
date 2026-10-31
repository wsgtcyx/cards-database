import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/017",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/017",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/017",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/017"
    },
    name: {
        en: "Charmeleon",
        fr: "Reptincel",
        es: "Charmeleon",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
        ja: "リザード",
        ko: "리자드",
        it: "Charmeleon",
        de: "Glutexo"
    },
    illustrator: "GIDORA",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 80,
    types: [
        "Fire"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Charmander",
        fr: "Salamèche",
        es: "Charmander",
        it: "Charmander",
        de: "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍",
        ja: "ヒトカゲ",
        ko: "파이리"
    },
    attacks: [
        {
            name: {
                en: "Flame Tail",
                fr: "Queue de Flammes",
                es: "Cola de Fuego",
                it: "Codafiamma",
                de: "Flammenschweif",
                "pt-br": "Cauda de Chamas",
                "zh-tw": "火之尾",
                ja: "ほのおのしっぽ",
                ko: "불꽃 꼬리"
            },
            cost: [
                "Fire",
                "Fire"
            ],
            damage: 50
        }
    ],
    abilities: [],
    description: {
        en: "When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents.",
        fr: "En agitant sa queue enflammée, il peut élever la température ambiante de manière exponentielle et ainsi tourmenter ses adversaires.",
        es: "Al agitar su ardiente cola, eleva poco a poco la temperatura a su alrededor para sofocar a sus rivales.",
        it: "Quando agita la coda infuocata, la temperatura circostante sale sempre di più, causando tormento ai suoi nemici.",
        de: "Wenn Glutexo seinen brennenden Schwanz schwingt, steigt die Temperatur um es herum immer weiter an und setzt seinen Gegnern zu.",
        "pt-br": "Quando balança sua cauda em chamas, a temperatura ao redor sobe sem parar, atormentando seus oponentes.",
        "zh-tw": "當牠激烈擺動尾巴時，周圍的溫度會不斷上升，讓對手陷入痛苦。",
        ja: "燃える 尻尾を 振りまわすと まわりの 温度が どんどん 上がって 相手を 苦しめる。",
        ko: "불타는 꼬리를 휘두르면\n주위의 온도가 점점 올라가\n상대를 괴롭게 한다."
    }
};

export default card;
