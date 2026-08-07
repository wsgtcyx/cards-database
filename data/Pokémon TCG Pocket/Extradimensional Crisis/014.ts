import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/014",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/014",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/014",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/014",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/014",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/014"
    },
    name: {
        en: "Luxio",
        "fr": "Luxio",
        "es": "Luxio",
        "it": "Luxio",
        "de": "Luxio",
        "pt-br": "Luxio",
        "zh-tw": "勒克貓",
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Shinx",
        "fr": "Shinx",
        "es": "Shinx",
        "it": "Shinx",
        "de": "Shinx",
        "pt-br": "Shinx",
        "zh-tw": "小貓怪",
    },
    description: {
        en: "Strong electricity courses through the tips of\nits sharp claws. A light scratch causes fainting\nin foes.",
        "fr": "Des cours d'électricité forte à travers les astuces de\nses griffes acérées. Une légère égratignure provoque un évanouissement\nchez les ennemis.",
        "es": "Fuertes cursos de electricidad a través de las puntas de\nsus afiladas garras. Un ligero rasguño provoca desmayos.\nen enemigos.",
        "it": "Forti corsi di elettricità attraverso le punte di\ni suoi artigli affilati. Un leggero graffio provoca svenimento\nnei nemici.",
        "de": "Starke Stromverläufe durch die Spitzen von\nseine scharfen Krallen. Ein leichter Kratzer verursacht Ohnmacht\nbei Feinden.",
        "pt-br": "Fortes cursos de eletricidade através das dicas de\nsuas garras afiadas. Um leve arranhão causa desmaio\nem inimigos.",
        "zh-tw": "強電課程通過技巧\n它鋒利的爪子。輕微的抓傷會導致昏厥\n在敵人中。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Head Bolt",
                "fr": "Boulon à tête",
                "es": "Perno de cabeza",
                "it": "Bullone di testa",
                "de": "Kopfschraube",
                "pt-br": "Parafuso de cabeça",
                "zh-tw": "頭部螺栓"
            },
            damage: 50,
            cost: ["Lightning", "Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
