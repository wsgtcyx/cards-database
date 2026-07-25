import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/001",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/001"
    },
    name: {
        en: "Caterpie",
        fr: "Chenipan",
        es: "Caterpie",
        it: "Caterpie",
        de: "Raupy",
        "pt-br": "Caterpie",
        "zh-tw": "綠毛蟲",
        ko: "캐터피",
        ja: "キャタピー"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 40,
    types: ["Grass"],
    dexId: [10],
    stage: "Basic",
    description: {
        en: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
        fr: "Ses petites pattes munies de ventouses\nlui permettent de monter les pentes\net de grimper aux murs sans se fatiguer.",
        es: "Sus cortas patas están recubiertas de ventosas\nque le permiten subir incansable por muros y\ncuestas.",
        it: "Le ventose sulle sue corte zampe gli permettono\ndi affrontare ogni salita e di scalare senza fatica\nqualsiasi muro.",
        de: "Es hat Saugnäpfe an den Beinchen, mit denen es\nmühelos Steigungen und Mauern erklimmen kann.",
        "pt-br": "Seus pés curtos possuem ventosas nas pontas que lhe permitem escalar encostas e paredes incansavelmente.",
        "zh-tw": "別看牠的腳很短，\n因為是吸盤，所以無論是\n斜坡還是牆壁都能輕鬆前進。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Quick Growth",
                fr: "Croissance rapide",
                es: "Crecimiento rápido",
                it: "Crescita rapida",
                de: "Schnelles Wachstum",
                "pt-br": "Crescimento rápido",
                "zh-tw": "成長期"
            },
            effect: {
                en: "At the end of your opponent's turn, if this Pokémon is in the Active Spot, put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
                fr: "A la fin du tour de votre adversaire, si ce Pokémon est dans le Spot Actif, placez une carte aléatoire de votre deck qui évolue de ce Pokémon sur ce Pokémon pour le faire évoluer.",
                es: "Al final del turno de tu rival, si este Pokémon está en el Punto Activo, coloca una carta aleatoria de tu mazo que evolucione de este Pokémon a este Pokémon para evolucionarlo.",
                it: "Alla fine del turno del tuo avversario, se questo Pokémon è in posizione attiva, metti una carta a caso dal tuo mazzo che si evolve da questo Pokémon a questo Pokémon per farlo evolvere.",
                de: "Wenn sich dieses Pokémon am Ende des Zuges deines Gegners an der aktiven Stelle befindet, lege eine zufällige Karte aus deinem Deck, die sich aus diesem Pokémon entwickelt, auf dieses Pokémon, um es weiterzuentwickeln.",
                "pt-br": "No final do turno do seu oponente, se este Pokémon estiver no Ponto Ativo, coloque uma carta aleatória do seu baralho que evolui deste Pokémon neste Pokémon para evoluí-lo.",
                "zh-tw": "在對手的回合結束時，如果這隻寶可夢位於活躍位置，則從你的牌組中隨機放置一張由該寶可夢進化的卡牌到該寶可夢上以使其進化。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Hook",
                fr: "Crochet",
                es: "Garfio",
                it: "Uncino",
                de: "Haken",
                "pt-br": "Gancho",
                "zh-tw": "鉤住"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
