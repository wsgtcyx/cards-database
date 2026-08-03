import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/136",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/136",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/136",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/136",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/136",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/136",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/136"
    },
    name: {
        en: "Watchog",
        fr: "Miradar",
        es: "Watchog",
        it: "Watchog",
        de: "Kukmarda",
        "pt-br": "Watchog",
        "zh-tw": "步哨鼠",
        ko: "보르그",
        ja: "ミルホッグ"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [505],
    evolveFrom: {
        en: "Patrat",
        fr: "Ratentif",
        es: "Patrat",
        it: "Patrat",
        de: "Nagelotz",
        "pt-br": "Patrat",
        "zh-tw": "探探鼠",
        ko: "보르쥐",
        ja: "ミネズミ"
    },
    stage: "Stage1",
    description: {
        en: "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
        fr: "Il attaque en crachant les graines des Baies qu’il accumule\ndans ses bajoues. S’il voit un ennemi, il dresse la queue.",
        es: "Ataca lanzando las semillas de las bayas que acumula en\nsus mofletes. Su cola se tensa al avistar a un enemigo.",
        it: "Attacca sparando i semi delle bacche che ha accumulato nelle\nguance. Se avvista il nemico, drizza la coda.",
        de: "Bespuckt Gegner mit Kernen von Beeren aus seinen\nBackentaschen. Erspäht es einen Feind, richtet es\nden Schweif auf.",
        "pt-br": "Quando vêem um inimigo, suas caudas ficam erguidas e eles cospem as sementes das frutas armazenadas nas bolsas das bochechas.",
        "zh-tw": "當它們看到敵人時，它們的尾巴會高高豎起，並吐出頰囊中儲存的漿果種子。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Psych Up",
                fr: "Boost",
                es: "Autosugestión",
                it: "Psicamisù",
                de: "Psycho-Plus",
                "pt-br": "Carga Psíquica",
                "zh-tw": "自我暗示"
            },
            effect: {
                en: "During your next turn, this Pokémon's Psych Up attack does +30 damage.",
                fr: "Lors de votre prochain tour, l'attaque Psych Up de ce Pokémon inflige +30 dégâts.",
                es: "Durante tu próximo turno, el ataque Psych Up de este Pokémon hace +30 de daño.",
                it: "Durante il tuo prossimo turno, l'attacco Psicoaumento di questo Pokémon infligge +30 danni.",
                de: "Während deines nächsten Zuges verursacht der Psych Up-Angriff dieses Pokémon +30 Schaden.",
                "pt-br": "Durante o seu próximo turno, o ataque Psych Up deste Pokémon causa +30 de dano.",
                "zh-tw": "在你的下一個回合中，這隻寶可夢的心靈提升攻擊造成+30點傷害。"
            },
            damage: 30
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
