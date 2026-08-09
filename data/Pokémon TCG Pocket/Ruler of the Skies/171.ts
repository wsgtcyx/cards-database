import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/171",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/171",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/171",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/171",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/171",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/171",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/171"
    },
    name: {
        en: "Poochyena",
        fr: "Medhyèna",
        es: "Poochyena",
        it: "Poochyena",
        de: "Fiffyen",
        "pt-br": "Poochyena",
        "zh-tw": "土狼犬",
        ko: "포챠나",
        ja: "ポチエナ"
    },
    illustrator: "okayamatakatoshi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [261],
    stage: "Basic",
    description: {
        en: "Poochyena pursue their prey in packs. Once the prey is exhausted, the pack finishes it off. But sometimes the prey retaliates, and the pack flees.",
        fr: "Ils chassent leurs proies en meute et les achèvent quand elles sont à bout de force. Dans les rares cas où elles ripostent, ils préfèrent fuir.",
        es: "Persiguen a su presa en jaurías. Esperan a que se agote para darle el golpe de gracia, pero, si esta contraataca, salen corriendo.",
        it: "Inseguono la preda in branco e la finiscono quando è esausta, ma se capita che questa contrattacchi scappano.",
        de: "Es jagt Beute im Rudel nach. Ist diese erschöpft, bringt es sie zur Strecke. Stößt Fiffyen jedoch auf Widerstand, ergreift es auch mal die Flucht.",
        "pt-br": "Poochyena perseguem suas presas em bandos. Quando a presa sucumbe ao cansaço, o bando acaba com ela. Mas às vezes o inimigo revida e a alcateia foge.",
        "zh-tw": "會成群追擊獵物，並在其\n筋疲力盡時給予致命一擊，\n但有時會因遭到反擊而逃走。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Team Hunt",
                fr: "Chasse en Équipe",
                es: "Caza en Equipo",
                "pt-br": "Caçada em Equipe",
                "zh-tw": "成群狩獵",
                "it": "Caccia in Branco",
                "de": "Teamjagd"
            },
            effect: {
                en: "Draw a card for each Poochyena you have in play.",
                fr: "Piochez une carte pour chaque Medhyèna que vous avez en jeu.",
                es: "Roba 1 carta por cada uno de tus Poochyena en juego.",
                "pt-br": "Compre uma carta para cada Poochyena que você tem em jogo.",
                "zh-tw": "從牌庫抽出與自己的場上的「土狼犬」相同數量的卡。",
                "it": "Pesca una carta per ogni Poochyena che hai in gioco.",
                "de": "Ziehe 1 Karte für jedes fiffyen, das du im Spiel hast."
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
