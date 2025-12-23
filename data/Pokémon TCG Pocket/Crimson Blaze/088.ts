import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Oddish",
        "fr": "Mystherbe",
        "es": "Oddish",
        "it": "Oddish",
        "de": "Myrapla",
        "pt-br": "Oddish",
        "zh-tw": "走路草"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "If exposed to moonlight, it starts to move.\nIt roams far and wide at night to scatter its seeds.",
        "fr": "S'il est exposé au clair de lune, il commence à bouger.\nIl se promène la nuit pour disperser ses graines.",
        "es": "Si se expone a la luz de la luna, comienza a moverse.\nDe noche deambula por todas partes para esparcir sus semillas.",
        "it": "Se esposto alla luce lunare, inizia a muoversi.\nVaga in lungo e in largo di notte per spargere i suoi semi.",
        "de": "Wenn es dem Mondlicht ausgesetzt wird, beginnt es sich zu bewegen.\nNachts zieht es weit und breit umher, um seine Samen zu verteilen.",
        "pt-br": "Se exposto ao luar, ele começa a se mover.\nEle vagueia por toda parte à noite para espalhar suas sementes.",
        "zh-tw": "如果暴露在月光下，它就會開始移動。\n它在夜間四處遊蕩以傳播種子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Poison Powder",
                "fr": "Poudre empoisonnée",
                "es": "Polvo de veneno",
                "it": "Polvere di veleno",
                "de": "Giftpulver",
                "pt-br": "Pó Venenoso",
                "zh-tw": "毒粉"
            },
            damage: 10,
            cost: ["Grass"],
            effect: {
                en: "Your opponent's Active Pokémon is now Poisoned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Empoisonné.",
                "es": "El Pokémon Activo de tu rival ahora está Envenenado.",
                "it": "Il Pokémon attivo del tuo avversario ora è avvelenato.",
                "de": "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Envenenado.",
                "zh-tw": "你對手的主動神奇寶貝現在中毒了。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
