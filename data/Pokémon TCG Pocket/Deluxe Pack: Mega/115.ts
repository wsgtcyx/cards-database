import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/115",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/115",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/115",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/115",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/115",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/115",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/115"
    },
    name: {
        en: "Mimikyu ex",
        fr: "Mimiqui-ex",
        es: "Mimikyu ex",
        it: "Mimikyu-ex",
        de: "Mimigma-ex",
        "pt-br": "Mimikyu ex",
        "zh-tw": "謎擬Ｑex",
        ja: "ミミッキュex",
        ko: "따라큐 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 120,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    suffix: "EX",
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
                "zh-tw": "畫皮",
                ja: "Disguise",
                ko: "Disguise"
            },
            effect: {
                en: "When this Pokémon is first damaged by an attack after coming into play, prevent that damage.",
                fr: "Lorsque ce Pokémon subit les dégâts d'une attaque pour la première fois après être entré en jeu, évitez ces dégâts.",
                es: "Si se inflige cualquier daño a este Pokémon en el primer ataque tras entrar en juego, evita ese daño.",
                it: "Previeni i danni dal primo attacco subito da questo Pokémon dopo che è entrato in gioco.",
                de: "Wenn diesem Pokémon zum ersten Mal Schaden durch eine Attacke zugefügt wird, nachdem es ins Spiel gebracht wurde, verhindere jenen Schaden.",
                "pt-br": "Quando este Pokémon for danificado por um ataque pela primeira vez após entrar em jogo, previna aquele dano.",
                "zh-tw": "這隻寶可夢被放置於場上後,首次受到招式的傷害時,不會受到該傷害。",
                ja: "When this Pokémon is first damaged by an attack after coming into play, prevent that damage.",
                ko: "When this Pokémon is first damaged by an attack after coming into play, prevent that damage."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Claw Slash",
                fr: "Tranch'Griffe",
                es: "Cuchillada Garra",
                it: "Lacerartiglio",
                de: "Klauenschlitzer",
                "pt-br": "Golpe de Garra",
                "zh-tw": "利爪劈擊",
                ja: "Claw Slash",
                ko: "Claw Slash"
            },
            damage: 70,
            cost: [
                "Psychic",
                "Psychic"
            ]
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
