import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/029",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/029",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/029",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/029"
    },
    name: {
        en: "Squirtle",
        fr: "Carapuce",
        es: "Squirtle",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜",
        ja: "ゼニガメ",
        ko: "꼬부기",
        it: "Squirtle",
        de: "Schiggy"
    },
    illustrator: "Gemi",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Bubble",
                fr: "Écume",
                es: "Burbuja",
                it: "Bolla",
                de: "Blubber",
                "pt-br": "Bolha",
                "zh-tw": "泡沫",
                ja: "あわ",
                ko: "Bubble"
            },
            cost: [
                "Water"
            ],
            damage: 10,
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene Paralizzato.",
                de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
                "pt-br": "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
                "zh-tw": "擲1次硬幣若為正面,則將對手的戰鬥寶可夢麻痺。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
                ko: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
            }
        }
    ],
    abilities: [],
    description: {
        en: "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.",
        fr: "Ce Pokémon crache une écume redoutable. Après sa naissance, son dos gonfle et durcit pour former une carapace.",
        es: "Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca.",
        it: "Dopo la nascita, la sua schiena si gonfia e si trasforma in una dura corazza. Sputa una potente schiuma dalla bocca.",
        de: "Nach der Geburt schwillt sein Rücken an und verhärtet sich zu einem Panzer. Es versprüht starken Schaum aus seinem Maul.",
        "pt-br": "Depois que nasce, suas costas incham e endurecem até formar um casco. Este Pokémon lança um jato espumoso pela boca.",
        "zh-tw": "出生後背部會隆起成堅硬的甲殼。會從口中吐出強而有力的泡沫。",
        ja: "生まれたあと 背中が ふくらんで 硬い 甲羅が できる。 口から 強力な 泡を 出す。",
        ko: "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth."
    }
};

export default card;
