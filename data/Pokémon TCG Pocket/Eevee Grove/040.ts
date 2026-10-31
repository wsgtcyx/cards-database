import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/040",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/040",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/040",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/040",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/040",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/040",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/040",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/040",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/040"
    },
    name: {
        en: "Mienfoo",
        "fr": "Kungfouine",
        "es": "Mienfoo",
        "it": "Mienfoo",
        "de": "Lin-Fu",
        "pt-br": "Mienfoo",
        "zh-tw": "功夫鼬",
        ja: "コジョフー",
        ko: "비조푸",
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "In one minute, a well-trained Mienfoo can chop\nwith its arms more than 100 times.",
        "fr": "En une minute, un Mienfoo bien entraîné peut hacher\navec ses bras plus de 100 fois.",
        "es": "En un minuto, un Mienfoo bien entrenado puede cortar\ncon sus brazos más de 100 veces.",
        "it": "In un minuto, un Mienfoo ben addestrato può tagliare\ncon le sue braccia più di 100 volte.",
        "de": "In einer Minute kann ein gut trainierter Mienfoo hacken\nmit seinen Armen mehr als 100 Mal.",
        "pt-br": "Em um minuto, um Mienfoo bem treinado pode cortar\ncom os braços mais de 100 vezes.",
        "zh-tw": "一分鐘內，訓練有素的 Mienfoo 就可以砍\n手臂轉動超過100次。",
        ja: "よく鍛えられた コジョフーは １分で １００回を 超える チョップを 打つことが できる。",
        ko: "잘 단련된 비조푸는\n1분에 100회 이상\n촙 공격을 할 수 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Kick Shot",
                "fr": "Coup de pied",
                "es": "Tiro de patada",
                "it": "Colpo di calcio",
                "de": "Kick-Shot",
                "pt-br": "Chute",
                "zh-tw": "踢球",
                ja: "いっぱつげり",
                ko: "한방차기"
            },
            damage: 40,
            cost: ["Fighting"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。",
                ja: "コインを1回投げウラなら、このワザは失敗。",
                ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
