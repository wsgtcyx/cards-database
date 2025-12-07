import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Arrokuda",
        "fr": "Arrokuda",
        "es": "Arrokuda",
        "it": "Arrokuda",
        "de": "Arrokuda",
        "pt-br": "Arrokuda",
        "zh-tw": "刺梭魚",
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It takes down prey by charging into them with\nits hard, pointed jaw. But Arrokuda's eyesight is\npoor, so this tactic has a low success rate.",
        "fr": "Il abat ses proies en les chargeant avec\nsa mâchoire dure et pointue. Mais la vue d'Arrokuda est\nmédiocre, cette tactique a donc un faible taux de réussite.",
        "es": "Derriba a sus presas cargando contra ellas con\nsu mandíbula dura y puntiaguda. Pero la vista de Arrokuda es\npobre, por lo que esta táctica tiene una baja tasa de éxito.",
        "it": "Abbatte le prede caricandole con\nla sua mascella dura e appuntita. Ma la vista di Arrokuda lo è\npoveri, quindi questa tattica ha un basso tasso di successo.",
        "de": "Es erlegt seine Beute, indem es in sie hineinstürmt\nsein harter, spitzer Kiefer. Aber Arrokudas Sehvermögen ist es\nschlecht, daher hat diese Taktik eine geringe Erfolgsquote.",
        "pt-br": "Ele derruba as presas atacando-as com\nsua mandíbula dura e pontiaguda. Mas a visão de Arrokuda é\npobre, então essa tática tem uma baixa taxa de sucesso.",
        "zh-tw": "它通過沖向獵物來擊倒獵物\n它的下巴堅硬而尖。但阿羅庫達的視力是\n差，所以這個戰術成功率很低。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Peck",
                "fr": "Picorer",
                "es": "Picotear",
                "it": "Pecca",
                "de": "Picken",
                "pt-br": "Peck",
                "zh-tw": "啄"
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
