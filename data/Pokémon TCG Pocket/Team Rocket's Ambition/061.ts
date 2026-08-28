import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/061",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/061",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/061",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/061",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/061",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/061",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/061"
    },
    name: {
        en: "Team Rocket's Persian",
        fr: "Persian de la Team Rocket",
        es: "Persian del Team Rocket",
        it: "Persian del Team Rocket",
        de: "Team Rockets Snobilikat",
        "pt-br": "Persian da Equipe Rocket",
        "zh-tw": "火箭隊的貓老大",
        ko: "로켓단의 알로라 페르시온",
        ja: "ロケット団のペルシアン"
    },
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Team Rocket's Meowth",
        fr: "Miaouss de la Team Rocket",
        es: "Meowth del Team Rocket",
        it: "Meowth del Team Rocket",
        de: "Team Rockets Mauzi",
        "pt-br": "Meowth da Equipe Rocket",
        "zh-tw": "火箭隊的喵喵",
        ko: "로켓단의 나옹",
        ja: "ロケット団のニャース"
    },
    stage: "Stage1",
    description: {
        en: "It has a vicious temperament. Beware if it raises its tail straight up. This is a signal that it is about to pounce and bite.",
        fr: "Ce Pokémon a un comportement féroce. S'il lève la queue, cela signifie qu'il s'apprête à mordre.",
        es: "Tiene un carácter muy fuerte. Cuando estira la cola, conviene tener cuidado, pues podría indicar que está a punto de abalanzarse y morder.",
        it: "Pokémon dal temperamento impetuoso. Quando rizza la coda, meglio stargli alla larga: è segno che sta per scattare e mordere.",
        de: "Es ist aufbrausend. Richtet es seinen Schweif auf, ist Vorsicht geboten. Das ist ein Anzeichen dafür, dass Snobilikat gleich losspringt und zubeißt.",
        "pt-br": "Tem um temperamento perverso. Tome cuidado se este Pokémon eriçar a cauda. Isso é um sinal de que está prestes a atacar e morder.",
        "zh-tw": "性情凶暴，豎起尾巴時要多加小心。那是牠將飛撲過來咬你的前兆。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Dangerous Rogue",
                fr: "Dangereux Truand",
                es: "Pícaro Peligroso",
                it: "Pericolo Ferale",
                de: "Gaunergefahr",
                "pt-br": "Trapaceiro Perigoso",
                "zh-tw": "凶神惡煞"
            },
            effect: {
                en: "This attack does 40 more damage for each of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
                es: "Este ataque hace 40 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge 40 danni in più per ogni Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 40 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 40 pontos de dano a mais para cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "增加對手備戰寶可夢的數量×40點傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
