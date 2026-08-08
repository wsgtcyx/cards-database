import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/228",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/228",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/228",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/228",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/228",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/228",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/228"
    },
    name: {
        en: "Mega Lopunny ex",
        fr: "Méga-Lockpin-ex",
        es: "Mega-Lopunny ex",
        it: "Mega Lopunny-ex",
        de: "Mega-Schlapor-ex",
        "pt-br": "Mega Lopunny ex",
        "zh-tw": "超級長耳兔ex",
        ko: "메가이어롭 ex",
        ja: "メガミミロップex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 190,
    types: ["Fighting"],
    dexId: [428],
    evolveFrom: {
        en: "Buneary",
        fr: "Laporeille",
        es: "Buneary",
        it: "Buneary",
        de: "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳",
        ko: "이어롤",
        ja: "ミミロル"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Rapid Smashers",
                fr: "Pieds Vifs",
                es: "Somanta Abrumadora",
                it: "Distruttori rapidi",
                de: "Schnelle Zertrümmerer",
                "pt-br": "Pancadaria Ligeira",
                "zh-tw": "快腿粉碎者"
            },
            effect: {
                en: "Flip 2 coins. This attack does 90 damage for each heads. Your opponent's Active Pokémon is now Confused.",
                fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face. Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara. El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Lancia 2 monete. Questo attacco infligge 90 danni per ogni testa. Il Pokémon attivo del tuo avversario è ora confuso.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 90 Schaden pro Kopf. Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara. O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×90點傷害。將對手的戰鬥寶可夢混亂。"
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
