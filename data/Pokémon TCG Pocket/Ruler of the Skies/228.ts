import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/228"
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
                fr: "Smashers rapides",
                es: "Aplastadores rápidos",
                it: "Distruttori rapidi",
                de: "Schnelle Zertrümmerer",
                "pt-br": "Esmagadores Rápidos",
                "zh-tw": "快腿粉碎者"
            },
            effect: {
                en: "Flip 2 coins. This attack does 90 damage for each heads. Your opponent's Active Pokémon is now Confused.",
                fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque tête. Le Pokémon Actif de votre adversaire est désormais Confus.",
                es: "Lanza 2 monedas. Este ataque hace 90 daños por cada cabeza. El Pokémon Activo de tu rival ahora está Confundido.",
                it: "Lancia 2 monete. Questo attacco infligge 90 danni per ogni testa. Il Pokémon attivo del tuo avversario è ora confuso.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 90 Schaden pro Kopf. Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 90 de dano para cada cabeça. O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 90 點傷害。你對手的活躍寶可夢現在處於混亂狀態。"
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
