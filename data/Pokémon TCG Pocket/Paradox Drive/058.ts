import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/058"
    },
    name: {
        en: "Farigiraf",
        fr: "Farigiraf",
        es: "Farigiraf",
        it: "Farigiraf",
        de: "Farigiraf",
        "pt-br": "Farigiraf",
        "zh-tw": "奇麒麟",
        ko: "키키링",
        ja: "リキキリン"
    },
    illustrator: "Ounishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    dexId: [981],
    evolveFrom: {
        en: "Girafarig",
        fr: "Girafarig",
        es: "Girafarig",
        it: "Girafarig",
        de: "Girafarig",
        "pt-br": "Girafarig",
        "zh-tw": "麒麟奇",
        ko: "키링키",
        ja: "キリンリキ"
    },
    stage: "Stage1",
    description: {
        en: "The hardened head from the tail protects the head of the main body as Farigiraf whips its long neck around to headbutt enemies.",
        fr: "La tête durcie de la queue protège la tête du corps principal tandis que Farigiraf fouette son long cou pour donner un coup de tête aux ennemis.",
        es: "La cabeza endurecida de la cola protege la cabeza del cuerpo principal mientras Farigiraf mueve su largo cuello para dar cabezazos a los enemigos.",
        it: "La testa indurita della coda protegge la testa del corpo principale mentre Farigiraf gira il suo lungo collo per dare una testata ai nemici.",
        de: "Der gehärtete Kopf des Schwanzes schützt den Kopf des Hauptkörpers, während Farigiraf seinen langen Hals herumwirbelt, um Gegnern einen Kopfstoß zu verpassen.",
        "pt-br": "A cabeça endurecida da cauda protege a cabeça do corpo principal enquanto Farigiraf chicoteia seu longo pescoço para dar cabeçadas nos inimigos.",
        "zh-tw": "當 奇麒麟 揮舞長脖子用頭撞擊敵人時，尾部的硬化頭部可以保護主體的頭部。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Double Hit",
                fr: "Coup Double",
                es: "Doble Golpe",
                it: "Doppiosmash",
                de: "Doppelschlag",
                "pt-br": "Golpe Duplo",
                "zh-tw": "二連擊"
            },
            effect: {
                en: "Flip 2 coins. This attack does 60 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 60 de daño por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 60 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 60 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 60 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 60 點傷害。"
            },
            damage: "60x"
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
