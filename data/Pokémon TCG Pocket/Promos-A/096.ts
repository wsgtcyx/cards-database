import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Houndoom",
        "fr": "Chien de chasse",
        "es": "Houndoom",
        "it": "Houndom",
        "de": "Hundoom",
        "pt-br": "Houndoom",
        "zh-tw": "黑杜姆"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    evolveFrom: {
        en: "Houndour",
        "fr": "Chien",
        "es": "Houndour",
        "it": "Houndour",
        "de": "Hundour",
        "pt-br": "Cão de caça",
        "zh-tw": "獵犬"
    },
    description: {
        en: "If you are burned by the flames it shoots from its\nmouth, the pain will never go away.",
        "fr": "Si vous êtes brûlé par les flammes, elles jaillissent de son\nbouche, la douleur ne disparaîtra jamais.",
        "es": "Si te queman las llamas que dispara desde su\nboca, el dolor nunca desaparecerá.",
        "it": "Se vieni bruciato dalle fiamme spara dalle sue\nbocca, il dolore non andrà mai via.",
        "de": "Wenn Sie von den Flammen verbrannt werden, schießt es daraus\nMund, der Schmerz wird nie verschwinden.",
        "pt-br": "Se você for queimado pelas chamas, elas dispararão de seu\nboca, a dor nunca irá embora.",
        "zh-tw": "如果你被它噴出的火焰燒傷\n嘴裡的疼痛永遠不會消失。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Diving Swipe",
                "fr": "Balayage de plongée",
                "es": "Deslizamiento de buceo",
                "it": "Scorrimento in immersione",
                "de": "Tauchender Schlag",
                "pt-br": "Mergulho",
                "zh-tw": "潛水滑動"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Darkness"],
            effect: {
                en: "Discard a random card from your opponent's hand.",
                "fr": "Défaussez une carte aléatoire de la main de votre adversaire.",
                "es": "Descarta una carta aleatoria de la mano de tu oponente.",
                "it": "Scarta una carta a caso dalla mano del tuo avversario.",
                "de": "Wirf eine zufällige Karte aus der Hand deines Gegners ab.",
                "pt-br": "Descarte uma carta aleatória da mão do seu oponente.",
                "zh-tw": "隨機丟棄對手手上的一張牌。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
