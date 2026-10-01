import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/140",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/140",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/140",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/140",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/140",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/140",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/140"
    },
    name: {
        en: "Haunter",
        fr: "Spectrum",
        es: "Haunter",
        it: "Haunter",
        de: "Alpollo",
        "pt-br": "Haunter",
        "zh-tw": "鬼斯通",
        ja: "ゴースト",
        ko: "고우스트"
    },
    illustrator: "DOM",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: [
        "Darkness"
    ],
    dexId: [
        93
    ],
    evolveFrom: {
        en: "Gastly",
        fr: "Fantominus",
        es: "Gastly",
        it: "Gastly",
        de: "Nebulak",
        "pt-br": "Gastly",
        "zh-tw": "鬼斯",
        ja: "Gastly",
        ko: "Gastly"
    },
    stage: "Stage1",
    description: {
        en: "In total darkness, where nothing is visible, Haunter lurks, silently stalking its next victim.",
        fr: "Dans les ténèbres impénétrables, là où on ne voit rien, il se déplace en silence à l'affût de sa proie.",
        es: "En la oscuridad total, donde no se ve nada, Haunter acecha a su próxima víctima.",
        it: "Attende in silenzio la preda, celandosi nell'oscurità più totale, dove non si vede nulla.",
        de: "Alpollo wartet in absoluter Finsternis auf seine Opfer. Es lauert ihnen auf und stellt ihnen nach.",
        "pt-br": "Na escuridão total, onde nada é visível, Haunter se esconde, perseguindo silenciosamente sua próxima vítima.",
        "zh-tw": "出沒在會伸手不見五指的黑暗中追蹤捕捉獵物，不發一點聲響。",
        ja: "In total darkness, where nothing is visible, Haunter lurks, silently stalking its next victim.",
        ko: "In total darkness, where nothing is visible, Haunter lurks, silently stalking its next victim."
    },
    attacks: [
        {
            cost: [
                "Darkness",
                "Darkness"
            ],
            name: {
                en: "Spin Turn",
                fr: "Tournoyer",
                es: "Giro y Vuelta",
                it: "Girotondo",
                de: "Absatzdreher",
                "pt-br": "Volta Giratória",
                "zh-tw": "旋轉迴旋",
                ja: "Spin Turn",
                ko: "Spin Turn"
            },
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將這隻寶可夢與備戰寶可夢互換。",
                ja: "Switch this Pokémon with 1 of your Benched Pokémon.",
                ko: "Switch this Pokémon with 1 of your Benched Pokémon."
            },
            damage: 40
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
