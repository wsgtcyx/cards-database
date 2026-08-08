import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/030",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/030"
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
    illustrator: "Mousho",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
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
                en: "Migraine",
                fr: "Maud'Krâne",
                es: "Jaqueca",
                "pt-br": "Enxaqueca",
                "zh-tw": "偏頭痛",
                "it": "Mal di Testa",
                "de": "Migräne"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused. If tails, this Pokémon is now Confused.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus. Si c'est pile, ce Pokémon est maintenant Confus.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido. Si sale cruz, este Pokémon pasa a estar Confundido.",
                "pt-br": "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Confuso. Se sair coroa, este Pokémon agora estará Confuso.",
                "zh-tw": "擲1次硬幣若為正面,則將對手的戰鬥寶可夢混亂。若為反面,則將這隻寶可夢混亂。",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso. Se esce croce, questo Pokémon viene confuso.",
                "de": "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt. Bei Zahl ist dieses Pokémon jetzt verwirrt."
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
