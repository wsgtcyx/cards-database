import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/088",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-A/088",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/088",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/088",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-A/088",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-A/088",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/088",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-A/088",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/P-A/088"
    },
    name: {
        en: "Dragonair",
        es: "Dragonair",
        "fr": "Draco",
        "it": "Dragonair",
        "de": "Dragonir",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ja: "ハクリュー",
        ko: "신뇽",
    },
    illustrator: "Shinya Komatsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    evolveFrom: {
        en: "Dratini",
        es: "Dratini",
        "fr": "Minidraco",
        "it": "Dratini",
        "de": "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ja: "ミニリュウ",
        ko: "미뇽"
    },
    description: {
        en: "They say that if it emits an aura from its whole\nbody, the weather will begin to change instantly.",
        es: "Dicen que, cuando su cuerpo desprende un aura,\nel tiempo empieza a cambiar inmediatamente.",
        "fr": "On dit que s'il émet une aura de tout son\ncorps, le temps commencera à changer instantanément.",
        "it": "Dicono che se emette un'aura dal suo insieme\ncorpo, il tempo inizierà a cambiare immediatamente.",
        "de": "Man sagt, wenn es als Ganzes eine Aura ausstrahlt\nKörper, das Wetter wird sich sofort ändern.",
        "pt-br": "Dizem que se emitir uma aura de todo o seu corpo\ncorpo, o tempo começará a mudar instantaneamente.",
        "zh-tw": "他們說，如果它全身散發出一種光環\n身體，天氣就會瞬間開始變化。",
        ja: "全身から オーラが 出されると あたりの 天候が みるみるうちに 変わっていく という。",
        ko: "전신에서 오라를 발산하면\n주변 날씨가 순식간에\n변한다고 한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Shed Skin",
                es: "Mudar",
                "fr": "Peau perdue",
                "it": "Cambiare pelle",
                "de": "Haut abwerfen",
                "pt-br": "Pele derramada",
                "zh-tw": "脫皮",
                ja: "だっぴ",
                ko: "탈피"
            },
            cost: ["Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                es: "Cura 30 puntos de daño a este Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。",
                ja: "このポケモンのHPを30回復。",
                ko: "이 포켓몬의 HP를 30회복."
            }
        }],
    retreat: 2,
    boosters: ["vol10"]
};
export default card;
