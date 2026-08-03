import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/102",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/102",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/102",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/102",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/102",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/102",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/102"
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
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
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
                en: "Sing",
                fr: "Berceuse",
                es: "Canto",
                it: "Canto",
                de: "Gesang",
                "pt-br": "Canção",
                "zh-tw": "唱歌"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
