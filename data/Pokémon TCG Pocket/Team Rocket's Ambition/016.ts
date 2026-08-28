import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/016",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/016",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/016"
    },
    name: {
        en: "Pelipper",
        fr: "Bekipan",
        es: "Pelipper",
        it: "Pelipper",
        de: "Pelipper",
        "pt-br": "Pelipper",
        "zh-tw": "大嘴鷗",
        ko: "패리퍼",
        ja: "ペリッパー"
    },
    illustrator: "Miki Tanaka",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    dexId: [279],
    evolveFrom: {
        en: "Wingull",
        fr: "Goélise",
        es: "Wingull",
        it: "Wingull",
        de: "Wingull",
        "pt-br": "Wingull",
        "zh-tw": "長翅鷗",
        ko: "갈모매",
        ja: "キャモメ"
    },
    stage: "Stage1",
    description: {
        en: "It protects its young in its beak. It bobs on waves, resting on them on days when the waters are calm.",
        fr: "Il protège ses petits en les abritant dans son bec. Ouand la mer est calme, il se repose sur l’eau.",
        es: "Protege a sus crías de los enemigos metiéndolas en su pico. En días de poco oleaje, reposa sobre el agua.",
        it: "Protegge i piccoli nascondendoli nel becco. Nei giorni di mare calmo, si riposa galleggiando sulle onde.",
        de: "Es trägt seine Jungen zum Schutz vor Feinden im Schnabel. Bei Windstille treibt es auf den Wellen, um sich auszuruhen.",
        "pt-br": "Protege os filhotes em seu bico. Balança nas ondas, descansando nelas nos días em que as águas estão calmas.",
        "zh-tw": "會把孩子放進鳥嘴裡保護。風平浪靜的日子會漂浮在海面上稍作休息。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Wing Attack",
                fr: "Cru-Ailes",
                es: "Ataque Ala",
                it: "Attacco d'Ala",
                de: "Flügelschlag",
                "pt-br": "Ataque de Asa",
                "zh-tw": "翅膀攻擊"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
