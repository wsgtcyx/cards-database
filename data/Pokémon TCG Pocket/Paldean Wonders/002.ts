import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/002",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/002",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/002",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/002",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/002",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/002"
    },
    name: {
        en: "Floragato",
        fr: "Matourgeon",
        es: "Floragato",
        it: "Floragato",
        de: "Feliospa",
        'pt-br': "Floragato",
        "zh-tw": "蒂蕾喵",
        ko: "나로테"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    dexId: [907],
    evolveFrom: {
        en: "Sprigatito",
        fr: "Poussacha",
        es: "Sprigatito",
        it: "Sprigatito",
        de: "Felori",
        'pt-br': "Sprigatito",
        "zh-tw": "新葉喵",
        ko: "나오하"
    },
    description: {
        en: "The hardness of Floragato's fur depends on the Pokémon's mood. When Floragato is prepared to battle, its fur becomes pointed and needle sharp.",
        "fr": "La dureté de la fourrure de Matourgeon dépend de l'humeur du Pokémon. Lorsque Matourgeon est prêt à se battre, sa fourrure devient pointue et acérée.",
        "es": "La dureza del pelaje de Floragato depende del estado de ánimo del Pokémon. Cuando Floragato está preparado para la batalla, su pelaje se vuelve puntiagudo y afilado como una aguja.",
        "it": "La durezza della pelliccia di Floragato dipende dall'umore del Pokémon. Quando Floragato è pronto a combattere, la sua pelliccia diventa appuntita e affilata.",
        "de": "Die Härte des Fells von Feliospa hängt von der Stimmung des Pokémon ab. Wenn Feliospa zum Kampf bereit ist, wird sein Fell spitz und nadelscharf.",
        "pt-br": "A dureza do pelo de Floragato depende do humor do Pokémon. Quando Floragato está preparado para a batalha, seu pelo fica pontudo e pontiagudo.",
        "zh-tw": "蒂蕾喵 毛的硬度取決於寶可夢的心情。當蒂蕾喵準備戰鬥時，它的皮毛會變得尖如針鋒利。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Leaf Step",
                fr: "Enjambée de Feuillage",
                es: "Paso Hoja",
                it: "Passofoglia",
                de: "Blattschritt",
                "pt-br": "Passo Folha",
                "zh-tw": "葉步",
                'es-mx': "Paso de Hoja",
                pt: "Passo de Folha"
            },
            damage: 30,
            cost: ["Grass"],
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
