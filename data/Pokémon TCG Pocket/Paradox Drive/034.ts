import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/034",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/034"
    },
    name: {
        en: "Great Tusk",
        fr: "Fort-Ivoire",
        es: "Colmilargo",
        it: "Grandizanne",
        de: "Riesenzahn",
        "pt-br": "Presa Grande",
        "zh-tw": "雄偉牙",
        ko: "위대한엄니",
        ja: "イダイナキバ"
    },
    illustrator: "Tomoki Sone",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [984],
    stage: "Basic",
    description: {
        en: "This creature resembles a mysterious Pokémon that, according to a paranormal magazine, has lived since ancient times.",
        fr: "Cette créature ressemble à un mystérieux Pokémon qui, selon un magazine paranormal, vit depuis l'Antiquité.",
        es: "Esta criatura se asemeja a un misterioso Pokémon que, según una revista paranormal, ha vivido desde la antigüedad.",
        it: "Questa creatura assomiglia ad un Pokémon misterioso che, secondo una rivista paranormale, vive fin dall'antichità.",
        de: "Diese Kreatur ähnelt einem mysteriösen Pokémon, das laut einer paranormalen Zeitschrift seit der Antike lebt.",
        "pt-br": "Esta criatura lembra um misterioso Pokémon que, segundo uma revista paranormal, vive desde os tempos antigos.",
        "zh-tw": "根據超自然雜誌的說法，這種生物類似於一種神秘的寶可夢，它自古以來就存在。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Shaking Stomp",
                fr: "Tremblement de terre",
                es: "Pisotón tembloroso",
                it: "Stomp tremante",
                de: "Schüttelndes Stampfen",
                "pt-br": "Agitação",
                "zh-tw": "跺地撼盪"
            },
            effect: {
                en: "This attack also does 20 damage to each of your Benched Pokémon.",
                fr: "Cette attaque inflige également 20 dégâts à chacun de vos Pokémon de Banc.",
                es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca.",
                it: "Questo attacco infligge anche 20 danni a ciascuno dei tuoi Pokémon in panchina.",
                de: "Dieser Angriff fügt außerdem jedem Pokémon auf deiner Bank 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 de dano a cada um dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊還會對你的每隻後備寶可夢造成 20 點傷害。"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
