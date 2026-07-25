import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/023",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/023",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/023",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/023",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/023"
    },
    name: {
        en: "Greavard",
        fr: "Toutombe",
        es: "Greavard",
        it: "Greavard",
        de: "Gruff",
        "pt-br": "Greavard",
        "zh-tw": "墓仔狗",
        ko: "망망이",
        ja: "ボチ"
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [971],
    stage: "Basic",
    description: {
        en: "This friendly Pokémon doesn’t like being alone. Pay it even the slightest bit of attention, and it will follow you forever.",
        fr: "Ce sympathique Pokémon n’aime pas être seul. Accordez-lui la moindre attention et il vous suivra pour toujours.",
        es: "A este simpático Pokémon no le gusta estar solo. Préstale incluso la más mínima atención y te seguirá para siempre.",
        it: "A questo amichevole Pokémon non piace stare da solo. Prestagli anche la minima attenzione e ti seguirà per sempre.",
        de: "Dieses freundliche Pokémon mag es nicht, allein zu sein. Schenken Sie ihm auch nur die geringste Aufmerksamkeit, und er wird Ihnen für immer folgen.",
        "pt-br": "Este Pokémon amigável não gosta de ficar sozinho. Preste a mínima atenção e ele o seguirá para sempre.",
        "zh-tw": "這種友善的寶可夢不喜歡獨處。即使是最輕微的關注，它也會永遠跟隨你。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Sharp Fang",
                fr: "Croc Aiguisé",
                es: "Colmillo Afilado",
                it: "Zannaffilata",
                de: "Scharfe Fänge",
                "pt-br": "Presa Afiada",
                "zh-tw": "銳利之牙"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
