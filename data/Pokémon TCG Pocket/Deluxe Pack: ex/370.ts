import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Eevee ex",
        "fr": "Évoli ex",
        "es": "ex-eevee",
        "it": "Eevee es",
        "de": "Evoli ex",
        "pt-br": "Eevee ex",
        "zh-tw": "伊布EX"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Veevee 'volve",
                "fr": "Veevee 'volve",
                "es": "Veevee 'volve",
                "it": "Veevee si evolve",
                "de": "Veevee 'volve",
                "pt-br": "Veevee 'volve",
                "zh-tw": "威威沃爾沃"
            },
            effect: {
                en: "This Pokémon can evolve into any Pokémon that evolves from Eevee if you play it from your hand onto this Pokémon. (This Pokémon can't evolve during your first turn or the turn you play it.)",
                "fr": "Ce Pokémon peut évoluer vers n'importe quel Pokémon évoluant à partir d'Évoli si vous le jouez depuis votre main sur ce Pokémon. (Ce Pokémon ne peut pas évoluer pendant votre premier tour ou le tour où vous le jouez.)",
                "es": "Este Pokémon puede evolucionar a cualquier Pokémon que evolucione de Eevee si lo juegas desde tu mano contra este Pokémon. (Este Pokémon no puede evolucionar durante tu primer turno ni durante el turno en el que lo juegas).",
                "it": "Questo Pokémon può evolversi in qualsiasi Pokémon che si evolve da Eevee se lo giochi dalla tua mano su questo Pokémon. (Questo Pokémon non può evolversi durante il tuo primo turno o nel turno in cui lo giochi.)",
                "de": "Dieses Pokémon kann sich zu jedem Pokémon entwickeln, das sich aus Evoli entwickelt, wenn du es von deiner Hand auf dieses Pokémon spielst. (Dieses Pokémon kann sich weder in deinem ersten Zug noch in dem Zug, in dem du es ausspielst, weiterentwickeln.)",
                "pt-br": "Este Pokémon pode evoluir para qualquer Pokémon que evolua de Eevee se você jogá-lo da sua mão neste Pokémon. (Este Pokémon não pode evoluir durante o seu primeiro turno ou no turno em que você o joga.)",
                "zh-tw": "如果你從手上將伊布玩到這只神奇寶貝上，這只神奇寶貝可以進化成任何從伊布進化而來的神奇寶貝。 （該神奇寶貝在你的第一個回合或你玩它的回合中無法進化。）"
            }
        }],
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 30,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
