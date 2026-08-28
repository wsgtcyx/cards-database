import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/038",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/038"
    },
    name: {
        en: "Team Rocket's Ekans",
        fr: "Abo de la Team Rocket",
        es: "Ekans del Team Rocket",
        it: "Ekans del Team Rocket",
        de: "Team Rockets Rettan",
        "pt-br": "Ekans da Equipe Rocket",
        "zh-tw": "火箭隊的阿柏蛇",
        ko: "로켓단의 아보",
        ja: "ロケット団のアーボ"
    },
    illustrator: "Gemi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    stage: "Basic",
    description: {
        en: "A very common sight in grasslands and such. It flicks its tongue in and out to sense danger in its surroundings.",
        fr: "On le croise très souvent dans les hautes herbes. Il agite rapidement sa langue pour détecter le danger.",
        es: "Es facil encontrario en praderas y zonas similares. A este Pokémon le basta con sacar la lengua para detertar el peligro.",
        it: "Molto comune nelle zone erbose Rileva eventuali pericoli tramite i movimenti repentini della lingua.",
        de: "Ein Pokemon, das in hohem Gras weit verbreitet ist. Es schnellt mit seiner Zunge vor und zurück, um Gefahr in seiner Umgebung aufzuspüren.",
        "pt-br": "Muito comum em pradarias e lugares similares. Projeta a língua para dentro e para fora para detectar perigos ao seu redor.",
        "zh-tw": "大量棲息於草地等處。會快速顫動吐出的舌頭，藉此感知周遭的危險。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Darkness Fang",
                fr: "Croc Obscur",
                es: "Colmillo de Oscuridad",
                it: "Oscurizanna",
                de: "Fänge der Dunkelheit",
                "pt-br": "Presa Sombria",
                "zh-tw": "暗之牙"
            },
            damage: 40
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
