import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Venusaur ex",
        "fr": "Méga-Florizarre ex",
        "es": "Mega Venusaur ex",
        "it": "Mega Venusaur ex",
        "de": "Mega-Bisaflor ex",
        "pt-br": "Mega Venusaur ex",
        "zh-tw": "超級妙蛙花 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 240,
    types: ["Grass"],
    evolveFrom: {
        en: "Ivysaur",
        "fr": "Herbizarre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Bisaknosp",
        "pt-br": "Ivysaur",
        "zh-tw": "妙蛙草"
    },
    description: {
        en: "In order to support its flower, which has grown\nlarger due to Mega Evolution, its back and legs\nhave become stronger.",
        "fr": "Afin de soutenir sa fleur qui a poussé\nplus grand grâce à Mega Evolution, son dos et ses pattes\nsont devenus plus forts.",
        "es": "Para sostener su flor, que ha crecido\nMás grande debido a la Mega Evolución, su espalda y piernas.\nse han vuelto más fuertes.",
        "it": "Per sostenere il suo fiore, che è cresciuto\npiù grande a causa della megaevoluzione, della schiena e delle gambe\nsono diventati più forti.",
        "de": "Um seine gewachsene Blüte zu unterstützen\ngrößer durch Mega Evolution, seinen Rücken und seine Beine\nsind stärker geworden.",
        "pt-br": "Para sustentar a sua flor, que cresceu\nmaior devido à Mega Evolução, suas costas e pernas\ntornaram-se mais fortes.",
        "zh-tw": "為了支撐它已經長大的花\n由於超級進化，它的背部和腿部變得更大\n變得更強了。"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Critical Bloom",
                "fr": "Floraison critique",
                "es": "Floración crítica",
                "it": "Fioritura critica",
                "de": "Kritische Blüte",
                "pt-br": "Floração Crítica",
                "zh-tw": "致命綻放"
            },
            damage: 120,
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned and Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné et Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado y Dormido.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato e addormentato.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt vergiftet und schläft.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado e Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在中毒並沉睡。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4
};
export default card;
