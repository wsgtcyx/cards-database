import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/093",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/093",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/093",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/093",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/093",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/093",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/093"
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
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
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
                en: "Singe",
                fr: "Roussi",
                es: "Quemadura",
                it: "Scottata",
                de: "Versengung",
                "pt-br": "Chamuscada",
                "zh-tw": "灼熱"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                es: "El Pokémon Activo de tu rival ahora está Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍寶可夢現在被燒毀了。"
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
