import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/096",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/096",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/096",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/096",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/096",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/096"
    },
    name: {
        en: "Dedenne ex",
        fr: "Dedenne-ex",
        es: "Dedenne ex",
        it: "Dedenne-ex",
        de: "Dedenne-ex",
        "pt-br": "Dedenne ex",
        "zh-tw": "咚咚鼠ex",
        ja: "デデンネex",
        ko: "데덴네 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 120,
    types: [
        "Lightning"
    ],
    dexId: [
        702
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Lightning",
                "Lightning"
            ],
            name: {
                en: "Dede-Circuit",
                fr: "Dede-Circuit",
                es: "Dedecircuito",
                it: "Dedecircuito",
                de: "Dede-Stromkreis",
                "pt-br": "Dedecircuito",
                "zh-tw": "咚咚陣",
                ja: "Dede-Circuit",
                ko: "Dede-Circuit"
            },
            effect: {
                en: "This attack does 40 damage for each Pokémon Tool attached to all of your Pokémon.",
                fr: "Cette attaque inflige 40 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
                es: "Este ataque hace 40 puntos de daño por cada Herramienta Pokémon unida a todos tus Pokémon.",
                it: "Questo attacco infligge 40 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
                de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 40 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 40 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon.",
                "zh-tw": "造成自己的所有寶可夢身上的「寶可夢道具」卡的數量×40點傷害。",
                ja: "This attack does 40 damage for each Pokémon Tool attached to all of your Pokémon.",
                ko: "This attack does 40 damage for each Pokémon Tool attached to all of your Pokémon."
            },
            damage: "40x"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
