import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/055",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/055",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/055",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/055",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/055"
    },
    name: {
        en: "Voltorb",
        fr: "Voltorbe",
        es: "Voltorb",
        it: "Voltorb",
        de: "Voltobal",
        "pt-br": "Voltorb",
        "zh-tw": "霹靂電球",
        ko: "찌리리공",
        ja: "ビリリダマ"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Lightning"],
    dexId: [100],
    stage: "Basic",
    description: {
        en: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
        fr: "Il se déplace en roulant. Si le sol est cabossé,\nles chocs le font exploser.",
        es: "Se mueve rodando. Si el terreno es\nirregular, una chispa provocada por\nalgún bache lo hará explotar.",
        it: "Rotola per spostarsi. Se il terreno è\nirregolare, può esplodere all'improvviso\na causa dell'urto contro un dosso.",
        de: "Es bewegt sich rollend fort. Rollt es über\nunebenen Boden, kann es plötzlich explodieren.",
        "pt-br": "Ele rola para se mover. Quando o solo está\ndesnivelado, um solavanco repentino após\num baque pode fazê-lo explodir.",
        "zh-tw": "它滾動移動。如果地面不平坦，撞擊到凸塊時突然的震動可能會導致爆炸。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Single Shot Blast",
                fr: "Explosion Unique",
                es: "Disparo Único Explosivo",
                it: "Tiro a Scoppio Singolo",
                de: "Einzelschussballern",
                "pt-br": "Explosão Única",
                "zh-tw": "單爆炸彈"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            },
            damage: 50
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
