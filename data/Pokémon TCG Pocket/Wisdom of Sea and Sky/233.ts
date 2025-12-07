import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Leafeon ex",
        "fr": "Leafeon ex",
        "es": "Leafeon ex",
        "it": "Leafeon es",
        "de": "Leafeon ex",
        "pt-br": "Ex de Leafeon",
        "zh-tw": "葉豐EX"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Forest Breath",
                "fr": "Souffle de la forêt",
                "es": "Aliento del bosque",
                "it": "Respiro della foresta",
                "de": "Waldatem",
                "pt-br": "Respiração da Floresta",
                "zh-tw": "森林呼吸"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may take a {G} Energy from your Energy Zone and attach it to 1 of your {G} Pokémon.",
                "fr": "Une fois pendant votre tour, si ce Pokémon est dans le Point Actif, vous pouvez prendre une Énergie {G} de votre Zone d'Énergie et l'attacher à 1 de vos Pokémon {G}.",
                "es": "Una vez durante tu turno, si este Pokémon está en el Punto Activo, puedes tomar una Energía {G} de tu Zona de Energía y unirla a 1 de tus Pokémon {G}.",
                "it": "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi prendere un'Energia {G} dalla tua Zona Energetica e assegnarla a 1 dei tuoi Pokémon {G}.",
                "de": "Wenn sich dieses Pokémon einmal während deines Zuges an der aktiven Stelle befindet, kannst du eine {G}-Energie aus deiner Energiezone nehmen und sie an 1 deiner {G}-Pokémon anlegen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Ponto Ativo, você poderá pegar uma Energia {G} da sua Zona de Energia e ligá-la a 1 dos seus {G} Pokémon.",
                "zh-tw": "在你的回合中，如果這只神奇寶貝位於活動位置，你可以從你的能量區取出一個 {G} 能量並將其附加到你的 1 只 {G} 神奇寶貝上。"
            }
        }],
    attacks: [{
            name: {
                en: "Solar Beam",
                "fr": "Faisceau solaire",
                "es": "Haz solar",
                "it": "Raggio solare",
                "de": "Sonnenstrahl",
                "pt-br": "Raio Solar",
                "zh-tw": "太陽光束"
            },
            damage: 70,
            cost: ["Grass", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
