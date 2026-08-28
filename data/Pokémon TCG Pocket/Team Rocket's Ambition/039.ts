import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/039",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/039"
    },
    name: {
        en: "Team Rocket's Arbok",
        fr: "Arbok de la Team Rocket",
        es: "Arbok del Team Rocket",
        it: "Arbok del Team Rocket",
        de: "Team Rockets Arbok",
        "pt-br": "Arbok da Equipe Rocket",
        "zh-tw": "火箭隊的阿柏怪",
        ko: "로켓단의 아보크",
        ja: "ロケット団のアーボック"
    },
    illustrator: "Kazuki Minami",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Team Rocket's Ekans",
        fr: "Abo de la Team Rocket",
        es: "Ekans del Team Rocket",
        it: "Ekans del Team Rocket",
        de: "Team Rockets Rettan",
        "pt-br": "Ekans da Equipe Rocket",
        "zh-tw": "火箭隊的阿柏蛇",
        ko: "로켓단의 아보",
        ja: "ロケット団のアーボ"
    },
    stage: "Stage1",
    description: {
        en: "This Pokémon is very tenacious. Once it targets its prey, it won't give up the chase, no matter how far the prey goes.",
        fr: "De nature tenace, il ne lâche jamais sa proie une fois qu'il a décidé de la prendre en chasse.",
        es: "De naturaleza muy obstinada cuando se fija en una presa, no cejara en su empeño e ira tras ella hasta donde haga falta.",
        it: "Estremamente tenace, se individua una preda non si dà pace finché non la raggiunge, a costo di seguirla in capo al mondo.",
        de: "Es ist sehr hartnackig und verfolgt seine Beute überallhin, wenn es sie einmal erspäht hat.",
        "pt-br": "Este Pokémon é extremamente tenaz. Uma vez que escolhe sua presa, não desiste da perseguição, não importa o quão longe ela vá.",
        "zh-tw": "性情非常執著。一旦鎖定了獵物，便會窮追不捨。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Colorless"],
            name: {
                en: "Shadow Seeker",
                fr: "Chercheur d'Ombres",
                es: "Buscador de Sombras",
                it: "Cercatore Oscuro",
                de: "Schattensucher",
                "pt-br": "Explorador das Sombras",
                "zh-tw": "暗影追蹤"
            },
            effect: {
                en: "This attack does 10 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
                fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 10 puntos de daño más por cada Energía en el Coste de Retirada del Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 10 danni in più per ogni Energia {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede Energie in den Rückzugskosten des Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a mais para cada Energia no Custo de Recuo do Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢撤退所需的能量的數量×10點傷害。"
            },
            damage: "70+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
