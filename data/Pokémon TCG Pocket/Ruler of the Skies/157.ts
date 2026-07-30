import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/157"
    },
    name: {
        en: "Lileep",
        fr: "Lilia",
        es: "Lileep",
        it: "Lileep",
        de: "Liliep",
        "pt-br": "Lileep",
        "zh-tw": "觸手百合",
        ko: "릴링",
        ja: "リリーラ"
    },
    illustrator: "Gapao",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [345],
    evolveFrom: {
        en: "Root Fossil",
        fr: "Fossile Racine",
        es: "Fósil Raíz",
        it: "Fossilradice",
        de: "Wurzelfossil",
        "pt-br": "Fóssil Raiz",
        "zh-tw": "根狀化石",
        ko: "뿌리화석",
        ja: "ねっこのカセキ"
    },
    stage: "Stage1",
    description: {
        en: "Lileep clings to rocks on the seabed. When prey comes close, this Pokémon entangles it with petallike tentacles.",
        fr: "Accroché aux rochers des profondeurs, il attend\nqu’une proie s’approche de lui pour l’attraper\navec ses tentacules en forme de pétales.",
        es: "Se ancla a una roca en el lecho marino y atrapa\na las presas que se le acercan con sus tentáculos\nen forma de pétalos.",
        it: "Si attacca alle rocce dei fondali marini e usa\ni tentacoli simili a petali per catturare le prede\nche si avvicinano.",
        de: "Liliep heftet sich an Felsen am Meeresgrund.\nNähert sich Beute, fängt es diese mit seinen\nwie Blütenblätter geformten Tentakeln.",
        "zh-tw": "會吸附在海底的岩石上，\n並用花瓣般的觸手纏住\n接近自己的獵物。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Blot",
                fr: "Tache",
                es: "Mancha",
                it: "Macchia",
                de: "Fleck",
                "pt-br": "Borrão",
                "zh-tw": "吸取一下"
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
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
