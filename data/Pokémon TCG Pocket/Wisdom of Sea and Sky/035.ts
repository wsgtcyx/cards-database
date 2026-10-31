import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/035",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/035",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/035",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/035"
    },
    name: {
        en: "Darumaka",
        "fr": "Darumarond",
        "es": "Darumaka",
        "it": "Darumaka",
        "de": "Flampion",
        "pt-br": "Darumaka",
        "zh-tw": "火紅不倒翁",
        ja: "ダルマッカ",
        ko: "달막화",
    },
    illustrator: "Yuka Morii",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    description: {
        en: "It derives its power from fire burning inside\nits body. If the fire dwindles, this Pokémon will\nimmediately fall asleep.",
        "fr": "Il tire son pouvoir du feu qui brûle à l'intérieur\nson corps. Si le feu diminue, ce Pokémon\ns'endormir immédiatement.",
        "es": "Obtiene su poder del fuego que arde en su interior.\nsu cuerpo. Si el fuego disminuye, este Pokémon\nquedarse dormido inmediatamente.",
        "it": "Deriva il suo potere dal fuoco che brucia all'interno\nil suo corpo. Se il fuoco diminuisce, questo Pokémon lo farà\naddormentarsi immediatamente.",
        "de": "Seine Kraft bezieht es aus dem Feuer, das im Inneren brennt\nsein Körper. Wenn das Feuer nachlässt, wird dieses Pokémon es tun\nsofort einschlafen.",
        "pt-br": "Seu poder deriva do fogo queimando dentro\nseu corpo. Se o fogo diminuir, este Pokémon irá\nadormecer imediatamente.",
        "zh-tw": "它的力量來自於內部燃燒的火焰\n它的身體。如果火勢減弱，這只神奇寶貝將會\n立即入睡。",
        ja: "体の 中で 燃える 炎が パワーの 源。 火が 小さく なると たちまち 眠ってしまう。",
        ko: "몸 안에서 타오르는 불꽃이\n힘의 원천이다. 불꽃이 작아지면\n금세 잠들어 버린다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌",
                ja: "はねまわる",
                ko: "돌아다니며 뛰기"
            },
            damage: 30,
            cost: ["Fire", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
