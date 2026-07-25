import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/106",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/106",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/106",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/106",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/106",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/106"
    },
    name: {
        en: "Dragonair",
        fr: "Draco",
        es: "Dragonair",
        it: "Dragonair",
        de: "Dragonir",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ko: "신뇽",
        ja: "ハクリュー"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Dragon"],
    dexId: [148],
    evolveFrom: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        it: "Dratini",
        de: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ko: "미뇽",
        ja: "ミニリュウ"
    },
    stage: "Stage1",
    description: {
        en: "It is called the divine Pokémon. When its entire body brightens slightly, the weather changes.",
        fr: "On l'appelle le Pokémon divin. Lorsque tout son corps s’éclaire légèrement, le temps change.",
        es: "Se le llama el Pokémon divino. Cuando todo su cuerpo se ilumina ligeramente, el clima cambia.",
        it: "Si chiama il Pokémon divino. Quando tutto il suo corpo si illumina leggermente, il tempo cambia.",
        de: "Es wird das göttliche Pokémon genannt. Wenn sich sein ganzer Körper leicht aufhellt, ändert sich das Wetter.",
        "pt-br": "É chamado de Pokémon divino. Quando todo o seu corpo ilumina ligeiramente, o clima muda.",
        "zh-tw": "被稱為神寶可夢。當它的整個身體稍微變亮時，天氣就會改變。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Sky’s Blessing",
                fr: "Souhait des Cieux",
                es: "Plegaria Celestial",
                it: "Dono del Cielo",
                de: "Himmelssegen",
                "pt-br": "Bênção dos Céus",
                "zh-tw": "天空祈願"
            },
            effect: {
                en: "Take a {W} and a {L} Energy from your Energy Zone and attach them to this Pokémon.",
                fr: "Prenez une Énergie {W} et une {L} de votre Zone d'Énergie et attachez-les à ce Pokémon.",
                es: "Toma una Energía {W} y una {L} de tu Zona de Energía y únelas a este Pokémon.",
                it: "Prendi un'Energia {W} e un'Energia {L} dalla tua Zona Energetica e assegnale a questo Pokémon.",
                de: "Nimm eine {W}- und eine {L}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Pegue uma energia {W} e uma {L} da sua zona de energia e ligue-as a este Pokémon.",
                "zh-tw": "從你的能量區域取出一個{W}和一個{L}能量並將它們附加到那個寶可夢上。"
            }
        }
    ],
    retreat: 1
};

export default card;
