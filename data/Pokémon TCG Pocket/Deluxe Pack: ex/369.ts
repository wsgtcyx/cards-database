import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Solgaleo ex",
        "fr": "Solgaleo ex",
        "es": "Solgaleo ex",
        "it": "Solgaleo es",
        "de": "Solgaleo ex",
        "pt-br": "Solgaleo ex",
        "zh-tw": "索爾迦雷歐超級"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 180,
    types: ["Metal"],
    evolveFrom: {
        en: "Cosmoem",
        "fr": "Cosmoème",
        "es": "Cosmoem",
        "it": "Cosmoem",
        "de": "Cosmoem",
        "pt-br": "Cosmoema",
        "zh-tw": "科斯莫姆"
    },
    stage: "Stage2",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Rising Road",
                "fr": "Route montante",
                "es": "Camino ascendente",
                "it": "Strada in salita",
                "de": "Steigende Straße",
                "pt-br": "Estrada ascendente",
                "zh-tw": "上升之路"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon.",
                "fr": "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez l'échanger avec votre Pokémon Actif.",
                "es": "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo.",
                "it": "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo.",
                "de": "Wenn sich dieses Pokémon einmal während deines Zuges auf deiner Bank befindet, kannst du es mit deinem Aktiven Pokémon austauschen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá trocá-lo pelo seu Pokémon Ativo.",
                "zh-tw": "在你的回合中，如果這只神奇寶貝在你的替補席上，你可以將它與你的活躍神奇寶貝交換。"
            }
        }],
    attacks: [{
            name: {
                en: "Sol Breaker",
                "fr": "Disjoncteur solaire",
                "es": "Disyuntor de sol",
                "it": "Sol Breaker",
                "de": "Solbrecher",
                "pt-br": "Disjuntor do Sol",
                "zh-tw": "溶膠破壞者"
            },
            damage: 120,
            cost: ["Metal", "Metal"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
