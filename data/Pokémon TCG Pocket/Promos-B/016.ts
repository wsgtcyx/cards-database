import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/016/b15c85866d8461e0",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/016/b15c85866d8461e0",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/016/b15c85866d8461e0",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/016/b15c85866d8461e0",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/016/b15c85866d8461e0",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/016/b15c85866d8461e0",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/016/b15c85866d8461e0",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/016/b15c85866d8461e0",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/016/b15c85866d8461e0"
    },
    name: {
        en: "Krookodile",
        fr: "Crocorible",
        es: "Krookodile",
        it: "Krookodile",
        de: "Rabigator",
        "pt-br": "Krookodile",
        "zh-tw": "流氓鱷",
        ko: "악비아르",
        ja: "ワルビアル"
    },
    illustrator: "match",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    dexId: [553],
    evolveFrom: {
        en: "Krokorok",
        fr: "Escroco",
        es: "Krokorok",
        it: "Krokorok",
        de: "Rokkaiman",
        "pt-br": "Krokorok",
        "zh-tw": "混混鱷",
        ko: "악비르",
        ja: "ワルビル"
    },
    stage: "Stage2",
    description: {
        en: "Its unique faculty of sight can detect small prey more than 30 miles away, even in the midst of a sandstorm.",
        fr: "Ses yeux perçants lui permettent de détecter\nune petite proie à 50 km, même au cœur\nd’une tempête de sable.",
        es: "Su vista es tan perspicaz que puede divisar\npresas de pequeño tamaño a 50 km de\ndistancia, incluso en plena tormenta de arena.",
        it: "I suoi occhi gli permettono di individuare prede\nminuscole a 50 km di distanza persino nelle\ntempeste di sabbia.",
        de: "Seine Augen sind so außergewöhnlich, dass es\nsogar in einem Sandsturm kleinste Beute aus\n50 km Entfernung entdecken kann.",
        "pt-br": "Sua faculdade única de vista pode detectar presas pequenas a mais de 45 quilômetros, mesmo no meio de uma tempestade de areia.",
        "zh-tw": "擁有特殊的雙眼，\n即使在沙暴中也能發現\n前方５０公里處的小獵物。",
        ja: "砂嵐でも ５０キロ先に いる 小さな 獲物も 発見する 特殊な 両目を 持つ。",
        ko: "모래 폭풍 속에서도 50km 앞에 있는\n작은 먹이를 발견하는\n특수한 두 눈을 가졌다."
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Chomp Chomp Bite",
                fr: "Mangeouille Vorace",
                es: "Mordisco Ñam Ñam",
                it: "Morso Mastica Bene",
                de: "Mampfbiss",
                "pt-br": "Mordida Nhoc Nhoc",
                "zh-tw": "大口啃咬",
                ja: "ガブガブバイト",
                ko: "우걱우걱 바이트"
            },
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire.",
                es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un’Energia a caso dal Pokémon attivo del tuo avversario.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf 1 zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "擲硬幣直到出現反面,將對手的戰鬥寶可夢身上的能量隨機丟棄與正面出現的次數相同數量。",
                ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手のバトルポケモンからエネルギーをランダムにトラッシュ。",
                ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수만큼 상대의 배틀 포켓몬에서 에너지를 랜덤으로 트래쉬한다."
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol2"]
};

export default card;
