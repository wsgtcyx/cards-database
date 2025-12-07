import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Durant",
        "fr": "Durant",
        "es": "durante",
        "it": "Durant",
        "de": "Durant",
        "pt-br": "Durant",
        "zh-tw": "鐵蟻",
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "They attack in groups, covering themselves in steel\narmor to protect themselves from Heatmor.",
        "fr": "Ils attaquent en groupe, se couvrant d'acier\narmure pour se protéger de Heatmor.",
        "es": "Atacan en grupos, cubriéndose de acero.\narmadura para protegerse de Heatmor.",
        "it": "Attaccano in gruppi, ricoprendosi di acciaio\narmatura per proteggersi da Heatmor.",
        "de": "Sie greifen in Gruppen an und bedecken sich mit Stahl\nRüstung, um sich vor Heatmor zu schützen.",
        "pt-br": "Eles atacam em grupos, cobrindo-se com aço\narmadura para se proteger do Heatmor.",
        "zh-tw": "他們成群結隊地攻擊，用鋼鐵覆蓋自己\n保護自己免受熱魔傷害的盔甲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mountain Munch",
                "fr": "Grignotage de montagne",
                "es": "Masticación de montaña",
                "it": "Munch di montagna",
                "de": "Berg Munch",
                "pt-br": "Montanha Munch",
                "zh-tw": "蒙克山"
            },
            damage: 40,
            cost: ["Grass", "Grass"],
            effect: {
                en: "Discard the top card of your opponent's deck.",
                "fr": "Défaussez la carte du dessus du deck de votre adversaire.",
                "es": "Descarta la carta superior del mazo de tu oponente.",
                "it": "Scarta la prima carta del mazzo del tuo avversario.",
                "de": "Wirf die oberste Karte des Decks deines Gegners ab.",
                "pt-br": "Descarte a carta do topo do baralho do seu oponente.",
                "zh-tw": "丟棄對手牌組頂牌。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
