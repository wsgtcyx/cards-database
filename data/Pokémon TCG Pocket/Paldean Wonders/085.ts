import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Flamigo",
        fr: "Flamenroule",
        es: "Flamigo",
        it: "Flamigo",
        de: "Flaminkno",
        'pt-br': "Flamigo",
        "zh-tw": "纏紅鶴",
        ko: "꼬이밍고"
    },
    illustrator: "kantaro",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [973],
    description: {
        en: "Thanks to a behavior of theirs known as “synchronizing,” an entire flock of these Pokémon can attack simultaneously in perfect harmony.",
        "fr": "Grâce à leur comportement connu sous le nom de « synchronisation », un troupeau entier de ces Pokémon peut attaquer simultanément en parfaite harmonie.",
        "es": "Gracias a un comportamiento suyo conocido como “sincronización”, una bandada completa de estos Pokémon puede atacar simultáneamente en perfecta armonía.",
        "it": "Grazie ad un loro comportamento chiamato “sincronizzazione”, un intero stormo di questi Pokémon può attaccare simultaneamente in perfetta armonia.",
        "de": "Dank ihres Verhaltens, das als „Synchronisieren“ bekannt ist, kann ein ganzer Schwarm dieser Pokémon gleichzeitig und in perfekter Harmonie angreifen.",
        "pt-br": "Graças a um comportamento conhecido como “sincronização”, um bando inteiro desses Pokémon pode atacar simultaneamente em perfeita harmonia.",
        "zh-tw": "由於它們的「同步」行為，整群寶可夢可以完美和諧地同時攻擊。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Wing Attack",
                fr: "Cru-aile",
                "es": "Ataque de ala",
                "it": "Attacco d'ala",
                de: "Wing Attack",
                "pt-br": "Ataque de asa",
                "zh-tw": "翼攻擊"
            },
            damage: "50",
            cost: ["Colorless", "Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
