import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Marshadow",
        "fr": "Marshadow",
        "es": "Sombra de mar",
        "it": "Marshadow",
        "de": "Marshadow",
        "pt-br": "sombra de mar",
        "zh-tw": "瑪夏多"
    },
    illustrator: "kantaro",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "It slips into the shadows of others and mimics\ntheir powers and movements. As it improves, it\nbecomes stronger than those it's imitating.",
        "fr": "Il se glisse dans l'ombre des autres et imite\nleurs pouvoirs et leurs mouvements. À mesure qu'il s'améliore, il\ndevient plus fort que ceux qu’il imite.",
        "es": "Se desliza hacia las sombras de los demás e imita\nsus poderes y movimientos. A medida que mejora,\nse vuelve más fuerte que aquellos a quienes imita.",
        "it": "Scivola nell'ombra degli altri e imita\ni loro poteri e movimenti. Man mano che migliora, esso\ndiventa più forte di quelli che sta imitando.",
        "de": "Es schlüpft in den Schatten anderer und ahmt nach\nihre Kräfte und Bewegungen. Wenn es sich verbessert, wird es\nwird stärker als diejenigen, die es imitiert.",
        "pt-br": "Ele desliza para as sombras dos outros e imita\nseus poderes e movimentos. À medida que melhora,\ntorna-se mais forte do que aqueles que está imitando.",
        "zh-tw": "它潛入他人的陰影並模仿\n他們的力量和動作。當它改善時，它\n變得比它模仿的人更強。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Revenge",
                "fr": "Vengeance",
                "es": "Venganza",
                "it": "Vendetta",
                "de": "Rache",
                "pt-br": "Vingança",
                "zh-tw": "復仇"
            },
            damage: 40,
            cost: ["Fighting", "Colorless"],
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
                "fr": "Si l'un de vos Pokémon a été mis KO par les dégâts d'une attaque lors du dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si alguno de tus Pokémon quedó fuera de combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
                "it": "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni di un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
                "de": "Wenn eines deiner Pokémon im letzten Zug deines Gegners durch Schaden durch einen Angriff kampfunfähig gemacht wurde, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se algum dos seus Pokémon foi nocauteado pelo dano de um ataque durante o último turno do seu oponente, esse ataque causará 60 de dano a mais.",
                "zh-tw": "如果你的任何一隻神奇寶貝在對手的最後回合中因攻擊而被擊倒，則這次攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
