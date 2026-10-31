import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/144",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/144",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/144",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/144",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/144",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/144",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/144",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/144",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/144"
    },
    name: {
        en: "Dunsparce",
        "fr": "Insolourdo",
        "es": "Dunsparce",
        "it": "Dunsparce",
        "de": "Dummisel",
        "pt-br": "Dunsparce",
        "zh-tw": "土龍弟弟",
        ja: "ノコッチ",
        ko: "노고치",
    },
    illustrator: "Kazuma Koda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "It creates mazes in dark locations. When spotted,\nit flees into the ground by digging with its tail.",
        "fr": "Cela crée des labyrinthes dans des endroits sombres. Une fois repéré,\nil s'enfuit dans le sol en creusant avec sa queue.",
        "es": "Crea laberintos en lugares oscuros. Cuando se ve,\nhuye al suelo cavando con la cola.",
        "it": "Crea labirinti in luoghi bui. Quando avvistato,\nfugge nel terreno scavando con la coda.",
        "de": "Es schafft Labyrinthe an dunklen Orten. Wenn entdeckt,\nEs flüchtet in den Boden, indem es mit seinem Schwanz gräbt.",
        "pt-br": "Cria labirintos em locais escuros. Quando avistado,\nele foge para o chão cavando com a cauda.",
        "zh-tw": "它在黑暗的地方創造迷宮。當被發現時，\n它用尾巴挖洞逃入地下。",
        ja: "暗い場所に 迷路を 作る。 だれかに みられると 尻尾で 地面を 掘って 逃げようとする。",
        ko: "어두운 장소에 미로를 만든다.\n누군가에게 발견되면 꼬리로\n땅을 파서 도망가려 한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sudden Flash",
                "fr": "Éclair soudain",
                "es": "Destello repentino",
                "it": "Lampo improvviso",
                "de": "Plötzlicher Blitz",
                "pt-br": "Flash repentino",
                "zh-tw": "突然閃光",
                ja: "スネークフラッシュ",
                ko: "스네이크 플래시"
            },
            damage: 20,
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                "it": "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                "de": "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的活躍神奇寶貝現在處於麻痺狀態。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
