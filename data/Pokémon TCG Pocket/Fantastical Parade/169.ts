import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/169",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/169",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/169",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/169",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/169"
    },
    name: {
        en: "Indeedee",
        "fr": "En effet",
        "es": "De hecho",
        "it": "Effettivamente",
        "de": "Tatsächlich",
        "pt-br": "De fato",
        "zh-tw": "確實"
    },
    illustrator: "saino misaki",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    description: {
        en: "This Pokémon never leaves its Trainer's side.\nIt predicts their actions with its psychic power\nand takes care of their day-to-day needs.",
        "fr": "Ce Pokémon ne quitte jamais son dresseur.\nIl prédit leurs actions grâce à son pouvoir psychique\net prend soin de leurs besoins quotidiens.",
        "es": "Este Pokémon nunca se aparta del lado de su Entrenador.\nPredice sus acciones con su poder psíquico.\ny se ocupa de sus necesidades diarias.",
        "it": "Questo Pokémon non lascia mai il fianco del suo Allenatore.\nPredice le loro azioni con il suo potere psichico\ne si prende cura delle loro necessità quotidiane.",
        "de": "Dieses Pokémon verlässt niemals die Seite seines Trainers.\nEs sagt ihre Handlungen mit seiner psychischen Kraft voraus\nund kümmert sich um ihre alltäglichen Bedürfnisse.",
        "pt-br": "Este Pokémon nunca sai do lado do seu Treinador.\nPrevê suas ações com seu poder psíquico\ne cuida de suas necessidades do dia a dia.",
        "zh-tw": "這只神奇寶貝永遠不會離開訓練家的身邊。\n用心靈力量預測他們的行動\n並照顧他們的日常需求。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Zen Shard",
                "fr": "Éclat zen",
                "es": "Fragmento Zen",
                "it": "Frammento Zen",
                "de": "Zen-Scherbe",
                "pt-br": "Fragmento Zen",
                "zh-tw": "禪宗碎片"
            },
            cost: ["Psychic", "Psychic", "Psychic"],
            effect: {
                en: "This attack does 70 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige 70 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque hace 70 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge 70 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 70 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 70 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手後備隊的 1 只寶可夢造成 70 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
