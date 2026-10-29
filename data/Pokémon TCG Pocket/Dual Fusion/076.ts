import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/076",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/076",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/076"
    },
    name: {
        en: "Pupitar",
        fr: "Ymphect",
        es: "Pupitar",
        "pt-br": "Pupitar",
        "zh-tw": "沙基拉斯",
        ja: "サナギラス",
        ko: "데기라스",
        it: "Pupitar",
        de: "Pupitar"
    },
    illustrator: "Hajime Kusajima",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 100,
    types: [
        "Fighting"
    ],
    stage: "Stage1",
    retreat: 3,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Larvitar",
        fr: "Embrylex",
        es: "Larvitar",
        it: "Larvitar",
        de: "Larvitar",
        "pt-br": "Larvitar",
        "zh-tw": "幼基拉斯",
        ja: "Larvitar",
        ko: "Larvitar"
    },
    attacks: [
        {
            name: {
                en: "Amass",
                fr: "Amas",
                es: "Amasar",
                it: "Ammasso",
                de: "Anhäufen",
                "pt-br": "Acumular",
                "zh-tw": "聚積",
                ja: "Amass",
                ko: "Amass"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Take 2 {F} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez 2 Énergies {F} de votre zone Énergie et attachez-les à ce Pokémon.",
                es: "Une 2 Energías {F} de tu área de Energía a este Pokémon.",
                it: "Prendi 2 Energie {F} dalla tua Zona Energia e assegnale a questo Pokémon.",
                de: "Lege 2 {F}-Energien aus deinem Energiebereich an dieses Pokémon an.",
                "pt-br": "Pegue 2 Energias {F} da sua Zona de Energia e ligue-as a este Pokémon.",
                "zh-tw": "從自己的能量區抽出2個{F}能量,附於這隻寶可夢身上。",
                ja: "Take 2 {F} Energy from your Energy Zone and attach it to this Pokémon.",
                ko: "Take 2 {F} Energy from your Energy Zone and attach it to this Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
        fr: "Cette chrysalide file comme une fusée en expulsant les gaz sous pression enfermés dans son corps, sans pouvoir contrôler sa trajectoire.",
        es: "Esta pupa vuela propulsándose con los gases sometidos a altas presiones que encierra en el interior de su cuerpo.",
        it: "È una crisalide che vola furiosamente qua e là, espellendo con forza il gas compresso all'interno del proprio corpo.",
        de: "Diese Puppe katapultiert sich in die Luft, indem sie Gas ausstößt, das sich in ihrem Körper angestaut hat, und sorgt so für Unruhe.",
        "pt-br": "Esta pupa voa por aí de maneira indomada ao liberar com força o gás pressurizado presente em seu corpo.",
        "zh-tw": "會以強勁的力道噴出在體內壓縮的氣體，好讓自己能飛在空中大肆破壞的蛹。",
        ja: "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
        ko: "This pupa flies around wildly by venting with great force the gas pressurized inside its body."
    }
};

export default card;
