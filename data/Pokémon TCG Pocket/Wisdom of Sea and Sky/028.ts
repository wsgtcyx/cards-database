import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/028",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/028",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/028",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/028"
    },
    name: {
        en: "Quilava",
        "fr": "Feurisson",
        "es": "Quilava",
        "it": "Quilava",
        "de": "Igelavar",
        "pt-br": "Quilava",
        "zh-tw": "火岩鼠",
        ja: "マグマラシ",
        ko: "마그케인",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Cyndaquil",
        "fr": "Héricendre",
        "es": "Cyndaquil",
        "it": "Cyndaquil",
        "de": "Feurigel",
        "pt-br": "Cyndaquil",
        "zh-tw": "火球鼠",
        ja: "ヒノアラシ",
        ko: "브케인",
    },
    description: {
        en: "Before battle, it turns its back on its opponent to\ndemonstrate how ferociously its fire blazes.",
        "fr": "Avant le combat, il tourne le dos à son adversaire pour\ndémontrer avec quelle férocité son feu flambe.",
        "es": "Antes de la batalla, le da la espalda a su oponente para\ndemostrar cuán ferozmente arde su fuego.",
        "it": "Prima della battaglia volta le spalle al suo avversario\ndimostrare quanto ferocemente divampa il suo fuoco.",
        "de": "Vor dem Kampf wendet es seinem Gegner den Rücken zu\ndemonstrieren, wie heftig sein Feuer lodert.",
        "pt-br": "Antes da batalha, ele vira as costas ao oponente para\ndemonstrar quão ferozmente seu fogo arde.",
        "zh-tw": "戰鬥前，它會背對對手\n展示它的火焰有多麼猛烈。",
        ja: "戦いの前 背中を 向けて 自分の 炎が どれくらい すごいかを 相手に 見せつける。",
        ko: "싸우기 전에 등을 돌려\n자신의 불꽃이 얼마나 대단한지\n상대에게 일부러 보여 준다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Combustion",
                "fr": "Combustion",
                "es": "Combustión",
                "it": "Combustione",
                "de": "Verbrennung",
                "pt-br": "Combustão",
                "zh-tw": "燃燒",
                ja: "かえん",
                ko: "화염"
            },
            damage: 30,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
