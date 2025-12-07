import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Vanillite",
        es: "Vanillite",
        "fr": "Vanillite",
        "it": "Vanillite",
        "de": "Vanillit",
        "pt-br": "Vanilita",
        "zh-tw": "迷你冰",
    },
    illustrator: "OOYAMA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Unable to survive in hot areas, it makes itself\ncomfortable by breathing out air cold enough to\ncause snow. It burrows into the snow to sleep.",
        es: "No puede vivir en lugares muy cálidos. Provoca\nnevadas exhalando un vaho gélido y luego se\nacurruca en la nieve acumulada para dormir.",
        "fr": "Incapable de survivre dans les zones chaudes, il se crée\nconfortable en expirant de l'air suffisamment froid pour\nprovoquer de la neige. Il s'enfouit dans la neige pour dormir.",
        "it": "Incapace di sopravvivere nelle zone calde, si crea da sola\nconfortevole espirando aria abbastanza fredda da\ncausare la neve. Si nasconde nella neve per dormire.",
        "de": "Da es in heißen Gegenden nicht überlebensfähig ist, macht es sich selbst\nangenehm, indem Sie Luft ausatmen, die kalt genug ist\nSchnee verursachen. Es vergräbt sich im Schnee, um zu schlafen.",
        "pt-br": "Incapaz de sobreviver em áreas quentes, torna-se\nconfortável expirando ar frio o suficiente para\ncausar neve. Ele se enterra na neve para dormir.",
        "zh-tw": "無法在炎熱地區生存，它使自己\n通過呼吸足夠冷的空氣來舒適\n導致下雪。它鑽進雪裡睡覺。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sweets Relay",
                es: "Relevo Dulce",
                "fr": "Relais des Bonbons",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽"
            },
            damage: 10,
            cost: ["Water"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
                es: "Si 1 de tus Pokémon usó Relevo Dulce durante tu último turno, este ataque hace 20 puntos de daño más.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 20 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 20 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 20 danos a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 20 點。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol10"]
};
export default card;
