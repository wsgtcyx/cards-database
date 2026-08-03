import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/204",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/204",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/204",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/204",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/204",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/204",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/204"
    },
    name: {
        en: "Mega Lucario ex",
        fr: "Méga-Lucario-ex",
        es: "Mega-Lucario ex",
        it: "Mega Lucario-ex",
        de: "Mega-Lucario-ex",
        "pt-br": "Mega Lucario ex",
        "zh-tw": "超級路卡利歐ex",
        ko: "메가루카리오 ex",
        ja: "メガルカリオex"
    },
    illustrator: "Raita Kazama",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 190,
    types: ["Fighting"],
    dexId: [448],
    evolveFrom: {
        en: "Riolu",
        fr: "Riolu",
        es: "Riolu",
        it: "Riolu",
        de: "Riolu",
        "pt-br": "Riolu",
        "zh-tw": "利歐路",
        ko: "리오르",
        ja: "リオル"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Fighting Pulse",
                fr: "Pulsation Combative",
                es: "Pulso Combativo",
                it: "Pulsazione Combattiva",
                de: "Kämpferischer Puls",
                "pt-br": "Luta Pulsante",
                "zh-tw": "奮戰奏動"
            },
            effect: {
                en: "If this Pokémon has at least 1 extra {F} Energy attached, this attack does 50 more damage.",
                fr: "Si ce Pokémon a au moins 1 Énergie {F} supplémentaire attachée, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si este Pokémon tiene al menos 1 Energía {F} extra unida, este ataque hace 50 daños más.",
                it: "Se questo Pokémon ha almeno 1 Energia {F} extra assegnata, questo attacco infligge 50 danni in più.",
                de: "Wenn an dieses Pokémon mindestens 1 zusätzliche {F}-Energie angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 1 energia {F} extra anexada, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果這隻寶可夢附加了至少 1 個額外的 {F} 能量，則此攻擊造成的傷害增加 50 點。"
            },
            damage: "90+"
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
