import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Heliolisk",
        "fr": "Iguolta",
        "es": "Heliolisk",
        "it": "Heliolisk",
        "de": "Elezard",
        "pt-br": "Heliolisk",
        "zh-tw": "光電傘蜥"
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    evolveFrom: {
        en: "Helioptile",
        "fr": "Galvaran",
        "es": "Helioptile",
        "it": "Helioptile",
        "de": "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥"
    },
    description: {
        en: "One Heliolisk basking in the sun with its frill\noutspread is all it would take to produce enough\nelectricity to power a city.",
        "fr": "Un Héliolisk se dorant au soleil avec son volant\nil suffit de s'étendre pour produire suffisamment\nl'électricité pour alimenter une ville.",
        "es": "Un Heliolisk tomando el sol con su volante\nextenderse es todo lo que se necesitaría para producir suficiente\nelectricidad para alimentar una ciudad.",
        "it": "Un eliolisco che si crogiola al sole con la sua balza\nla diffusione è tutto ciò che serve per produrre abbastanza\nelettricità per alimentare una città.",
        "de": "Ein Heliolisk sonnt sich mit seiner Rüsche in der Sonne\nOutspread ist alles, was nötig wäre, um genug zu produzieren\nStrom, um eine Stadt mit Strom zu versorgen.",
        "pt-br": "Um Heliolisco tomando sol com seu babado\nespalhar é tudo o que seria necessário para produzir o suficiente\neletricidade para abastecer uma cidade.",
        "zh-tw": "一隻日光蟲帶著褶邊沐浴在陽光下\n只需要擴張就可以生產出足夠的\n電力為城市供電。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Thunderbolt",
                "fr": "Coup de tonnerre",
                "es": "Rayo",
                "it": "Fulmine",
                "de": "Blitz",
                "pt-br": "Raio",
                "zh-tw": "十萬伏特"
            },
            damage: 120,
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "Discard all Energy from this Pokémon.",
                "fr": "Défaussez toute l'énergie de ce Pokémon.",
                "es": "Descarta toda la Energía de este Pokémon.",
                "it": "Scarta tutte le Energie da questo Pokémon.",
                "de": "Lege die gesamte Energie dieses Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的所有能量。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
