import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/132",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/132",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/132",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/132",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/132",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/132",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/132"
    },
    name: {
        en: "Ursaring",
        fr: "Ursaring",
        es: "Ursaring",
        it: "Ursaring",
        de: "Ursaring",
        "pt-br": "Ursaring",
        "zh-tw": "圈圈熊",
        ko: "링곰",
        ja: "リングマ"
    },
    illustrator: "Teeziro",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Colorless"],
    dexId: [217],
    evolveFrom: {
        en: "Teddiursa",
        fr: "Teddiursa",
        es: "Teddiursa",
        it: "Teddiursa",
        de: "Teddiursa",
        "pt-br": "Teddiursa",
        "zh-tw": "熊寶寶",
        ko: "깜지곰",
        ja: "ヒメグマ"
    },
    stage: "Stage1",
    description: {
        en: "It is quite skilled at climbing trees. If it comes across a Primeape while searching for berries in the treetops, trouble will surely ensue.",
        fr: "Il est très doué pour grimper aux arbres. S'il rencontre un Colossinge en cherchant des baies dans la cime des arbres, des problèmes s'ensuivront sûrement.",
        es: "Es bastante hábil trepando a los árboles. Si se encuentra con un Primeape mientras busca bayas en las copas de los árboles, seguramente surgirán problemas.",
        it: "È abbastanza abile nell'arrampicarsi sugli alberi. Se incontra uno Primeape mentre cerca bacche tra le cime degli alberi, sicuramente arriveranno dei guai.",
        de: "Es ist ziemlich geschickt darin, auf Bäume zu klettern. Wenn es bei der Suche nach Beeren in den Baumwipfeln auf einen Rasaff stößt, wird es sicherlich Ärger geben.",
        "pt-br": "É bastante habilidoso em subir em árvores. Se ele encontrar um Primeape enquanto procura frutas nas copas das árvores, certamente surgirão problemas.",
        "zh-tw": "它爬樹的技術相當熟練。如果它在樹頂尋找漿果時遇到了火爆猴，麻煩肯定會接踵而至。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Raging Claws",
                fr: "Griffes Enragées",
                es: "Garras Furiosas",
                it: "Furiartigli",
                de: "Wutklauen",
                "pt-br": "Garras Devastadoras",
                "zh-tw": "憤怒之爪"
            },
            effect: {
                en: "This attack does more damage equal to the damage this Pokémon has on it.",
                fr: "Cette attaque inflige des dégâts supplémentaires égaux à ceux que ce Pokémon a déjà subis.",
                es: "Este ataque hace una cantidad de daño adicional igual al daño que ya tenga este Pokémon.",
                it: "Questo attacco infligge danni aggiuntivi pari alla quantità di danni subiti al momento da questo Pokémon.",
                de: "Diese Attacke fügt zusätzlichen Schaden in Höhe des Schadens zu, der diesem Pokémon bereits zugefügt wurde.",
                "pt-br": "Este ataque causa dano a mais, equivalente ao dano que este Pokémon tiver nele.",
                "zh-tw": "這次攻擊造成的傷害等於該寶可夢對其造成的傷害。"
            },
            damage: "40+"
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
