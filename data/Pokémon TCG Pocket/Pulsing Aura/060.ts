import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/060"
    },
    name: {
        en: "Toxel",
        fr: "Toxizap",
        es: "Toxel",
        it: "Toxel",
        de: "Toxel",
        "pt-br": "Toxel",
        "zh-tw": "毒電嬰",
        ko: "일레즌",
        ja: "エレズン"
    },
    illustrator: "Yuu Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [848],
    stage: "Basic",
    description: {
        en: "This selfish, attention-seeking Pokémon stores poison and electricity in two different sacs inside its body.",
        fr: "Ce Pokémon égoïste et en quête d'attention stocke du poison et de l'électricité dans deux sacs différents à l'intérieur de son corps.",
        es: "Este Pokémon egoísta y buscador de atención almacena veneno y electricidad en dos sacos diferentes dentro de su cuerpo.",
        it: "Questo Pokémon egoista e in cerca di attenzioni immagazzina veleno ed elettricità in due diverse sacche all'interno del suo corpo.",
        de: "Dieses selbstsüchtige, aufmerksamkeitsstarke Pokémon speichert Gift und Elektrizität in zwei verschiedenen Säcken in seinem Körper.",
        "pt-br": "Este Pokémon egoísta e em busca de atenção armazena veneno e eletricidade em dois sacos diferentes dentro de seu corpo.",
        "zh-tw": "這種自私、尋求關注的寶可夢將毒液和電力儲存在體內兩個不同的囊中。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Slap",
                fr: "Gifle",
                es: "Bofetón",
                it: "Sberla",
                de: "Hieb",
                "pt-br": "Tapa",
                "zh-tw": "巴掌"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
