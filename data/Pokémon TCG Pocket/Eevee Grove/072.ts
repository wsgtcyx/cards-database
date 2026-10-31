import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/072",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/072",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/072",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/072",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/072",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/072",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/072",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/072",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/072"
    },
    name: {
        en: "Vaporeon",
        "fr": "Aquali",
        "es": "Vaporeon",
        "it": "Vaporeon",
        "de": "Aquana",
        "pt-br": "Vaporeon",
        "zh-tw": "水伊布",
        ja: "シャワーズ",
        ko: "샤미드",
    },
    illustrator: "chibi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    description: {
        en: "It lives close to water. Its long tail is ridged with\na fin, which is often mistaken for a mermaid's.",
        "fr": "Il vit près de l'eau. Sa longue queue est striée de\nune nageoire, qui est souvent confondue avec celle d'une sirène.",
        "es": "Vive cerca del agua. Su larga cola está surcada por\nuna aleta, que a menudo se confunde con la de una sirena.",
        "it": "Vive vicino all'acqua. La sua lunga coda è increspata\nuna pinna, che spesso viene scambiata per quella di una sirena.",
        "de": "Es lebt in der Nähe von Wasser. Sein langer Schwanz ist gerippt\neine Flosse, die oft mit der einer Meerjungfrau verwechselt wird.",
        "pt-br": "Vive perto da água. Sua longa cauda é estriada\numa barbatana, que muitas vezes é confundida com a de uma sereia.",
        "zh-tw": "它生活在靠近水的地方。它的長尾巴上佈滿了脊狀的\n鰭，經常被誤認為是美人魚的鰭。",
        ja: "水辺に 棲むが 尻尾には 魚のような ひれが 残っていて 人魚と 間違う 人もいる。",
        ko: "물가에 살지만 꼬리에\n물고기처럼 지느러미가 남아 있어서\n인어로 착각하는 사람도 있다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Hyper Whirlpool",
                "fr": "Hyper tourbillon",
                "es": "Hiper hidromasaje",
                "it": "Iperidromassaggio",
                "de": "Hyper-Whirlpool",
                "pt-br": "Hiper Hidromassagem",
                "zh-tw": "超級漩渦",
                ja: "はかいのうずしお",
                ko: "파괴의 바다회오리"
            },
            damage: 70,
            cost: ["Water", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda hasta que obtengas cruz. Por cada cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Lancia una moneta finché non esce croce. Per ogni testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Wirf eine Münze, bis du „Zahl“ erhältst. Lege für jeden Kopf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda até obter coroa. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣，直到出現反面。對於每個頭，丟棄對手的活躍神奇寶貝中的隨機能量。",
                ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手のバトルポケモンからエネルギーをランダムにトラッシュ。",
                ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수만큼 상대의 배틀 포켓몬에서 에너지를 랜덤으로 트래쉬한다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
