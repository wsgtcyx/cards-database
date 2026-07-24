import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/062"
    },
    name: {
        en: "Rufflet",
        fr: "Furaiglon",
        es: "Rufflet",
        it: "Rufflet",
        de: "Geronimatz",
        "pt-br": "Rufflet",
        "zh-tw": "毛頭小鷹",
        ko: "수리둥보",
        ja: "ワシボン"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [627],
    stage: "Basic",
    description: {
        en: "With its sharp claws, this Pokémon pierces its prey, and then it pecks at them. Although it also consumes berries, it’s a carnivore at heart.",
        fr: "Il agrippe ses proies avec ses serres effilées\net les picore. Il lui arrive de manger des Baies,\nmais au fond c’est un carnivore.",
        es: "Es un Pokémon carnívoro, aunque no les hace\nascos a las bayas. Clava con ahínco sus garras\nafiladas en la presa para picotearla sin cesar.",
        it: "Infilza le prede con i suoi artigli affilati e le\nattacca a beccate. È principalmente carnivoro,\nma può mangiare anche le bacche.",
        de: "Mit seinen scharfen Fängen packt es seine\nBeute und pickt danach. Generell ist es ein\nFleischfresser, es isst aber auch Beeren.",
        "pt-br": "Com suas garras afiadas, este Pokémon perfura suas presas e depois as bica. Embora também consuma frutas vermelhas, é um carnívoro de coração.",
        "zh-tw": "用尖尖的爪子刺穿獵物\n後啄食。雖然也會吃樹果，\n但基本上是肉食性寶可夢。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
