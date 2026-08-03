import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/045",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/045",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/045",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/045"
    },
    name: {
        en: "Morpeko",
        fr: "Morpeko",
        es: "Morpeko",
        it: "Morpeko",
        de: "Morpeko",
        "pt-br": "Morpeko",
        "zh-tw": "莫魯貝可",
        ko: "모르페코",
        ja: "モルペコ"
    },
    illustrator: "Cona Nitanda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [877],
    stage: "Basic",
    description: {
        en: "Hunger has disrupted this Pokémon’s hormonal balance. The Electric-type energy stored in its cheek sacs has turned into Dark-type energy.",
        fr: "La faim a perturbé l’équilibre hormonal de ce Pokémon. L'énergie de type électrique stockée dans ses joues s'est transformée en énergie de type sombre.",
        es: "El hambre ha alterado el equilibrio hormonal de este Pokémon. La energía de tipo eléctrico almacenada en los sacos de sus mejillas se ha convertido en energía de tipo oscuro.",
        it: "La fame ha sconvolto l'equilibrio ormonale di questo Pokémon. L'energia di tipo Elettrico immagazzinata nelle sue sacche guanciali si è trasformata in energia di tipo Buio.",
        de: "Hunger hat den Hormonhaushalt dieses Pokémon gestört. Die in seinen Wangentaschen gespeicherte elektrische Energie hat sich in dunkle Energie verwandelt.",
        "pt-br": "A fome perturbou o equilíbrio hormonal deste Pokémon. A energia do tipo Elétrico armazenada em suas bochechas se transformou em energia do tipo Escuro.",
        "zh-tw": "飢餓破壞了這隻寶可夢的荷爾蒙平衡。頰囊中儲存的電系能量，已轉化為暗繫能量。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Energizer Wheel",
                fr: "Roue Énergisante",
                es: "Rueda Vigorizante",
                it: "Ruota Energizzante",
                de: "Energiespendendes Rad",
                "pt-br": "Roda Energizante",
                "zh-tw": "能量車輪"
            },
            effect: {
                en: "Move 2 {D} Energy from this Pokémon to 1 of your Benched Pokémon.",
                fr: "Déplacez 2 {D} Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
                es: "Mueve 2 {D} Energía de este Pokémon a 1 de tus Pokémon en Banca.",
                it: "Sposta 2 Energie {D} da questo Pokémon a 1 dei tuoi Pokémon in panchina.",
                de: "Verschiebe 2 {D}-Energie von diesem Pokémon auf 1 deiner Bank-Pokémon.",
                "pt-br": "Mova 2 {D} Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
                "zh-tw": "將 2 個 {D} 能量從那個寶可夢轉移到你後備的 1 隻寶可夢上。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
