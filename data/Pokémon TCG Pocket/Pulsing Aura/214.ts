import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/214",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/214",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/214",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/214",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/214",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/214"
    },
    name: {
        en: "Crobat",
        fr: "Nostenfer",
        es: "Crobat",
        it: "Crobat",
        de: "Iksbat",
        "pt-br": "Crobat",
        "zh-tw": "叉字蝠",
        ko: "크로뱃",
        ja: "クロバット"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Darkness"],
    dexId: [169],
    evolveFrom: {
        en: "Golbat",
        fr: "Nosferalto",
        es: "Golbat",
        it: "Golbat",
        de: "Golbat",
        "pt-br": "Golbat",
        "zh-tw": "大嘴蝠",
        ko: "골뱃",
        ja: "ゴルバット"
    },
    stage: "Stage2",
    description: {
        en: "This Pokémon flaps its four wings skillfully. Crobat can fly through cramped caves without needing to slow down.",
        fr: "Il vole en contrôlant librement ses quatre ailes\net peut se déplacer sans avoir besoin de ralentir,\nmême dans les grottes étroites.",
        es: "Controla de forma independiente cada una de\nsus cuatro alas. Puede revolotear por cuevas\nestrechas sin aminorar la velocidad.",
        it: "Vola controllando indipendentemente le sue\nquattro ali. Non riduce la velocità nemmeno\nnelle caverne più anguste.",
        de: "Seine vier Flügel können unabhängig voneinander\nschlagen. So vermag es auch in engen Höhlen\nohne Geschwindigkeitsverlust umherzufliegen.",
        "pt-br": "Este Pokémon bate suas quatro asas com habilidade. Crobat pode voar através de cavernas apertadas sem precisar diminuir a velocidade.",
        "zh-tw": "能夠自在地控制４隻翅膀\n振翅飛翔。即使是在狹窄的\n洞窟裡也能毫不減速地飛舞。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Surprise Strike",
                fr: "Frappe Surprise",
                es: "Golpe Sorpresa",
                it: "Colpo a Sorpresa",
                de: "Überraschungsschlag",
                "pt-br": "Golpe Surpresa",
                "zh-tw": "奇襲攻擊"
            },
            effect: {
                en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 60 more damage.",
                fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 60 puntos de daño más.",
                it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 60 danni in più.",
                de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "如果本回合這只寶可夢從你的替補席移動到活躍位置，則這次攻擊造成的傷害增加 60 點。"
            },
            damage: "60+"
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
