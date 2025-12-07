import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Heatmor",
        "fr": "Chaleur",
        "es": "calormor",
        "it": "Morore di calore",
        "de": "Heatmor",
        "pt-br": "Calormor",
        "zh-tw": "熱莫爾"
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fire"],
    description: {
        en: "There's a hole in its tail that allows it to draw in\nthe air it needs to keep its fire burning. If the\nhole gets blocked, this Pokémon will fall ill.",
        "fr": "Il y a un trou dans sa queue qui lui permet de rentrer\nl'air dont il a besoin pour entretenir son feu. Si le\nSi le trou est bouché, ce Pokémon tombera malade.",
        "es": "Hay un agujero en su cola que le permite atraer\nel aire que necesita para mantener encendido su fuego. si el\nEl agujero se bloquea, este Pokémon enfermará.",
        "it": "C'è un buco nella coda che gli permette di entrare\nl'aria di cui ha bisogno per mantenere acceso il fuoco. Se il\nbuco viene bloccato, questo Pokémon si ammalerà.",
        "de": "In seinem Schwanz befindet sich ein Loch, durch das er einziehen kann\ndie Luft, die es braucht, um sein Feuer am Brennen zu halten. Wenn die\nWenn das Loch blockiert wird, wird dieses Pokémon krank.",
        "pt-br": "Há um buraco na cauda que permite que ele puxe\no ar de que necessita para manter o fogo aceso. Se o\nburaco for bloqueado, este Pokémon ficará doente.",
        "zh-tw": "它的尾巴上有一個洞，可以讓它吸入\n保持火焰燃燒所需的空氣。如果\n洞被堵住了，這只神奇寶貝就會生病。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Roasting Heat",
                "fr": "Chaleur de torréfaction",
                "es": "Calor tostado",
                "it": "Calore da tostatura",
                "de": "Rösthitze",
                "pt-br": "Calor de torrefação",
                "zh-tw": "烘烤熱量"
            },
            damage: 30,
            cost: ["Fire", "Fire"],
            effect: {
                en: "If your opponent's Active Pokémon is Burned, this attack does 60 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est Brûlé, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival está Quemado, este ataque hace 60 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è bruciato, questo attacco infligge 60 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners verbrannt ist, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Queimado, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢被燒毀，則這次攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
