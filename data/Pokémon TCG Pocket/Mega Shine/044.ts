import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/044"
    },
    name: {
        en: "Zoroark",
        fr: "Zoroark",
        es: "Zoroark",
        it: "Zoroark",
        de: "Zoroark",
        "pt-br": "Zoroark",
        "zh-tw": "索羅亞克",
        ko: "조로아크",
        ja: "ゾロアーク"
    },
    illustrator: "Misa Tsutsui",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    dexId: [571],
    evolveFrom: {
        en: "Zorua",
        fr: "Zorua",
        es: "Zorua",
        it: "Zorua",
        de: "Zorua",
        "pt-br": "Zorua",
        "zh-tw": "索羅亞",
        ko: "조로아",
        ja: "ゾロア"
    },
    stage: "Stage1",
    description: {
        en: "Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery.",
        fr: "Il peut mystifier instantanément des foules d’humains.\nIl protège son habitat en créant des illusions de paysages.",
        es: "Tiene la facultad de confundir a muchos humanos a la vez.\nProtege su guarida creando un paisaje ilusorio.",
        it: "Ha la capacità di trarre in inganno una folla di persone.\nProtegge la tana creando dei miraggi.",
        de: "Kann auf einen Schlag große Massen von Menschen täuschen.\nEs kreiert Illusionen, um sein Revier zu schützen.",
        "pt-br": "Cada um tem a capacidade de enganar um grande grupo de pessoas simultaneamente. Eles protegem seu covil com cenários ilusórios.",
        "zh-tw": "每個人都有能力同時愚弄一大群人。他們用虛幻的風景來保護自己的巢穴。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Energy Crush",
                fr: "Écras'Énergie",
                es: "Comprimir Energía",
                it: "Sgretolenergia",
                de: "Zermalmende Energie",
                "pt-br": "Esmagamento de Energia",
                "zh-tw": "能量粉碎"
            },
            effect: {
                en: "This attack does 20 damage for each Energy attached to all of your opponent's Pokémon.",
                fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
                es: "Este ataque hace 20 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
                it: "Questo attacco infligge 20 danni per ogni Energia assegnata a tutti i Pokémon del tuo avversario.",
                de: "Dieser Angriff fügt 20 Schadenspunkte für jede Energie zu, die an alle Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
                "zh-tw": "對手所有寶可夢身上所附加的能量每有 1 點，此攻擊就會造成 20 點傷害。"
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
