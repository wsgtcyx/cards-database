import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/039",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/039",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/039",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/039"
    },
    name: {
        en: "Sandile",
        "fr": "Mascaïman",
        "es": "Sandile",
        "it": "Sandile",
        "de": "Ganovil",
        "pt-br": "Sandile",
        "zh-tw": "黑眼鱷",
        ja: "メグロコ",
        ko: "깜눈크",
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "It submerges itself in sand and moves as if\nswimming. This wise behavior keeps its enemies\nfrom finding it and maintains its temperature.",
        "fr": "Il s'immerge dans le sable et se déplace comme s'il\nnager. Ce comportement sage garde ses ennemis\nde le trouver et maintient sa température.",
        "es": "Se sumerge en la arena y se mueve como si\nnadando. Este sabio comportamiento mantiene a sus enemigos\nde encontrarlo y mantiene su temperatura.",
        "it": "Si immerge nella sabbia e si muove come se\nnuoto. Questo comportamento saggio mantiene i suoi nemici\ndal trovarlo e mantiene la sua temperatura.",
        "de": "Es versinkt im Sand und bewegt sich, als ob es sich bewegen würde\nSchwimmen. Dieses weise Verhalten hält seine Feinde fern\nverhindert, dass er es findet, und hält seine Temperatur aufrecht.",
        "pt-br": "Ele submerge na areia e se move como se\nnatação. Este comportamento sábio mantém seus inimigos\nde encontrá-lo e mantém sua temperatura.",
        "zh-tw": "它把自己淹沒在沙子裡，移動得好像\n游泳。這種明智的行為留住了敵人\n找到它並保持其溫度。",
        ja: "砂の中に 潜り 泳ぐように 移動。 敵に みつからないためと 体温を 下げない 知恵 なのだ。",
        ko: "모래 속에 숨어서 헤엄치는 것처럼\n이동한다. 적에게 들키지 않으면서\n체온이 내려가지 않기 위한 지혜다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬",
                ja: "かみつく",
                ko: "물기"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
