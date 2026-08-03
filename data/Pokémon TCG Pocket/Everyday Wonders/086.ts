import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/086",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/086",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/086",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/086",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/086",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/086",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/086"
    },
    name: {
        en: "Milotic ex",
        fr: "Milobellus-ex",
        es: "Milotic ex",
        it: "Milotic-ex",
        de: "Milotic-ex",
        "pt-br": "Milotic ex",
        "zh-tw": "美納斯ex",
        ko: "밀로틱 ex",
        ja: "ミロカロスex"
    },
    illustrator: "Raita Kazama",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    dexId: [350],
    evolveFrom: {
        en: "Feebas",
        fr: "Barpau",
        es: "Feebas",
        it: "Feebas",
        de: "Barschwa",
        "pt-br": "Feebas",
        "zh-tw": "醜醜魚",
        ko: "빈티나",
        ja: "ヒンバス"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Aqua Charge",
                fr: "Charge aquatique",
                es: "Carga acuática",
                it: "Carica acquatica",
                de: "Aqua-Ladung",
                "pt-br": "Carga Aqua",
                "zh-tw": "水流充能"
            },
            effect: {
                en: "Once during your turn, you may take a {W} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {W} de votre Zone d'Énergie et l'attacher à ce Pokémon.",
                es: "Una vez durante tu turno, puedes tomar una Energía {W} de tu Zona de Energía y unirla a este Pokémon.",
                it: "Una sola volta durante il tuo turno, puoi prendere un'Energia {W} dalla tua Zona Energetica e assegnarla a questo Pokémon.",
                de: "Einmal während deines Zuges kannst du eine {W}-Energie aus deiner Energiezone nehmen und sie an dieses Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, você pode pegar uma Energia {W} da sua Zona de Energia e anexá-la a este Pokémon.",
                "zh-tw": "在你的回合中，你可以從你的能量區域取出一個{W}能量並將其附加到這隻寶可夢身上。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Water", "Water", "Water"],
            name: {
                en: "Water Pulse",
                fr: "Vibraqua",
                es: "Hidropulso",
                it: "Idropulsar",
                de: "Aquawelle",
                "pt-br": "Pulso d'Água",
                "zh-tw": "水之波動"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
