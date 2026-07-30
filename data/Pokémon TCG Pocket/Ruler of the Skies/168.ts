import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/168"
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
    illustrator: "Yoshimoto Yoshimon",
    rarity: "One Star",
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
        "zh-tw": "具有集體行動的習性。\n睡覺的時候會在洞窟中\n和夥伴們把身體挨在一起。"
    },
    attacks: [
        {
            name: {
                en: "Stompy Jammer"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more.",
                fr: "Lors du prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent 1 {C} de plus.",
                es: "Durante el próximo turno de tu rival, los ataques utilizados por el Pokémon Defensor cuestan 1 {C} más.",
                it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore costano 1 {C} in più.",
                de: "Während des nächsten Zuges deines Gegners kosten Angriffe des verteidigenden Pokémon 1 {C} mehr.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados ​​pelo Pokémon Defensor custarão 1 {C} a mais.",
                "zh-tw": "在對手的下一個回合中，防御寶可夢使用的攻擊額外花費 1 {C} 點。"
            },
            damage: 10
        }
    ],
    retreat: 0
};

export default card;
