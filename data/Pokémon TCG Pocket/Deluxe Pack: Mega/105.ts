import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/105",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/105",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/105",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/105",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/105",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/105",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/105"
    },
    name: {
        en: "Kirlia",
        fr: "Kirlia",
        es: "Kirlia",
        it: "Kirlia",
        de: "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "奇魯莉安",
        ja: "キルリア",
        ko: "킬리아"
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Psychic"
    ],
    dexId: [
        281
    ],
    evolveFrom: {
        en: "Ralts",
        fr: "Tarsal",
        es: "Ralts",
        it: "Ralts",
        de: "Trasla",
        "pt-br": "Ralts",
        "zh-tw": "拉魯拉絲",
        ja: "Ralts",
        ko: "Ralts"
    },
    stage: "Stage1",
    description: {
        en: "The cheerful spirit of its TRAINER gives it energy for its psychokinetic power. It spins and dances when happy.",
        fr: "Kirlia tire ses pouvoirs psychiques de la bonne humeur de son Dresseur. Il danse en tournant sur lui-même quand il est content.",
        es: "Al percibir la alegría de su Entrenador, refuerza sus ataques psicoquinéticos. Cuando está contento, da vueltas y baila.",
        it: "Più felice è la sua Allenatrice o il suo Allenatore, più sono potenti i suoi poteri psichici. Quando è di buonumore, si lancia in danze e piroette.",
        de: "Die fröhliche Stimmung seines Trainers ist die Quelle seiner Psycho-Kräfte. Wenn es glücklich ist, tanzt und dreht es sich.",
        "pt-br": "O espírito animado de seu Treinador reforça o poder psicocinético deste Pokémon. Gira e dança quando está feliz.",
        "zh-tw": "訓練家開朗的情緒是牠的精神力量源泉。開心時會轉圈跳舞。",
        ja: "The cheerful spirit of its TRAINER gives it energy for its psychokinetic power. It spins and dances when happy.",
        ko: "The cheerful spirit of its TRAINER gives it energy for its psychokinetic power. It spins and dances when happy."
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "Double Spin",
                fr: "Double Tour",
                es: "Doble Giro",
                it: "Doppioturbo",
                de: "Doppeldreher",
                "pt-br": "Giro Duplo",
                "zh-tw": "雙重旋轉",
                ja: "Double Spin",
                ko: "Double Spin"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。",
                ja: "Flip 2 coins. This attack does 20 damage for each heads.",
                ko: "Flip 2 coins. This attack does 20 damage for each heads."
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
