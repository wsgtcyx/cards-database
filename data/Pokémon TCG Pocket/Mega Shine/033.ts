import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/033",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/033"
    },
    name: {
        en: "Diglett",
        fr: "Taupiqueur",
        es: "Diglett",
        it: "Diglett",
        de: "Digda",
        "pt-br": "Diglett",
        "zh-tw": "地鼠",
        ko: "디그다",
        ja: "ディグダ"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [50],
    stage: "Basic",
    description: {
        en: "Its skin is very thin. If it is exposed to light, its blood heats up, causing it to grow weak.",
        fr: "Son épiderme est très fin. S’il est exposé au soleil,\nson sang se réchauffe, ce qui l’affaiblit.",
        es: "Su piel es muy fina. Si se expone a la luz, su sangre\nse calienta y su crecimiento se debilita.",
        it: "La sua pelle è sottilissima. Se si espone alla luce,\nil sangue si riscalda, indebolendolo.",
        de: "Seine Haut ist sehr dünn. Wird es Sonnenlicht\nausgesetzt, erhitzt sich sein Blut und es wird schwach.",
        "pt-br": "Sua pele é muito fina. Se for exposto à luz, seu sangue aquece, enfraquecendo-o.",
        "zh-tw": "它的皮很薄。如果暴露在光線下，它的血液就會升溫，導致它變得虛弱。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Slight Intrusion",
                fr: "Légère Intrusion",
                es: "Ligera Intromisión",
                it: "Coinvolgimento",
                de: "Vorwagen",
                "pt-br": "Leve Invasão",
                "zh-tw": "撞一下"
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
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
