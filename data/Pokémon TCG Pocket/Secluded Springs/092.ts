import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Monferno",
        "fr": "Montferno",
        "es": "Monferno",
        "it": "Monferno",
        "de": "Monferno",
        "pt-br": "Monferno",
        "zh-tw": "猛火猴",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Chimchar",
        "fr": "Chimchar",
        "es": "Chimchar",
        "it": "Chimchar",
        "de": "Chimchar",
        "pt-br": "Chimchar",
        "zh-tw": "小火焰猴",
    },
    description: {
        en: "It skillfully controls the intensity of the fire on its\ntail to keep its foes at an ideal distance.",
        "fr": "Il contrôle habilement l'intensité du feu sur son\nqueue pour maintenir ses ennemis à une distance idéale.",
        "es": "Controla hábilmente la intensidad del fuego en su\ncola para mantener a sus enemigos a una distancia ideal.",
        "it": "Controlla abilmente l'intensità del fuoco sul suo\ncoda per mantenere i suoi nemici a una distanza ideale.",
        "de": "Es steuert gekonnt die Intensität des Feuers auf seinem Gerät\nSchwanz, um seine Feinde auf ideale Distanz zu halten.",
        "pt-br": "Ele controla habilmente a intensidade do fogo em seu\ncauda para manter seus inimigos a uma distância ideal.",
        "zh-tw": "它巧妙地控制著火勢的強度\n尾巴使敵人保持理想的距離。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fiery Punch",
                "fr": "Coup de poing enflammé",
                "es": "Puñetazo ardiente",
                "it": "Pugno ardente",
                "de": "Feuriger Schlag",
                "pt-br": "Soco de Fogo",
                "zh-tw": "烈火拳"
            },
            damage: 30,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
