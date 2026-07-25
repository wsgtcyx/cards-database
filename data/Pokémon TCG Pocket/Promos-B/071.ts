import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/071",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/071",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/071",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/071",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/071",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/071"
    },
    name: {
        en: "Psyduck",
        fr: "Psykokwak",
        es: "Psyduck",
        it: "Psyduck",
        de: "Enton",
        "pt-br": "Psyduck",
        "zh-tw": "可達鴨",
        ko: "고라파덕",
        ja: "コダック"
    },
    illustrator: "Natsumi Yoshida",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [54],
    stage: "Basic",
    description: {
        en: "If its chronic headache peaks, it may exhibit odd powers. It seems unable to recall such an episode.",
        fr: "Si ses maux de tête chroniques culminent, il peut présenter des pouvoirs étranges. Il semble incapable de se souvenir d'un tel épisode.",
        es: "Si su dolor de cabeza crónico alcanza su punto máximo, puede exhibir poderes extraños. Parece incapaz de recordar tal episodio.",
        it: "Se il suo mal di testa cronico raggiunge il picco, può mostrare strani poteri. Sembra incapace di ricordare un episodio del genere.",
        de: "Wenn der chronische Kopfschmerz seinen Höhepunkt erreicht, kann er seltsame Kräfte zeigen. Es scheint nicht in der Lage zu sein, sich an eine solche Episode zu erinnern.",
        "pt-br": "Se a dor de cabeça crônica atingir o pico, ela poderá exibir poderes estranhos. Parece incapaz de recordar tal episódio.",
        "zh-tw": "如果它的慢性頭痛達到頂峰，它可能會表現出奇怪的力量。似乎無法回憶起這樣的情節。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Confusion Wave",
                fr: "Vague de confusion",
                es: "Ola de confusión",
                it: "Onda di confusione",
                de: "Verwirrungswelle",
                "pt-br": "Onda de confusão",
                "zh-tw": "混亂波動"
            },
            effect: {
                en: "Both Active Pokémon are now Confused.",
                fr: "Les deux Pokémon Actifs sont désormais Confus.",
                es: "Ambos Pokémon Activos ahora están Confundidos.",
                it: "Entrambi i Pokémon attivi sono ora confusi.",
                de: "Beide aktiven Pokémon sind jetzt verwirrt.",
                "pt-br": "Ambos os Pokémon ativos agora estão confusos.",
                "zh-tw": "兩隻活躍的寶可夢現在都處於混亂狀態。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
