import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/148",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/148",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/148",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/148",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/148",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/148",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/148"
    },
    name: {
        en: "Dragalge ex",
        fr: "Kravarech-ex",
        es: "Dragalge ex",
        it: "Dragalge-ex",
        de: "Tandrak-ex",
        "pt-br": "Dragalge ex",
        "zh-tw": "毒藻龍ex",
        ja: "ドラミドロex",
        ko: "드래캄 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: [
        "Darkness"
    ],
    evolveFrom: {
        en: "Skrelp",
        fr: "Venalgue",
        es: "Skrelp",
        it: "Skrelp",
        de: "Algitt",
        "pt-br": "Skrelp",
        "zh-tw": "垃垃藻",
        ja: "Skrelp",
        ko: "Skrelp"
    },
    stage: "Stage1",
    suffix: "EX",
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
                "zh-tw": "毒刺",
                ja: "Poison Point",
                ko: "Poison Point"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, the Attacking Pokémon is now Poisoned.",
                fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant est maintenant Empoisonné.",
                es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival, el Pokémon Atacante pasa a estar Envenenado.",
                it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, il Pokémon attaccante viene avvelenato.",
                de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält, ist das Angreifende Pokémon jetzt vergiftet.",
                "pt-br": "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente, o Pokémon Atacante agora estará Envenenado.",
                "zh-tw": "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時,將使用招式的寶可夢中毒。",
                ja: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, the Attacking Pokémon is now Poisoned.",
                ko: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, the Attacking Pokémon is now Poisoned."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Draconic Whip",
                fr: "Fouet Draconien",
                es: "Látigo Dracónico",
                it: "Frustata del Drago",
                de: "Drachenpeitsche",
                "pt-br": "Chicote Dracônico",
                "zh-tw": "龍之鞭打",
                ja: "Draconic Whip",
                ko: "Draconic Whip"
            },
            damage: 80,
            cost: [
                "Darkness",
                "Colorless"
            ]
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
