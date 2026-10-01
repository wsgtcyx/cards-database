import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/325",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/325",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/325",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/325",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/325",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/325",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/325"
    },
    name: {
        en: "Alolan Muk",
        fr: "Grotadmorv d'Alola",
        es: "Muk de Alola",
        it: "Muk di Alola",
        de: "Alola-Sleimok",
        "pt-br": "Muk de Alola",
        "zh-tw": "阿羅拉臭臭泥",
        ja: "アローラベトベトン",
        ko: "알로라질뻐기"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: [
        "Darkness"
    ],
    evolveFrom: {
        en: "Alolan Grimer",
        fr: "Tadmorv d'Alola",
        es: "Grimer de Alola",
        it: "Grimer di Alola",
        de: "Alola-Sleima",
        "pt-br": "Grimer de Alola",
        "zh-tw": "阿羅拉臭泥",
        ja: "Alolan Grimer",
        ko: "Alolan Grimer"
    },
    description: {
        en: "What look like fangs and claws are actually\ncrystallized poison that will afflict you at a\nmere touch, so don't get too close.",
        fr: "Ses crocs et ses griffes sont des toxines cristallisées qui empoisonnent tout ce qu'elles touchent. Mieux vaut rester à distance.",
        es: "Lo que parecen colmillos y uñas son en realidad toxinas cristalizadas. Envenenan al contacto, por lo que no conviene acercarse demasiado.",
        it: "Quelli che sembrano denti e artigli sono in realtà tossine cristallizzate che avvelenano al solo contatto. Avvicinarsi è molto pericoloso.",
        de: "In seiner Nähe ist Vorsicht geboten. Was nach Fangzähnen und Krallen aussieht, sind kristalline Giftstoffe, die bei bloßer Berührung vergiften.",
        "pt-br": "O que parecem ser dentes e garras são, na verdade, veneno cristalizado que pode te afligir com um simples toque. É melhor não chegar perto.",
        "zh-tw": "看起來像牙齒和爪子的東西是毒素結晶，一旦碰到就會中毒，所以接近牠是很危險的。",
        ja: "What look like fangs and claws are actually\ncrystallized poison that will afflict you at a\nmere touch, so don't get too close.",
        ko: "What look like fangs and claws are actually\ncrystallized poison that will afflict you at a\nmere touch, so don't get too close."
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Power of Alchemy",
                fr: "Osmose",
                es: "Reacción Química",
                it: "Forza Chimica",
                de: "Chemiekraft",
                "pt-br": "Poder de Alquimia",
                "zh-tw": "化學之力",
                ja: "Power of Alchemy",
                ko: "Power of Alchemy"
            },
            effect: {
                en: "Basic Pokémon in play (both yours and your opponent's) have no Abilities.",
                fr: "Les Pokémon de base en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
                es: "Los Pokémon Básicos en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
                it: "I Pokémon Base in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
                de: "Basis-Pokémon im Spiel (deine und die deines Gegners) haben keine Fähigkeiten.",
                "pt-br": "Os Pokémon Básicos em jogo (seus e do seu oponente) não têm Habilidades.",
                "zh-tw": "只要這隻寶可夢在場上,將雙方場上的基礎寶可夢的特性全部消除。",
                ja: "Basic Pokémon in play (both yours and your opponent's) have no Abilities.",
                ko: "Basic Pokémon in play (both yours and your opponent's) have no Abilities."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Sludge Bomb",
                fr: "Bombe Beurk",
                es: "Bomba Lodo",
                it: "Fangobomba",
                de: "Matschbombe",
                "pt-br": "Bomba de Lodo",
                "zh-tw": "污泥炸彈",
                ja: "Sludge Bomb",
                ko: "Sludge Bomb"
            },
            damage: 70,
            cost: [
                "Darkness",
                "Colorless",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
