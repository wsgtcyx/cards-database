import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/050",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/050",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/050",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/050",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/050"
    },
    name: {
        en: "Garbodor",
        "fr": "Miasmax",
        "es": "Garbodor",
        "it": "Garbodor",
        "de": "Deponitox",
        "pt-br": "Garbodor",
        "zh-tw": "灰塵山",
        ja: "ダストダス",
        ko: "더스트나"
    },
    illustrator: "Aya Kusube",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Darkness"],
    evolveFrom: {
        en: "Trubbish",
        "fr": "Miamiasme",
        "es": "Trubbish",
        "it": "Trubbish",
        "de": "Unratütox",
        "pt-br": "Trubbish",
        "zh-tw": "破破袋",
        ja: "ヤブクロン",
        ko: "깨봉이"
    },
    description: {
        en: "This Pokémon eats trash, which turns into poison\ninside its body. The main component of the\npoison depends on what sort of trash was eaten.",
        "fr": "Ce Pokémon mange des déchets qui se transforment en poison\nà l'intérieur de son corps. La composante principale du\nle poison dépend du type de déchet mangé.",
        "es": "Este Pokémon come basura, que se convierte en veneno.\ndentro de su cuerpo. El componente principal del\nEl veneno depende del tipo de basura que se comió.",
        "it": "Questo Pokémon mangia la spazzatura, che si trasforma in veleno\nall'interno del suo corpo. Il componente principale del\nil veleno dipende da che tipo di spazzatura è stata mangiata.",
        "de": "Dieses Pokémon frisst Müll, der sich in Gift verwandelt\nin seinem Körper. Der Hauptbestandteil der\nGift hängt davon ab, welche Art von Müll gegessen wurde.",
        "pt-br": "Este Pokémon come lixo, que se transforma em veneno\ndentro de seu corpo. O principal componente do\no veneno depende do tipo de lixo que foi comido.",
        "zh-tw": "這個神奇寶貝吃垃圾會變成毒藥\n在它的身體裡面。主要組成部分\n有毒取決於吃的是哪種垃圾。",
        ja: "食った ゴミが 体内で 毒に 変化する。 食う ゴミ しだいで 毒の 主成分も 変わる。",
        ko: "먹은 쓰레기가 체내에서 독으로\n변화한다. 먹은 쓰레기에 따라\n독의 주성분도 바뀐다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Acid Spray",
                "fr": "Pulvérisation acide",
                "es": "Aerosol ácido",
                "it": "Spray acido",
                "de": "Säurespray",
                "pt-br": "Spray ácido",
                "zh-tw": "酸噴霧",
                ja: "アシッドボム",
                ko: "애시드봄"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda. Si sale cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Lancia una moneta. Se esce testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Wirf eine Münze. Bei „Kopf“ wirf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則丟棄對手的活躍神奇寶貝中的隨機能量。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンからエネルギーをランダムに1個トラッシュ。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에서 에너지를 랜덤으로 1개 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
