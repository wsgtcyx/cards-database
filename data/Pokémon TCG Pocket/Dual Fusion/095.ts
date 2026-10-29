import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/095",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/095",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/095"
    },
    name: {
        en: "Solgaleo",
        fr: "Solgaleo",
        es: "Solgaleo",
        "pt-br": "Solgaleo",
        "zh-tw": "索爾迦雷歐",
        ja: "ソルガレオ",
        ko: "솔가레오",
        it: "Solgaleo",
        de: "Solgaleo"
    },
    illustrator: "Misa Tsutsui",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 160,
    types: [
        "Metal"
    ],
    stage: "Stage2",
    retreat: 3,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Cosmoem",
        fr: "Cosmovum",
        es: "Cosmoem",
        it: "Cosmoem",
        de: "Cosmovum",
        "pt-br": "Cosmoem",
        "zh-tw": "科斯莫姆",
        ja: "Cosmoem",
        ko: "Cosmoem"
    },
    attacks: [
        {
            name: {
                en: "Claws of the Sunne",
                fr: "Griffes du Halo Solaire",
                es: "Garras del Sol",
                it: "Artigli Solari",
                de: "Sonnenkreis-Klauen",
                "pt-br": "Garras do Sol",
                "zh-tw": "日輪之爪",
                ja: "Claws of the Sunne",
                ko: "Claws of the Sunne"
            },
            cost: [
                "Metal",
                "Metal",
                "Metal"
            ],
            damage: "90+",
            effect: {
                en: "This attack does 30 more damage for each point you have gotten.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque point que vous avez gagné.",
                es: "Este ataque hace 30 puntos de daño más por cada punto que hayas conseguido.",
                it: "Questo attacco infligge 30 danni in più per ogni punto che hai ottenuto.",
                de: "Diese Attacke fügt für jeden von dir erhaltenen Punkt 30 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada ponto que você recebeu.",
                "zh-tw": "增加自己已經獲得的分數×30點傷害。",
                ja: "This attack does 30 more damage for each point you have gotten.",
                ko: "This attack does 30 more damage for each point you have gotten."
            }
        }
    ],
    abilities: [],
    description: {
        en: "When light radiates from its body, this Pokémon could almost appear to be the sun. It will dispel any darkness and light up the world.",
        fr: "Quand tout son corps émet de la lumière et qu’il prend la forme du soleil, il peut repousser les ténèbres et illuminer le monde.",
        es: "Es capaz de eliminar toda oscuridad e iluminar el mundo entero irradiando luz por todo el cuerpo como si de un sol se tratara.",
        it: "Il suo corpo emette una luce abbagliante che, al pari del sole, è in grado di spazzare via le tenebre e illuminare il mondo.",
        de: "Wenn sein ganzer Körper Licht ausstrahlt, nimmt er eine sonnenähnliche Gestalt an und kann so das Dunkel vertreiben und die Welt erhellen.",
        "pt-br": "Quando seu corpo irradia luz, este Pokémon quase poderia ser confundido com o próprio sol, eliminando toda a escuridão e iluminando o mundo.",
        "zh-tw": "當牠全身放出猛烈的光芒，變成如同太陽一樣的身姿時，便會掃去黑暗，照亮世界。",
        ja: "When light radiates from its body, this Pokémon could almost appear to be the sun. It will dispel any darkness and light up the world.",
        ko: "When light radiates from its body, this Pokémon could almost appear to be the sun. It will dispel any darkness and light up the world."
    }
};

export default card;
