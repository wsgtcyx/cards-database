import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Aerodactyl ex",
        "fr": "Aérodactyle ex",
        "es": "Aerodactilo ex",
        "it": "Aerodattilo es",
        "de": "Aerodactyl ex",
        "pt-br": "Aerodáctilo ex",
        "zh-tw": "化石翼龍 ex",
    },
    illustrator: "PLANETA CG Works",
    category: "Pokemon",
    hp: 140,
    types: ["Fighting"],
    evolveFrom: {
        en: "Old Amber",
        "fr": "Vieil Ambre",
        "es": "Ámbar viejo",
        "it": "Vecchia Ambra",
        "de": "Alter Bernstein",
        "pt-br": "Âmbar Velho",
        "zh-tw": "老琥珀"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Primeval Law",
                "fr": "Loi primitive",
                "es": "Ley primitiva",
                "it": "Legge primordiale",
                "de": "Urgesetz",
                "pt-br": "Lei Primordial",
                "zh-tw": "原始法則"
            },
            effect: {
                en: "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon.",
                "fr": "Votre adversaire ne peut jouer aucun Pokémon de sa main pour faire évoluer son Pokémon Actif.",
                "es": "Tu oponente no puede jugar ningún Pokémon de su mano para hacer evolucionar su Pokémon Activo.",
                "it": "Il tuo avversario non può giocare nessun Pokémon dalla sua mano per far evolvere il suo Pokémon attivo.",
                "de": "Dein Gegner kann kein Pokémon aus seiner Hand spielen, um sein Aktives Pokémon weiterzuentwickeln.",
                "pt-br": "Seu oponente não pode jogar nenhum Pokémon da mão dele para evoluir seu Pokémon Ativo.",
                "zh-tw": "你的對手不能使用手中的任何神奇寶貝來進化他們的活躍神奇寶貝。"
            }
        }],
    attacks: [{
            name: {
                en: "Land Crush",
                "fr": "Écrasement de terre",
                "es": "Aplastamiento de la tierra",
                "it": "Schiacciamento della terra",
                "de": "Land Crush",
                "pt-br": "Esmagamento terrestre",
                "zh-tw": "土地擠壓"
            },
            damage: 80,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Two Shiny"
};
export default card;
