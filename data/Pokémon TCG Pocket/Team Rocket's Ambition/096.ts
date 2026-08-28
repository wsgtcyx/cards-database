import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/096",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/096",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/096",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/096",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/096",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/096"
    },
    name: {
        en: "Ninetales",
        fr: "Feunard",
        es: "Ninetales",
        it: "Ninetales",
        de: "Vulnona",
        "pt-br": "Ninetales",
        "zh-tw": "九尾",
        ko: "나인테일",
        ja: "キュウコン"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [38],
    evolveFrom: {
        en: "Vulpix",
        fr: "Goupix",
        es: "Vulpix",
        it: "Vulpix",
        de: "Vulpix",
        "pt-br": "Vulpix",
        "zh-tw": "六尾",
        ko: "식스테일",
        ja: "ロコン"
    },
    stage: "Stage1",
    description: {
        en: "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
        fr: "Il a neuf longues queues et une fourrure qui brille comme de l'or. On dit qu'il peut vivre 1 000 ans.",
        es: "Tiene nueve largas colas y un pelaje con un brillo dorado. Dicen que este Pokémon llega a vivir mil años.",
        it: "Dotato di nove code e di una pelliccia dai riflessi dorati, si dice che viva 1.000 anni.",
        de: "Es hat neun lange Schweife und sein Fell glänzt gülden. Man sagt, es soll mindestens 1000 Jahre lang leben.",
        "pt-br": "Possui nove longas caudas e pelos com brilho dourado. Dizem que vive 1.000 anos.",
        "zh-tw": "擁有金光閃閃的體毛以及９根長長的尾巴。據說壽命長達１０００年。"
    },
    attacks: [
        {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                en: "Ember Dance",
                fr: "Danse de Braise",
                es: "Danza Abrasadora",
                it: "Danza della Brace",
                de: "Gluttanz",
                "pt-br": "Brasas Dançantes",
                "zh-tw": "火花舞"
            },
            effect: {
                en: "Flip 9 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 9 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 9 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 9 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 9 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 9 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲9次硬幣,造成正面出現的次數×20點傷害。"
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
