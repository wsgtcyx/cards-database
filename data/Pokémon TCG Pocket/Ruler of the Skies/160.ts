import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/160"
    },
    name: {
        en: "Ponyta",
        fr: "Ponyta",
        es: "Ponyta",
        it: "Ponyta",
        de: "Ponita",
        "pt-br": "Ponyta",
        "zh-tw": "小火馬",
        ko: "포니타",
        ja: "ポニータ"
    },
    illustrator: "Yoko Hishida",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [77],
    stage: "Basic",
    description: {
        en: "If you’ve been accepted by Ponyta, its burning mane is mysteriously no longer hot to the touch.",
        fr: "Il semblerait qu’une fois qu’un Dresseur a gagné\nla confiance de Ponyta, sa crinière enflammée\nne le brûle plus au toucher.",
        es: "Por extraño que parezca, una vez que alguien\nse ha hecho merecedor de su confianza, puede\ntocarle la ardiente crin sin quemarse.",
        it: "Una volta conquistata la fiducia di Ponyta,\nè possibile toccare la sua criniera infuocata\nsenza scottarsi.",
        de: "Hat man erst einmal das Vertrauen eines Ponitas\ngewonnen, kann man seltsamerweise sogar seine\nfeurige Mähne anfassen, ohne sich zu verbrennen.",
        "pt-br": "Se você foi aceito por Ponyta, sua juba ardente misteriosamente não está mais quente ao toque.",
        "zh-tw": "得到了小火馬認可的人，\n在觸摸牠燃燒著的鬃毛時\n不會覺得燙手，真是不可思議。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Stoke",
                fr: "Attisement",
                es: "Atizador",
                it: "Attizzatoio",
                de: "Anheizen",
                "pt-br": "Carregar",
                "zh-tw": "燃起"
            },
            effect: {
                en: "Take a {R} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez une Énergie {R} de votre zone Énergie et attachez-la à ce Pokémon.",
                es: "Une 1 Energía {R} de tu área de Energía a este Pokémon.",
                it: "Prendi un'Energia {R} dalla tua Zona Energia e assegnala a questo Pokémon.",
                de: "Lege 1 {R}-Energie aus deinem Energiebereich an dieses Pokémon an.",
                "pt-br": "Pegue 1 Energia {R} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從你的能量區取出一個{R}能量並將其附加到該寶可夢上。"
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
