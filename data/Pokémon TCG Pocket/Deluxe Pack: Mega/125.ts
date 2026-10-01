import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/125",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/125",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/125",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/125",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/125",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/125",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/125"
    },
    name: {
        en: "Mega Lopunny ex",
        fr: "Méga-Lockpin-ex",
        es: "Mega-Lopunny ex",
        it: "Mega Lopunny-ex",
        de: "Mega-Schlapor-ex",
        "pt-br": "Mega Lopunny ex",
        "zh-tw": "超級長耳兔ex",
        ja: "メガミミロップex",
        ko: "메가이어롭 ex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 190,
    types: [
        "Fighting"
    ],
    dexId: [
        428
    ],
    evolveFrom: {
        en: "Buneary",
        fr: "Laporeille",
        es: "Buneary",
        it: "Buneary",
        de: "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳",
        ja: "Buneary",
        ko: "Buneary"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Fighting",
                "Fighting"
            ],
            name: {
                en: "Rapid Smashers",
                fr: "Pieds Vifs",
                es: "Somanta Abrumadora",
                it: "Rapidistruzione",
                de: "Schnelle Tritte",
                "pt-br": "Pancadaria Ligeira",
                "zh-tw": "快腿粉碎者",
                ja: "Rapid Smashers",
                ko: "Rapid Smashers"
            },
            effect: {
                en: "Flip 2 coins. This attack does 90 damage for each heads. Your opponent's Active Pokémon is now Confused.",
                fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face. Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara. El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa. Il Pokémon attivo del tuo avversario viene confuso.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu. Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara. O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×90點傷害。將對手的戰鬥寶可夢混亂。",
                ja: "Flip 2 coins. This attack does 90 damage for each heads. Your opponent's Active Pokémon is now Confused.",
                ko: "Flip 2 coins. This attack does 90 damage for each heads. Your opponent's Active Pokémon is now Confused."
            },
            damage: "90x"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
