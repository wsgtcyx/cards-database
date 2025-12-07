import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Sylveon",
        "fr": "Sylvéon",
        "es": "Sylveon",
        "it": "Sylveone",
        "de": "Sylveon",
        "pt-br": "Silveon",
        "zh-tw": "西爾文"
    },
    illustrator: "saino misaki",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    description: {
        en: "This Pokémon uses its ribbonlike feelers to send\na soothing aura into its opponents, erasing\ntheir hostility.",
        "fr": "Ce Pokémon utilise ses palpeurs en forme de ruban pour envoyer\nune aura apaisante sur ses adversaires, effaçant\nleur hostilité.",
        "es": "Este Pokémon usa sus antenas en forma de cinta para enviar\nun aura calmante en sus oponentes, borrando\nsu hostilidad.",
        "it": "Questo Pokémon usa le sue antenne a forma di nastro per inviare segnali\nun'aura rilassante nei suoi avversari, cancellando\nla loro ostilità.",
        "de": "Dieses Pokémon nutzt seine bandartigen Fühler zum Senden\neine beruhigende Aura auf seine Gegner, die auslöscht\nihre Feindseligkeit.",
        "pt-br": "Este Pokémon usa suas antenas em forma de fita para enviar\numa aura calmante em seus oponentes, apagando\nsua hostilidade.",
        "zh-tw": "這只神奇寶貝用絲帶狀的觸角發送信息\n給對手帶來舒緩的光環，消除\n他們的敵意。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Evoharmony",
                "fr": "Évoharmonie",
                "es": "Evoarmonía",
                "it": "Evoarmonia",
                "de": "Evoharmony",
                "pt-br": "Evoharmonia",
                "zh-tw": "進化和諧"
            },
            damage: 40,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "This attack does 30 more damage for each Evolution Pokémon on your Bench.",
                "fr": "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon Evolution sur votre Banc.",
                "es": "Este ataque hace 30 daños más por cada Pokémon de Evolución en tu Banca.",
                "it": "Questo attacco infligge 30 danni in più per ogni Pokémon Evoluzione nella tua panchina.",
                "de": "Dieser Angriff fügt jedem Evolutions-Pokémon auf deiner Bank 30 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 danos a mais para cada Pokémon de Evolução no seu Banco.",
                "zh-tw": "此攻擊對你替補席上的每個進化神奇寶貝造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
