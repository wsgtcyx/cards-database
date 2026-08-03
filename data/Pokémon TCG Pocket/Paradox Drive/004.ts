import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/004",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/004"
    },
    name: {
        en: "Slither Wing",
        fr: "Rampe-Ailes",
        es: "Reptalada",
        it: "Alirasenti",
        de: "Kriechflügel",
        "pt-br": "Asa Rasteira",
        "zh-tw": "爬地翅",
        ko: "땅을기는날개",
        ja: "チヲハウハネ"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Grass"],
    dexId: [988],
    stage: "Basic",
    description: {
        en: "This Pokémon somewhat resembles an ancient form of Volcarona that was introduced in a dubious magazine.",
        fr: "Ce Pokémon ressemble quelque peu à une forme ancienne de Pyrax présentée dans un magazine douteux.",
        es: "Este Pokémon se parece un poco a una forma antigua de Volcarona que se introdujo en una revista dudosa.",
        it: "Questo Pokémon ricorda in qualche modo un'antica forma di Volcarona introdotta in una rivista dubbia.",
        de: "Dieses Pokémon ähnelt ein wenig einer alten Form von Ramoth, die in einer dubiosen Zeitschrift vorgestellt wurde.",
        "pt-br": "Este Pokémon lembra um pouco uma forma antiga de Volcarona que foi introduzida em uma revista duvidosa.",
        "zh-tw": "這個寶可夢有點像是可疑雜誌中介紹的 火神蛾 的古老形式。"
    },
    attacks: [
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                en: "Wildly Writhe",
                fr: "Se tordant sauvagement",
                es: "Retorcerse salvajemente",
                it: "Contorcersi selvaggiamente",
                de: "Wild winden",
                "pt-br": "Contorcer-se descontroladamente",
                "zh-tw": "劇痛暴滾"
            },
            effect: {
                en: "This Pokémon also does 60 damage to itself.",
                fr: "Ce Pokémon s'inflige également 60 dégâts.",
                es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 60 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 60 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 60 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 60 點傷害。"
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
