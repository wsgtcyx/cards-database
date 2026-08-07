import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/199",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/199",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/199",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/199",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/199",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/199",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/199"
    },
    name: {
        en: "Mimikyu ex",
        "fr": "Mimiqui-ex",
        "es": "Mimikyu ex",
        "it": "Mimikyu-ex",
        "de": "Mimigma-ex",
        "pt-br": "Mimikyu ex",
        "zh-tw": "謎擬Ｑex"
    },
    illustrator: "Mori Yuu",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Disguise",
                "fr": "Déguisement",
                "es": "Ocultar",
                "it": "Travestimento",
                "de": "Verkleidung",
                "pt-br": "Disfarce",
                "zh-tw": "偽裝"
            },
            effect: {
                en: "When this Pokémon is first damaged by an attack after coming into play, prevent that damage.",
                "fr": "Lorsque ce Pokémon est endommagé pour la première fois par une attaque après son entrée en jeu, prévenez ces dégâts.",
                "es": "Cuando este Pokémon sea dañado por primera vez por un ataque después de entrar en juego, evita ese daño.",
                "it": "Quando questo Pokémon viene danneggiato per la prima volta da un attacco dopo essere entrato in gioco, previeni quel danno.",
                "de": "Wenn dieses Pokémon zum ersten Mal durch einen Angriff Schaden erleidet, nachdem es ins Spiel gekommen ist, verhindere diesen Schaden.",
                "pt-br": "Quando este Pokémon for danificado pela primeira vez por um ataque após entrar em jogo, evite esse dano.",
                "zh-tw": "當這只神奇寶貝進場後首次受到攻擊傷害時，防止該傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Claw Slash",
                "fr": "Coup de griffe",
                "es": "Tajo de garra",
                "it": "Colpo d'artiglio",
                "de": "Klauenhieb",
                "pt-br": "Corte de Garra",
                "zh-tw": "利爪斬"
            },
            damage: 70,
            cost: ["Psychic", "Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
