import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/034",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/034",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/034",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/034",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/034",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/034"
    },
    name: {
        en: "Ponyta",
        fr: "Ponyta",
        es: "Ponyta",
        it: "Ponyta",
        de: "Ponita",
        "pt-br": "Ponyta",
        "zh-tw": "小火馬",
        ja: "ポニータ",
        ko: "포니타"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fire"
    ],
    dexId: [
        77
    ],
    stage: "Basic",
    description: {
        en: "If you’ve been accepted by Ponyta, its burning mane is mysteriously no longer hot to the touch.",
        fr: "Il semblerait qu'une fois qu'un Dresseur a gagné la confiance de Ponyta, sa crinière enflammée ne le brûle plus au toucher.",
        es: "Por extraño que parezca, una vez que alguien se ha hecho merecedor de su confianza, puede tocarle la ardiente crin sin quemarse.",
        it: "Una volta conquistata la fiducia di Ponyta, è possibile toccare la sua criniera infuocata senza scottarsi.",
        de: "Hat man erst einmal das Vertrauen eines Ponitas gewonnen, kann man seltsamerweise sogar seine feurige Mähne anfassen, ohne sich zu verbrennen.",
        "pt-br": "Se você foi aceito por Ponyta, a crina abrasadora deste Pokémon misteriosamente não queimará ao ser tocada.",
        "zh-tw": "得到了小火馬認可的人，在觸摸牠燃燒著的鬃毛時不會覺得燙手，真是不可思議。",
        ja: "If you’ve been accepted by Ponyta, its burning mane is mysteriously no longer hot to the touch.",
        ko: "If you’ve been accepted by Ponyta, its burning mane is mysteriously no longer hot to the touch."
    },
    attacks: [
        {
            cost: [
                "Fire"
            ],
            name: {
                en: "Stoke",
                fr: "Attisement",
                es: "Atizador",
                it: "Attizzatoio",
                de: "Anheizen",
                "pt-br": "Carregar",
                "zh-tw": "燃起",
                ja: "Stoke",
                ko: "Stoke"
            },
            effect: {
                en: "Take a {R} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez une Énergie {R} de votre zone Énergie et attachez-la à ce Pokémon.",
                es: "Une 1 Energía {R} de tu área de Energía a este Pokémon.",
                it: "Prendi un'Energia {R} dalla tua Zona Energia e assegnala a questo Pokémon.",
                de: "Lege 1 {R}-Energie aus deinem Energiebereich an dieses Pokémon an.",
                "pt-br": "Pegue 1 Energia {R} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從自己的能量區抽出1個{R}能量,附於這隻寶可夢身上。",
                ja: "Take a {R} Energy from your Energy Zone and attach it to this Pokémon.",
                ko: "Take a {R} Energy from your Energy Zone and attach it to this Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
