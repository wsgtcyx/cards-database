import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/035",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/035"
    },
    name: {
        en: "Flutter Mane",
        fr: "Flotte-Mèche",
        es: "Melenaleteo",
        it: "Crinealato",
        de: "Flatterhaar",
        "pt-br": "Juba Sopro",
        "zh-tw": "振翼髮",
        ko: "날개치는머리",
        ja: "ハバタクカミ"
    },
    illustrator: "Teeziro",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    dexId: [987],
    stage: "Basic",
    description: {
        en: "It has similar features to a ghostly pterosaur that was covered in a paranormal magazine, but the two have little else in common.",
        fr: "Il présente des caractéristiques similaires à celles d'un ptérosaure fantomatique évoqué dans un magazine paranormal, mais les deux n'ont pas grand-chose d'autre en commun.",
        es: "Tiene características similares a las de un pterosaurio fantasmal que apareció en una revista paranormal, pero los dos tienen poco más en común.",
        it: "Ha caratteristiche simili a uno pterosauro spettrale di cui si parlava in una rivista sul paranormale, ma i due hanno poco altro in comune.",
        de: "Es hat ähnliche Merkmale wie ein geisterhafter Flugsaurier, über den in einer paranormalen Zeitschrift berichtet wurde, aber die beiden haben sonst wenig gemeinsam.",
        "pt-br": "Tem características semelhantes a um pterossauro fantasmagórico que foi abordado em uma revista paranormal, mas os dois têm pouco em comum.",
        "zh-tw": "它與超自然雜誌中報導的幽靈翼龍具有相似的特徵，但兩者幾乎沒有其他共同點。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Hexing Flight",
                fr: "Vol maléfique",
                es: "Vuelo hechizante",
                it: "Volo maledetto",
                de: "Verhexender Flug",
                "pt-br": "Vôo Feitiço",
                "zh-tw": "翔天厄禍"
            },
            effect: {
                en: "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing.",
                fr: "Si ce Pokémon n'est pas passé du Banc au Point Actif ce tour-ci, cette attaque ne fait rien.",
                es: "Si este Pokémon no se movió de la Banca al Punto Activo este turno, este ataque no hace nada.",
                it: "Se questo Pokémon non si è spostato dalla panchina al posto attivo in questo turno, questo attacco non ha alcun effetto.",
                de: "Wenn sich dieses Pokémon in diesem Zug nicht von der Bank an den aktiven Ort bewegt hat, hat dieser Angriff keine Wirkung.",
                "pt-br": "Se este Pokémon não tiver se movido do Banco para o Local Ativo neste turno, este ataque não fará nada.",
                "zh-tw": "如果該寶可夢本回合沒有從替補席移動到活躍點，則這次攻擊無效。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
