import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/005",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/005",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/005",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/005"
    },
    name: {
        en: "Metapod",
        fr: "Chrysacier",
        es: "Metapod",
        it: "Metapod",
        de: "Safcon",
        "pt-br": "Metapod",
        "zh-tw": "鐵甲蛹",
        ja: "トランセル",
        ko: "단데기"
    },
    illustrator: "Asako Ito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Grass"
    ],
    dexId: [
        11
    ],
    evolveFrom: {
        en: "Caterpie",
        fr: "Chenipan",
        es: "Caterpie",
        it: "Caterpie",
        de: "Raupy",
        "pt-br": "Caterpie",
        "zh-tw": "綠毛蟲",
        ja: "Caterpie",
        ko: "Caterpie"
    },
    stage: "Stage1",
    description: {
        en: "Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack.",
        fr: "Bien que son corps soit entouré d'une carapace solide, l'intérieur est si mou qu'il ne résisterait pas à une attaque violente.",
        es: "Aunque cuenta con una coraza muy dura, tiene un cuerpo bastante blando. Un ataque violento puede acabar con él.",
        it: "La corazza esterna è robusta ma l'interno è molle. Per questo non è in grado di resistere ad attacchi particolarmente veementi.",
        de: "In seiner harten Schale ist ein weicher Körper. Einem brutalen Angriff hat es nichts entgegenzusetzen.",
        "pt-br": "Apesar de estar envolto em um casco espesso, o interior do seu corpo é frágil, e por isso não aguenta ataques muito fortes.",
        "zh-tw": "雖然有堅硬的外殼，但因為殼裡的身體很軟，所以無法抵抗強力的攻擊。",
        ja: "Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack.",
        ko: "Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack."
    },
    attacks: [
        {
            cost: [
                "Grass"
            ],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞",
                ja: "Ram",
                ko: "Ram"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
