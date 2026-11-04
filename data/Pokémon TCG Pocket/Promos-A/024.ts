import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/024/81538694ba7dbf49",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/024/81538694ba7dbf49",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/024/81538694ba7dbf49",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/024/81538694ba7dbf49",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/024/81538694ba7dbf49",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/024/81538694ba7dbf49",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/024/81538694ba7dbf49",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/024/81538694ba7dbf49",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/024/81538694ba7dbf49"
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
        "zh-tw": "小磁怪"
    },
    illustrator: "Miki Tanaka",
    rarity: "Three Diamond",
    category: "Pokemon",
    types: ["Lightning"],
    stage: "Basic",
    attacks: [{
            name: {
                en: "Lightning Ball",
                fr: "Boule Éclair",
                es: "Bola Relámpago",
                it: "Fulminpalla",
                de: "Kugelblitz",
                'pt-br': "Bola de Raios",
                ja: "ピッカリだま",
                ko: "번쩍구슬",
                "zh-tw": "光彈"
            },
            cost: ["Lightning"],
            damage: 20
        }],
    hp: 60,
    description: {
        en: "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float.",
        fr: "Les ondes électromagnétiques émises par ses extrémités\nlui permettent de défier les lois de la gravité et de flotter.",
        es: "Las unidades laterales crean ondas\nelectromagnéticas que contrarrestan\nla gravedad y le permiten flotar.",
        it: "Le onde elettromagnetiche generate dagli\nelementi laterali neutralizzano la gravità\npermettendogli di levitare a mezz'aria.",
        de: "Die seitlichen Module halten es in der Luft,\nindem sie mit elektromagnetischen Wellen\ndie Schwerkraft überlisten.",
        'pt-br': "As ondas eletromagnéticas emitidas pelas\nunidades nas laterais de sua cabeça geram\nantigravidade, o que faz com que ele possa flutuar.",
        ja: "左右にある ユニットから だす 電磁波で 重力を さえぎって 空に 浮かぶのだ。",
        ko: "좌우에 있는 유닛에서 나오는\n전자파를 이용해\n중력을 거슬러 하늘에 떠 있다.",
        "zh-tw": "從左右兩邊的組件發出的電磁波能阻礙重力，使牠浮在空中。"
    },
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: []
};
export default card;
