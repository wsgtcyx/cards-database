import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Greedent",
        es: "Greedent",
        "fr": "Greedent",
        "it": "Greedent",
        "de": "Greedent",
        "pt-br": "Ganancioso",
        "zh-tw": "格利登特"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    evolveFrom: {
        en: "Skwovet",
        es: "Skwovet",
        "fr": "Skwovet",
        "it": "Skwovet",
        "de": "Skwovet",
        "pt-br": "Skwovet",
        "zh-tw": "斯克沃維特"
    },
    description: {
        en: "This Pokémon makes off with heaps of fallen berries by wrapping\nthem in its tail, which is roughly twice the length of its body.",
        es: "Su cola es el doble de larga que su cuerpo.\nEnvuelve con ella las bayas que tira de los\nárboles para llevárselas consigo.",
        "fr": "Ce Pokémon s'enfuit avec des tas de baies tombées en les enveloppant\nles dans sa queue, qui fait environ deux fois la longueur de son corps.",
        "it": "Questo Pokémon scappa con un mucchio di bacche cadute avvolgendole\nnella sua coda, che è circa il doppio della lunghezza del suo corpo.",
        "de": "Dieses Pokémon macht sich mit haufenweise heruntergefallenen Beeren davon, indem es es einwickelt\nsie in seinem Schwanz, der ungefähr doppelt so lang wie sein Körper ist.",
        "pt-br": "Este Pokémon foge com montes de frutas caídas embrulhando-as\nem sua cauda, que tem aproximadamente o dobro do comprimento de seu corpo.",
        "zh-tw": "這只神奇寶貝通過包裹掉落的漿果堆逃跑\n它們在它的尾巴上，尾巴的長度大約是它身體的兩倍。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Enhanced Fang",
                es: "Incisivos Mejorados",
                "fr": "Croc amélioré",
                "it": "Zanna potenziata",
                "de": "Verbesserter Fangzahn",
                "pt-br": "Presa Aprimorada",
                "zh-tw": "強化方牙"
            },
            damage: 50,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 50 more damage.",
                es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
                "fr": "Si ce Pokémon est attaché à un Outil Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
                "it": "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 50 danni in più.",
                "de": "Wenn an dieses Pokémon ein Pokémon-Werkzeug angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon anexada, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果該神奇寶貝附加了神奇寶貝工具，則此攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
