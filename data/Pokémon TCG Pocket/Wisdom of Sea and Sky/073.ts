import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
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
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
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
                en: "Rest",
                "fr": "Repos",
                "es": "Descansar",
                "it": "Riposo",
                "de": "Ausruhen",
                "pt-br": "Descansar",
                "zh-tw": "休息"
            },
            cost: ["Colorless"],
            effect: {
                en: "This Pokémon is now Asleep. Heal 30 damage from it.",
                "fr": "Ce Pokémon est maintenant endormi. Soignez-en 30 dégâts.",
                "es": "Este Pokémon ahora está Dormido. Cura 30 daños.",
                "it": "Questo Pokémon è addormentato. Cura 30 danni da esso.",
                "de": "Dieses Pokémon schläft jetzt. Heile 30 Schaden davon.",
                "pt-br": "Este Pokémon agora está dormindo. Cure 30 de dano dele.",
                "zh-tw": "這只神奇寶貝現在已經睡著了。治療 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
