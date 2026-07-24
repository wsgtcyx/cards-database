import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/067",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/067"
    },
    name: {
        en: "Flamigo",
        fr: "Flamenroule",
        es: "Flamigo",
        it: "Flamigo",
        de: "Flaminkno",
        "pt-br": "Flamigo",
        "zh-tw": "纏紅鶴",
        ko: "꼬이밍고",
        ja: "カラミンゴ"
    },
    illustrator: "Ounishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [973],
    stage: "Basic",
    description: {
        en: "Thanks to a behavior of theirs known as “synchronizing,” an entire flock of these Pokémon can attack simultaneously in perfect harmony.",
        fr: "Grâce à leur comportement connu sous le nom de « synchronisation », un troupeau entier de ces Pokémon peut attaquer simultanément en parfaite harmonie.",
        es: "Gracias a un comportamiento suyo conocido como “sincronización”, una bandada completa de estos Pokémon puede atacar simultáneamente en perfecta armonía.",
        it: "Grazie ad un loro comportamento chiamato “sincronizzazione”, un intero stormo di questi Pokémon può attaccare simultaneamente in perfetta armonia.",
        de: "Dank ihres Verhaltens, das als „Synchronisieren“ bekannt ist, kann ein ganzer Schwarm dieser Pokémon gleichzeitig und in perfekter Harmonie angreifen.",
        "pt-br": "Graças a um comportamento conhecido como “sincronização”, um bando inteiro desses Pokémon pode atacar simultaneamente em perfeita harmonia.",
        "zh-tw": "由於它們的「同步」行為，整群寶可夢可以完美和諧地同時攻擊。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Nosedive",
                fr: "Plongeon",
                es: "Picado vertical",
                it: "Picchiata",
                de: "Sturzflug",
                "pt-br": "Mergulho livre",
                "zh-tw": "急降"
            },
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                fr: "Ce Pokémon s'inflige également 20 dégâts.",
                es: "Este Pokémon también se hace 20 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 20 點傷害。"
            },
            damage: 80
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
