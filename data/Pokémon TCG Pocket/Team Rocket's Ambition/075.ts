import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/075",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/075"
    },
    name: {
        en: "Team Rocket's Tinkaton",
        fr: "Forgelina de la Team Rocket",
        es: "Tinkaton del Team Rocket",
        it: "Tinkaton del Team Rocket",
        de: "Team Rockets Granforgita",
        "pt-br": "Tinkaton da Equipe Rocket",
        "zh-tw": "火箭隊的巨鍛匠",
        ko: "로켓단의 두드리짱",
        ja: "ロケット団のデカヌチャン"
    },
    illustrator: "Terada Tera",
    rarity: "One Star",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    evolveFrom: {
        en: "Team Rocket's Tinkatuff",
        fr: "Forgella de la Team Rocket",
        es: "Tinkatuff del Team Rocket",
        it: "Tinkatuff del Team Rocket",
        de: "Team Rockets Tafforgita",
        "pt-br": "Tinkatuff da Equipe Rocket",
        "zh-tw": "火箭隊的巧鍛匠",
        ko: "로켓단의 벼리짱",
        ja: "ロケット団のナカヌチャン"
    },
    stage: "Stage2",
    description: {
        en: "The hammer tops 220 pounds, yet it gets swung around easily by Tinkaton as it steals whatever it pleases and carries its plunder back home.",
        fr: "Ce Pokémon s'empare de tout ce qu'll convoite en maniant sans effort son marteau de plus de 100 kg et ramène son butin chez lui.",
        es: "Blande sin esfuerzo su pesado martillo de más de 100 kg. Cuando quiere algo, lo roba y se lo lleva de vuelta a su guarida.",
        it: "É capace di brandire il suo martello pesante oltre 100 kg come se niente fosse. Se vede qualcosa che gli piace, lo ruba e lo porta nella sua tana.",
        de: "Granforgita schwingt den über 100 kg schweren Hammer mühelos umher. Es schleppt alles mit sich nach Hause, was ihm gefällt.",
        "pt-br": "O seu martelo chega a pesar 100 kg. Apesar disso, Tinkaton sai com ele por ai como se não fosse nada, roubando o que lhe convém e levando tudo pra casa.",
        "zh-tw": "會輕鬆地揮舞著超過１００公斤的錘子來奪取想要的東西，然後帶回自己的住處。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless"],
            name: {
                en: "Pile-Driving Hammer",
                fr: "Marteau-Pilon",
                es: "Martillo Perforador",
                it: "Martello Battipalo",
                de: "Rammender Hammer",
                "pt-br": "Martelo Empilhador",
                "zh-tw": "打樁錘"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 2 {C} more, and its Retreat Cost is 2 {C} more.",
                fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent 2 Énergies {C} de plus, et son Coût de Retraite augmente de 2 Énergies {C}.",
                es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor cuestan 2 {C} más, y su Coste de Retirada es de 2 {C} más.",
                it: "Durante il prossimo turno del tuo avversario, il costo degli attacchi usati dal Pokémon difensore e il suo costo di ritirata aumentano di 2 {C}.",
                de: "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der vom Verteidigenden Pokémon eingesetzten Attacken um 2 {C}, und seine Rückzugskosten erhöhen sich um 2 {C}.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão 2 {C} a mais e o Custo de Recuo dele será 2 {C} a mais.",
                "zh-tw": "在下個對手的回合,受到這個招式的寶可夢使用招式所需的能量與撤退所需的能量,增加2個{C}能量。"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
