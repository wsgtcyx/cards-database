import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/231",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/231",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/231",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/231",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/231",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/231",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/231"
    },
    name: {
        en: "Mega Kangaskhan ex",
        fr: "Méga-Kangourex-ex",
        es: "Mega-Kangaskhan ex",
        it: "Mega Kangaskhan-ex",
        de: "Mega-Kangama-ex",
        "pt-br": "Mega Kangaskhan ex",
        "zh-tw": "超級袋獸ex",
        ko: "메가캥카 ex",
        ja: "メガガルーラex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 180,
    types: ["Colorless"],
    dexId: [115],
    stage: "Basic",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Double-Punching Family",
                fr: "Double Poing Familial",
                es: "Puño Doble Familiar",
                it: "Famiglia del doppio pugno",
                de: "Doppelt schlagende Familie",
                "pt-br": "Soco Duplo em Família",
                "zh-tw": "家族雙拳"
            },
            effect: {
                en: "This attack is used twice in a row. The second attack does 40 damage. (If the first attack Knocks Out your opponent's Active Pokémon, the second attack is used after your opponent chooses a new Active Pokémon.)",
                fr: "Cette attaque s'active deux fois d'affilée. La deuxième attaque inflige 40 dégâts. (Si la première attaque met K.O. le Pokémon Actif de votre adversaire, la deuxième attaque s'activera après que votre adversaire a choisi un nouveau Pokémon Actif.)",
                es: "Este ataque se usa dos veces consecutivas. El segundo ataque hace 40 puntos de daño. (Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, el segundo ataque se ejecuta después de que tu rival haya elegido a un nuevo Pokémon Activo).",
                "pt-br": "Este ataque é usado duas vezes seguidas. O segundo ataque causa 40 pontos de dano. (Se o primeiro ataque Nocautear o Pokémon Ativo do seu oponente, o segundo ataque será usado depois que o seu oponente escolher um novo Pokémon Ativo).",
                "zh-tw": "這個招式會使用2次。第2次會造成40點傷害。 (若對手的戰鬥寶可夢因第1次的招式而昏厥了,則在下一隻戰鬥寶可夢被放置後,使用第2次。)"
            },
            damage: 80
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
