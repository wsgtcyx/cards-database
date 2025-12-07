import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Lilligant",
        "fr": "Liligant",
        "es": "liligant",
        "it": "Lilligant",
        "de": "Lilligant",
        "pt-br": "Lilligant",
        "zh-tw": "裙兒小姐",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Crown",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Petilil",
        "fr": "Pétilil",
        "es": "Petilil",
        "it": "Petilil",
        "de": "Petilil",
        "pt-br": "Petilil",
        "zh-tw": "百合根娃娃",
    },
    description: {
        en: "No matter how much time and money is spent\nraising it, its flowers are the most beautiful when\nthey bloom in the wild.",
        "fr": "Peu importe le temps et l'argent dépensés\nen l'élevant, ses fleurs sont les plus belles quand\nils fleurissent à l'état sauvage.",
        "es": "No importa cuánto tiempo y dinero se gaste\nlevantándola, sus flores son las más hermosas cuando\nflorecen en la naturaleza.",
        "it": "Non importa quanto tempo e denaro vengono spesi\nallevandolo, i suoi fiori sono i più belli quando\nfioriscono allo stato selvatico.",
        "de": "Egal wie viel Zeit und Geld investiert wird\nWenn man ihn hochzieht, sind seine Blüten am schönsten, wenn\nsie blühen in freier Wildbahn.",
        "pt-br": "Não importa quanto tempo e dinheiro sejam gastos\nao criá-la, suas flores são as mais lindas quando\neles florescem na natureza.",
        "zh-tw": "無論花費多少時間和金錢\n養牠，它的花最美的時候\n它們在野外綻放。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Toughness Aroma",
                "fr": "Arôme de robustesse",
                "es": "Aroma de dureza",
                "it": "Aroma di tenacia",
                "de": "Härtearoma",
                "pt-br": "Aroma de Resistência",
                "zh-tw": "韌性香氣"
            },
            effect: {
                en: "Each of your {G} Pokémon gets +20 HP.",
                "fr": "Chacun de vos {G} Pokémon obtient +20 HP.",
                "es": "Cada uno de tus Pokémon {G} obtiene +20 HP.",
                "it": "Ciascuno dei tuoi Pokémon {G} ottiene +20 HP.",
                "de": "Jedes deiner {G} Pokémon erhält +20 HP.",
                "pt-br": "Cada um dos seus Pokémon {G} recebe +20 HP.",
                "zh-tw": "你的每隻 {G} 神奇寶貝都會獲得 +20 HP。"
            }
        }],
    attacks: [{
            name: {
                en: "Smack",
                "fr": "Claque",
                "es": "Golpe",
                "it": "Schiaffo",
                "de": "Klatschen",
                "pt-br": "Bater",
                "zh-tw": "斯馬克"
            },
            damage: 50,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
