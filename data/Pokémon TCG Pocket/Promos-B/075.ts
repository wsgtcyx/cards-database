import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/075/773d2df96929cff2",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/075/773d2df96929cff2",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/075/773d2df96929cff2",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/075/773d2df96929cff2",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/075/773d2df96929cff2",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/075/773d2df96929cff2",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/075/773d2df96929cff2",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/075/773d2df96929cff2",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/075/773d2df96929cff2"
    },
    name: {
        en: "Quagsire",
        fr: "Maraiste",
        es: "Quagsire",
        it: "Quagsire",
        de: "Morlord",
        "pt-br": "Quagsire",
        "zh-tw": "沼王",
        ko: "누오",
        ja: "ヌオー"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [195],
    evolveFrom: {
        en: "Wooper",
        fr: "Axoloto",
        es: "Wooper",
        it: "Wooper",
        de: "Felino",
        "pt-br": "Wooper",
        "zh-tw": "烏波",
        ko: "우파",
        ja: "ウパー"
    },
    stage: "Stage1",
    description: {
        en: "Due to its relaxed and carefree attitude, it often bumps its head on riverbed boulders and boat hulls as it swims.",
        fr: "C'est un Pokémon très distrait. Quand il nage, il se cogne souvent la tête sur les rochers dans les rivières ou sur les coques de bateaux.",
        es: "Debido a su despreocupada actitud, al nadar suele chocar de cabeza contra las rocas del lecho de los ríos y el casco de los barcos.",
        it: "Per via della sua indole rilassata e noncurante, quando nuota urta spesso i fondali rocciosi dei fiumi e gli scafi delle barche.",
        de: "Dieses unbekümmerte Pokémon stößt beim Schwimmen oft mit dem Kopf gegen Felsen im Flussbett oder gegen Schiffsrümpfe.",
        "pt-br": "Com sua postura despreocupada e descontraída, muitas vezes bate sua cabeça em pedras no leito do rio e em cascos de barcos enquanto nada.",
        "zh-tw": "性格悠閒自得，游泳時腦袋會撞到河底的岩石或船底。",
        ja: "のんびりとした 性格で 泳いでいては 川底の 岩や 船底に 頭を ぶつけている。",
        ko: "느긋한 성격으로\n헤엄치다가 강바닥의 돌과\n배의 밑바닥에 머리를 들이받곤 한다."
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless", "Colorless"],
            name: {
                en: "Energy Press",
                fr: "Pression Énergétique",
                es: "Presión Energética",
                it: "Energipressa",
                de: "Energiedruck",
                "pt-br": "Aperto de Energia",
                "zh-tw": "能量壓制",
                ja: "エナジープレス",
                ko: "에너지프레스"
            },
            effect: {
                en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
                fr: "Cette attaque inflige 30 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
                it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "增加對手的戰鬥寶可夢身上的能量的數量×30點傷害。",
                ja: "相手のバトルポケモンのエネルギーの数×30ダメージ追加。",
                ko: "상대 배틀 포켓몬의 에너지의 개수 × 30데미지를 추가한다."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol10"]
};

export default card;
