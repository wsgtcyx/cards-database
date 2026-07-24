import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/064"
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
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
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
            cost: ["Colorless"],
            name: {
                en: "Acrobatics",
                fr: "Acrobatie",
                es: "Acróbata",
                it: "Acrobazia",
                de: "Akrobatik",
                "pt-br": "Acrobático",
                "zh-tw": "雜技"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 more damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 20 daños más por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 20 danni in più per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 20 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa mais 20 danos para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。此攻擊對每個頭造成 20 點額外傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
