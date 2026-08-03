import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/174",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/174",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/174",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/174",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/174",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/174"
    },
    name: {
        en: "Purrloin",
        "fr": "Chacripan",
        "es": "Purrloin",
        "it": "Purrloin",
        "de": "Felilou",
        "pt-br": "Purrloin",
        "zh-tw": "扒手貓"
    },
    illustrator: "Yoriyuki Ikegami",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Opponents that get drawn in by its adorable\nbehavior come away with stinging scratches from\nits claws and stinging pride from its laughter.",
        "fr": "Des adversaires attirés par son adorable\nle comportement s'en va avec des égratignures cuisantes de\nses griffes et la fierté piquante de son rire.",
        "es": "Oponentes que se sienten atraídos por su adorable\ncomportamiento sale con rasguños punzantes de\nsus garras y el orgullo punzante de su risa.",
        "it": "Avversari che vengono attratti dalla sua adorabile\ncomportamento viene via con graffi pungenti\ni suoi artigli e l'orgoglio pungente delle sue risate.",
        "de": "Gegner, die sich von seiner Liebenswürdigkeit anziehen lassen\nVerhalten kommt mit stechenden Kratzern weg\nseine Krallen und der stechende Stolz seines Lachens.",
        "pt-br": "Oponentes que são atraídos por seu adorável\ncomportamento sai com arranhões dolorosos de\nsuas garras e o orgulho pungente de sua risada.",
        "zh-tw": "被其可愛所吸引的對手\n行為會隨著刺痛的划痕而消失\n它的爪子和笑聲帶來的刺痛的驕傲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Whiny Voice",
                "fr": "Voix pleurnicheuse",
                "es": "voz quejosa",
                "it": "Voce lamentosa",
                "de": "Weinende Stimme",
                "pt-br": "Voz chorosa",
                "zh-tw": "發牢騷的聲音"
            },
            cost: ["Darkness"],
            effect: {
                en: "Flip a coin. If heads, look at a random card from your opponent's hand and shuffle it into their deck.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, regardez une carte aléatoire de la main de votre adversaire et mélangez-la dans son deck.",
                "es": "Lanza una moneda. Si sale cara, mira una carta aleatoria de la mano de tu oponente y mézclala en su mazo.",
                "it": "Lancia una moneta. Se esce testa, guarda una carta a caso dalla mano del tuo avversario e mischiala nel suo mazzo.",
                "de": "Wirf eine Münze. Bei „Kopf“ schauen Sie sich eine zufällige Karte aus der Hand Ihres Gegners an und mischen Sie sie in dessen Deck.",
                "pt-br": "Jogue uma moeda. Se der cara, olhe uma carta aleatória da mão do seu oponente e embaralhe-a no baralho dele.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則隨機查看對手手中的一張牌並將其洗入對手的牌庫中。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
