import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/334",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/334",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/334",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/334",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/334",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/334",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/334"
    },
    name: {
        en: "Galarian Meowth",
        fr: "Miaouss de Galar",
        es: "Meowth de Galar",
        it: "Meowth di Galar",
        de: "Galar-Mauzi",
        "pt-br": "Meowth de Galar",
        "zh-tw": "伽勒爾喵喵",
        ja: "ガラルニャース",
        ko: "가라르나옹"
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Metal"
    ],
    description: {
        en: "These daring Pokémon have coins on their\nforeheads. Darker coins are harder, and harder\ncoins garner more respect among Meowth.",
        fr: "Plus la pièce de son front est sombre, plus elle est dure et inspire le respect à ses congénères. Il est aguerri et ne connaît pas la peur.",
        es: "Cuanto más oscura es la moneda de su frente, mayor respeto inspira en sus congéneres. Es muy osado y no conoce el miedo.",
        it: "Più è nera la moneta sulla sua fronte, più è rispettato dai suoi simili. È intrepido e non conosce la paura.",
        de: "Je dunkler die Münze an seiner Stirn, desto fester ist sie und desto mehr Respekt hat seine Gruppe vor ihm. Es ist tapfer und kennt keine Angst.",
        "pt-br": "Estes Pokémon ousados têm moedas nas testas. Moedas escuras são mais resistentes, e moedas resistentes são mais respeitadas entre os Meowth.",
        "zh-tw": "額頭上的金幣越黑就越硬，也越能受到夥伴的尊敬。性情勇猛，什麼都不怕。",
        ja: "These daring Pokémon have coins on their\nforeheads. Darker coins are harder, and harder\ncoins garner more respect among Meowth.",
        ko: "These daring Pokémon have coins on their\nforeheads. Darker coins are harder, and harder\ncoins garner more respect among Meowth."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開",
                ja: "Slash",
                ko: "Slash"
            },
            damage: 20,
            cost: [
                "Metal"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
