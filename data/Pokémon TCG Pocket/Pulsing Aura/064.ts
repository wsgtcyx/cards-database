import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/064"
    },
    name: {
        en: "Kirlia",
        fr: "Kirlia",
        es: "Kirlia",
        it: "Kirlia",
        de: "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "奇魯莉安",
        ko: "킬리아",
        ja: "キルリア"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    dexId: [281],
    evolveFrom: {
        en: "Ralts",
        fr: "Tarsal",
        es: "Ralts",
        it: "Ralts",
        de: "Trasla",
        "pt-br": "Ralts",
        "zh-tw": "拉魯拉絲",
        ko: "랄토스",
        ja: "ラルトス"
    },
    stage: "Stage1",
    description: {
        en: "The cheerful spirit of its Trainer gives it energy for its psychokinetic power. It spins and dances when happy.",
        fr: "Ce Pokémon tire ses pouvoirs psy du soutien de son\nDresseur. Il danse et tourne sur lui-même quand il est\ncontent.",
        es: "Al percibir la alegría de su Entrenador refuerza sus\nataques psicoquinéticos. Cuando está contento, da\nvueltas y baila.",
        it: "Lo spirito gioioso è alla base dei suoi poteri\npsicocinetici. Quando è felice si lancia in danze\ne piroette.",
        de: "Die fröhliche Stimmung seines Trainers verleiht ihm\nEnergie für psychokinetische Kraft. Wenn es\nglücklich ist, tanzt und dreht es sich.",
        "pt-br": "O espírito alegre do seu Treinador dá-lhe energia pelo seu poder psicocinético. Ele gira e dança quando está feliz.",
        "zh-tw": "訓練家的歡快精神為其心靈動力提供了能量。它高興時會旋轉、跳舞。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Double Spin",
                fr: "Double Tour",
                es: "Doble Giro",
                it: "Doppioturbo",
                de: "Doppeldreher",
                "pt-br": "Giro Duplo",
                "zh-tw": "雙重旋轉"
            },
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 30 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 30 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 30 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。"
            },
            damage: "30x"
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
