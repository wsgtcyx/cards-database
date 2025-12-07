import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
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
    illustrator: "Jerky",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "This form of Oricorio has sipped purple nectar. It uses\nethereal dance steps to call forth the spirits of the dead.",
        "fr": "Cette forme d'Oricorio a siroté du nectar violet. Il utilise\ndes pas de danse éthérés pour invoquer les esprits des morts.",
        "es": "Esta forma de Oricorio ha sorbido néctar morado. se utiliza\npasos de danza etéreos para invocar a los espíritus de los muertos.",
        "it": "Questa forma di Oricorio ha sorseggiato nettare viola. Utilizza\npassi di danza eterei per evocare gli spiriti dei morti.",
        "de": "Diese Form von Oricorio hat violetten Nektar getrunken. Es nutzt\nätherische Tanzschritte, um die Geister der Toten herbeizurufen.",
        "pt-br": "Esta forma de Oricorio bebeu néctar roxo. Ele usa\npassos de dança etéreos para invocar os espíritos dos mortos.",
        "zh-tw": "這種形態的奧里科里奧正在啜飲紫色花蜜。它使用\n飄逸的舞步可以召喚死者的靈魂。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Spiteful Dance",
                "fr": "Danse malveillante",
                "es": "Danza rencorosa",
                "it": "Danza dispettosa",
                "de": "Boshafter Tanz",
                "pt-br": "Dança Malvada",
                "zh-tw": "惡意之舞"
            },
            damage: 20,
            cost: ["Psychic"],
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
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
