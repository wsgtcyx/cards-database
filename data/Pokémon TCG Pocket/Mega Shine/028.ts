import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/028"
    },
    name: {
        en: "Drowzee",
        fr: "Soporifik",
        es: "Drowzee",
        it: "Drowzee",
        de: "Traumato",
        "pt-br": "Drowzee",
        "zh-tw": "催眠貘",
        ko: "슬리프",
        ja: "スリープ"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [96],
    stage: "Basic",
    description: {
        en: "When it twitches its nose, it can tell where someone is sleeping and what that person is dreaming about.",
        fr: "Lorsqu'il remue le nez, il peut dire où quelqu'un dort et de quoi cette personne rêve.",
        es: "Cuando mueve la nariz, puede saber dónde está durmiendo alguien y con qué está soñando esa persona.",
        it: "Quando muove il naso, può dire dove sta dormendo qualcuno e cosa sta sognando.",
        de: "Wenn es mit der Nase zuckt, kann es erkennen, wo jemand schläft und wovon diese Person träumt.",
        "pt-br": "Quando torce o nariz, ele consegue dizer onde alguém está dormindo e com o que essa pessoa está sonhando.",
        "zh-tw": "當它抽動鼻子時，它可以知道某人在哪裡睡覺以及那個人在做什麼夢。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Hypnosis",
                fr: "Hypnose",
                es: "Hipnosis",
                it: "Ipnosi",
                de: "Hypnose",
                "pt-br": "Hipnose",
                "zh-tw": "催眠術"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                es: "El Pokémon Activo de tu rival ahora está Dormido.",
                it: "Il Pokémon attivo del tuo avversario è addormentato.",
                de: "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍寶可夢現在處於睡眠狀態。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
