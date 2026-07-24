import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/074"
    },
    name: {
        en: "Sinistea",
        "fr": "Sinistéa",
        "es": "Sinistea",
        "it": "Sinistea",
        "de": "Sinistea",
        "pt-br": "Sinistea",
        "zh-tw": "西尼斯泰亞"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Psychic"],
    description: {
        en: "Sinistea gets into your body when you drink it,\nand then it steals your vitality from within. It also\ntastes awful.",
        "fr": "Sinistea pénètre dans votre corps lorsque vous le buvez,\net puis cela vole votre vitalité de l’intérieur. C'est aussi\na un goût horrible.",
        "es": "Sinistea entra en tu cuerpo cuando la bebes,\ny luego te roba la vitalidad desde dentro. También\nsabe horrible.",
        "it": "Sinistea entra nel tuo corpo quando lo bevi,\ne poi ti ruba la vitalità dall'interno. Anche\nha un sapore terribile.",
        "de": "Sinistea gelangt in Ihren Körper, wenn Sie es trinken.\nund dann stiehlt es dir deine innere Vitalität. Es auch\nschmeckt schrecklich.",
        "pt-br": "Sinistea entra em seu corpo quando você bebe,\ne então rouba sua vitalidade de dentro. Também\ntem um gosto horrível.",
        "zh-tw": "當你喝下 Sinistea 時，它就會進入你的身體，\n然後它會從內部竊取你的活力。它還\n味道很糟糕。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hide",
                "fr": "Cachette",
                "es": "Ocultarse",
                "it": "Nascondino",
                "de": "Verstecken",
                "pt-br": "Esconder",
                "zh-tw": "隱藏"
            },
            cost: ["Psychic"],
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, lors du prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                "es": "Lanza una moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y los efectos de los ataques realizados a este Pokémon.",
                "it": "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                "de": "Wirf eine Münze. Bei „Kopf“ verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, evite todos os danos e efeitos de ataques feitos a este Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面朝上，則在對手的下一回合中，阻止對該神奇寶貝造成的所有攻擊傷害及其效果。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
