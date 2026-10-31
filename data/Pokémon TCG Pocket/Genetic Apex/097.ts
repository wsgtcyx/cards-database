import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/097",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/097",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A1/097"
    },
    name: {
        en: "Magnemite",
        fr: "Magnéti",
        es: "Magnemite",
        it: "Magnemite",
        de: "Magnetilo",
        'pt-br': "Magnemite",
        ja: "コイル",
        ko: "코일",
        "zh-tw": "小磁怪",
    },
    illustrator: "sowsow",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    stage: "Basic",
    attacks: [{
            cost: ["Lightning"],
            name: {
                en: "Lightning Ball",
                fr: "Boule Éclair",
                es: "Bola Relámpago",
                it: "Fulminpalla",
                de: "Kugelblitz",
                'pt-br': "Bola de Raios",
                ja: "ピッカリだま",
                ko: "번쩍구슬",
                "zh-tw": "閃電球"
            },
            damage: "20"
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond",
    description: {
        en: "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
        fr: "Les ondes électromagnétiques émises par ses extrémités\nlui permettent de défier les lois de la gravité et de flotter.",
        es: "Las unidades laterales crean ondas\nelectromagnéticas que contrarrestan\nla gravedad y le permiten flotar.",
        it: "Le onde elettromagnetiche generate dagli\nelementi laterali neutralizzano la gravità\npermettendogli di levitare a mezz'aria.",
        de: "Die seitlichen Module halten es in der Luft,\nindem sie mit elektromagnetischen Wellen\ndie Schwerkraft überlisten.",
        'pt-br': "As ondas eletromagnéticas emitidas pelas\nunidades nas laterais de sua cabeça geram\nantigravidade, o que faz com que ele possa flutuar.",
        ja: "左右にある ユニットから だす 電磁波で 重力を さえぎって 空に 浮かぶのだ。",
        ko: "좌우에 있는 유닛에서 나오는\n전자파를 이용해\n중력을 거슬러 하늘에 떠 있다.",
        "zh-tw": "其頭部兩側的裝置發射的電磁波會排出反重力，使其能夠漂浮。"
    },
    boosters: ["pikachu"]
};
export default card;
