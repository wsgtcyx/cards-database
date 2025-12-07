import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Typhlosion",
        "fr": "Typhlosion",
        "es": "tiflosión",
        "it": "Tiflosione",
        "de": "Typhlosion",
        "pt-br": "Tiflosão",
        "zh-tw": "火暴獸",
    },
    illustrator: "Hideki Ishikawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    evolveFrom: {
        en: "Quilava",
        "fr": "Quilava",
        "es": "Quilavá",
        "it": "Quilava",
        "de": "Quilava",
        "pt-br": "Quilava",
        "zh-tw": "基拉瓦"
    },
    description: {
        en: "If its rage peaks, it becomes so hot that anything\nthat touches it will instantly go up in flames.",
        "fr": "Si sa rage atteint son paroxysme, il devient si chaud que tout\nqui le touche s’enflammera instantanément.",
        "es": "Si su furia alcanza su punto máximo, se vuelve tan caliente que cualquier cosa\nque lo toque arderá instantáneamente en llamas.",
        "it": "Se la sua rabbia raggiunge il picco, diventa così caldo che qualsiasi cosa\nchi lo tocca andrà immediatamente in fiamme.",
        "de": "Wenn seine Wut ihren Höhepunkt erreicht, wird es so heiß, dass nichts mehr passiert\nWer es berührt, geht sofort in Flammen auf.",
        "pt-br": "Se a sua raiva atingir o pico, fica tão quente que qualquer coisa\nque o tocar irá pegar fogo instantaneamente.",
        "zh-tw": "如果它的憤怒達到頂峰，它會變得如此灼熱，以至於任何東西\n觸碰到它就會立刻燃燒起來。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fire Breath",
                "fr": "Souffle de feu",
                "es": "Aliento de fuego",
                "it": "Respiro di fuoco",
                "de": "Feueratem",
                "pt-br": "Sopro de Fogo",
                "zh-tw": "火息"
            },
            effect: {
                en: "Once during your turn, you may make your opponent's Active Pokémon Burned.",
                "fr": "Une fois pendant votre tour, vous pouvez faire brûler le Pokémon Actif de votre adversaire.",
                "es": "Una vez durante tu turno, puedes hacer quemar el Pokémon Activo de tu rival.",
                "it": "Una sola volta durante il tuo turno, puoi far bruciare il Pokémon attivo del tuo avversario.",
                "de": "Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners verbrennen lassen.",
                "pt-br": "Uma vez durante o seu turno, você pode fazer com que o Pokémon Ativo do seu oponente seja Queimado.",
                "zh-tw": "在你的回合中，你可以使對手的活躍寶可夢燃燒一次。"
            }
        }],
    attacks: [{
            name: {
                en: "Magma Punch",
                "fr": "Coup de poing magmatique",
                "es": "Puñetazo de magma",
                "it": "Pugno di magma",
                "de": "Magma-Schlag",
                "pt-br": "Soco de Magma",
                "zh-tw": "岩漿沖床"
            },
            damage: 60,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
