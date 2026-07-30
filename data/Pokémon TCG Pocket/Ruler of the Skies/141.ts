import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/141"
    },
    name: {
        en: "Swanna ex",
        fr: "Lakmécygne-ex",
        es: "Swanna ex",
        it: "Swanna-ex",
        de: "Swaroness-ex",
        "pt-br": "Swanna ex",
        "zh-tw": "舞天鵝ex",
        ko: "스완나 ex",
        ja: "スワンナex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    dexId: [581],
    evolveFrom: {
        en: "Ducklett",
        fr: "Couaneton",
        es: "Ducklett",
        it: "Ducklett",
        de: "Piccolente",
        "pt-br": "Ducklett",
        "zh-tw": "鴨寶寶",
        ko: "꼬지보리",
        ja: "コアルヒー"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Jet Wing"
            },
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                fr: "Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這隻寶可夢無法攻擊。"
            },
            damage: 140
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
