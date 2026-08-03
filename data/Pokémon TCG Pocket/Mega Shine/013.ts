import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/013",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/013",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/013",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/013",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/013",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/013",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/013"
    },
    name: {
        en: "Magmortar",
        fr: "Maganon",
        es: "Magmortar",
        it: "Magmortar",
        de: "Magbrant",
        "pt-br": "Magmortar",
        "zh-tw": "鴨嘴炎獸",
        ko: "마그마번",
        ja: "ブーバーン"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    dexId: [467],
    evolveFrom: {
        en: "Magmar",
        fr: "Magmar",
        es: "Magmar",
        it: "Magmar",
        de: "Magmar",
        "pt-br": "Magmar",
        "zh-tw": "鴨嘴火獸",
        ko: "마그마",
        ja: "ブーバー"
    },
    stage: "Stage1",
    description: {
        en: "They dwell in volcanic craters. It’s said that only a single pair of Magmortar will inhabit any given volcano.",
        fr: "Ils habitent dans des cratères volcaniques. On dit qu’une seule paire de Maganon habitera un volcan donné.",
        es: "Habitan en cráteres volcánicos. Se dice que sólo un par de Magmortar habitará en un volcán determinado.",
        it: "Abitano nei crateri vulcanici. Si dice che solo una coppia di Magmortar abiterà ogni vulcano.",
        de: "Sie leben in Vulkankratern. Es wird gesagt, dass auf jedem Vulkan nur ein einziges Paar Magbrant leben wird.",
        "pt-br": "Eles vivem em crateras vulcânicas. Diz-se que apenas um único par de Magmortar habitará qualquer vulcão.",
        "zh-tw": "他們居住在火山口中。據說任何一座火山上都只有一對 鴨嘴炎獸。"
    },
    attacks: [
        {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                en: "Thundering Volcano",
                fr: "Volcan Fulgurant",
                es: "Volcán Atronador",
                it: "Vulcano Voltaico",
                de: "Donnernder Vulkan",
                "pt-br": "Vulcão Trovejante",
                "zh-tw": "雷鳴火山"
            },
            effect: {
                en: "If Electivire is on your Bench, this attack also does 20 damage to each of your opponent's Benched Pokémon.",
                fr: "Si Élekable est sur votre Banc, cette attaque inflige également 20 dégâts à chacun des Pokémon du Banc de votre adversaire.",
                es: "Si Electivire está en tu Banca, este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                it: "Se Electivire è nella tua panchina, questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Wenn sich Elevoltek auf deiner Bank befindet, fügt dieser Angriff außerdem jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Se Electivire estiver no seu Banco, este ataque também causará 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "如果電擊魔獸在你的替補席上，這次攻擊也會對對手的替補席上的每隻寶可夢造成20點傷害。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
