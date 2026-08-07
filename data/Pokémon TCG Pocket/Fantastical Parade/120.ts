import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/120",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/120",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/120",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/120",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/120",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/120",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/120"
    },
    name: {
        en: "Aegislash",
        "fr": "Exagide",
        "es": "Aegislash",
        "it": "Aegislash",
        "de": "Durengard",
        "pt-br": "Aegislash",
        "zh-tw": "堅盾劍怪"
    },
    illustrator: "Ryuta Fuse",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    evolveFrom: {
        en: "Doublade",
        "fr": "Doublade",
        "es": "doble hoja",
        "it": "Doppia lama",
        "de": "Doublade",
        "pt-br": "Lâmina Dupla",
        "zh-tw": "雙刃"
    },
    description: {
        en: "Its potent spectral powers allow it to manipulate\nothers. It once used its powers to force people\nand Pokémon to build a kingdom to its liking.",
        "fr": "Ses puissants pouvoirs spectraux lui permettent de manipuler\nd'autres. Autrefois, il utilisait ses pouvoirs pour forcer les gens\net Pokémon pour construire un royaume à son goût.",
        "es": "Sus potentes poderes espectrales le permiten manipular\notros. Alguna vez usó sus poderes para obligar a la gente\ny Pokémon para construir un reino a su gusto.",
        "it": "I suoi potenti poteri spettrali gli permettono di manipolare\naltri. Una volta usava i suoi poteri per costringere le persone\ne Pokémon per costruire un regno a suo piacimento.",
        "de": "Seine starken spektralen Kräfte ermöglichen ihm die Manipulation\nandere. Einst nutzte es seine Kräfte, um Menschen zu zwingen\nund Pokémon, um ein Königreich nach seinen Wünschen aufzubauen.",
        "pt-br": "Seus potentes poderes espectrais permitem manipular\noutros. Certa vez, usou seus poderes para forçar as pessoas\ne Pokémon para construir um reino ao seu gosto.",
        "zh-tw": "其強大的光譜能力使其能夠操縱\n其他人。它曾經用它的力量強迫人們\n和神奇寶貝建立一個自己喜歡的王國。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Superb Shield",
                "fr": "Superbe Bouclier",
                "es": "Magnífico escudo",
                "it": "Scudo superbo",
                "de": "Hervorragender Schild",
                "pt-br": "Escudo Soberbo",
                "zh-tw": "極品盾牌"
            },
            damage: 80,
            cost: ["Metal", "Metal", "Metal"],
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −80 damage from attacks from your opponent's Pokémon ex.",
                "fr": "Lors du prochain tour de votre adversaire, ce Pokémon subit -80 dégâts des attaques de l'ex-Pokémon de votre adversaire.",
                "es": "Durante el próximo turno de tu rival, este Pokémon recibe -80 de daño de los ataques de los Pokémon de tu rival, por ejemplo.",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -80 danni dagli attacchi dei Pokémon ex del tuo avversario.",
                "de": "Während des nächsten Zuges deines Gegners erleidet dieses Pokémon −80 Schaden durch Angriffe des Pokémon-Ex deines Gegners.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon sofrerá −80 de dano dos ataques do Pokémon ex do seu oponente.",
                "zh-tw": "在對手的下一個回合中，該神奇寶貝因對手前神奇寶貝的攻擊而受到 -80 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
