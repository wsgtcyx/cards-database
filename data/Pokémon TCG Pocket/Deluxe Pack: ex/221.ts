import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Rockruff",
        "fr": "Rockruff",
        "es": "rockruff",
        "it": "Rockruff",
        "de": "Rockruff",
        "pt-br": "Rockruff",
        "zh-tw": "洛克拉夫"
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "This Pokémon is very friendly when it's young.\nIts disposition becomes vicious once it matures,\nbut it never forgets the kindness of its master.",
        "fr": "Ce Pokémon est très sympathique lorsqu'il est jeune.\nSon caractère devient vicieux une fois qu'il mûrit,\nmais il n'oublie jamais la gentillesse de son maître.",
        "es": "Este Pokémon es muy amigable cuando es joven.\nSu disposición se vuelve viciosa una vez que madura,\npero nunca olvida la bondad de su amo.",
        "it": "Questo Pokémon è molto amichevole quando è giovane.\nLa sua indole diventa viziosa una volta maturata,\nma non dimentica mai la gentilezza del suo padrone.",
        "de": "Dieses Pokémon ist sehr freundlich, wenn es jung ist.\nSeine Veranlagung wird bösartig, sobald es erwachsen wird,\naber es vergisst nie die Freundlichkeit seines Meisters.",
        "pt-br": "Este Pokémon é muito amigável quando jovem.\nSua disposição se torna viciosa quando amadurece,\nmas nunca esquece a bondade do seu mestre.",
        "zh-tw": "這只神奇寶貝年輕時非常友好。\n成熟後性情就變得惡毒，\n但它永遠不會忘記主人的恩德。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rock Throw",
                "fr": "Lancer de pierre",
                "es": "Lanzamiento de piedras",
                "it": "Lancio di roccia",
                "de": "Steinwurf",
                "pt-br": "Lançamento de pedra",
                "zh-tw": "扔石頭"
            },
            damage: 40,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
