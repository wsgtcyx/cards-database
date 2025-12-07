import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Stoutland",
        "fr": "Pays robuste",
        "es": "Tierra robusta",
        "it": "Stoutland",
        "de": "Stoutland",
        "pt-br": "Stoutland",
        "zh-tw": "斯托特蘭"
    },
    illustrator: "Whisker",
    rarity: "One Star",
    category: "Pokemon",
    hp: 150,
    types: ["Colorless"],
    evolveFrom: {
        en: "Herdier",
        "fr": "Herdier",
        "es": "herrero",
        "it": "Herdier",
        "de": "Herdier",
        "pt-br": "Pastor",
        "zh-tw": "赫爾迪耶"
    },
    description: {
        en: "Stoutland is immensely proud of its impressive\nmoustache. It's said that moustache length is what\ndetermines social standing among this species.",
        "fr": "Stoutland est immensément fier de son impressionnant\nmoustaches. On dit que la longueur de la moustache est ce qui\ndétermine le statut social de cette espèce.",
        "es": "Stoutland está inmensamente orgulloso de su impresionante\nbigote. Se dice que el largo del bigote es lo que\ndetermina la posición social entre esta especie.",
        "it": "Stoutland è immensamente orgogliosa delle sue impressionanti prestazioni\nbaffi. Si dice che la lunghezza dei baffi sia cosa\ndetermina la posizione sociale di questa specie.",
        "de": "Stoutland ist ungemein stolz auf seine beeindruckende\nSchnurrbart. Man sagt, dass es auf die Schnurrbartlänge ankommt\nbestimmt die soziale Stellung dieser Art.",
        "pt-br": "Stoutland está imensamente orgulhosa de sua impressionante\nbigode. Dizem que o comprimento do bigode é o que\ndetermina a posição social entre esta espécie.",
        "zh-tw": "斯托特蘭為其令人印象深刻的\n小鬍子。據說鬍子的長度是多少\n決定了該物種的社會地位。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Dangerous Bite",
                "fr": "Morsure dangereuse",
                "es": "Mordedura peligrosa",
                "it": "Morso pericoloso",
                "de": "Gefährlicher Biss",
                "pt-br": "Mordida Perigosa",
                "zh-tw": "危險的咬傷"
            },
            damage: 70,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 70 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 70 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 70 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 70 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt dieser Angriff 70 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢是基礎寶可夢，則這次攻擊造成的傷害增加 70 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
