import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/166",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/166",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/166",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/166",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/166",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/166",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/166"
    },
    name: {
        en: "Melmetal ex",
        fr: "Melmetal-ex",
        es: "Melmetal ex",
        it: "Melmetal-ex",
        de: "Melmetal-ex",
        "pt-br": "Melmetal ex",
        "zh-tw": "美錄梅塔ex",
        ja: "メルメタルex",
        ko: "멜메탈 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: [
        "Metal"
    ],
    evolveFrom: {
        en: "Meltan",
        fr: "Meltan",
        es: "Meltan",
        it: "Meltan",
        de: "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美錄坦",
        ja: "Meltan",
        ko: "Meltan"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘",
                ja: "Headbutt",
                ko: "Headbutt"
            },
            damage: 80,
            cost: [
                "Metal",
                "Metal",
                "Colorless"
            ]
        },
        {
            name: {
                en: "Metal Arms",
                fr: "Bras Métalliques",
                es: "Extremidades Metálicas",
                it: "Arti Metallici",
                de: "Metallarme",
                "pt-br": "Braços Metálicos",
                "zh-tw": "金屬武裝",
                ja: "Metal Arms",
                ko: "Metal Arms"
            },
            damage: "100+",
            cost: [
                "Metal",
                "Metal",
                "Metal",
                "Colorless"
            ],
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
                fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
                it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 50 danni in più.",
                de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢身上附有「寶可夢道具」,則增加50點傷害。",
                ja: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
                ko: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
