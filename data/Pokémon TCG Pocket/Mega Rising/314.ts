import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Doduo",
        "fr": "Doduo",
        "es": "Doduo",
        "it": "Doduo",
        "de": "Doduo",
        "pt-br": "Doduo",
        "zh-tw": "嘟嘟",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "A two-headed Pokémon that was discovered as a\nsudden mutation. It runs at a pace of over 60 miles\nper hour.",
        "fr": "Un Pokémon à deux têtes découvert comme un\nmutation soudaine. Il roule à une allure de plus de 60 milles\npar heure.",
        "es": "Un Pokémon de dos cabezas que fue descubierto como\nmutación repentina. Corre a un ritmo de más de 60 millas.\npor hora.",
        "it": "Un Pokémon a due teste scoperto come a\nmutazione improvvisa. Funziona ad un ritmo di oltre 60 miglia\nall'ora.",
        "de": "Ein zweiköpfiges Pokémon, das als entdeckt wurde\nplötzliche Mutation. Es läuft mit einer Geschwindigkeit von über 60 Meilen\npro Stunde.",
        "pt-br": "Um Pokémon de duas cabeças que foi descoberto como um\nmutação repentina. Ele corre a um ritmo de mais de 60 milhas\npor hora.",
        "zh-tw": "被發現為雙頭的神奇寶貝\n突然突變。它的運行速度超過 60 英里\n每小時。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Peck",
                "fr": "Picorer",
                "es": "Picotear",
                "it": "Pecca",
                "de": "Picken",
                "pt-br": "Peck",
                "zh-tw": "啄"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
