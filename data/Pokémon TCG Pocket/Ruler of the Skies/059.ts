import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/059",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/059",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/059",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/059",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/059",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/059",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/059"
    },
    name: {
        en: "Thundurus",
        fr: "Fulguris",
        es: "Thundurus",
        it: "Thundurus",
        de: "Voltolos",
        "pt-br": "Thundurus",
        "zh-tw": "雷電雲",
        ko: "볼트로스",
        ja: "ボルトロス"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    dexId: [642],
    stage: "Basic",
    description: {
        en: "As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked.",
        fr: "Il vole dans le ciel d’Unys et fait tomber des éclairs,\nprovoquant des incendies qui font sa mauvaise réputation.",
        es: "Su gusto por surcar el cielo lanzando rayos y provocando\nincendios forestales le ha granjeado pocas simpatías.",
        it: "Non è molto amato perché durante il suo peregrinare nei cieli\nfa cadere fulmini qua e là che causano incendi nei boschi.",
        de: "Es ist bei den Leuten verhasst, weil es auf seinen Rundflügen\nimmer wieder Blitze erzeugt, die Waldbrände verursachen."
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless", "Colorless"],
            name: {
                en: "Disaster Volt",
                fr: "Éclair Désastre",
                es: "Voltio Catastrófico",
                "pt-br": "Voltagem do Desastre",
                "zh-tw": "災難伏特"
            },
            effect: {
                en: "Discard a {L} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {L} de ce Pokémon.",
                es: "Descarta 1 Energía {L} de este Pokémon.",
                it: "Scarta un'Energia Lightning da questo Pokémon.",
                de: "Lege eine Lightning-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {L} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{L}能量丟棄。"
            },
            damage: 100
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
