import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Nidoran♂",
        "fr": "Nidoran♂",
        "es": "Nidoran♂",
        "it": "Nidoran♂",
        "de": "Nidoran♂",
        "pt-br": "Nidoran♂",
        "zh-tw": "尼多朗",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "The horn on a male Nidoran's forehead contains\na powerful poison. This is a very cautious\nPokémon, always straining its large ears.",
        "fr": "La corne sur le front d'un Nidoran mâle contient\nun poison puissant. C'est une démarche très prudente\nPokémon, tendant toujours ses grandes oreilles.",
        "es": "El cuerno en la frente de un macho Nidoran contiene\nun veneno poderoso. Esto es muy cauteloso.\nPokémon, siempre forzando sus grandes orejas.",
        "it": "Il corno sulla fronte di un Nidoran maschio contiene\nun potente veleno. Questo è molto cauto\nPokémon, tendendo sempre le sue grandi orecchie.",
        "de": "Das Horn auf der Stirn eines männlichen Nidoraners enthält\nein starkes Gift. Das ist sehr vorsichtig\nPokémon, das immer seine großen Ohren anstrengt.",
        "pt-br": "O chifre na testa de um Nidoran masculino contém\num veneno poderoso. Esta é uma atitude muito cautelosa\nPokémon, sempre esticando suas orelhas grandes.",
        "zh-tw": "雄性尼多蘭額頭上的角含有\n一種強力的毒藥。這是一個非常謹慎的\n總是豎起大耳朵的神奇寶貝。"
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
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
