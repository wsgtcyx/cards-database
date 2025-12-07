import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Darumaka",
        "fr": "Darumaka",
        "es": "Darumaka",
        "it": "Darumaka",
        "de": "Darumaka",
        "pt-br": "Darumaka",
        "zh-tw": "達摩卡"
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
        "zh-tw": "它的力量來自於內部燃燒的火焰\n它的身體。如果火勢減弱，這只神奇寶貝將會\n立即入睡。"
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
                "zh-tw": "翻牌"
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
