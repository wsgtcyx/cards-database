import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/090"
    },
    name: {
        en: "Minior",
        fr: "Météno",
        es: "Minior",
        it: "Minior",
        de: "Meteno",
        "pt-br": "Minior",
        "zh-tw": "小隕星",
        ko: "메테노",
        ja: "メテノ"
    },
    illustrator: "OKUBO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [774],
    stage: "Basic",
    description: {
        en: "It feeds on dust in the atmosphere. The color of its core is said to be determined by the composition of the dust it eats."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Cosmic Tackle"
            },
            effect: {
                en: "If your opponent's Active Pokémon has an Ability, this attack does 40 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire possède une Capacité, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival tiene una habilidad, este ataque hace 40 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario ha un'abilità, questo attacco infligge 40 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners über eine Fähigkeit verfügt, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente tiver uma Habilidade, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢擁有能力，則這次攻擊造成的傷害增加 40 點。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
