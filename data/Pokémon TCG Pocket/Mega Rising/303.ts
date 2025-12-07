import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Oricorio",
        "fr": "Oricorio",
        "es": "oricorio",
        "it": "Oricorio",
        "de": "Oricorio",
        "pt-br": "Oricório",
        "zh-tw": "奧里科里奧"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "This form of Oricorio has sipped yellow nectar.\nIt uses nimble steps to approach opponents,\nthen knocks them out with electric punches.",
        "fr": "Cette forme d'Oricorio a siroté du nectar jaune.\nIl utilise des pas agiles pour s'approcher des adversaires,\npuis les assomme à coups de poings électriques.",
        "es": "Esta forma de Oricorio ha sorbido néctar amarillo.\nUtiliza pasos ágiles para acercarse a los oponentes,\nLuego los noquea con golpes eléctricos.",
        "it": "Questa forma di Oricorio ha sorseggiato nettare giallo.\nUtilizza passi agili per avvicinarsi agli avversari,\npoi li mette fuori combattimento con pugni elettrici.",
        "de": "Diese Form von Oricorio hat gelben Nektar getrunken.\nMit flinken Schritten nähert es sich Gegnern,\nschlägt sie dann mit elektrischen Schlägen nieder.",
        "pt-br": "Esta forma de Oricorio bebeu néctar amarelo.\nEle usa passos ágeis para se aproximar dos oponentes,\nem seguida, nocauteia-os com socos elétricos.",
        "zh-tw": "這種形式的 Oricorio 啜飲著黃色的花蜜。\n它以敏捷的步伐接近對手，\n然後用電拳把他們打倒。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Safeguard",
                "fr": "Sauvegarde",
                "es": "Salvaguardia",
                "it": "Salvaguardia",
                "de": "Sichern",
                "pt-br": "Salvaguarda",
                "zh-tw": "保障"
            },
            effect: {
                en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex.",
                "fr": "Prévenez tous les dégâts infligés à ce Pokémon par les attaques de l'ex Pokémon de votre adversaire.",
                "es": "Evita todo el daño causado a este Pokémon por los ataques del Pokémon ex de tu oponente.",
                "it": "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon ex del tuo avversario.",
                "de": "Verhindere jeglichen Schaden, der diesem Pokémon durch Angriffe des Pokémon-Ex deines Gegners zugefügt wird.",
                "pt-br": "Evite todos os danos causados ​​a este Pokémon por ataques do Pokémon ex do seu oponente.",
                "zh-tw": "防止對手前神奇寶貝的攻擊對該神奇寶貝造成的所有傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Zzzap",
                "fr": "Zzzap",
                "es": "Zzzap",
                "it": "Zzzap",
                "de": "Zzzap",
                "pt-br": "Zzzap",
                "zh-tw": "扎普"
            },
            damage: 50,
            cost: ["Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
