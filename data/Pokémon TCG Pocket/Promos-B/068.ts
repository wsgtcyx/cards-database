import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/068/282df80be327c01a",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/068/282df80be327c01a",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/068/282df80be327c01a",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/068/282df80be327c01a",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/068/282df80be327c01a",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/068/282df80be327c01a",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/068/282df80be327c01a",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/068/282df80be327c01a",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/068/282df80be327c01a"
    },
    name: {
        en: "Dudunsparce",
        fr: "Deusolourdo",
        es: "Dudunsparce",
        it: "Dudunsparce",
        de: "Dummimisel",
        "pt-br": "Dudunsparce",
        "zh-tw": "土龍節節",
        ko: "노고고치",
        ja: "ノココッチ"
    },
    illustrator: "Mina Nakai",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    dexId: [982],
    evolveFrom: {
        en: "Dunsparce",
        fr: "Insolourdo",
        es: "Dunsparce",
        it: "Dunsparce",
        de: "Dummisel",
        "pt-br": "Dunsparce",
        "zh-tw": "土龍弟弟",
        ko: "노고치",
        ja: "ノコッチ"
    },
    stage: "Stage1",
    description: {
        en: "It drives enemies out of its nest by sucking in enough air to fill its long, narrow lungs, then releasing the air in an intense blast.",
        fr: "Il chasse ses adversaires de son nid avec de violentes bourrasques qu'il génère en expirant l'air accumulé dans ses poumons longs et fins.",
        es: "Para expulsar a los intrusos de su madriguera, infla sus largos y finos pulmones y luego libera el aire de golpe en una intensa y explosiva ráfaga.",
        it: "Scaccia i nemici che si intrufolano nella sua tana con violente raffiche di vento che emette dai lunghi polmoni dopo averli riempiti d'aria.",
        de: "Es vertreibt Feinde aus seinem Nest, indem es große Mengen Luft in seine lange, schmale Lunge saugt und eine mächtige Druckwelle ausstößt.",
        "pt-br": "Espanta os inimigos de seu ninho enchendo seus longos pulmões de ar e soprando tudo em um jato intenso.",
        "zh-tw": "會吸進空氣充滿細長的肺部，然後捲起強烈的爆炸氣流將敵人趕出自己的巢穴。",
        ja: "細長い 肺いっぱいに 空気を 吸い込み 強烈な 爆風を 起こして 敵を 巣から 追い出す。",
        ko: "가늘고 긴 폐 안에 공기를 가득 채운 뒤\n강렬한 폭풍을 일으켜서\n상대를 굴에서 쫓아낸다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Sudden Drilling",
                fr: "Perçage Soudain",
                es: "Taladro Súbito",
                it: "Trapanata Improvvisa",
                de: "Abruptes Bohren",
                "pt-br": "Escavação Repentina",
                "zh-tw": "突來一鑽",
                ja: "いきなりドリル",
                ko: "갑자기드릴"
            },
            effect: {
                en: "If this Pokémon evolved from Dunsparce during this turn, discard 2 random Energy from your opponent's Active Pokémon.",
                fr: "Si ce Pokémon a évolué de Insolourdo pendant ce tour, défaussez au hasard 2 Énergies attachées au Pokémon Actif de votre adversaire.",
                es: "Si este Pokémon ha evolucionado de Dunsparce durante este turno, descarta 2 Energías aleatorias del Pokémon Activo de tu rival.",
                it: "Se questo Pokémon si è evoluto da Dunsparce durante questo turno, rimuovi 2 Energie a caso dal Pokémon attivo del tuo avversario.",
                de: "Wenn sich dieses Pokémon während dieses Zuges aus Dummisel entwickelt hat, lege 2 zufällige Energien vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Se este Pokémon evoluiu de Dunsparce durante este turno, descarte 2 Energias aleatórias do Pokémon Ativo do seu oponente.",
                "zh-tw": "在這個回合,若這隻寶可夢從「土龍弟弟」進化,則將對手的戰鬥寶可夢身上的隨機2個能量丟棄。",
                ja: "この番、このポケモンが「ノコッチ」から進化していたなら、相手のバトルポケモンからエネルギーをランダムに2個トラッシュ。",
                ko: "이 차례에 이 포켓몬이 「노고치」에서 진화했다면 상대의 배틀 포켓몬에서 에너지를 랜덤으로 2개 트래쉬한다."
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol9"]
};

export default card;
