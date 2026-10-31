import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/001",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/001",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/001",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/001",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/001"
    },
    name: {
        en: "Tangela",
        fr: "Saquedeneu",
        es: "Tangela",
        it: "Tangela",
        de: "Tangela",
        "pt-br": "Tangela",
        "zh-tw": "蔓藤怪",
        ko: "덩쿠리",
        ja: "モンジャラ"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [114],
    stage: "Basic",
    description: {
        en: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.",
        fr: "On ne sait toujours pas ce qui se cache\nsous ses lianes. Même si on les coupe,\nelles repoussent à l’infini.",
        es: "Sus lianas no dejan de crecer aunque se le\ndesprendan. Aún se desconoce qué aspecto\ntiene sin ellas.",
        it: "Non è ancora chiaro quale sia il vero aspetto\ncelato dietro alle sue liane, che crescono\nall’infinito anche dopo essere state recise.",
        de: "Seine wahre Gestalt ist weiterhin ein Mysterium,\nda sie von Ranken verdeckt wird, die unaufhörlich\nnachwachsen, selbst wenn sie abreißen.",
        "pt-br": "Escondido sob um emaranhado de vinhas que cresce sem parar mesmo que as vinhas sejam arrancadas, a verdadeira aparência deste Pokémon permanece um mistério.",
        "zh-tw": "藤蔓即使斷了也會繼續\n無限地生長。藤蔓下的\n真面目至今仍是個謎。",
        ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
        ko: "잘려도 잘려도 무한으로 늘어나는\n덩굴 속의 정체는\n아직 밝혀지지 않았다."
    },
    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                en: "Bind",
                fr: "Étreinte",
                es: "Atadura",
                it: "Legatutto",
                de: "Klammergriff",
                "pt-br": "Ligação",
                "zh-tw": "綁緊",
                ja: "しめつける",
                ko: "조이기"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다."
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
