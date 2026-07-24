import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/022"
    },
    name: {
        en: "Hawlucha",
        fr: "Brutalibré",
        es: "Hawlucha",
        it: "Hawlucha",
        de: "Resladero",
        "pt-br": "Hawlucha",
        "zh-tw": "摔角鷹人",
        ko: "루차불",
        ja: "ルチャブル"
    },
    illustrator: "Teeziro",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [701],
    stage: "Basic",
    description: {
        en: "Hawlucha live quietly without flocking together. They fight constantly with their natural enemies: noisy groups of Primeape.",
        fr: "Brutalibré vit tranquillement sans se rassembler. Ils se battent constamment avec leurs ennemis naturels : des groupes bruyants de Colossinge.",
        es: "Hawlucha viva tranquilamente sin agruparse. Luchan constantemente con sus enemigos naturales: ruidosos grupos de Primeape.",
        it: "Hawlucha vivono tranquillamente senza accalcarsi insieme. Combattono costantemente con i loro nemici naturali: gruppi rumorosi di Primeape.",
        de: "Resladero leben ruhig, ohne sich zusammenzudrängen. Sie kämpfen ständig mit ihren natürlichen Feinden: lauten Gruppen von Rasaff.",
        "pt-br": "Hawlucha vivem silenciosamente, sem se reunirem. Eles lutam constantemente com seus inimigos naturais: grupos barulhentos de Primeape.",
        "zh-tw": "摔角鷹人 安靜地生活，不聚集。它們不斷地與天敵戰鬥：吵鬧的 火爆猴 群體。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Aerial Ace",
                fr: "Aéropique",
                es: "Golpe Aéreo",
                it: "Aeroassalto",
                de: "Aero-Ass",
                "pt-br": "Ás dos Ares",
                "zh-tw": "燕返"
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
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol3"]
};

export default card;
