import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/096",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/096",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/096",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/096",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/096",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/096"
    },
    name: {
        en: "Sandaconda",
        fr: "Dunaconda",
        es: "Sandaconda",
        it: "Sandaconda",
        de: "Sanaconda",
        "pt-br": "Sandaconda",
        "zh-tw": "沙螺蟒",
        ko: "사다이사",
        ja: "サダイジャ"
    },
    illustrator: "nagimiso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    dexId: [844],
    evolveFrom: {
        en: "Silicobra",
        fr: "Dunaja",
        es: "Silicobra",
        it: "Silicobra",
        de: "Salanga",
        "pt-br": "Silicobra",
        "zh-tw": "沙包蛇",
        ko: "모래뱀",
        ja: "スナヘビ"
    },
    stage: "Stage1",
    description: {
        en: "The sand it spews contains sharp, pointy gravel, which is actually just sand that Sandaconda’s saliva has hardened into irregular shapes.",
        fr: "Le sable qu’il crache contient du gravier pointu et pointu, qui n’est en réalité que du sable que la salive de Dunaconda a durci en formes irrégulières.",
        es: "La arena que arroja contiene grava afilada y puntiaguda, que en realidad es solo arena que la saliva de Sandaconda ha endurecido en formas irregulares.",
        it: "La sabbia che emette contiene ghiaia tagliente e appuntita, che in realtà è solo sabbia che la saliva di Sandaconda ha indurito in forme irregolari.",
        de: "Der Sand, den es ausspuckt, enthält scharfen, spitzen Kies, bei dem es sich eigentlich nur um Sand handelt, den der Speichel von Sanaconda zu unregelmäßigen Formen verhärtet hat.",
        "pt-br": "A areia que ele vomita contém cascalho afiado e pontiagudo, que na verdade é apenas areia que a saliva de Sandaconda endureceu em formas irregulares.",
        "zh-tw": "它噴出的沙子裡含有鋒利、尖尖的礫石，其實只是沙螺蟒的唾液硬化成不規則形狀的沙子。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Super Sand Attack",
                fr: "Super Jet de Sable",
                es: "Superataque Arena",
                it: "Super Turbosabbia",
                de: "Super-Sandwirbel",
                "pt-br": "Superataque de Areia",
                "zh-tw": "狂撥沙"
            },
            effect: {
                en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
                fr: "Lors du prochain tour de votre adversaire, si le Pokémon Défenseur tente d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, cette attaque n'a pas lieu.",
                es: "Durante el siguiente turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza una moneda. Si sale cruz, ese ataque no ocurre.",
                it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore tenta di usare un attacco, il tuo avversario lancia una moneta. Se esce croce, l'attacco non avviene.",
                de: "Wenn das verteidigende Pokémon im nächsten Zug deines Gegners versucht, einen Angriff auszuführen, wirft dein Gegner eine Münze. Bei „Zahl“ findet dieser Angriff nicht statt.",
                "pt-br": "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se der coroa, esse ataque não acontece.",
                "zh-tw": "在對手的下一個回合中，如果防御寶可夢嘗試使用攻擊，對手會擲硬幣。如果是反面，則不會發生該攻擊。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
