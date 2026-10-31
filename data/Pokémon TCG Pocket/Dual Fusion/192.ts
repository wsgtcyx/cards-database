import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/192",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/192",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/192",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/192",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/192",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/192",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/192",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/192"
    },
    name: {
        en: "Seel",
        fr: "Otaria",
        es: "Seel",
        "pt-br": "Seel",
        "zh-tw": "小海獅",
        ja: "パウワウ",
        ko: "쥬쥬",
        it: "Seel",
        de: "Jurob"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Waterfall",
                fr: "Cascade",
                es: "Cascada",
                it: "Cascata",
                de: "Kaskade",
                "pt-br": "Cachoeira",
                "zh-tw": "攀瀑",
                ja: "たきのぼり",
                ko: "Waterfall"
            },
            cost: [
                "Water",
                "Water"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "The protrusion on its head is very hard. It is used for bashing through thick ice.",
        fr: "La corne sur son front est très résistante. Elle lui sert à se frayer un chemin à travers les icebergs.",
        es: "La protuberancia que tiene en la cabeza es tan dura que la usa para abrirse paso a cabezazos por el hielo de los icebergs.",
        it: "La protuberanza che ha sulla testa è estremamente dura. Si fa strada tra gli iceberg spaccandoli a testate.",
        de: "Dieses Pokémon verfügt über ein sehr hartes Horn. Mit Kopfstößen durchbricht es Eismassen in seinem Weg.",
        "pt-br": "A protuberância extremamente resistente em sua cabeça é usada para arrebentar camadas espessas de gelo.",
        "zh-tw": "頭上有著非常堅硬的突起部分，能夠用頭槌撞破冰山來開拓前進。",
        ja: "頭に でっぱりが あって 非常に 硬い。 頭突きで 氷山を 割って 進む。",
        ko: "The protrusion on its head is very hard. It is used for bashing through thick ice."
    }
};

export default card;
