import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/017",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/017"
    },
    name: {
        en: "Swablu",
        fr: "Tylton",
        es: "Swablu",
        it: "Swablu",
        de: "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ko: "파비코",
        ja: "チルット"
    },
    illustrator: "Yukiko Baba",
    rarity: "None",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    dexId: [333],
    stage: "Basic",
    description: {
        en: "It can’t relax if it or its surroundings are not clean. It wipes off dirt with its wings.",
        fr: "Il ne se sent à l’aise que dans un\nmilieu propre et repousse la\npoussière avec ses ailes.",
        es: "No puede relajarse si él o sus alrededores no están limpios. Limpia la suciedad con sus alas.",
        it: "Non può rilassarsi se lui o i suoi dintorni non sono puliti. Elimina lo sporco con le ali.",
        de: "Es kann sich nicht entspannen, wenn es oder seine Umgebung nicht sauber sind. Mit seinen Flügeln wischt es Schmutz weg.",
        "pt-br": "Ele não pode relaxar se ele ou seus arredores não estiverem limpos. Ele limpa a sujeira com suas asas.",
        "zh-tw": "如果它或它的周圍環境不乾淨，它就不能放鬆。它用翅膀擦去污垢。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Find a Friend",
                fr: "Trouver un Ami",
                es: "Encontrar un Amigo",
                it: "Trovamico",
                de: "Freunde finden",
                "pt-br": "Encontre um Amigo",
                "zh-tw": "尋找朋友"
            },
            effect: {
                en: "Put a random Pokémon from your deck into your hand.",
                fr: "Mettez un Pokémon aléatoire de votre deck dans votre main.",
                es: "Pon un Pokémon aleatorio de tu mazo en tu mano.",
                it: "Metti nella tua mano un Pokémon casuale dal tuo mazzo.",
                de: "Nimm ein zufälliges Pokémon aus deinem Deck auf deine Hand.",
                "pt-br": "Coloque um Pokémon aleatório do seu baralho na sua mão.",
                "zh-tw": "從你的牌組中隨機將一隻寶可夢放入你的手牌。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol2"]
};

export default card;
