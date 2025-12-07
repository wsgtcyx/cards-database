import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Altaria",
        "fr": "Altaria",
        "es": "Altaria",
        "it": "Altaria",
        "de": "Altaria",
        "pt-br": "Altaria",
        "zh-tw": "七夕青鳥",
    },
    illustrator: "miki kudo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Dragon"],
    evolveFrom: {
        en: "Swablu",
        "fr": "Swablu",
        "es": "swablu",
        "it": "Swablu",
        "de": "Schwablu",
        "pt-br": "Swablu",
        "zh-tw": "斯瓦布盧"
    },
    description: {
        en: "If it bonds with a person, it will gently envelop\nthe friend with its soft wings, then hum.",
        "fr": "S'il se lie à une personne, il l'enveloppera doucement\nl'ami avec ses ailes douces, puis fredonne.",
        "es": "Si se une a una persona, la envolverá suavemente.\nel amigo con sus suaves alas, luego tararea.",
        "it": "Se si lega a una persona, la avvolgerà delicatamente\nl'amico con le sue morbide ali, poi canticchia.",
        "de": "Wenn es sich mit einem Menschen verbindet, wird es ihn sanft umhüllen\nder Freund mit seinen weichen Flügeln, dann summen.",
        "pt-br": "Se se relacionar com uma pessoa, envolverá suavemente\no amigo com suas asas macias, então cantarola.",
        "zh-tw": "如果它與一個人結合，它會輕輕地包圍\n朋友帶著柔軟的翅膀，然後哼哼。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Dragon Arcana",
                "fr": "Arcanes du dragon",
                "es": "Arcanos del Dragón",
                "it": "Drago Arcano",
                "de": "Drachen Arcana",
                "pt-br": "Arcano do Dragão",
                "zh-tw": "龍阿卡納"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "If this Pokémon has 2 or more different types of Energy attached, this attack does 60 more damage.",
                "fr": "Si ce Pokémon est attaché à 2 types d'Énergie différents ou plus, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene 2 o más tipos diferentes de Energía unidas, este ataque hace 60 puntos de daño más.",
                "it": "Se questo Pokémon ha 2 o più tipi diversi di Energie assegnate, questo attacco infligge 60 danni in più.",
                "de": "Wenn an dieses Pokémon 2 oder mehr verschiedene Energietypen angelegt sind, fügt dieser Angriff 60 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver 2 ou mais tipos diferentes de Energia anexados, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果該神奇寶貝附加了 2 種或以上不同類型的能量，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 2
};
export default card;
