import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/014"
    },
    name: {
        en: "Accelgor",
        fr: "Limaspeed",
        es: "Accelgor",
        it: "Accelgor",
        de: "Hydragil",
        "pt-br": "Accelgor",
        "zh-tw": "敏捷蟲",
        ko: "어지리더",
        ja: "アギルダー"
    },
    illustrator: "Hasuno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [617],
    evolveFrom: {
        en: "Shelmet",
        fr: "Escargaume",
        es: "Shelmet",
        it: "Shelmet",
        de: "Schnuthelm",
        "pt-br": "Shelmet",
        "zh-tw": "小嘴蝸",
        ko: "쪼마리",
        ja: "チョボマキ"
    },
    stage: "Stage1",
    description: {
        en: "Discarding its shell made it nimble. To keep itself from dehydrating, it wraps its body in bands of membrane.",
        fr: "Il est bien plus agile sans sa coquille.\nLa membrane en forme de bandelettes\nqui l’entoure l’empêche de se dessécher.",
        es: "Tras deshacerse del caparazón, su agilidad ha\naumentado. Las membranas que le recubren el\ncuerpo evitan que se deshidrate.",
        it: "Si è liberato della conchiglia, diventando più\nleggero. Le membrane a forma di fasce che\nricoprono il suo corpo evitano che si secchi.",
        de: "Seit es seine Muschel abgestreift hat, ist es viel\nleichter und agiler. Es umhüllt sich mit einer\nSchleimhaut, die es vor dem Austrocknen schützt.",
        "zh-tw": "脫殼後變得更輕巧了。\n為了防止乾燥，會將\n帶狀的黏膜裹在身上。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Deck and Cover"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned and Paralyzed. Shuffle this Pokémon and all attached cards into your deck."
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
