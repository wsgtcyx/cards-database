import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/180",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/180",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/180",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/180",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/180"
    },
    name: {
        en: "Teal Mask Ogerpon ex",
        "fr": "Masque Sarcelle Ogerpon ex",
        "es": "Máscara Verde Azulado Ogerpon ex",
        "it": "Maschera verde acqua Ogerpon ex",
        "de": "Blaugrüne Maske Ogerpon ex",
        "pt-br": "Máscara Teal Ogerpon ex",
        "zh-tw": "青色面具 Ogerpon ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Soothing Wind",
                "fr": "Vent apaisant",
                "es": "Viento calmante",
                "it": "Vento calmante",
                "de": "Beruhigender Wind",
                "pt-br": "Vento calmante",
                "zh-tw": "舒緩的風"
            },
            effect: {
                en: "Each of your Pokémon that has any Energy attached recovers from all Special Conditions and can't be affected by any Special Conditions.",
                "fr": "Chacun de vos Pokémon auquel est attachée une Énergie récupère de toutes les Conditions Spéciales et ne peut être affecté par aucune Conditions Spéciales.",
                "es": "Cada uno de tus Pokémon que tenga alguna Energía unida se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
                "it": "Ciascuno dei tuoi Pokémon a cui sono assegnate delle Energie si riprende da tutte le condizioni speciali e non può essere influenzato da alcuna condizione speciale.",
                "de": "Jedes deiner Pokémon, an das Energie angelegt ist, erholt sich von allen Sonderzuständen und kann von keinen Sonderzuständen betroffen sein.",
                "pt-br": "Cada um dos seus Pokémon que tenha alguma Energia anexada se recupera de todas as Condições Especiais e não pode ser afetado por nenhuma Condição Especial.",
                "zh-tw": "你的每隻附有能量的神奇寶貝都會從所有特殊狀況中恢復，並且不會受到任何特殊狀況的影響。"
            }
        }],
    attacks: [{
            name: {
                en: "Energized Leaves",
                "fr": "Feuilles dynamisées",
                "es": "Hojas energizadas",
                "it": "Foglie energizzate",
                "de": "Energetisierte Blätter",
                "pt-br": "Folhas Energizadas",
                "zh-tw": "充滿活力的葉子"
            },
            damage: 60,
            cost: ["Grass", "Grass"],
            effect: {
                en: "If the amount of Energy attached to both Active Pokémon is 5 or more, this attack does 60 more damage.",
                "fr": "Si la quantité d'Énergie attachée aux deux Pokémon Actifs est de 5 ou plus, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si la cantidad de Energía unida a ambos Pokémon Activos es 5 o más, este ataque hace 60 puntos de daño más.",
                "it": "Se la quantità di Energie assegnate a entrambi i Pokémon attivi è pari o superiore a 5, questo attacco infligge 60 danni in più.",
                "de": "Wenn die an beide Aktiven Pokémon angelegte Energiemenge 5 oder mehr beträgt, fügt dieser Angriff 60 Schadenspunkte mehr zu.",
                "pt-br": "Se a quantidade de Energia ligada a ambos os Pokémon Ativos for 5 ou mais, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果兩隻活躍寶可夢身上附加的能量為 5 點或更多，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
