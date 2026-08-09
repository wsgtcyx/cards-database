import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/034",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/034",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/034",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/034",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/034",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/034"
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
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    dexId: [318],
    stage: "Basic",
    description: {
        en: "These Pokémon have sharp fangs and powerful jaws. Sailors avoid Carvanha dens at all costs.",
        fr: "Il possède une mâchoire puissante garnie de\ndents acérées. Les marins ne s’approchent\njamais des eaux habitées par les Carvanha.",
        es: "Los marineros evitan por completo las zonas\ndonde habita este Pokémon de afilados colmillos\ny fuertes mandíbulas.",
        it: "È dotato di denti affilati e mascelle robuste.\nChi viaggia per mare si tiene accuratamente\nalla larga dalle tane di Carvanha.",
        de: "Es verfügt über äußerst spitze Zähne und kräftige\nKiefer. Seefahrer meiden die Lebensräume von\nKanivanha um jeden Preis.",
        "pt-br": "Esses Pokémon têm presas afiadas e mandíbulas poderosas. Marinheiros evitam covis de Carvanha a todo custo.",
        "zh-tw": "擁有銳利的牙齒和結實的\n下巴。船員們絕對不會去\n靠近利牙魚棲息的地方。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Sharp Fang",
                fr: "Croc Aiguisé",
                es: "Colmillo Afilado",
                it: "Zannaffilata",
                de: "Scharfe Fänge",
                "pt-br": "Presa Afiada",
                "zh-tw": "銳利之牙"
            },
            damage: 30
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
