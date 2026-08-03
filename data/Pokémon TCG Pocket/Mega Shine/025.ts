import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/025",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/025",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/025",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/025",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/025",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/025",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/025"
    },
    name: {
        en: "Electivire",
        fr: "Élekable",
        es: "Electivire",
        it: "Electivire",
        de: "Elevoltek",
        "pt-br": "Electivire",
        "zh-tw": "電擊魔獸",
        ko: "에레키블",
        ja: "エレキブル"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    dexId: [466],
    evolveFrom: {
        en: "Electabuzz",
        fr: "Élektek",
        es: "Electabuzz",
        it: "Electabuzz",
        de: "Elektek",
        "pt-br": "Electabuzz",
        "zh-tw": "電擊獸",
        ko: "에레브",
        ja: "エレブー"
    },
    stage: "Stage1",
    description: {
        en: "This Pokémon presses the tips of its tails onto an opponent and instantly sends over 20,000 volts of high-voltage electricity through them.",
        fr: "Ce Pokémon presse le bout de sa queue sur un adversaire et lui envoie instantanément plus de 20 000 volts d'électricité haute tension.",
        es: "Este Pokémon presiona las puntas de su cola sobre un oponente y envía instantáneamente más de 20.000 voltios de electricidad de alto voltaje a través de ellas.",
        it: "Questo Pokémon preme la punta della coda contro un avversario e gli invia istantaneamente oltre 20.000 volt di elettricità ad alta tensione.",
        de: "Dieses Pokémon drückt die Spitzen seines Schwanzes auf einen Gegner und sendet sofort über 20.000 Volt Hochspannungsstrom durch ihn hindurch.",
        "pt-br": "Este Pokémon pressiona as pontas de suas caudas sobre um oponente e envia instantaneamente mais de 20.000 volts de eletricidade de alta voltagem através dele.",
        "zh-tw": "這隻寶可夢將尾巴尖壓向對手，瞬間將超過 20,000 伏特的高壓電傳送到對手身上。"
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Incendiary Thunder",
                fr: "Tonnerre Incendiaire",
                es: "Trueno Incendiario",
                it: "Tuono Incendiario",
                de: "Zündender Donner",
                "pt-br": "Trovão Incendiário",
                "zh-tw": "爆熱雷電"
            },
            effect: {
                en: "If Magmortar is on your Bench, this attack does 70 more damage.",
                fr: "Si Maganon est sur votre Banc, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si Magmortar está en tu Banca, este ataque hace 70 puntos de daño más.",
                it: "Se Magmortar è nella tua panchina, questo attacco infligge 70 danni in più.",
                de: "Wenn sich Magbrant auf deiner Bank befindet, fügt dieser Angriff 70 Schadenspunkte mehr zu.",
                "pt-br": "Se Magmortar estiver no seu banco, este ataque causa 70 de dano a mais.",
                "zh-tw": "如果 鴨嘴炎獸 在你的替補席上，則此攻擊會造成 70 點額外傷害。"
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
