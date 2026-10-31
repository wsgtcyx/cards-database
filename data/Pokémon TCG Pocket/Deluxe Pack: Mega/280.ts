import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/280",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/280",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/280",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/280",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/280",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/280",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/280",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/280",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/280"
    },
    name: {
        en: "Carvanha",
        fr: "Carvanha",
        es: "Carvanha",
        it: "Carvanha",
        de: "Kanivanha",
        "pt-br": "Carvanha",
        "zh-tw": "利牙魚",
        ja: "キバニア",
        ko: "샤프니아"
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Water"
    ],
    dexId: [
        318
    ],
    stage: "Basic",
    description: {
        en: "These Pokémon have sharp fangs and powerful jaws. Sailors avoid Carvanha dens at all costs.",
        fr: "Il possède une mâchoire puissante garnie de dents acérées. Les marins ne s'approchent jamais des eaux habitées par les Carvanha.",
        es: "Los marineros evitan por completo las zonas donde habita este Pokémon de afilados colmillos y fuertes mandíbulas.",
        it: "È dotato di denti affilati e mascelle robuste. Chi viaggia per mare si tiene accuratamente alla larga dalle tane di Carvanha.",
        de: "Es verfügt über äußerst spitze Zähne und kräftige Kiefer. Seefahrer meiden die Lebensräume von Kanivanha um jeden Preis.",
        "pt-br": "Esses Pokémon têm presas afiadas e mandíbulas poderosas. Marinheiros evitam covis de Carvanha a todo custo.",
        "zh-tw": "擁有銳利的牙齒和結實的下巴。船員們絕對不會去靠近利牙魚棲息的地方。",
        ja: "鋭い キバと たくましい 顎を もつ。 船乗りたちは キバニアの すみかには けっして 近づかない。",
        ko: "날카로운 이빨과 튼튼한 턱을\n갖고 있다. 선원들은 샤프니아\n거처에 결코 가까이 가지 않는다."
    },
    attacks: [
        {
            cost: [
                "Water"
            ],
            name: {
                en: "Sharp Fang",
                fr: "Croc Aiguisé",
                es: "Colmillo Afilado",
                it: "Zannaffilata",
                de: "Scharfe Fänge",
                "pt-br": "Presa Afiada",
                "zh-tw": "銳利之牙",
                ja: "するどいキバ",
                ko: "예리한이빨"
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
