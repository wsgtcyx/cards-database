import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/089",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/089",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/089",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/089",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/089",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/089"
    },
    name: {
        en: "Phantump",
        fr: "Brocélôme",
        es: "Phantump",
        it: "Phantump",
        de: "Paragoni",
        "pt-br": "Phantump",
        "zh-tw": "小木靈",
        ko: "나목령",
        ja: "ボクレー"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    dexId: [708],
    stage: "Basic",
    description: {
        en: "This Pokémon came to be when the spirit of a deceased child possessed a tree stump. It now wanders the forest searching for friends.",
        fr: "Ce Pokémon est né lorsque l'esprit d'un enfant décédé possédait une souche d'arbre. Il erre désormais dans la forêt à la recherche d'amis.",
        es: "Este Pokémon surgió cuando el espíritu de un niño fallecido poseía el tocón de un árbol. Ahora deambula por el bosque en busca de amigos.",
        it: "Questo Pokémon venne alla luce quando lo spirito di un bambino deceduto possedeva un ceppo di albero. Ora vaga per la foresta in cerca di amici.",
        de: "Dieses Pokémon entstand, als der Geist eines verstorbenen Kindes einen Baumstumpf besaß. Jetzt wandert es durch den Wald auf der Suche nach Freunden.",
        "pt-br": "Este Pokémon surgiu quando o espírito de uma criança falecida possuía um toco de árvore. Agora ele vagueia pela floresta em busca de amigos.",
        "zh-tw": "當死去的孩子的靈魂附在樹樁上時，就會出現這種寶可夢。它現在在森林裡徘徊尋找朋友。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊"
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
    retreat: 1
};

export default card;
