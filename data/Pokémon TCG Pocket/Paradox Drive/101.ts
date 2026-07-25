import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/101",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/101"
    },
    name: {
        en: "Orthworm",
        fr: "Ferdeter",
        es: "Orthworm",
        it: "Orthworm",
        de: "Schlurm",
        "pt-br": "Orthworm",
        "zh-tw": "拖拖蚓",
        ko: "꿈트렁",
        ja: "ミミズズ"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [968],
    stage: "Basic",
    description: {
        en: "This Pokémon lives in arid deserts. It maintains its metal body by consuming iron from the soil.",
        fr: "Ce Pokémon vit dans les déserts arides. Il entretient son corps métallique en consommant le fer du sol.",
        es: "Este Pokémon vive en desiertos áridos. Mantiene su cuerpo metálico consumiendo hierro del suelo.",
        it: "Questo Pokémon vive nei deserti aridi. Mantiene il suo corpo metallico consumando il ferro dal suolo.",
        de: "Dieses Pokémon lebt in trockenen Wüsten. Es behält seinen Metallkörper bei, indem es Eisen aus dem Boden aufnimmt.",
        "pt-br": "Este Pokémon vive em desertos áridos. Ele mantém seu corpo metálico consumindo ferro do solo.",
        "zh-tw": "這隻寶可夢生活在乾旱的沙漠中。它透過消耗土壤中的鐵来维持其金属身体。"
    },
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Iron Supply",
                fr: "Provision de Fer",
                es: "Suministro de Hierro",
                it: "Scorta Metallica",
                de: "Eisenvorrat",
                "pt-br": "Estoque de Ferro",
                "zh-tw": "提供鐵質"
            },
            effect: {
                en: "Take a {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                fr: "Prenez une {M} Énergie de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                es: "Toma una Energía {M} de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                it: "Prendi un'Energia {M} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon in panchina.",
                de: "Nimm eine {M}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue uma Energia {M} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區取出一個{M}能量並將其附加到你的1隻後備寶可夢上。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
