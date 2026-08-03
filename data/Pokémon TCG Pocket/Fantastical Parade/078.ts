import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/078",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/078",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/078",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/078",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/078",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/078"
    },
    name: {
        en: "Sandslash",
        "fr": "Sablaireau",
        "es": "Sandslash",
        "it": "Sandslash",
        "de": "Sandamer",
        "pt-br": "Sandslash",
        "zh-tw": "穿山王"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Sandshrew",
        "fr": "Musaraigne des sables",
        "es": "Sandshrew",
        "it": "Sandshrew",
        "de": "Sandspitzmaus",
        "pt-br": "Sandshrew",
        "zh-tw": "山鼠"
    },
    description: {
        en: "The spikes on its body are made up of its\nhardened hide. It rolls up and attacks foes\nwith its spikes.",
        "fr": "Les pointes de son corps sont constituées de ses\npeau durcie. Il roule et attaque les ennemis\navec ses pointes.",
        "es": "Las púas de su cuerpo están formadas por sus\npiel endurecida. Se enrolla y ataca a los enemigos.\ncon sus púas.",
        "it": "Le punte sul suo corpo sono costituite da esso\npelle indurita. Si arrotola e attacca i nemici\ncon le sue punte.",
        "de": "Die Stacheln an seinem Körper bestehen aus\ngehärtetes Fell. Es rollt sich zusammen und greift Feinde an\nmit seinen Stacheln.",
        "pt-br": "Os espinhos em seu corpo são compostos de\npele endurecida. Ele rola e ataca os inimigos\ncom seus espinhos.",
        "zh-tw": "它身上的尖刺是由它的\n硬化的皮革。它捲起並攻擊敵人\n與它的尖刺。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fury Swipes",
                "fr": "Coups de fureur",
                "es": "Golpes de furia",
                "it": "Colpi di furia",
                "de": "Wut-Swipes",
                "pt-br": "Golpes de Fúria",
                "zh-tw": "狂怒橫掃"
            },
            damage: 30,
            cost: ["Fighting"],
            effect: {
                en: "Flip 3 coins. This attack does 30 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 30 daños por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 30 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 30 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
