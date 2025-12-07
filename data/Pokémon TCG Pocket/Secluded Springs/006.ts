import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Celebi",
        "fr": "Célébi",
        "es": "celeb",
        "it": "Celebi",
        "de": "Celebi",
        "pt-br": "Celebi",
        "zh-tw": "塞拉比"
    },
    illustrator: "Yuu Nishida",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "This Pokémon wanders across time. Grass and trees\nflourish in the forests in which it has appeared.",
        "fr": "Ce Pokémon erre dans le temps. Herbe et arbres\nprospérer dans les forêts dans lesquelles il est apparu.",
        "es": "Este Pokémon viaja a través del tiempo. Hierba y árboles\nflorecer en los bosques en los que ha aparecido.",
        "it": "Questo Pokémon vaga nel tempo. Erba e alberi\nfiorire nelle foreste in cui è apparso.",
        "de": "Dieses Pokémon wandert durch die Zeit. Gras und Bäume\ngedeihen in den Wäldern, in denen es aufgetaucht ist.",
        "pt-br": "Este Pokémon vagueia no tempo. Grama e árvores\nflorescer nas florestas em que apareceu.",
        "zh-tw": "這只神奇寶貝穿越時空。草和樹\n在它出現的森林中繁盛。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Temporal Leaves",
                "fr": "Feuilles temporelles",
                "es": "Hojas Temporales",
                "it": "Foglie temporali",
                "de": "Temporale Blätter",
                "pt-br": "Folhas Temporais",
                "zh-tw": "顳葉"
            },
            damage: 40,
            cost: ["Grass", "Grass"],
            effect: {
                en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
                "fr": "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, transférez-le en mettant la carte d'Évolution la plus élevée sur lui dans la main de votre adversaire.",
                "es": "Si el Pokémon Activo de tu oponente es un Pokémon evolucionado, transmítelo poniendo la carta de Etapa de Evolución más alta en la mano de tu oponente.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon evoluto, devoluzione mettendo la carta Evoluzione di Fase più alta nella mano del tuo avversario.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein entwickeltes Pokémon ist, devolviere es, indem du die Karte mit der höchsten Entwicklungsstufe darauf auf die Hand deines Gegners nimmst.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon evoluído, devolva-o colocando a carta de Evolução de Estágio mais alta dele na mão do seu oponente.",
                "zh-tw": "如果對手的活躍寶可夢是進化寶可夢，則將其進化階段最高的卡放入對手手牌，將其移交。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
