import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Dedenne",
        "fr": "Dédenné",
        "es": "Dedenne",
        "it": "Dedenne",
        "de": "Dedenne",
        "pt-br": "Dedenne",
        "zh-tw": "德登內"
    },
    illustrator: "Yuka Morii",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "Dedenne emit electrical waves from the whiskers\non their cheeks to communicate with each other.\nWhen low on electricity, they curl up and sleep.",
        "fr": "Dedenne émet des ondes électriques depuis les moustaches\nsur leurs joues pour communiquer entre eux.\nLorsqu’ils manquent d’électricité, ils se recroquevillent et dorment.",
        "es": "Los Dedenne emiten ondas eléctricas desde los bigotes.\nen sus mejillas para comunicarse entre sí.\nCuando les queda poca electricidad, se acurrucan y duermen.",
        "it": "I Dedenne emettono onde elettriche dai baffi\nsulle guance per comunicare tra loro.\nQuando sono a corto di elettricità, si rannicchiano e dormono.",
        "de": "Dedenne senden elektrische Wellen aus den Schnurrhaaren aus\nauf ihren Wangen, um miteinander zu kommunizieren.\nWenn der Strom knapp wird, rollen sie sich zusammen und schlafen.",
        "pt-br": "Dedenne emite ondas elétricas dos bigodes\nem suas bochechas para se comunicarem entre si.\nQuando estão com pouca eletricidade, eles se enrolam e dormem.",
        "zh-tw": "德登納的鬍鬚發射電波\n在他們的臉頰上互相交流。\n當電力不足時，它們會蜷縮起來睡覺。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Electric Nibbling",
                "fr": "Grignotage électrique",
                "es": "Mordisqueo eléctrico",
                "it": "Roditura elettrica",
                "de": "Elektrisches Knabbern",
                "pt-br": "Mordiscar Elétrica",
                "zh-tw": "電動蠶食"
            },
            damage: 20,
            cost: ["Colorless"],
            effect: {
                en: "Discard a {L} Energy from your opponent's Active Pokémon.",
                "fr": "Défaussez une {L} Énergie du Pokémon Actif de votre adversaire.",
                "es": "Descarta una Energía {L} del Pokémon Activo de tu rival.",
                "it": "Scarta un'Energia {L} dal Pokémon attivo del tuo avversario.",
                "de": "Wirf eine {L}-Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Descarte uma Energia {L} do Pokémon Ativo do seu oponente.",
                "zh-tw": "丟棄對手的活躍神奇寶貝的 {L} 能量。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
