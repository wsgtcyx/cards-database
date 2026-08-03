import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/099",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/099",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/099",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/099",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/099",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/099",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/099"
    },
    name: {
        en: "Hawlucha",
        fr: "Brutalibré",
        es: "Hawlucha",
        it: "Hawlucha",
        de: "Resladero",
        "pt-br": "Hawlucha",
        "zh-tw": "摔角鷹人",
        ko: "루차불",
        ja: "ルチャブル"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    dexId: [701],
    stage: "Basic",
    description: {
        en: "Hawlucha live quietly without flocking together. They fight constantly with their natural enemies: noisy groups of Primeape.",
        fr: "Brutalibré vit tranquillement sans se rassembler. Ils se battent constamment avec leurs ennemis naturels : des groupes bruyants de Colossinge.",
        es: "Hawlucha viva tranquilamente sin agruparse. Luchan constantemente con sus enemigos naturales: ruidosos grupos de Primeape.",
        it: "Hawlucha vivono tranquillamente senza accalcarsi insieme. Combattono costantemente con i loro nemici naturali: gruppi rumorosi di Primeape.",
        de: "Resladero leben ruhig, ohne sich zusammenzudrängen. Sie kämpfen ständig mit ihren natürlichen Feinden: lauten Gruppen von Rasaff.",
        "pt-br": "Hawlucha vivem silenciosamente, sem se reunirem. Eles lutam constantemente com seus inimigos naturais: grupos barulhentos de Primeape.",
        "zh-tw": "摔角鷹人 安靜地生活，不聚集。它們不斷地與天敵戰鬥：吵鬧的 火爆猴 群體。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Take Down",
                fr: "Bélier",
                es: "Derribo",
                it: "Riduttore",
                de: "Bodycheck",
                "pt-br": "Desmantelar",
                "zh-tw": "猛撞"
            },
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                fr: "Ce Pokémon s'inflige également 10 dégâts.",
                es: "Este Pokémon también se hace 10 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 10 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該寶可夢也會對其自身造成 10 點傷害。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
