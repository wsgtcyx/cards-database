import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/049",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/049",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/049",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/049",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/049",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/049",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/049"
    },
    name: {
        en: "Cufant",
        fr: "Charibari",
        es: "Cufant",
        it: "Cufant",
        de: "Kupfanti",
        "pt-br": "Cufant",
        "zh-tw": "銅象",
        ko: "끼리동",
        ja: "ゾウドウ"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [878],
    stage: "Basic",
    description: {
        en: "Cufant can lift loads weighing five tons. In the mornings, it heads into caves with its herd, in search of the ore on which these Pokémon feed.",
        fr: "Le Charibari peut soulever des charges pesant cinq tonnes. Le matin, il se dirige vers les grottes avec son troupeau, à la recherche du minerai dont se nourrissent ces Pokémon.",
        es: "Cufant puede levantar cargas de cinco toneladas. Por las mañanas se adentra en cuevas con su manada en busca del mineral del que se alimentan estos Pokémon.",
        it: "Cufant può sollevare carichi del peso di cinque tonnellate. Al mattino si reca con il suo branco nelle caverne alla ricerca del minerale di cui si nutrono questi Pokémon.",
        de: "Kupfanti kann Lasten mit einem Gewicht von fünf Tonnen heben. Morgens begibt es sich mit seiner Herde in Höhlen auf der Suche nach dem Erz, von dem sich diese Pokémon ernähren.",
        "pt-br": "Cufant pode levantar cargas pesando cinco toneladas. Pela manhã, ele entra em cavernas com seu rebanho, em busca do minério de que esses Pokémon se alimentam.",
        "zh-tw": "銅象可以舉起重達5噸的負載。早上，它會帶著羊群進入洞穴，尋找這些寶可夢賴以生存的礦石。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless", "Colorless"],
            name: {
                en: "Strength",
                fr: "Force",
                es: "Fuerza",
                it: "Forza",
                de: "Stärke",
                "pt-br": "Força",
                "zh-tw": "怪力"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
