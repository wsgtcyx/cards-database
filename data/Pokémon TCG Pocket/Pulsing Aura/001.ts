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
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/001"
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
        "zh-tw": "藤蔓即使斷了也會繼續\n無限地生長。藤蔓下的\n真面目至今仍是個謎。"
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
                "zh-tw": "綁緊"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce de monnaie. Si c'est face, le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Lanza una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario è paralizzato.",
                de: "Wirf eine Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt gelähmt.",
                "pt-br": "Jogue uma moeda. Se der cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "拋一枚硬幣。如果正面，則對手的戰鬥寶可夢現在處於麻痺狀態。"
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
