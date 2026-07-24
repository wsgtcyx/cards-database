import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/022"
    },
    name: {
        en: "Quaxly",
        fr: "Coiffeton",
        es: "Quaxly",
        it: "Quaxly",
        de: "Kwaks",
        "pt-br": "Quaxly",
        "zh-tw": "潤水鴨",
        pt: "Quaxly"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [912],
    description: {
        en: "Its strong legs let it easily swim around in even fast-flowing rivers. It likes to keep things tidy and is prone to overthinking things.",
        "fr": "Ses pattes solides lui permettent de nager facilement, même dans les rivières au débit rapide. Il aime garder les choses en ordre et a tendance à trop réfléchir.",
        "es": "Sus fuertes patas le permiten nadar fácilmente incluso en ríos de corriente rápida. Le gusta mantener las cosas ordenadas y es propenso a pensar demasiado.",
        "it": "Le sue zampe forti gli permettono di nuotare facilmente anche nei fiumi dalla corrente veloce. Gli piace mantenere le cose in ordine ed è incline a pensare troppo alle cose.",
        "de": "Dank seiner starken Beine kann er selbst in schnell fließenden Flüssen problemlos schwimmen. Er sorgt gerne für Ordnung und neigt dazu, zu viel nachzudenken.",
        "pt-br": "Suas pernas fortes permitem que ele nade facilmente até mesmo em rios de correnteza rápida. Gosta de manter as coisas arrumadas e tem tendência a pensar demais nas coisas.",
        "zh-tw": "它強壯的腿使它即使在水流湍急的河流中也能輕鬆遊動。牠喜歡讓事情保持整潔，並且容易想太多。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Splashing Dodge",
                fr: "Esquive Éclaboussante",
                es: "Esquivo Chapoteo",
                it: "Schivata Splash",
                de: "Ausweichplatscher",
                "pt-br": "Salpicos de esquiva",
                "zh-tw": "潑水道奇",
                'es-mx': "Evasión Salpicadora",
                pt: "Evasão de Borrifada"
            },
            damage: "10",
            cost: ["Water"],
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et effets provenant d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos dos ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面，則在對手的下一個回合中，阻止對該寶可夢造成的所有傷害和攻擊效果。",
                'es-mx': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon."
            },
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
