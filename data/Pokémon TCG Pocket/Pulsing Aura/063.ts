import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/063"
    },
    name: {
        en: "Ralts",
        fr: "Tarsal",
        es: "Ralts",
        it: "Ralts",
        de: "Trasla",
        "pt-br": "Ralts",
        "zh-tw": "拉魯拉絲",
        ko: "랄토스",
        ja: "ラルトス"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [280],
    stage: "Basic",
    description: {
        en: "It is highly attuned to the emotions of people and Pokémon. It hides if it senses hostility.",
        fr: "Il est très sensible aux émotions des gens\net des Pokémon. Il se cache au moindre\nsigne d’hostilité.",
        es: "Capta muy bien lo que sienten las personas y\nlos Pokémon. Cuando nota cierta hostilidad, se\nesconde.",
        it: "È molto sensibile agli umori delle persone e\ndegli altri Pokémon. Se avverte ostilità, va a\nnascondersi.",
        de: "Es hat ein feines Gespür für die Gefühle der\nMenschen und Pokémon. Wenn es Feindseligkeit\nwahrnimmt, versteckt es sich.",
        "pt-br": "Está altamente sintonizado com as emoções das pessoas e dos Pokémon. Ele se esconde se sentir hostilidade.",
        "zh-tw": "能敏銳地感知人和寶可夢\n的感情。一旦感受到敵意\n就會躲進暗處。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Smack",
                fr: "Claque",
                es: "Palmetazo",
                it: "Schiaffo",
                de: "Klatscher",
                "pt-br": "Estalo",
                "zh-tw": "掌擊"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
