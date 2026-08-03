import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/082",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/082",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/082",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/082",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/082",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/082"
    },
    name: {
        en: "Dragonite ex",
        "fr": "Dracolosse-ex",
        "es": "Dragonite ex",
        "it": "Dragonite-ex",
        "de": "Dragoran-ex",
        "pt-br": "Dragonite ex",
        "zh-tw": "快龍ex",
    },
    illustrator: "PLANETA Mochizuki",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 180,
    types: ["Dragon"],
    evolveFrom: {
        en: "Dragonair",
        "fr": "Dragonair",
        "es": "Dragonair",
        "it": "Dragonair",
        "de": "Dragonair",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Giga Impact",
                "fr": "Giga-Impact",
                "es": "Gigaimpacto",
                "it": "Gigaimpatto",
                "de": "Giga-Impact",
                "pt-br": "Giga Impacto",
                "zh-tw": "千兆影響"
            },
            damage: 180,
            cost: ["Water", "Lightning", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                "fr": "Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                "es": "Durante tu próximo turno, este Pokémon no puede atacar.",
                "it": "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                "de": "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝無法攻擊。"
            }
        }],
    retreat: 2
};
export default card;
