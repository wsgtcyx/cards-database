import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/074",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/074",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/074",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/074",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/074",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/074",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/074"
    },
    name: {
        en: "Wynaut",
        fr: "Okéoké",
        es: "Wynaut",
        it: "Wynaut",
        de: "Isso",
        "pt-br": "Wynaut",
        "zh-tw": "小果然",
        ko: "마자",
        ja: "ソーナノ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Psychic"],
    dexId: [360],
    stage: "Basic",
    description: {
        en: "It tends to move in a pack with others. They cluster in a tight group to sleep in a cave.",
        fr: "Ces Pokémon adorent se déplacer en groupe.\nIls se blottissent les uns contre les autres\ndans des cavernes pour dormir.",
        es: "Suelen ir en grupo y, a la hora de dormir, se\npegan unos a otros para descansar resguardados\nen cuevas.",
        it: "Hanno l’abitudine di spostarsi in gruppo.\nQuando è ora di dormire, si radunano in\nuna grotta e riposano stretti l’uno all’altro.",
        de: "Sie ziehen normalerweise im Rudel umher. Zum\nSchlafen drängen sie sich ganz eng in einer Höhle\nzusammen.",
        "pt-br": "Costumam se mover em bandos, Aglomeram-se em grupos para dormir em cavernas.",
        "zh-tw": "具有集體行動的習性。\n睡覺的時候會在洞窟中\n和夥伴們把身體挨在一起。"
    },
    attacks: [
        {
            name: {
                en: "Stompy Jammer",
                fr: "Piétinement qui Bloque",
                es: "Pisotón Obstructor",
                "pt-br": "Pisada Bloqueante",
                "zh-tw": "踩踩干擾",
                "it": "Impedipedata",
                "de": "Störender Stampfer"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more.",
                fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent une Énergie {C} de plus.",
                es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan 1 {C} más.",
                it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore costano 1 {C} in più.",
                de: "Während des nächsten Zuges deines Gegners kosten Angriffe des verteidigenden Pokémon 1 {C} mehr.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão 1 {C} a mais.",
                "zh-tw": "在下個對手的回合,受到這個招式的寶可夢使用招式所需的能量增加1個{C}能量。"
            },
            damage: 10
        }
    ],
    retreat: 0
};
export default card;
