import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/081",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/081",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/081",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/081",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/081"
    },
    name: {
        en: "Carvanha",
        fr: "Carvanha",
        es: "Carvanha",
        it: "Carvanha",
        de: "Kanivanha",
        "pt-br": "Carvanha",
        "zh-tw": "利牙魚",
        ko: "샤프니아",
        ja: "キバニア"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "None",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    dexId: [318],
    stage: "Basic",
    description: {
        en: "These Pokémon have sharp fangs and powerful jaws. Sailors avoid Carvanha dens at all costs.",
        fr: "Il possède une mâchoire puissante garnie de\ndents acérées. Les marins ne s’approchent\njamais des eaux habitées par les Carvanha.",
        es: "Los marineros evitan por completo las zonas\ndonde habita este Pokémon de afilados colmillos\ny fuertes mandíbulas.",
        it: "È dotato di denti affilati e mascelle robuste.\nChi viaggia per mare si tiene accuratamente\nalla larga dalle tane dei Carvanha.",
        de: "Es verfügt über äußerst spitze Zähne und kräftige\nKiefer. Seefahrer meiden die Lebensräume von\nKanivanha um jeden Preis.",
        "zh-tw": "擁有銳利的牙齒和結實的\n下巴。船員們絕對不會去\n靠近利牙魚棲息的地方。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Aqua Jet",
                fr: "Aqua-Jet",
                es: "Acua Jet",
                it: "Acquagetto",
                de: "Wasserdüse",
                "pt-br": "Aqua Jato",
                "zh-tw": "水流噴射"
            },
            effect: {
                en: "This attack also does 10 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 10 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 10 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 隻寶可夢造成 10 點傷害。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
