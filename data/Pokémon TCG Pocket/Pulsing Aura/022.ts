import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/022",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/022",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/022",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/022",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/022"
    },
    name: {
        en: "Camerupt",
        fr: "Camérupt",
        es: "Camerupt",
        it: "Camerupt",
        de: "Camerupt",
        "pt-br": "Camerupt",
        "zh-tw": "噴火駝",
        ko: "폭타",
        ja: "バクーダ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    dexId: [323],
    evolveFrom: {
        en: "Numel",
        fr: "Chamallot",
        es: "Numel",
        it: "Numel",
        de: "Camaub",
        "pt-br": "Numel",
        "zh-tw": "呆火駝",
        ko: "둔타",
        ja: "ドンメル"
    },
    stage: "Stage1",
    description: {
        en: "The volcanoes on its back have a major eruption every 10 years—or whenever it becomes really angry.",
        fr: "Les volcans sur son dos ont une éruption majeure tous les 10 ans ou chaque fois qu'il devient vraiment en colère.",
        es: "Los volcanes en su espalda tienen una gran erupción cada 10 años, o cada vez que se enoja mucho.",
        it: "I vulcani sul suo dorso hanno una grande eruzione ogni 10 anni, o ogni volta che diventa davvero arrabbiato.",
        de: "Die Vulkane auf seinem Rücken ereignen sich alle 10 Jahre – oder immer dann, wenn es richtig heftig wird – zu einem großen Ausbruch.",
        "pt-br": "Os vulcões nas suas costas têm uma grande erupção a cada 10 anos – ou sempre que fica realmente furioso.",
        "zh-tw": "它背上的火山每十年就會爆發一次大噴發——或者每當它變得非常憤怒時。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire", "Fire"],
            name: {
                en: "Eruption",
                fr: "Éruption",
                es: "Estallido",
                it: "Eruzione",
                de: "Eruption",
                "pt-br": "Erupção",
                "zh-tw": "噴火"
            },
            effect: {
                en: "Flip 3 coins. For each heads, discard a {R} Energy from this Pokémon. This attack does 30 more damage for each {R} Energy you discarded in this way.",
                fr: "Lancez 3 pièces. Pour chaque face, défaussez une Énergie {R} de ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque {R} Énergie que vous défaussez de cette manière.",
                es: "Lanza 3 monedas. Por cada cara, descarta una Energía {R} de este Pokémon. Este ataque hace 30 daños más por cada {R} Energía que descartes de esta manera.",
                it: "Lancia 3 monete. Per ogni testa, scarta un'Energia {R} da questo Pokémon. Questo attacco infligge 30 danni in più per ogni {R} Energia che hai scartato in questo modo.",
                de: "Wirf 3 Münzen. Lege für jeden Kopf eine {R}-Energie von diesem Pokémon ab. Dieser Angriff verursacht 30 weitere Schadenspunkte für jede {R}-Energie, die du auf diese Weise abgeworfen hast.",
                "pt-br": "Jogue 3 moedas. Para cada cara, descarte uma Energia {R} deste Pokémon. Este ataque causa 30 pontos de dano a mais para cada {R} Energia que você descartou dessa forma.",
                "zh-tw": "翻轉 3 個硬幣。對於每個頭，丟棄該寶可夢的一個 {R} 能量。您以這種方式每丟棄一個 {R} 能量，此攻擊就會造成 30 點額外傷害。"
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
