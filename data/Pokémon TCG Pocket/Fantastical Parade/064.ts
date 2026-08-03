import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/064",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/064",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/064",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/064",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/064",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/064"
    },
    name: {
        en: "Kirlia",
        "fr": "Kirlia",
        "es": "kirlia",
        "it": "Kirlia",
        "de": "Kirlia",
        "pt-br": "Kirlia",
        "zh-tw": "基利亞"
    },
    illustrator: "mingo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Ralts",
        "fr": "Ralts",
        "es": "Ralts",
        "it": "Ralts",
        "de": "Ralts",
        "pt-br": "Ralts",
        "zh-tw": "拉爾茨"
    },
    description: {
        en: "The cheerful spirit of its Trainer gives it energy\nfor its psychokinetic power. It spins and dances\nwhen happy.",
        "fr": "L'esprit joyeux de son Dresseur lui donne de l'énergie\npour son pouvoir psychokinétique. Il tourne et danse\nquand il est heureux.",
        "es": "El espíritu alegre de su Entrenador le da energía.\npor su poder psicoquinético. Gira y baila\ncuando feliz.",
        "it": "Lo spirito allegro del suo Allenatore gli dona energia\nper il suo potere psicocinetico. Gira e balla\nquando felice.",
        "de": "Der fröhliche Geist seines Trainers verleiht ihm Energie\nfür seine psychokinetische Kraft. Es dreht und tanzt\nwenn glücklich.",
        "pt-br": "O espírito alegre do seu Treinador lhe dá energia\npor seu poder psicocinético. Ele gira e dança\nquando feliz.",
        "zh-tw": "訓練師開朗的精神賦予它能量\n因為它的心理動力。它旋轉、跳舞\n當快樂的時候。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Psybeam",
                "fr": "Rayon Psy",
                "es": "Psicorayo",
                "it": "Psicoraggio",
                "de": "Psybeam",
                "pt-br": "Raio Psíquico",
                "zh-tw": "心電束"
            },
            damage: 20,
            cost: ["Psychic"],
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Confus.",
                "es": "El Pokémon Activo de tu rival ahora está Confundido.",
                "it": "Il Pokémon attivo del tuo avversario è ora confuso.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
