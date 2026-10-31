import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/067",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/067",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/067",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/067",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/067",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/067",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/067",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3a/067",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3a/067"
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
        "zh-tw": "由於它們的「同步」行為，整群寶可夢可以完美和諧地同時攻擊。",
        ja: "シンクロと呼ばれる 習性により 群れの 全員が 一糸乱れず 一斉に 攻撃してくる。",
        ko: "싱크로라 불리는 습성으로 인해\n무리 전체가 일사불란하게 움직여\n일제히 공격한다."
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
                "zh-tw": "急降",
                ja: "きゅうこうか",
                ko: "급강하"
            },
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                fr: "Ce Pokémon s'inflige également 20 dégâts.",
                es: "Este Pokémon también se hace 20 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 20 點傷害。",
                ja: "このポケモンにも20ダメージ。",
                ko: "이 포켓몬에게도 20데미지를 준다."
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
