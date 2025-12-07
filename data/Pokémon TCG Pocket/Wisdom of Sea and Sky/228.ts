import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Nidoking",
        "fr": "Nidoking",
        "es": "Nidoking",
        "it": "Nidoking",
        "de": "Nidoking",
        "pt-br": "Nidoking",
        "zh-tw": "尼多王",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Darkness"],
    evolveFrom: {
        en: "Nidorino",
        "fr": "Nidorino",
        "es": "nidorino",
        "it": "Nidorino",
        "de": "Nidorino",
        "pt-br": "Nidorino",
        "zh-tw": "尼多力諾",
    },
    description: {
        en: "When it goes on a rampage, it's impossible to\ncontrol. But in the presence of a Nidoqueen it's\nlived with for a long time, Nidoking calms down.",
        "fr": "Quand il se déchaîne, il est impossible de\ncontrôle. Mais en présence d'une Nidoqueen c'est\nvécu longtemps, Nidoking se calme.",
        "es": "Cuando se desboca, es imposible\ncontrolar. Pero en presencia de una Nidoqueen es\nvivido durante mucho tiempo, Nidoking se calma.",
        "it": "Quando va su tutte le furie, è impossibile\ncontrollo. Ma in presenza di una Nidoqueen lo è\ncon cui convive da molto tempo, Nidoking si calma.",
        "de": "Wenn es tobt, ist das unmöglich\nKontrolle. Aber in der Gegenwart einer Nidoqueen ist es so\nNidoking, mit dem er lange zusammenlebte, beruhigt sich.",
        "pt-br": "Quando fica furioso, é impossível\ncontrole. Mas na presença de uma Nidoqueen é\nconviveu por muito tempo, Nidoking se acalma.",
        "zh-tw": "當它狂暴起來時，就不可能了\n控制。但在尼多女王面前\n相處久了，尼多金平靜下來。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Poison Horn",
                "fr": "Corne empoisonnée",
                "es": "Cuerno venenoso",
                "it": "Corno Velenoso",
                "de": "Gifthorn",
                "pt-br": "Chifre Venenoso",
                "zh-tw": "毒角"
            },
            damage: 90,
            cost: ["Darkness", "Darkness", "Colorless"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
