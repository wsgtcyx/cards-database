import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/046"
    },
    name: {
        en: "Cubchoo",
        fr: "Polarhume",
        es: "Cubchoo",
        it: "Cubchoo",
        de: "Petznief",
        "pt-br": "Cubchoo",
        "zh-tw": "噴嚏熊",
        ko: "코고미",
        ja: "クマシュン"
    },
    illustrator: "Kanako Eo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [613],
    stage: "Basic",
    description: {
        en: "When Cubchoo starts sneezing, watch out! If it spatters you with its frosty snot, you’ll get frostbite.",
        fr: "Lorsque Polarhume commence à éternuer, faites attention ! S’il vous éclabousse de sa morve glacée, vous aurez des engelures.",
        es: "Cuando Cubchoo empiece a estornudar, ¡cuidado! Si te salpica con sus mocos helados, te congelarás.",
        it: "Quando Cubchoo inizia a starnutire, fai attenzione! Se ti schizza con il suo moccio gelido, ti verrà il congelamento.",
        de: "Wenn Petznief anfängt zu niesen, seien Sie vorsichtig! Wenn es dich mit seinem frostigen Rotz bespritzt, bekommst du Erfrierungen.",
        "pt-br": "Quando Cubchoo começar a espirrar, cuidado! Se respingar em você com seu ranho gelado, você sofrerá queimaduras de frio.",
        "zh-tw": "當噴嚏熊開始打噴嚏時，要小心！如果它的冷鼻涕濺到你身上，你就會被凍傷。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Icicle Punch",
                fr: "Poing Stalactite",
                es: "Puñetazo Gélido",
                it: "Freddopugno",
                de: "Eiswatsche",
                "pt-br": "Soco de Icelo",
                "zh-tw": "冰柱拳"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
