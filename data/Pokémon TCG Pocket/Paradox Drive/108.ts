import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/108",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/108",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/108",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/108",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/108",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/108"
    },
    name: {
        en: "Iron Valiant",
        fr: "Garde-de-Fer",
        es: "Ferropaladín",
        it: "Eroeferreo",
        de: "Eisenkrieger",
        "pt-br": "Valentia Férrea",
        "zh-tw": "鐵武者",
        ko: "무쇠무인",
        ja: "テツノブジン"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Crown",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [1006],
    stage: "Basic",
    description: {
        en: "It’s possible that this is the object listed as Iron Valiant in a certain expedition journal.",
        fr: "Il est possible qu'il s'agisse de l'objet répertorié comme Garde-de-Fer dans un certain journal d'expédition.",
        es: "Es posible que este sea el objeto que figura como Ferropaladín en cierto diario de expedición.",
        it: "È possibile che questo sia l'oggetto elencato come Eroeferreo in un certo diario di spedizione.",
        de: "Es ist möglich, dass es sich hierbei um das Objekt handelt, das in einem bestimmten Expeditionstagebuch als Eisenkrieger aufgeführt ist.",
        "pt-br": "É possível que este seja o objeto listado como Valentia Férrea em um determinado diário de expedição.",
        "zh-tw": "這有可能是某個探險日誌中被列為鐵武者的物件。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Future System",
                fr: "Futur système",
                es: "Sistema futuro",
                it: "Sistema futuro",
                de: "Zukünftiges System",
                "pt-br": "Sistema Futuro",
                "zh-tw": "未來系統"
            },
            effect: {
                en: "Attacks used by your Future Pokémon cost 1 less {C} Energy.",
                fr: "Les attaques utilisées par votre Futur Pokémon coûtent 1 {C} Énergie de moins.",
                es: "Los ataques utilizados por tu Futuro Pokémon cuestan 1 {C} Energía menos.",
                it: "Gli attacchi usati dai tuoi Pokémon futuri costano 1 Energia {C} in meno.",
                de: "Angriffe deines Zukunfts-Pokémon kosten 1 {C} Energie weniger.",
                "pt-br": "Os ataques usados ​​pelos seus Pokémon do Futuro custam 1 {C} Energia a menos.",
                "zh-tw": "你的未來寶可夢使用的攻擊消耗 1 點較少的 {C} 能量。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Slicing Blade",
                fr: "Lame Tranchante",
                es: "Cuchilla Cortante",
                it: "Affettalama",
                de: "Schwertschneide",
                "pt-br": "Lâmina Fatiante",
                "zh-tw": "利刃切割"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
