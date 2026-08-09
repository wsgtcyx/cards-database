import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/039",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/039"
    },
    name: {
        en: "Jellicent",
        "fr": "Moyade",
        "es": "Jellicent",
        "it": "Jellicent",
        "de": "Apoquallyp",
        "pt-br": "Jellicent",
        "zh-tw": "胖嘟嘟",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    evolveFrom: {
        en: "Frillish",
        "fr": "Viskuse",
        "es": "Frillish",
        "it": "Frillish",
        "de": "Quabbel",
        "pt-br": "Frillish",
        "zh-tw": "輕飄飄",
    },
    description: {
        en: "Most of this Pokémon's body composition is\nidentical to sea water. It makes sunken ships\nits lair.",
        "fr": "La majeure partie de la composition corporelle de ce Pokémon est\nidentique à l'eau de mer. Il fait couler des navires\nson antre.",
        "es": "La mayor parte de la composición corporal de este Pokémon es\nIdéntico al agua de mar. Hace barcos hundidos\nsu guarida.",
        "it": "La maggior parte della composizione corporea di questo Pokémon lo è\nidentico all'acqua di mare. Produce navi affondate\nla sua tana.",
        "de": "Der größte Teil der Körperzusammensetzung dieses Pokémon ist\nidentisch mit Meerwasser. Es macht versunkene Schiffe\nsein Versteck.",
        "pt-br": "A maior parte da composição corporal deste Pokémon é\nidêntica à água do mar. Faz navios afundados\nseu covil.",
        "zh-tw": "該神奇寶貝的大部分身體成分是\n與海水相同。它使沉船\n它的巢穴。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Devour Soul",
                "fr": "Dévorer l'âme",
                "es": "Devorar alma",
                "it": "Divora l'anima",
                "de": "Seele verschlingen",
                "pt-br": "Devorar Alma",
                "zh-tw": "吞噬靈魂"
            },
            damage: 80,
            cost: ["Psychic", "Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
