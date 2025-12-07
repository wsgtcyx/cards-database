import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Jellicent",
        "fr": "Gelée",
        "es": "gelatinoso",
        "it": "Jellicent",
        "de": "Jellicent",
        "pt-br": "Gelado",
        "zh-tw": "傑利森特"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    evolveFrom: {
        en: "Frillish",
        "fr": "Fantaisie",
        "es": "volantes",
        "it": "Frizzo",
        "de": "Rüschen",
        "pt-br": "Enfeitado",
        "zh-tw": "華麗的"
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
