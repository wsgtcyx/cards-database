import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Nihilego",
        "fr": "Nihilego",
        "es": "Nihilego",
        "it": "Nihilego",
        "de": "Nihilego",
        "pt-br": "Nihilego",
        "zh-tw": "虛吾伊德",
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "A life-form from another world, it was dubbed\na UB and is thought to produce a\nstrong neurotoxin.",
        "fr": "Une forme de vie venue d'un autre monde, elle a été surnommée\nun UB et on pense qu'il produit un\nforte neurotoxine.",
        "es": "Una forma de vida de otro mundo, fue apodada\nuna UB y se cree que producirá una\nfuerte neurotoxina.",
        "it": "Una forma di vita proveniente da un altro mondo, fu soprannominata\nun UB e si pensa che produca a\nforte neurotossina.",
        "de": "Man nannte es eine Lebensform aus einer anderen Welt\nein UB und soll ein produzieren\nstarkes Neurotoxin.",
        "pt-br": "Uma forma de vida de outro mundo, foi apelidada\num UB e é pensado para produzir um\nneurotoxina forte.",
        "zh-tw": "來自異世界的生命體，被稱為\n一個 UB 並被認為會產生一個\n強神經毒素。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "More Poison",
                "fr": "Plus de poison",
                "es": "Más veneno",
                "it": "Altro Veleno",
                "de": "Mehr Gift",
                "pt-br": "Mais veneno",
                "zh-tw": "更多毒藥"
            },
            effect: {
                en: "Your opponent's Active Pokémon takes +10 damage from being Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire subit +10 dégâts s'il est Empoisonné.",
                "es": "El Pokémon Activo de tu rival recibe +10 de daño al ser Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario subisce +10 danni se viene avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners erleidet durch die Vergiftung +10 Schaden.",
                "pt-br": "O Pokémon Ativo do seu oponente sofre +10 de dano ao ser Envenenado.",
                "zh-tw": "對手的活躍寶可夢因中毒而受到+10傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "New Wave",
                "fr": "Nouvelle vague",
                "es": "Nueva ola",
                "it": "Nuova ondata",
                "de": "Neue Welle",
                "pt-br": "Nova Onda",
                "zh-tw": "新浪潮"
            },
            damage: 30,
            cost: ["Darkness", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
