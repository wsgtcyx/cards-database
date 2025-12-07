import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Dawn Wings Necrozma",
        es: "Necrozma Alas del Alba",
        "fr": "Necrozma Ailes de l'Aube",
        "it": "Necrozma delle Ali dell'Aurora",
        "de": "Dawn Wings Necrozma",
        "pt-br": "Necrozma Asas do Amanhecer",
        "zh-tw": "奈克洛茲瑪（拂曉之翼）",
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Psychic"],
    description: {
        en: "Lunala no longer has a will of its own. Now under the\ncontrol of Necrozma, it continuously expels all of its energy.",
        es: "En esta forma, Lunala no goza de voluntad propia. Necrozma\ntiene control absoluto y absorbe su energía poco a poco.",
        "fr": "Lunala n'a plus de volonté propre. Maintenant sous le\ncontrôle de Necrozma, il expulse continuellement toute son énergie.",
        "it": "Lunala non ha più una volontà propria. Ora sotto il\ncontrollo di Necrozma, espelle continuamente tutta la sua energia.",
        "de": "Lunala hat keinen eigenen Willen mehr. Jetzt unter dem\nWenn es die Kontrolle über Necrozma erlangt, stößt es kontinuierlich seine gesamte Energie aus.",
        "pt-br": "Lunala não tem mais vontade própria. Agora sob o\ncontrole de Necrozma, ele expele continuamente toda a sua energia.",
        "zh-tw": "露娜拉不再有自己的意志。現在在\n控制奈克洛茲瑪，它不斷地排出其所有能量。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Psychobilly",
                es: "Psychobilly",
                "fr": "Psychobilly",
                "it": "Psicobilly",
                "de": "Psychobilly",
                "pt-br": "Psicobilly",
                "zh-tw": "心理比利"
            },
            damage: 100,
            cost: ["Psychic", "Colorless", "Colorless"],
            effect: {
                en: "This Pokémon also does 30 damage to itself.",
                es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
                "fr": "Ce Pokémon s'inflige également 30 dégâts.",
                "it": "Questo Pokémon infligge anche 30 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 30 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 30 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol9"]
};
export default card;
