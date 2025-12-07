import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Golett",
        "fr": "Golett",
        "es": "golet",
        "it": "Golett",
        "de": "Golett",
        "pt-br": "Golett",
        "zh-tw": "泥偶小人",
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "This Pokémon was created from clay. It received\norders from its master many thousands of years\nago, and it still follows those orders to this day.",
        "fr": "Ce Pokémon a été créé à partir d'argile. Il a reçu\nordres de son maître depuis des milliers d'années\nil y a, et il suit toujours ces ordres à ce jour.",
        "es": "Este Pokémon fue creado a partir de arcilla. recibió\nórdenes de su maestro muchos miles de años\nhace, y todavía sigue esas órdenes hasta el día de hoy.",
        "it": "Questo Pokémon è stato creato dall'argilla. Ha ricevuto\nordini dal suo padrone molte migliaia di anni\nfa, e continua a seguire quegli ordini fino ad oggi.",
        "de": "Dieses Pokémon wurde aus Ton hergestellt. Es wurde empfangen\nBefehle von seinem Meister viele tausend Jahre\nvor, und es befolgt diese Befehle bis heute.",
        "pt-br": "Este Pokémon foi criado a partir de argila. Recebeu\nordens de seu mestre há muitos milhares de anos\natrás, e ainda segue essas ordens até hoje.",
        "zh-tw": "這只神奇寶貝是用粘土創造的。它收到了\n來自其主人數千年的命令\n直到今天，它仍然遵循這些命令。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stampede",
                "fr": "Débandade",
                "es": "Estampida",
                "it": "Fuga precipitosa",
                "de": "Ansturm",
                "pt-br": "Debandada",
                "zh-tw": "踩踏"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
