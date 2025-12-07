import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Cherubi",
        "fr": "Chérubin",
        "es": "querubín",
        "it": "Cherubini",
        "de": "Cherubi",
        "pt-br": "Querubim",
        "zh-tw": "櫻花寶",
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "It nimbly dashes about to avoid getting pecked\nby bird Pokémon that would love to make off\nwith its small, nutrient-rich storage ball.",
        "fr": "Il se précipite agilement pour éviter de se faire picorer\npar des Pokémon oiseaux qui adoreraient s'enfuir\navec sa petite boule de stockage riche en nutriments.",
        "es": "Corre ágilmente para evitar ser picoteado.\npor Pokémon pájaro al que le encantaría escapar\ncon su pequeña bola de almacenamiento rica en nutrientes.",
        "it": "Si lancia agilmente per evitare di essere beccato\nda Pokémon uccello che vorrebbero scappare\ncon la sua piccola sfera di stoccaggio ricca di sostanze nutritive.",
        "de": "Es rennt flink umher, um nicht gepickt zu werden\nvon Vogel-Pokémon, die sich gerne aus dem Staub machen würden\nmit seiner kleinen, nährstoffreichen Speicherkugel.",
        "pt-br": "Ele corre agilmente para evitar ser bicado\npor Pokémon pássaros que adorariam fugir\ncom sua pequena bola de armazenamento rica em nutrientes.",
        "zh-tw": "它敏捷地奔跑以避免被啄\n喜歡偷走的鳥神奇寶貝\n其小而營養豐富的存儲球。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "En-fruits-iastic",
                "fr": "En-fruits-iastic",
                "es": "En-frutas-iastic",
                "it": "En-fruits-iastic",
                "de": "En-fruits-iastisch",
                "pt-br": "En-frutas-iastic",
                "zh-tw": "水果類"
            },
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, attacks used by this Pokémon cost 1 less {G} Energy.",
                "fr": "Si ce Pokémon est équipé d'un Outil Pokémon, les attaques utilisées par ce Pokémon coûtent 1 {G} Énergie de moins.",
                "es": "Si este Pokémon tiene una Herramienta Pokémon adjunta, los ataques utilizados por este Pokémon cuestan 1 {G} de Energía menos.",
                "it": "Se questo Pokémon ha un'Azione Pokémon assegnata, gli attacchi utilizzati da questo Pokémon costano 1 Energia {G} in meno.",
                "de": "Wenn an dieses Pokémon ein Pokémon-Werkzeug angelegt ist, kosten Angriffe dieses Pokémon 1 {G}-Energie weniger.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon anexada, os ataques usados ​​por este Pokémon custarão 1 {G} Energia a menos.",
                "zh-tw": "如果該神奇寶貝附加了神奇寶貝工具，則該神奇寶貝使用的攻擊會減少 1 點 {G} 能量。"
            }
        }],
    attacks: [{
            name: {
                en: "Sweets Relay",
                "fr": "Relais des Bonbons",
                "es": "Relevo de dulces",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽"
            },
            damage: 10,
            cost: ["Grass"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 20 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 20 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 20 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 20 danos a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 20 點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
