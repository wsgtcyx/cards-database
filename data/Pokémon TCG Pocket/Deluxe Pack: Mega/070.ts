import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/070",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/070",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/070",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/070",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/070",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/070",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/070"
    },
    name: {
        en: "Milotic ex",
        fr: "Milobellus-ex",
        es: "Milotic ex",
        it: "Milotic-ex",
        de: "Milotic-ex",
        "pt-br": "Milotic ex",
        "zh-tw": "美納斯ex",
        ja: "ミロカロスex",
        ko: "밀로틱 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Water"
    ],
    dexId: [
        350
    ],
    evolveFrom: {
        en: "Feebas",
        fr: "Barpau",
        es: "Feebas",
        it: "Feebas",
        de: "Barschwa",
        "pt-br": "Feebas",
        "zh-tw": "醜醜魚",
        ja: "Feebas",
        ko: "Feebas"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Aqua Charge",
                fr: "Charge Aqua",
                es: "Hidrocarga",
                it: "Idrocarica",
                de: "Aqualadung",
                "pt-br": "Carga Aquática",
                "zh-tw": "水流充能",
                ja: "Aqua Charge",
                ko: "Aqua Charge"
            },
            effect: {
                en: "Once during your turn, you may take a {W} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {W} de votre zone Énergie et l'attacher à ce Pokémon.",
                es: "Una vez durante tu turno, puedes unir 1 Energía {W} de tu área de Energía a este Pokémon.",
                it: "Una sola volta durante il tuo turno, puoi prendere un'Energia {W} dalla tua Zona Energia e assegnarla a questo Pokémon.",
                de: "Einmal während deines Zuges kannst du 1 {W}-Energie aus deinem Energiebereich an dieses Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, você poderá pegar 1 Energia {W} da sua Zona de Energia e ligá-la a este Pokémon.",
                "zh-tw": "在自己的回合時,可使用1次。從自己的能量區抽出1個{W}能量,附於這隻寶可夢身上。",
                ja: "Once during your turn, you may take a {W} Energy from your Energy Zone and attach it to this Pokémon.",
                ko: "Once during your turn, you may take a {W} Energy from your Energy Zone and attach it to this Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Water",
                "Water",
                "Water"
            ],
            name: {
                en: "Water Pulse",
                fr: "Vibraqua",
                es: "Hidropulso",
                it: "Idropulsar",
                de: "Aquawelle",
                "pt-br": "Pulso d'Água",
                "zh-tw": "水之波動",
                ja: "Water Pulse",
                ko: "Water Pulse"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
                es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
                it: "Il Pokémon attivo del tuo avversario viene addormentato.",
                de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "將對手的戰鬥寶可夢睡眠。",
                ja: "Your opponent's Active Pokémon is now Asleep.",
                ko: "Your opponent's Active Pokémon is now Asleep."
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
