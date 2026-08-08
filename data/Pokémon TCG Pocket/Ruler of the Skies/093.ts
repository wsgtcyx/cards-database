import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/093",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/093",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/093",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/093",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/093",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/093",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/093"
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
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [261],
    stage: "Basic",
    description: {
        en: "Poochyena pursue their prey in packs. Once the prey is exhausted, the pack finishes it off. But sometimes the prey retaliates, and the pack flees."
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
