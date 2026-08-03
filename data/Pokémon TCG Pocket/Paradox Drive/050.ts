import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/050",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/050",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/050"
    },
    name: {
        en: "Copperajah",
        fr: "Pachyradjah",
        es: "Copperajah",
        it: "Copperajah",
        de: "Patinaraja",
        "pt-br": "Copperajah",
        "zh-tw": "大王銅象",
        ko: "대왕끼리동",
        ja: "ダイオウドウ"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Metal"],
    dexId: [879],
    evolveFrom: {
        en: "Cufant",
        fr: "Charibari",
        es: "Cufant",
        it: "Cufant",
        de: "Kupfanti",
        "pt-br": "Cufant",
        "zh-tw": "銅象",
        ko: "끼리동",
        ja: "ゾウドウ"
    },
    stage: "Stage1",
    description: {
        en: "Copperajah are prideful, cantankerous Pokémon. Specimens with vibrant green skin command the respect of others of their kind.",
        fr: "Pachyradjah sont des Pokémon fiers et capricieux. Les spécimens à la peau verte vibrante imposent le respect aux autres de leur espèce.",
        es: "Copperajah son Pokémon orgullosos y cascarrabias. Los especímenes con piel verde vibrante inspiran el respeto de otros de su especie.",
        it: "Gli Copperajah sono Pokémon orgogliosi e irascibili. Gli esemplari dalla pelle verde vibrante esigono il rispetto degli altri della loro specie.",
        de: "Patinaraja sind stolze, streitsüchtige Pokémon. Exemplare mit leuchtend grüner Haut erregen den Respekt ihrer Artgenossen.",
        "pt-br": "Copperajah são Pokémon orgulhosos e rabugentos. Espécimes com pele verde vibrante conquistam o respeito de outros de sua espécie.",
        "zh-tw": "大王銅象 是驕傲、脾氣暴躁的寶可夢。擁有充滿活力的綠色皮膚的標本贏得了同類的尊重。"
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            name: {
                en: "Iron Swing",
                fr: "Balançoire en fer",
                es: "Columpio de hierro",
                it: "Altalena in ferro",
                de: "Eisenschaukel",
                "pt-br": "Balanço de Ferro",
                "zh-tw": "鐵之掃"
            },
            effect: {
                en: "Flip 2 coins. This attack does 100 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 100 de daño por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 100 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 100 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 100 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。此攻擊對每個頭造成 100 點傷害。"
            },
            damage: "100x"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
