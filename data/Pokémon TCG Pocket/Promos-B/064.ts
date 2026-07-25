import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/064",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/064",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/064",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/064",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/064"
    },
    name: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ko: "카르본",
        ja: "カルボウ"
    },
    illustrator: "takuyoa",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [935],
    stage: "Basic",
    description: {
        en: "Its firepower increases when it fights, reaching over 1,800 degrees Fahrenheit. It likes berries that are rich in fat.",
        fr: "Sa puissance de feu augmente lorsqu'il combat, atteignant plus de 1 800 degrés Fahrenheit. Il aime les baies riches en graisse.",
        es: "Su potencia de fuego aumenta cuando lucha, alcanzando más de 1.800 grados Fahrenheit. Le gustan las bayas ricas en grasas.",
        it: "La sua potenza di fuoco aumenta quando combatte, raggiungendo oltre 1.800 gradi Fahrenheit. Gli piacciono le bacche ricche di grassi.",
        de: "Seine Feuerkraft erhöht sich im Kampf und erreicht über 1.800 Grad Fahrenheit. Es mag Beeren, die reich an Fett sind.",
        "pt-br": "Seu poder de fogo aumenta quando luta, chegando a mais de 1.800 graus Fahrenheit. Gosta de frutas vermelhas ricas em gordura.",
        "zh-tw": "戰鬥時火力會增強，可達華氏 1,800 度以上。牠喜歡富含脂肪的漿果。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Protect",
                fr: "Abri",
                es: "Protección",
                it: "Protezione",
                de: "Schutzschild",
                "pt-br": "Proteção",
                "zh-tw": "守住"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                es: "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該寶可夢造成的所有攻擊傷害及其效果。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol9"]
};

export default card;
