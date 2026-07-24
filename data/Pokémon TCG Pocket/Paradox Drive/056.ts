import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/056"
    },
    name: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    dexId: [133],
    stage: "Basic",
    description: {
        en: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.",
        fr: "Son code génétique est irrégulier. Il peut muter s'il est exposé aux radiations des pierres élémentaires.",
        es: "Su código genético es irregular. Puede mutar si se expone a la radiación de las piedras elementales.",
        it: "Il suo codice genetico è irregolare. Potrebbe mutare se esposto alle radiazioni delle pietre elementali.",
        de: "Sein genetischer Code ist unregelmäßig. Es kann mutieren, wenn es der Strahlung von Elementsteinen ausgesetzt wird.",
        "pt-br": "Seu código genético é irregular. Ele pode sofrer mutação se for exposto à radiação das pedras elementares.",
        "zh-tw": "它的遺傳密碼是不規則的。如果受到元素石的輻射，就有可能發生變異。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Tail Whip",
                fr: "Mimi-Queue",
                es: "Látigo",
                it: "Colpocoda",
                de: "Rutenschlag",
                "pt-br": "Cauda Chicote",
                "zh-tw": "搖尾巴"
            },
            effect: {
                en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo\nturno del tuo avversario, il Pokémon difensore non può\nattaccare.",
                de: "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen.",
                "pt-br": "Jogue uma moeda. Se sair cara, o Pokémon Defensor não poderá atacar durante o próximo turno do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則防守寶可夢在對手的下一個回合中不能攻擊。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
