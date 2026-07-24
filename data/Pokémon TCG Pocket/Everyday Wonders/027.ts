import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/027"
    },
    name: {
        en: "Slowbro",
        fr: "Flagadoss",
        es: "Slowbro",
        it: "Slowbro",
        de: "Lahmus",
        "pt-br": "Slowbro",
        "zh-tw": "呆殼獸",
        ko: "야도란",
        ja: "ヤドラン"
    },
    illustrator: "OKACHEKE",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    dexId: [80],
    evolveFrom: {
        en: "Slowpoke",
        fr: "Ramoloss",
        es: "Slowpoke",
        it: "Slowpoke",
        de: "Flegmon",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸",
        ko: "야돈",
        ja: "ヤドン"
    },
    stage: "Stage1",
    description: {
        en: "If the tail-biting Shellder is thrown off in a harsh battle, this Pokémon reverts to being an ordinary Slowpoke.",
        fr: "Si le Kokiyas mordant est éliminé au cours d'une bataille acharnée, ce Pokémon redevient un Ramoloss ordinaire.",
        es: "Si el mordedor de cola Shellder cae en una dura batalla, este Pokémon vuelve a ser un Slowpoke normal y corriente.",
        it: "Se il morsicacoda Shellder viene respinto in una dura battaglia, questo Pokémon ritorna ad essere un normale Slowpoke.",
        de: "Wenn das Schwanz beißende Muschas in einem harten Kampf abgeworfen wird, verwandelt sich dieses Pokémon in ein gewöhnliches Flegmon zurück.",
        "pt-br": "Se o Shellder, que morde a cauda, ​​for derrubado em uma batalha dura, este Pokémon voltará a ser um Slowpoke comum.",
        "zh-tw": "如果咬尾大舌貝在激烈的戰鬥中被甩掉，這隻寶可夢就會恢復為普通的呆呆獸。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic", "Colorless"],
            name: {
                en: "Psybeam",
                fr: "Rafale Psy",
                es: "Psicorrayo",
                it: "Psicoraggio",
                de: "Psystrahl",
                "pt-br": "Feixe Psíquico",
                "zh-tw": "幻象光線"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Confus.",
                es: "El Pokémon Activo de tu rival ahora está Confundido.",
                it: "Il Pokémon attivo del tuo avversario è ora confuso.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的戰鬥寶可夢現在處於混亂狀態。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
