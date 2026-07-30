import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/229"
    },
    name: {
        en: "Gigalith ex",
        fr: "Gigalithe-ex",
        es: "Gigalith ex",
        it: "Gigalith-ex",
        de: "Brockoloss-ex",
        "pt-br": "Gigalith ex",
        "zh-tw": "龐岩怪ex",
        ko: "기가이어스 ex",
        ja: "ギガイアスex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 190,
    types: ["Fighting"],
    dexId: [526],
    evolveFrom: {
        en: "Boldore",
        fr: "Géolithe",
        es: "Boldore",
        it: "Boldore",
        de: "Sedimantur",
        "pt-br": "Boldore",
        "zh-tw": "地幔岩",
        ko: "암트르",
        ja: "ガントル"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
            name: {
                en: "Megaton Cannon",
                fr: "Canon mégatonne",
                es: "Cañón megatón",
                it: "Cannone Megatone",
                de: "Megaton-Kanone",
                "pt-br": "Canhão Megaton",
                "zh-tw": "百萬噸加農炮"
            },
            effect: {
                en: "This attack does 140 damage to 1 of your opponent's Pokémon. During your next turn, this Pokémon can't attack.",
                fr: "Cette attaque inflige 140 dégâts à 1 des Pokémon de votre adversaire. Lors de votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Este ataque hace 140 puntos de daño a 1 de los Pokémon de tu rival. Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Questo attacco infligge 140 danni a 1 dei Pokémon del tuo avversario. Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Dieser Angriff fügt 1 Pokémon deines Gegners 140 Schadenspunkte zu. Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Este ataque causa 140 pontos de dano a 1 dos Pokémon do seu oponente. Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "這次攻擊對對手的 1 只寶可夢造成 140 點傷害。在你的下一個回合中，這只寶可夢無法攻擊。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
