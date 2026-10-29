import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/058",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/058"
    },
    name: {
        en: "Marill",
        fr: "Marill",
        es: "Marill",
        "pt-br": "Marill",
        "zh-tw": "瑪力露",
        ja: "マリル",
        ko: "마릴",
        it: "Marill",
        de: "Marill"
    },
    illustrator: "Asako Ito",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Rollout",
                fr: "Roulade",
                es: "Rodar",
                it: "Rotolamento",
                de: "Walzer",
                "pt-br": "Rolagem",
                "zh-tw": "滾動",
                ja: "Rollout",
                ko: "Rollout"
            },
            cost: [
                "Psychic"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "The fur on its body naturally repels water. It can stay dry even when it plays in the water.",
        fr: "Sa fourrure est imperméable, si bien qu’il reste sec même quand il joue dans l’eau.",
        es: "Tiene un pelaje que repele el agua, por lo que está seco incluso después de bañarse.",
        it: "La pelliccia è idrorepellente. Così, rimane asciutto anche giocando nell’acqua.",
        de: "Sein Fell ist von Natur aus wasserabweisend. Es bleibt trocken, auch wenn es im Wasser spielt.",
        "pt-br": "A sua pelagem repele água naturalmente. Pode brincar na água por horas sem se molhar.",
        "zh-tw": "全身的體毛有著能將水彈開的特性，所以就算跳到水裡也不會弄濕。",
        ja: "The fur on its body naturally repels water. It can stay dry even when it plays in the water.",
        ko: "The fur on its body naturally repels water. It can stay dry even when it plays in the water."
    }
};

export default card;
