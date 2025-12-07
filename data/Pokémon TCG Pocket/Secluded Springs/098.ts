import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Gible",
        "fr": "Pignon",
        "es": "gible",
        "it": "Gibile",
        "de": "Gible",
        "pt-br": "Gible",
        "zh-tw": "圓陸鯊",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It skulks in caves, and when prey or an enemy\npasses by, it leaps out and chomps them.\nThe force of its attack sometimes chips its teeth.",
        "fr": "Il se cache dans les grottes et lorsqu'il est une proie ou un ennemi\npasse, il bondit et les ronge.\nLa force de son attaque lui casse parfois les dents.",
        "es": "Se esconde en cuevas, y cuando es presa o un enemigo\npasa, salta y los mastica.\nLa fuerza de su ataque a veces le rompe los dientes.",
        "it": "Si nasconde nelle caverne e quando è una preda o un nemico\npassa, salta fuori e li mastica.\nLa forza del suo attacco a volte gli scheggia i denti.",
        "de": "Es schleicht in Höhlen herum und wenn es um Beute oder Feinde geht\ngeht vorbei, es springt heraus und zerfrisst sie.\nDie Wucht seines Angriffs bricht ihm manchmal die Zähne aus.",
        "pt-br": "Ele se esconde em cavernas e quando uma presa ou inimigo\npassa, salta e os mastiga.\nA força do seu ataque às vezes quebra seus dentes.",
        "zh-tw": "它躲藏在洞穴裡，當獵物或敵人時\n當他們經過時，它會跳出來咬掉他們。\n它的攻擊力有時會碎掉牙齒。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
