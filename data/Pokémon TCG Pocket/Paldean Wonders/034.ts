import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/034"
    },
    name: {
        en: "Frigibax",
        fr: "Frigodo",
        es: "Frigibax",
        it: "Frigibax",
        de: "Frospino",
        "pt-br": "Frigibax",
        "zh-tw": "涼脊龍",
        pt: "Frigibax"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [996],
    description: {
        en: "This Pokémon lives in forests and craggy areas. Using the power of its dorsal fin, it cools the inside of its nest like a refrigerator.",
        "fr": "Ce Pokémon vit dans les forêts et les zones escarpées. Grâce à la puissance de sa nageoire dorsale, il refroidit l’intérieur de son nid comme un réfrigérateur.",
        "es": "Este Pokémon vive en bosques y zonas escarpadas. Utilizando el poder de su aleta dorsal, enfría el interior de su nido como si fuera un frigorífico.",
        "it": "Questo Pokémon vive nelle foreste e nelle zone scoscese. Usando la potenza della sua pinna dorsale, raffredda l'interno del suo nido come un frigorifero.",
        "de": "Dieses Pokémon lebt in Wäldern und felsigen Gebieten. Mit der Kraft seiner Rückenflosse kühlt es das Innere seines Nestes wie ein Kühlschrank.",
        "pt-br": "Este Pokémon vive em florestas e áreas escarpadas. Usando o poder de sua barbatana dorsal, ele resfria o interior do ninho como uma geladeira.",
        "zh-tw": "這種寶可夢生活在森林和崎嶇的地區。它利用背鰭的力量，像冰箱一樣冷卻巢穴內部。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Chilly",
                fr: "Glacial",
                es: "Fresquito",
                it: "Addiaccio",
                de: "Frösteln",
                "pt-br": "Frio",
                "zh-tw": "寒冷",
                'es-mx': "Frialdad",
                pt: "Frio"
            },
            damage: "20",
            cost: ["Water"],
        },
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
