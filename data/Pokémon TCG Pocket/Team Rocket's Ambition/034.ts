import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/034",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/034",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/034",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/034",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/034",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/034"
    },
    name: {
        en: "Gimmighoul",
        fr: "Mordudor",
        es: "Gimmighoul",
        it: "Gimmighoul",
        de: "Gierspenst",
        "pt-br": "Gimmighoul",
        "zh-tw": "索財靈",
        ko: "모으령",
        ja: "コレクレー"
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    dexId: [999],
    stage: "Basic",
    description: {
        en: "It lives inside an old treasure chest. Sometimes it gets left in shop corners since no one realizes it's actually a Pokémon.",
        fr: "Il vit dans un vieux coffre au trésor. On le trouve parfois dans un coin chez l'antiquaire, quand personne ne s'est aperçu que c'était un Pokémon.",
        es: "Vive en el interior de un viejo cofre desgastado. Al no tomarlo por un Pokémon, a veces termina a la venta por error en tiendas de antigüedades.",
        it: "Vive dentro un vecchio forziere. Non sembrando affatto un Pokémon, a volte finisce in un angolo nei negozi di strumenti.",
        de: "Es haust in einer alten Schatztruhe und landet manchmal bei Antiquitätenhändlern in der Ladenecke, da man es nicht als Pokémon erkennt.",
        "pt-br": "Vive dentro de um velho baú de tesouro. Ás vezes, fica esquecido nos cantos das lojas porque ninguém percebe que, na verdade, é um Pokémon.",
        "zh-tw": "棲息在老舊的寶箱中。有時會因沒人注意到自己是寶可夢，而被擱置在道具店的角落。"
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
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
