import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/097",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/097",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/097",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/097",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/097",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/097",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/097"
    },
    name: {
        en: "Natu",
        "fr": "Natu",
        "es": "Natu",
        "it": "Natu",
        "de": "Natu",
        "pt-br": "Natu",
        "zh-tw": "天然雀",
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Because its wings aren't yet fully grown, it has to\nhop to get around. It is always staring\nat something.",
        "fr": "Comme ses ailes ne sont pas encore complètement développées, il doit\nhop pour vous déplacer. Il regarde toujours\nà quelque chose.",
        "es": "Debido a que sus alas aún no han crecido completamente, tiene que\nsalta para moverte. siempre esta mirando\nen algo.",
        "it": "Poiché le sue ali non sono ancora completamente sviluppate, deve farlo\nspero di andare in giro. Sta sempre fissando\na qualcosa.",
        "de": "Da seine Flügel noch nicht vollständig ausgewachsen sind, muss es das tun\nHop, um herumzukommen. Es starrt immer\nbei etwas.",
        "pt-br": "Como suas asas ainda não estão totalmente desenvolvidas, ele precisa\npule para se locomover. Está sempre olhando\nem alguma coisa.",
        "zh-tw": "因為它的翅膀還沒有完全長出來，所以它必須\n跳來跳去。它總是凝視著\n在某件事上。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Peck",
                "fr": "Picorer",
                "es": "Picotear",
                "it": "Pecca",
                "de": "Picken",
                "pt-br": "Peck",
                "zh-tw": "啄"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
