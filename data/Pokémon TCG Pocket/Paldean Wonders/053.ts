import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Houndstone",
        fr: "Tomberro",
        es: "Houndstone",
        it: "Houndstone",
        de: "Friedwuff",
        "pt-br": "Houndstone",
        "zh-tw": "墓揚犬",
        pt: "Houndstone",
        'es-mx': "Houndstone"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    dexId: [972],
    evolveFrom: {
        en: "Greavard",
        fr: "Toutombe",
        es: "Greavard",
        it: "Greavard",
        de: "Gruff",
        "pt-br": "Greavard",
        "zh-tw": "墓仔狗",
        pt: "Greavard",
        'es-mx': "Greavard"
    },
    description: {
        en: "A lovingly mourned Pokémon was reborn as Houndstone. It doesn't like anyone touching the protuberance atop its head.",
        "fr": "Un Pokémon pleuré avec amour renaît sous le nom de Tomberro. Il n’aime pas qu’on touche la protubérance au sommet de sa tête.",
        "es": "Un Pokémon llorado con mucho cariño renació como Houndstone. No le gusta que nadie toque la protuberancia que tiene encima de la cabeza.",
        "it": "Un Pokémon amorevolmente compianto è rinato come Houndstone. Non gli piace che qualcuno tocchi la protuberanza sulla sua testa.",
        "de": "Ein liebevoll betrauertes Pokémon wurde als Friedwuff wiedergeboren. Es mag es nicht, wenn jemand die Ausstülpung auf seinem Kopf berührt.",
        "pt-br": "Um Pokémon carinhosamente lamentado renasceu como Houndstone. Ele não gosta que ninguém toque na protuberância no topo de sua cabeça.",
        "zh-tw": "一隻備受哀悼的寶可夢重生為墓揚犬。它不喜歡任何人觸摸它頭頂的突起。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Last Respects",
                fr: "Hommage Posthume",
                es: "Homenaje Póstumo",
                it: "Omaggio ai KO",
                de: "Letzte Ehre",
                "pt-br": "Últimos respeitos",
                "zh-tw": "最後的敬意",
                pt: "Último Adeus"
            },
            damage: "50+",
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each Psychic Pokémon in your discard pile.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon Psy dans votre pile de défausse.",
                "es": "Este ataque hace 20 daños más por cada Pokémon Psíquico en tu pila de descarte.",
                "it": "Questo attacco infligge 20 danni in più per ogni Pokémon Psico nella tua pila degli scarti.",
                "de": "Dieser Angriff verursacht 20 weitere Schadenspunkte für jedes Psycho-Pokémon in deinem Ablagestapel.",
                "pt-br": "Este ataque causa 20 danos a mais para cada Pokémon Psíquico em sua pilha de descarte.",
                "zh-tw": "此攻擊對你棄牌堆中的每隻心靈寶可夢造成額外 20 點傷害。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
