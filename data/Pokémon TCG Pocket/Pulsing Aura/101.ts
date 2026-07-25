import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/101",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/101"
    },
    name: {
        en: "Koffing",
        fr: "Smogo",
        es: "Koffing",
        it: "Koffing",
        de: "Smogon",
        "pt-br": "Koffing",
        "zh-tw": "瓦斯彈",
        ko: "또가스",
        ja: "ドガース"
    },
    illustrator: "Lee HyunJung",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [109],
    stage: "Basic",
    description: {
        en: "Toxic gas is held within its thin, balloon-shaped body, so it can cause massive explosions.",
        fr: "Le gaz toxique est retenu dans son corps mince en forme de ballon, ce qui peut provoquer des explosions massives.",
        es: "Su cuerpo delgado con forma de globo contiene gas tóxico, por lo que puede provocar explosiones masivas.",
        it: "Il gas tossico è trattenuto nel suo corpo sottile a forma di palloncino, quindi può causare massicce esplosioni.",
        de: "In seinem dünnen, ballonförmigen Körper sind giftige Gase enthalten, die zu massiven Explosionen führen können.",
        "pt-br": "O gás tóxico é mantido dentro de seu corpo fino em forma de balão, podendo causar explosões massivas.",
        "zh-tw": "有毒氣體儲存在其薄薄的氣球狀體內，因此會造成大規模爆炸。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Gas Bomb",
                fr: "Bombe à Gaz",
                es: "Bomba Gaseosa",
                it: "Bombagas",
                de: "Gasbombe",
                "pt-br": "Bomba Gasosa",
                "zh-tw": "臭屁炸彈"
            },
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                fr: "Ce Pokémon s'inflige également 10 dégâts.",
                es: "Este Pokémon también se hace 10 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 10 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該寶可夢也會對其自身造成 10 點傷害。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
