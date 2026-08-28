import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/035",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/035"
    },
    name: {
        en: "Cubone",
        fr: "Osselait",
        es: "Cubone",
        it: "Cubone",
        de: "Tragosso",
        "pt-br": "Cubone",
        "zh-tw": "卡拉卡拉",
        ko: "탕구리",
        ja: "カラカラ"
    },
    illustrator: "Hasuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [104],
    stage: "Basic",
    description: {
        en: "This Pokémon wears the skull of its deceased mother. Sometimes Cubone's dreams make it cry, but each tear Cubone sheds makes it stronger.",
        fr: "Il porte sur sa tête le crâne de sa défunte mère. I lui arrive de rêver d'elle et de pleurer, mais chaque larme qu'il verse le rend plus fort.",
        es: "Lleva puesto el cráneo de su difunta madre. A veces llora en sueños, pero cada lágrima vertida le hace más fuerte.",
        it: "Indossa il teschio della madre defunca. A volte capita che pianga vedendola in sogno, ma a ogni lacrima versata diventa più forte.",
        de: "Es trägt den Schädel seiner verstorbenen Mutter. Manchmal weint Tragosso, während es träumt, doch jede vergossene Träne macht es stärker.",
        "pt-br": "Este Pokémon usa o crânio de sua falecida mãe. Às vezes, os sonhos de Cubone o fazem chorar, mas cada lágrima que derrama só o torna mais forte.",
        "zh-tw": "頭上戴著死去母親的頭骨。雖然有時會因為作夢而哭泣，但每次流淚後都會變得更強。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Bone Beatdown",
                fr: "Dérouillée d'Os",
                es: "Derribo Óseo",
                it: "Colpo d'Osso",
                de: "Knochenprügel",
                "pt-br": "Surra de Osso",
                "zh-tw": "骨頭打擊"
            },
            damage: 20
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
