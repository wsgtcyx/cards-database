import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/132",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/132",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/132",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/132",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/132",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/132",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/132",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/132",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/132"
    },
    name: {
        en: "Krookodile",
        "fr": "Crocorible",
        "es": "Krookodile",
        "it": "Krookodile",
        "de": "Rabigator",
        "pt-br": "Krookodile",
        "zh-tw": "流氓鱷",
        ja: "ワルビアル",
        ko: "악비아르",
    },
    illustrator: "Shiburingaru",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    evolveFrom: {
        en: "Krokorok",
        "fr": "Escroco",
        "es": "Krokorok",
        "it": "Krokorok",
        "de": "Rokkaiman",
        "pt-br": "Krokorok",
        "zh-tw": "混混鱷",
        ja: "ワルビル",
        ko: "악비르",
    },
    description: {
        en: "Its unique faculty of sight can detect small prey\nmore than 30 miles away, even in the midst of\na sandstorm.",
        "fr": "Sa faculté de vue unique permet de détecter de petites proies\nà plus de 30 milles, même en plein milieu de\nune tempête de sable.",
        "es": "Su facultad de visión única puede detectar presas pequeñas.\na más de 30 millas de distancia, incluso en medio de\nuna tormenta de arena.",
        "it": "La sua capacità di vista unica può individuare piccole prede\npiù di 30 miglia di distanza, anche nel mezzo di\nuna tempesta di sabbia.",
        "de": "Sein einzigartiges Sehvermögen kann kleine Beutetiere erkennen\nmehr als 30 Meilen entfernt, selbst mittendrin\nein Sandsturm.",
        "pt-br": "Sua faculdade única de visão pode detectar pequenas presas\na mais de 30 milhas de distância, mesmo no meio de\numa tempestade de areia.",
        "zh-tw": "它獨特的視覺能力可以發現小型獵物\n即使在 30 多英里之外，\n沙塵暴。",
        ja: "砂嵐でも ５０キロ先に いる 小さな 獲物も 発見する 特殊な 両目を 持つ。",
        ko: "모래 폭풍 속에서도 50km 앞에 있는\n작은 먹이를 발견하는\n특수한 두 눈을 가졌다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Chomp Chomp Bite",
                "fr": "Morsure de Chomp Chomp",
                "es": "Mordisco, mordisco, mordisco",
                "it": "Morso Masticato",
                "de": "Chomp Chomp Biss",
                "pt-br": "Mordida de mordida",
                "zh-tw": "嚼嚼咬",
                ja: "ガブガブバイト",
                ko: "우걱우걱 바이트"
            },
            damage: 90,
            cost: ["Fighting", "Fighting", "Colorless"],
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
            type: "Grass",
            value: "+20"
        }],
    retreat: 3,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
