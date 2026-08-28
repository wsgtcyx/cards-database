import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/011",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/011"
    },
    name: {
        en: "Braixen",
        fr: "Roussil",
        es: "Braixen",
        it: "Braixen",
        de: "Rutena",
        "pt-br": "Braixen",
        "zh-tw": "長尾火狐",
        ko: "테르나",
        ja: "テールナー"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [654],
    evolveFrom: {
        en: "Fennekin",
        fr: "Feunnec",
        es: "Fennekin",
        it: "Fennekin",
        de: "Fynx",
        "pt-br": "Fennekin",
        "zh-tw": "火狐狸",
        ko: "푸호꼬",
        ja: "フォッコ"
    },
    stage: "Stage1",
    description: {
        en: "Braixen's branch ignites as it's pulled from the Pokémon's tail. Braixen then uses the flame to spark powerful attacks.",
        fr: "Sa branche prend feu lorsqu'il la retire de sa queue. Il se sert alors de la flamme pour lancer de puissantes attaques.",
        es: "La rama de la cola prende fuego al extraerla y genera una llama con la que Braixen ejecuta poderosos movimientos.",
        it: "Quando estrae il rametto dalla coda, questo prende fuoco. Le fiamme così generate possono essere usate per sferrare potenti mosse.",
        de: "Es entzündet seinen Zweig beim Herausziehen aus dem Schweif und nutzt diese Flamme, um mächtige Attacken zu befeuern.",
        "pt-br": "O galho de Braixen pega fogo ao ser arrancado de sua cauda. Em seguida, ele usa a chama para lançar ataques poderosos.",
        "zh-tw": "將樹枝從尾巴拔出時就會著火。牠會用點燃的火當火種，使出強力的招式。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Psyshot",
                fr: "Piqûre Psy",
                es: "Disparo Psi",
                it: "Psicosparo",
                de: "Psychoschuss",
                "pt-br": "Tiro Psíquico",
                "zh-tw": "精神射擊"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
