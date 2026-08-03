import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/056",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/056",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/056",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/056"
    },
    name: {
        en: "Haxorus",
        fr: "Tranchodon",
        es: "Haxorus",
        it: "Haxorus",
        de: "Maxax",
        "pt-br": "Haxorus",
        "zh-tw": "雙斧戰龍",
        ko: "액스라이즈",
        ja: "オノノクス"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Dragon"],
    dexId: [612],
    evolveFrom: {
        en: "Fraxure",
        fr: "Incisache",
        es: "Fraxure",
        it: "Fraxure",
        de: "Sharfax",
        "pt-br": "Fraxure",
        "zh-tw": "斧牙龍",
        ko: "액슨도",
        ja: "オノンド"
    },
    stage: "Stage2",
    description: {
        en: "It overwhelms enemies with its prized tusks, which are sharp enough to cut through a metal transmission tower in one strike.",
        fr: "Il submerge les ennemis avec ses précieuses défenses, suffisamment tranchantes pour couper une tour de transmission métallique d'un seul coup.",
        es: "Abruma a los enemigos con sus preciados colmillos, que son lo suficientemente afilados como para atravesar una torre de transmisión de metal de un solo golpe.",
        it: "Travolge i nemici con le sue preziose zanne, abbastanza affilate da tagliare una torre di trasmissione metallica con un solo colpo.",
        de: "Es überwältigt Feinde mit seinen wertvollen Stoßzähnen, die scharf genug sind, um mit einem Schlag einen metallenen Sendemast zu durchdringen.",
        "pt-br": "Ele domina os inimigos com suas presas valiosas, que são afiadas o suficiente para cortar uma torre de transmissão de metal com um único golpe.",
        "zh-tw": "它用珍貴的獠牙壓倒敵人，這些獠牙足夠鋒利，一擊就能切穿金屬傳輸塔。"
    },
    attacks: [
        {
            cost: ["Fighting", "Metal", "Colorless"],
            name: {
                en: "Frenzied Blade",
                fr: "Lame Frénétique",
                es: "Filo Frenético",
                it: "Lame Furibonde",
                de: "Rasende Klinge",
                "pt-br": "Lâmina Alucinada",
                "zh-tw": "狂亂利刃"
            },
            effect: {
                en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's).",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon du Banc (le vôtre et celui de votre adversaire).",
                es: "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca (tanto tuyo como de tu rival).",
                it: "Questo attacco infligge 20 danni in più per ogni Pokémon in panchina (sia il tuo che quello del tuo avversario).",
                de: "Dieser Angriff fügt jedem Pokémon auf der Bank (sowohl deinem als auch dem deines Gegners) 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 danos a mais para cada Pokémon no Banco (seu e do seu oponente).",
                "zh-tw": "此攻擊對每個後備寶可夢（包括你的和對手的）造成 20 點額外傷害。"
            },
            damage: "50+"
        }
    ],
    retreat: 2
};

export default card;
