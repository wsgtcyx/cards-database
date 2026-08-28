import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/100",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/100",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/100",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/100",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/100",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/100",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/100"
    },
    name: {
        en: "Sinistea",
        fr: "Théffroi",
        es: "Sinistea",
        it: "Sinistea",
        de: "Fatalitee",
        "pt-br": "Sinistea",
        "zh-tw": "來悲茶",
        ko: "데인차",
        ja: "ヤバチャ"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 30,
    types: ["Psychic"],
    dexId: [854],
    stage: "Basic",
    description: {
        en: "Sinistea gets into your body when you drink it, and then it steals your vitality from within. It also tastes awful.",
        fr: "Ce Pokémon s'infiltre dans le corps de quiconque le boit et lui dérobe son énergie vitale. Il a très mauvais goût.",
        es: "Si alguien lo bebe, entra en su cuerpo y le arrebata la energía vital desde dentro. Posee, además, un sabor espantoso.",
        it: "Si infiltra nel corpo di chi lo beve, rubando le sue energie vitali dall'interno. Ha un sapore davvero pessimo.",
        de: "Dieses Pokémon dringt in den Körper derjenigen ein, die von ihm trinken, und raubt ihnen von innen Lebensenergie. Es schmeckt scheußlich.",
        "pt-br": "Sinistea entrará em seu corpo ao ser ingerido e depois roubará a sua vitalidade lá de dentro. Seu gosto também è horrivel.",
        "zh-tw": "會趁著自己被喝掉時進到對方身體裡，從內部奪走其生物能量。喝起來很難喝。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Hide",
                fr: "Cachette",
                es: "Ocultarse",
                it: "Nascondino",
                de: "Verstecken",
                "pt-br": "Esconder",
                "zh-tw": "躲藏"
            },
            effect: {
                en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
                es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
                it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
                de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
                "pt-br": "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
                "zh-tw": "擲1次硬幣若為正面,則在下個對手的回合,這隻寶可夢不會受到招式的傷害與效果的影響。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
