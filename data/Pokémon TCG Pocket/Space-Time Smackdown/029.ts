import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2/029",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2/029",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A2/029"
    },
    name: {
        en: "Infernape ex",
        fr: "Simiabraz-ex",
        es: "Infernape ex",
        it: "Infernape-ex",
        de: "Panferno-ex",
        'pt-br': "Infernape ex",
        ko: "초염몽 ex",
        "zh-tw": "烈焰猴ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Fire"],
    evolveFrom: {
        en: "Monferno",
        "fr": "Chimpenfeu",
        "es": "Monferno",
        "it": "Monferno",
        "de": "Panpyro",
        "pt-br": "Monferno",
        "zh-tw": "猛火猴",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Flare Blitz",
                fr: "Boutefeu",
                es: "Envite Ígneo",
                it: "Fuococarica",
                de: "Flammenblitz",
                'pt-br': "Blitz de Labaredas",
                ko: "플레어드라이브",
                "zh-tw": "耀斑閃電戰"
            },
            damage: 140,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Discard all {R} Energy from this Pokémon.",
                fr: "Défaussez toutes les Énergies {R} de ce Pokémon.",
                es: "Descarta todas las Energías {R} de este Pokémon.",
                it: "Rimuovi tutte le Energie {R} da questo Pokémon.",
                de: "Lege alle {R}-Energien von diesem Pokémon ab.",
                'pt-br': "Descarte todas as Energias {R} deste Pokémon.",
                ko: "이 포켓몬에서 {R}에너지를 모두 트래쉬한다.",
                "zh-tw": "丟棄該神奇寶貝的所有 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["palkia"]
};
export default card;
