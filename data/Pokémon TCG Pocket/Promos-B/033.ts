import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/033",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/033",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/033",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/033",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/033",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/033"
    },
    name: {
        en: "Quaxly",
        fr: "Coiffeton",
        es: "Quaxly",
        it: "Quaxly",
        de: "Kwaks",
        "pt-br": "Quaxly",
        "zh-tw": "潤水鴨",
        ko: "꾸왁스",
        ja: "クワッス"
    },
    illustrator: "buchi",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [912],
    stage: "Basic",
    description: {
        en: "Its strong legs let it easily swim around in even fast-flowing rivers. It likes to keep things tidy and is prone to overthinking things.",
        fr: "Ses pattes solides lui permettent de nager facilement, même dans les rivières au débit rapide. Il aime garder les choses en ordre et a tendance à trop réfléchir.",
        es: "Sus fuertes patas le permiten nadar fácilmente incluso en ríos de corriente rápida. Le gusta mantener las cosas ordenadas y es propenso a pensar demasiado.",
        it: "Le sue zampe forti gli permettono di nuotare facilmente anche nei fiumi dalla corrente veloce. Gli piace mantenere le cose in ordine ed è incline a pensare troppo alle cose.",
        de: "Dank seiner starken Beine kann er selbst in schnell fließenden Flüssen problemlos schwimmen. Er sorgt gerne für Ordnung und neigt dazu, zu viel nachzudenken.",
        "pt-br": "Suas pernas fortes permitem que ele nade facilmente até mesmo em rios de correnteza rápida. Gosta de manter as coisas arrumadas e tem tendência a pensar demais nas coisas.",
        "zh-tw": "它強壯的腿使它即使在水流湍急的河流中也能輕鬆遊動。牠喜歡讓事情保持整潔，並且容易想太多。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Splashing Dodge",
                fr: "Esquive Éclaboussante",
                es: "Esquivo Chapoteo",
                it: "Schivata Splash",
                de: "Ausweichplatscher",
                "pt-br": "Evasão de Borrifada",
                "zh-tw": "躍起閃避"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                es: "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該寶可夢造成的所有攻擊傷害及其效果。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
