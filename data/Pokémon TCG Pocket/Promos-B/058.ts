import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/058"
    },
    name: {
        en: "Tepig",
        fr: "Gruikui",
        es: "Tepig",
        it: "Tepig",
        de: "Floink",
        "pt-br": "Tepig",
        "zh-tw": "暖暖豬",
        ko: "뚜꾸리",
        ja: "ポカブ"
    },
    illustrator: "Kouki Saitou",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [498],
    stage: "Basic",
    description: {
        en: "This Pokémon is a ravenous glutton. It uses its excellent sense of smell to find food, then cooks it to a crisp before eating.",
        fr: "Ce Pokémon est un glouton vorace. Il utilise son excellent odorat pour trouver de la nourriture, puis la fait cuire jusqu'à ce qu'elle soit croustillante avant de la manger.",
        es: "Este Pokémon es un glotón voraz. Utiliza su excelente sentido del olfato para encontrar comida y luego la cocina hasta que quede crujiente antes de comerla.",
        it: "Questo Pokémon è un ghiottone famelico. Usa il suo eccellente senso dell'olfatto per trovare il cibo, quindi lo cuoce fino a renderlo croccante prima di mangiarlo.",
        de: "Dieses Pokémon ist ein gefräßiger Vielfraß. Es nutzt seinen hervorragenden Geruchssinn, um Nahrung zu finden und diese vor dem Verzehr knusprig zuzubereiten.",
        "pt-br": "Este Pokémon é um glutão voraz. Ele usa seu excelente olfato para encontrar comida e depois cozinha até ficar crocante antes de comer.",
        "zh-tw": "這隻寶可夢是貪食者。它利用其出色的嗅覺來尋找食物，然後將其煮至酥脆後再食用。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Firebreathing",
                fr: "Souffle-Feu",
                es: "Aliento de Fuego",
                it: "Fuocospiro",
                de: "Feuerhauch",
                "pt-br": "Hálito de Fogo",
                "zh-tw": "吹火"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol8"]
};

export default card;
