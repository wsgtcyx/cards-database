import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Seviper",
        "fr": "Sévipère",
        "es": "Sevíper",
        "it": "Seviper",
        "de": "Seviper",
        "pt-br": "Seviper",
        "zh-tw": "塞維佩爾"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    description: {
        en: "Constant polishing makes the edge of the blade on\nits tail extremely sharp. It's Zangoose's archrival.",
        "fr": "Un polissage constant rend le bord de la lame plus\nsa queue extrêmement pointue. C'est le grand rival de Zangoose.",
        "es": "El pulido constante hace que el borde de la hoja se mantenga\nsu cola extremadamente afilada. Es el archirrival de Zangoose.",
        "it": "La lucidatura costante rende il filo della lama affilato\nla sua coda estremamente affilata. È l'arcinemico rivale di Zangoose.",
        "de": "Ständiges Polieren macht die Schneide der Klinge fit\nsein Schwanz ist extrem scharf. Es ist Zangooses Erzrivale.",
        "pt-br": "O polimento constante faz com que o fio da lâmina fique\nsua cauda extremamente afiada. É o arquirrival de Zangoose.",
        "zh-tw": "不斷的拋光使刀刃鋒利\n它的尾巴極其鋒利。這是Zangoose的主要競爭對手。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Fateful Fang",
                "fr": "Croc fatidique",
                "es": "Colmillo fatídico",
                "it": "Zanna fatale",
                "de": "Schicksalhafter Fangzahn",
                "pt-br": "Presa Fatídica",
                "zh-tw": "宿命之牙"
            },
            damage: 40,
            cost: ["Darkness", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is Zangoose, this attack does 40 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est Zangoose, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es Zangoose, este ataque hace 40 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è Zangoose, questo attacco infligge 40 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners Zangoose ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for Zangoose, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果對手的出戰寶可夢是讚鵝，則這次攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
