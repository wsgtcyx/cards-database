import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/059",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/059",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/059"
    },
    name: {
        en: "Azumarill",
        fr: "Azumarill",
        es: "Azumarill",
        "pt-br": "Azumarill",
        "zh-tw": "瑪力露麗",
        ja: "マリルリ",
        ko: "마릴리",
        it: "Azumarill",
        de: "Azumarill"
    },
    illustrator: "chibi",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Psychic"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Marill",
        fr: "Marill",
        es: "Marill",
        it: "Marill",
        de: "Marill",
        "pt-br": "Marill",
        "zh-tw": "瑪力露",
        ja: "Marill",
        ko: "Marill"
    },
    attacks: [
        {
            name: {
                en: "Rabbit Jumping",
                fr: "Bond de Lapin",
                es: "Brinconejo",
                it: "Saltelli da Coniglio",
                de: "Hasensprung",
                "pt-br": "Salto do Coelho",
                "zh-tw": "兔兒跳",
                ja: "Rabbit Jumping",
                ko: "Rabbit Jumping"
            },
            cost: [
                "Colorless",
                "Psychic"
            ],
            damage: "60x",
            effect: {
                en: "Flip 2 coins. This attack does 60 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×60點傷害。",
                ja: "Flip 2 coins. This attack does 60 damage for each heads.",
                ko: "Flip 2 coins. This attack does 60 damage for each heads."
            }
        }
    ],
    abilities: [],
    description: {
        en: "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
        fr: "Ses longues oreilles lui permettent d’entendre tout ce qui se passe sous l’eau de manière très distincte.",
        es: "Sus largas orejas son unos sensores excepcionales que le permiten diferenciar e identificar lo que oye dentro del agua.",
        it: "Le sue lunghe orecchie sono ricettori sensibilissimi. Riesce a distinguere e identificare ogni minimo rumore perfino sott’acqua.",
        de: "Seine langen Ohren sind hervorragende Sensoren, mit denen es Geräusche unter Wasser unterscheiden und zuordnen kann.",
        "pt-br": "Suas orelhas longas são sensores soberbos. Ele é capaz de diferenciar os movimentos dos objetos nas águas e dizer o que eles são.",
        "zh-tw": "長長的耳朵是靈敏的感應器。能夠藉著辨識水中的聲音來分辨出是什麼在動。",
        ja: "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
        ko: "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are."
    }
};

export default card;
