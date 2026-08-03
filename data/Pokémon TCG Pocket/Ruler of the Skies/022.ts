import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/022",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/022",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/022",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/022"
    },
    name: {
        en: "Flareon",
        fr: "Pyroli",
        es: "Flareon",
        it: "Flareon",
        de: "Flamara",
        "pt-br": "Flareon",
        "zh-tw": "火伊布",
        ko: "부스터",
        ja: "ブースター"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    dexId: [136],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    description: {
        en: "It fluffs out its fur collar to cool down its body temperature, which can reach 1,650 degrees Fahrenheit."
    },
    attacks: [
        {
            cost: ["Fire", "Fire", "Colorless"],
            name: {
                en: "Bursting Tail",
                fr: "Queue Détonante",
                es: "Cola Explosiva",
                "pt-br": "Cauda Explosiva",
                "zh-tw": "爆破尾"
            },
            effect: {
                en: "Discard a {R} Energy from this Pokémon. Your opponent's Active Pokémon is now Burned.",
                fr: "Défaussez une Énergies {R} de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "Descarta Energías {R} de este Pokémon. El Pokémon Activo de tu rival pasa a estar Quemado.",
                "pt-br": "Descarte Energias {R} deste Pokémon. O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將這隻寶可夢身上的個{R}能量丟棄。將對手的戰鬥寶可夢灼傷。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
