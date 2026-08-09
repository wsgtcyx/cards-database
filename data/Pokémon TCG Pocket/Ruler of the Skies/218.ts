import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/218",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/218",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/218",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/218",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/218",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/218",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/218"
    },
    name: {
        en: "Galarian Meowth",
        fr: "Miaouss de Galar",
        es: "Meowth de Galar",
        it: "Meowth di Galar",
        de: "Galar-Mauzi",
        "pt-br": "Meowth de Galar",
        "zh-tw": "伽勒爾喵喵",
        ko: "가라르 나옹",
        ja: "ガラル ニャース"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    stage: "Basic",
    description: {
        en: "These daring Pokémon have coins on their foreheads. Darker coins are harder, and harder coins garner more respect among Meowth.",
        "fr": "Plus la pièce de son front est sombre, plus elle est dure et inspire le respect à ses congénères Il est aguerri et ne connait pas la peur.",
        es: "Cuanto más oscura es la moneda de su frente, mayor respeto inspira en sus congéneres. Es muy osado y no conoce el miedo.",
        it: "Più è nera la moneta sulla sua fronte, più è rispettato dai suoi simili. È intrepido e non conosce la paura.",
        de: "Je dunkler die Münze an seiner Stirn, desto fester ist sie und desto mehr Respekt hat seine Gruppe vor ihm. Es ist tapfer und kennt keine Angst.",
        "pt-br": "Estes Pokémon ousados têm moedas nas testas. Moedas escuras são mais resistentes, e moedas resistentes são mais respeitadas entre os Meowth.",
        "zh-tw": "額頭上的金幣越黑就越硬，\n也越能受到夥伴的尊敬。\n性情勇猛，什麼都不怕。"
    },
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開"
            },
            damage: 20
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
