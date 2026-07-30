import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/039"
    },
    name: {
        en: "Sealeo",
        fr: "Phogleur",
        es: "Sealeo",
        it: "Sealeo",
        de: "Seejong",
        "pt-br": "Sealeo",
        "zh-tw": "海魔獅",
        ko: "씨레오",
        ja: "トドグラー"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [364],
    evolveFrom: {
        en: "Spheal",
        fr: "Obalie",
        es: "Spheal",
        it: "Spheal",
        de: "Seemops",
        "pt-br": "Spheal",
        "zh-tw": "海豹球",
        ko: "대굴레오",
        ja: "タマザラシ"
    },
    stage: "Stage1",
    description: {
        en: "This Pokémon has a habit of spinning round things on its nose, whether those things are Poké Balls or Spheal.",
        fr: "Il ne peut pas s’empêcher de faire tourner sur\nson museau tout ce qui a une forme sphérique,\ncomme les Obalie ou les Poké Balls.",
        es: "Tiene la costumbre de hacer girar en la punta del\nmorro cualquier objeto redondeado, ya sea una\nPoké Ball o un Spheal.",
        it: "È solito giocare facendo ruotare sulla punta\ndel naso qualsiasi cosa rotonda gli capiti a tiro,\ncompresi Spheal e Poké Ball.",
        de: "Seejong balanciert gerne Pokébälle, Seemops\nund alles, was sonst noch rund ist, auf seiner\nNasenspitze.",
        "zh-tw": "牠只要看見了圓形的東西，\n不論那是海豹球或是精靈球，\n都會把它頂在鼻子上轉轉看。"
    },
    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Frozen Splash"
            },
            effect: {
                en: "If your opponent's Active Pokémon is a {F} Pokémon, this attack does 70 more damage."
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
