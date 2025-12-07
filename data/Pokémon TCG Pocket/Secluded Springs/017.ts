import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Slowpoke",
        "fr": "Lambin",
        "es": "Perezoso",
        "it": "Slowpoke",
        "de": "Langweiler",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It is incredibly slow and dopey. It takes five\nseconds for it to feel pain when under attack.",
        "fr": "C'est incroyablement lent et stupide. Il en faut cinq\nsecondes pour qu'il ressente de la douleur lorsqu'il est attaqué.",
        "es": "Es increíblemente lento y tonto. se necesitan cinco\nsegundos para que sienta dolor cuando está siendo atacado.",
        "it": "È incredibilmente lento e stupido. Ce ne vogliono cinque\nsecondi perché senta dolore quando è sotto attacco.",
        "de": "Es ist unglaublich langsam und blöd. Es dauert fünf\nEs dauert mehrere Sekunden, bis es bei einem Angriff Schmerzen verspürt.",
        "pt-br": "É incrivelmente lento e estúpido. Leva cinco\nsegundos para sentir dor quando estiver sob ataque.",
        "zh-tw": "它非常緩慢且愚蠢。需要五個\n受到攻擊時它會感到疼痛幾秒鐘。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
