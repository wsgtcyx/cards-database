import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/095",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/095",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/095",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/095",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/095",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/095"
    },
    name: {
        en: "Silicobra",
        fr: "Dunaja",
        es: "Silicobra",
        it: "Silicobra",
        de: "Salanga",
        "pt-br": "Silicobra",
        "zh-tw": "沙包蛇",
        ko: "모래뱀",
        ja: "スナヘビ"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [843],
    stage: "Basic",
    description: {
        en: "Silicobra’s large nostrils are specialized for spraying sand, so this Pokémon is not very good at telling apart different smells.",
        fr: "Les grandes narines de Dunaja sont spécialisées pour pulvériser du sable, ce Pokémon n'est donc pas très doué pour distinguer les différentes odeurs.",
        es: "Las grandes fosas nasales de Silicobra están especializadas para rociar arena, por lo que este Pokémon no es muy bueno para distinguir diferentes olores.",
        it: "Le grandi narici di Silicobra sono specializzate per spruzzare sabbia, quindi questo Pokémon non è molto bravo a distinguere i diversi odori.",
        de: "Die großen Nasenlöcher von Salanga sind auf das Versprühen von Sand spezialisiert, daher ist dieses Pokémon nicht sehr gut darin, verschiedene Gerüche zu unterscheiden.",
        "pt-br": "As narinas grandes de Silicobra são especializadas para borrifar areia, então este Pokémon não é muito bom em distinguir cheiros diferentes.",
        "zh-tw": "沙包蛇的大鼻孔專門用於噴沙，因此這隻寶可夢不太擅長區分不同的氣味。"
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
