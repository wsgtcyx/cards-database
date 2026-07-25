import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/019",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/019"
    },
    name: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        pt: "Charcadet"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [935],
    description: {
        en: "Its firepower increases when it fights, reaching over 1,800 degrees Fahrenheit. It likes berries that are rich in fat.",
        "fr": "Sa puissance de feu augmente lorsqu'il combat, atteignant plus de 1 800 degrés Fahrenheit. Il aime les baies riches en graisse.",
        "es": "Su potencia de fuego aumenta cuando lucha, alcanzando más de 1.800 grados Fahrenheit. Le gustan las bayas ricas en grasas.",
        "it": "La sua potenza di fuoco aumenta quando combatte, raggiungendo oltre 1.800 gradi Fahrenheit. Gli piacciono le bacche ricche di grassi.",
        "de": "Seine Feuerkraft erhöht sich im Kampf und erreicht über 1.800 Grad Fahrenheit. Es mag Beeren, die reich an Fett sind.",
        "pt-br": "Seu poder de fogo aumenta quando luta, chegando a mais de 1.800 graus Fahrenheit. Gosta de frutas vermelhas ricas em gordura.",
        "zh-tw": "戰鬥時火力會增強，可達華氏 1,800 度以上。牠喜歡富含脂肪的漿果。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Punch",
                fr: "Koud'Poing",
                es: "Puño",
                it: "Pugno",
                de: "Boxhieb",
                'pt-br': "Soco",
                "zh-tw": "沖床",
                ko: "펀치"
            },
            damage: "10",
            cost: ["Colorless"],
        },
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
