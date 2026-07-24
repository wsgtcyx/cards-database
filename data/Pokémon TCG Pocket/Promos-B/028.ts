import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/028"
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
    illustrator: "Hajime Kusajima",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
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
            cost: ["Psychic"],
            name: {
                en: "Draining Kiss",
                fr: "Vampibaiser",
                es: "Beso Drenaje",
                it: "Assorbibacio",
                de: "Diebeskuss",
                "pt-br": "Beijo Drenante",
                "zh-tw": "吸取之吻"
            },
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                fr: "Soignez 10 dégâts de ce Pokémon.",
                es: "Cura 10 puntos de daño de este Pokémon.",
                it: "Cura questo Pokémon da 10 danni.",
                de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "治療該寶可夢造成的 10 點傷害。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
