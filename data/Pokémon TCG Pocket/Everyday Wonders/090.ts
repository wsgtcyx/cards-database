import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/090",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/090"
    },
    name: {
        en: "Dedenne ex",
        fr: "Dedenne-ex",
        es: "Dedenne ex",
        it: "Dedenne-ex",
        de: "Dedenne-ex",
        "pt-br": "Dedenne ex",
        "zh-tw": "咚咚鼠ex",
        ko: "데덴네 ex",
        ja: "デデンネex"
    },
    illustrator: "OKACHEKE",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    dexId: [702],
    stage: "Basic",
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Dede-Circuit",
                fr: "Circuit Dédé",
                es: "Circuito Dede",
                it: "Dede-Circuito",
                de: "Dede-Schaltung",
                "pt-br": "Circuito Dede",
                "zh-tw": "咚咚陣"
            },
            effect: {
                en: "This attack does 40 damage for each Pokémon Tool attached to all of your Pokémon.",
                fr: "Cette attaque inflige 40 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
                es: "Este ataque hace 40 daños por cada Herramienta Pokémon adjunta a todos tus Pokémon.",
                it: "Questo attacco infligge 40 danni per ogni Oggetto Pokémon assegnato a tutti i tuoi Pokémon.",
                de: "Dieser Angriff fügt 40 Schadenspunkte für jedes Pokémon-Werkzeug zu, das an alle deine Pokémon angelegt ist.",
                "pt-br": "Este ataque causa 40 de dano para cada Ferramenta Pokémon anexada a todos os seus Pokémon.",
                "zh-tw": "此攻擊對你所有寶可夢上附加的每個寶可夢工具造成 40 點傷害。"
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
