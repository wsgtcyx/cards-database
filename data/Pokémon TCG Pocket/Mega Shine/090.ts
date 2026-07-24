import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/090",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/090"
    },
    name: {
        en: "Trevenant",
        fr: "Desséliande",
        es: "Trevenant",
        it: "Trevenant",
        de: "Trombork",
        "pt-br": "Trevenant",
        "zh-tw": "朽木妖",
        ko: "대로트",
        ja: "オーロット"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 120,
    types: ["Grass"],
    dexId: [709],
    evolveFrom: {
        en: "Phantump",
        fr: "Brocélôme",
        es: "Phantump",
        it: "Phantump",
        de: "Paragoni",
        "pt-br": "Phantump",
        "zh-tw": "小木靈",
        ko: "나목령",
        ja: "ボクレー"
    },
    stage: "Stage1",
    description: {
        en: "Trevenant is very kind to Pokémon living in the forest. It doesn’t even care if these Pokémon take up residence in the greenery on its head.",
        fr: "Desséliande est très gentil avec les Pokémon vivant dans la forêt. Il ne s'en soucie même pas si ces Pokémon s'installent dans la verdure sur sa tête.",
        es: "Trevenant es muy amable con los Pokémon que viven en el bosque. Ni siquiera le importa si estos Pokémon se instalan en la vegetación de su cabeza.",
        it: "Trevenant è molto gentile con i Pokémon che vivono nella foresta. Non gli importa nemmeno se questi Pokémon si stabiliscono nel verde sulla sua testa.",
        de: "Trombork ist sehr freundlich zu den im Wald lebenden Pokémon. Es ist ihm sogar egal, ob sich diese Pokémon im Grünen auf seinem Kopf niederlassen.",
        "pt-br": "Trevenant é muito gentil com os Pokémon que vivem na floresta. Ele nem se importa se esses Pokémon fixam residência na vegetação em sua cabeça.",
        "zh-tw": "朽木妖對住在森林裡的寶可夢非常友善。它甚至不在乎這些寶可夢是否棲息在它頭上的綠色植物中。"
    },
    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                en: "Rumble Stomp",
                fr: "Piétinement Lourd",
                es: "Pisotón Estruendoso",
                it: "Rombopestone",
                de: "Kampfstampfer",
                "pt-br": "Furacão Estrondoso",
                "zh-tw": "轟鳴重跺"
            },
            effect: {
                en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque tête.",
                es: "Lanza una moneda hasta que obtengas cruz. Este ataque hace 40 daños más por cada cabeza.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni in più per ogni testa.",
                de: "Wirf eine Münze, bis du „Zahl“ erhältst. Dieser Angriff verursacht 40 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue uma moeda até obter coroa. Este ataque causa mais 40 danos para cada cabeça.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 40 點額外傷害。"
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
