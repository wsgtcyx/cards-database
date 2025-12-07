import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Noctowl",
        "fr": "Noctowl",
        "es": "noctowl",
        "it": "Noctowl",
        "de": "Nachtschwärmer",
        "pt-br": "Noctowl",
        "zh-tw": "貓頭夜鷹",
    },
    illustrator: "Nisota Niso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Hoothoot",
        "fr": "Hulu",
        "es": "silbido",
        "it": "Che schifo",
        "de": "Hurra",
        "pt-br": "Uau",
        "zh-tw": "呼呼"
    },
    description: {
        en: "Its eyes are specially developed to enable it to\nsee clearly even in murky darkness and minimal light.",
        "fr": "Ses yeux sont spécialement développés pour lui permettre de\nvoir clairement même dans l'obscurité trouble et une lumière minimale.",
        "es": "Sus ojos están especialmente desarrollados para permitirle\nVea claramente incluso en la oscuridad y con poca luz.",
        "it": "I suoi occhi sono appositamente sviluppati per consentirgli di farlo\nvedere chiaramente anche nell'oscurità più oscura e con una luce minima.",
        "de": "Seine Augen sind speziell dafür entwickelt\nSelbst bei trüber Dunkelheit und minimalem Licht sehen Sie deutlich.",
        "pt-br": "Seus olhos são especialmente desenvolvidos para permitir-lhe\nveja claramente mesmo na escuridão turva e com pouca luz.",
        "zh-tw": "它的眼睛經過特殊發育，使其能夠\n即使在昏暗的黑暗和微弱的光線下也能看得清楚。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fly",
                "fr": "Voler",
                "es": "Volar",
                "it": "Volare",
                "de": "Fliegen",
                "pt-br": "Voar",
                "zh-tw": "飛"
            },
            damage: 90,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。如果正面朝上，則在對手的下一回合中，阻止對該神奇寶貝造成的所有攻擊傷害及其效果。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
