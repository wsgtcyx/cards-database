import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/107",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/107",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/107",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/107",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/107",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/107",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/107"
    },
    name: {
        en: "Mimikyu ex",
        fr: "Mimiqui-ex",
        es: "Mimikyu ex",
        it: "Mimikyu-ex",
        de: "Mimigma-ex",
        "pt-br": "Mimikyu ex",
        "zh-tw": "謎擬Ｑex",
        ko: "따라큐 ex",
        ja: "ミミッキュex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    dexId: [778],
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Disguise",
                fr: "Fantômasque",
                es: "Disfraz",
                it: "Fantasmanto",
                de: "Kostümspuk",
                "pt-br": "Disfarce",
                "zh-tw": "畫皮"
            },
            effect: {
                en: "When this Pokémon is first damaged by an attack after coming into play, prevent that damage.",
                fr: "Lorsque ce Pokémon subit les dégâts d'une attaque pour la première fois après être entré en jeu, évitez ces dégâts.",
                es: "Si se inflige cualquier daño a este Pokémon en el primer ataque tras entrar en juego, evita ese daño.",
                it: "Previeni i danni dal primo attacco subito da questo Pokémon dopo che è entrato in gioco.",
                de: "Wenn diesem Pokémon zum ersten Mal Schaden durch eine Attacke zugefügt wird, nachdem es ins Spiel gebracht wurde, verhindere jenen Schaden.",
                "pt-br": "Quando este Pokémon for danificado por um ataque pela primeira vez após entrar em jogo, previna aquele dano.",
                "zh-tw": "這隻寶可夢被放置於場上後,首次受到招式的傷害時,不會受到該傷害。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Claw Slash",
                fr: "Tranch'Griffe",
                es: "Cuchillada Garra",
                it: "Lacerartiglio",
                de: "Klauenschlitzer",
                "pt-br": "Golpe de Garra",
                "zh-tw": "利爪劈擊"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
