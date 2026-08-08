import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/039",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/039"
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
                en: "Frozen Splash",
                fr: "Trempette Glacée",
                es: "Chapoteo Congelado",
                "pt-br": "Borrifada Congelada",
                "zh-tw": "結冰飛濺"
            },
            effect: {
                en: "If your opponent's Active Pokémon is a {F} Pokémon, this attack does 70 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un Pokémon {F}, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon {F}, este ataque hace 70 puntos de daño más.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon {F}, este ataque causará 70 pontos de dano a mais.",
                "zh-tw": "若對手的戰鬥寶可夢為{F}寶可夢,則增加70點傷害。"
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
