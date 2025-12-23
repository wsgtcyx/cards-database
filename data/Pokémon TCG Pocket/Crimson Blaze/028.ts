import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Helioptile",
        "fr": "Galvaran",
        "es": "Helioptile",
        "it": "Helioptile",
        "de": "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "The sun powers this Pokémon's electricity\ngeneration. Interruption of that process\nstresses Helioptile to the point of weakness.",
        "fr": "Le soleil alimente l'électricité de ce Pokémon\ngénération. Interruption de ce processus\n» souligne Helioptile jusqu'à la faiblesse.",
        "es": "El sol alimenta la electricidad de este Pokémon\ngeneración. Interrupción de ese proceso.\nestresa a Helioptile hasta el punto de debilitarlo.",
        "it": "Il sole alimenta l'elettricità di questo Pokémon\ngenerazione. Interruzione di quel processo\nsottolinea Helioptile fino al punto di debolezza.",
        "de": "Die Sonne treibt die Elektrizität dieses Pokémon an\nGeneration. Unterbrechung dieses Prozesses\nbetont Helioptile bis zur Schwäche.",
        "pt-br": "O sol alimenta a eletricidade deste Pokémon\ngeração. Interrupção desse processo\nestressa Helioptile ao ponto da fraqueza.",
        "zh-tw": "太陽為這個神奇寶貝提供電力\n一代。中斷該過程\nHelioptile 的壓力已經到了虛弱的程度。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Thunder Shock",
                "fr": "Choc du tonnerre",
                "es": "Choque de trueno",
                "it": "Scossa di tuono",
                "de": "Donnerschock",
                "pt-br": "Choque do trovão",
                "zh-tw": "電擊"
            },
            damage: 10,
            cost: ["Lightning"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
