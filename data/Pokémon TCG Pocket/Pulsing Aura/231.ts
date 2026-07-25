import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/231",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/231",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/231",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/231",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/231",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/231"
    },
    name: {
        en: "Dragalge ex",
        fr: "Kravarech-ex",
        es: "Dragalge ex",
        it: "Dragalge-ex",
        de: "Tandrak-ex",
        "pt-br": "Dragalge ex",
        "zh-tw": "毒藻龍ex",
        ko: "드래캄 ex",
        ja: "ドラミドロex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Darkness"],
    dexId: [691],
    evolveFrom: {
        en: "Skrelp",
        fr: "Venalgue",
        es: "Skrelp",
        it: "Skrelp",
        de: "Algitt",
        "pt-br": "Skrelp",
        "zh-tw": "垃垃藻",
        ko: "수레기",
        ja: "クズモー"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Poison Point",
                fr: "Point Poison",
                es: "Punto Tóxico",
                it: "Velenopunto",
                de: "Giftdorn",
                "pt-br": "Ponto Venenoso",
                "zh-tw": "毒刺"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, the Attacking Pokémon is now Poisoned.",
                fr: "Si ce Pokémon se trouve dans le Point Actif et est endommagé par une attaque du Pokémon de votre adversaire, le Pokémon attaquant est désormais Empoisonné.",
                es: "Si este Pokémon está en el Punto Activo y es dañado por un ataque del Pokémon de tu rival, el Pokémon Atacante ahora está Envenenado.",
                it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dei Pokémon del tuo avversario, il Pokémon attaccante è avvelenato.",
                de: "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch einen Angriff des Pokémon deines Gegners beschädigt wird, ist das angreifende Pokémon jetzt vergiftet.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for danificado por um ataque do Pokémon do seu oponente, o Pokémon atacante ficará Envenenado.",
                "zh-tw": "如果該寶可夢位於活動點並因對手寶可夢的攻擊而受到傷害，則攻擊的寶可夢現在會中毒。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Draconic Whip",
                fr: "Fouet Draconien",
                es: "Látigo Dracónico",
                it: "Frustata del Drago",
                de: "Drachenpeitsche",
                "pt-br": "Chicote Dracônico",
                "zh-tw": "龍之鞭打"
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
    retreat: 2
};

export default card;
