import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/138",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/138",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/138",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/138",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/138",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/138",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/138",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/138",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/138"
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
        ko: "알로라 질뻐기"
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
        ja: "アローラベトベター",
        ko: "알로라 질퍽이"
    },
    description: {
        en: "What look like fangs and claws are actually\ncrystallized poison that will afflict you at a\nmere touch, so don't get too close.",
        fr: "Ses crocs et ses griffes sont des toxines cristallisées qui empoisonnent tout ce qu'elles touchent. Mieux vaut rester à distance.",
        es: "Lo que parecen colmillos y uñas son en realidad toxinas cristalizadas. Envenenan al contacto, por lo que no conviene acercarse demasiado.",
        it: "Quelli che sembrano denti e artigli sono in realtà tossine cristallizzate che avvelenano al solo contatto. Avvicinarsi è molto pericoloso.",
        de: "In seiner Nähe ist Vorsicht geboten. Was nach Fangzähnen und Krallen aussieht, sind kristalline Giftstoffe, die bei bloßer Berührung vergiften.",
        "pt-br": "O que parecem ser dentes e garras são, na verdade, veneno cristalizado que pode te afligir com um simples toque. É melhor não chegar perto.",
        "zh-tw": "看起來像牙齒和爪子的東西是毒素結晶，一旦碰到就會中毒，所以接近牠是很危險的。",
        ja: "キバや ツメに 見えるのは 毒素の 結晶。 触れるだけで 毒に 侵されるので 近付くのは 危険。",
        ko: "이빨이나 손톱으로 보이는 것은\n독소의 결정이다. 만지기만 해도\n독에 중독되므로 다가가면 위험하다."
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
                ja: "かがくのちから",
                ko: "화학의힘"
            },
            effect: {
                en: "Basic Pokémon in play (both yours and your opponent's) have no Abilities.",
                fr: "Les Pokémon de base en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
                es: "Los Pokémon Básicos en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
                it: "I Pokémon Base in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
                de: "Basis-Pokémon im Spiel (deine und die deines Gegners) haben keine Fähigkeiten.",
                "pt-br": "Os Pokémon Básicos em jogo (seus e do seu oponente) não têm Habilidades.",
                "zh-tw": "只要這隻寶可夢在場上,將雙方場上的基礎寶可夢的特性全部消除。",
                ja: "このポケモンがいるかぎり、おたがいの場のたねポケモンの特性を、すべてなくす。",
                ko: "이 포켓몬이 있는 한, 서로의 필드의 기본 포켓몬의 특성을 모두 없앤다."
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
                ja: "ヘドロばくだん",
                ko: "오물폭탄"
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
