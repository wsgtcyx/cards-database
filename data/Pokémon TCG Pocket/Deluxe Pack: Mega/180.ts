import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/180",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/180",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/180",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/180",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/180",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/180",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/180",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/180",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/180"
    },
    name: {
        en: "Meowth",
        fr: "Miaouss",
        es: "Meowth",
        it: "Meowth",
        de: "Mauzi",
        "pt-br": "Meowth",
        "zh-tw": "喵喵",
        ja: "ニャース",
        ko: "나옹"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Colorless"
    ],
    description: {
        en: "It loves things that sparkle. When it sees a shiny\nobject, the gold coin on its head shines, too.",
        fr: "Il est fasciné par les objets brillants. Lorsqu'il en voit un, la pièce sur son front se met à luire.",
        es: "Le fascina todo lo que brilla. Si ve algo que destelle, la moneda de oro que tiene en la frente brillará.",
        it: "Ama gli oggetti scintillanti. Se nota qualcosa che brilla, anche la moneta sulla sua fronte risplende.",
        de: "Glänzende Dinge faszinieren es. Findet es etwas Schimmerndes, leuchtet auch die Münze an seinem Kopf aus unbekanntem Grund auf.",
        "pt-br": "Ama coisas reluzentes. Quando vê um objeto brilhante, a moeda dourada na sua cabeça brilha também.",
        "zh-tw": "非常喜歡耀眼的發光物。找到發光物時，不知為何額頭的金幣也會跟著發光。",
        ja: "眩しく 光るものが 大好き。 光るものを 見つけたとき なぜか 額の小判も 輝く。",
        ko: "눈부시게 빛나는 것을 매우 좋아한다.\n빛나는 것을 발견하면 어째선지\n이마에 있는 금화도 빛이 난다."
    },
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Carefree Steps",
                fr: "Pas Insouciants",
                es: "Pasos Libres",
                it: "Passi Spensierati",
                de: "Unbekümmerte Schritte",
                "pt-br": "Passos Folgados",
                "zh-tw": "隨興起舞",
                ja: "きままにステップ",
                ko: "멋대로 스텝"
            },
            effect: {
                en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
                fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
                es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
                it: "Se questo Pokémon subisce danni da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
                de: "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere bei Kopf jenen Schaden.",
                "pt-br": "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, previna aquele dano.",
                "zh-tw": "當這隻寶可夢受到招式的傷害時,自己擲1次硬幣。若為正面,則這隻寶可夢不會受到該傷害。",
                ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
                ko: "이 포켓몬이 기술의 데미지를 받을 때 자신은 동전을 1번 던진다. 앞면이 나오면 이 포켓몬은 그 데미지를 받지 않는다."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Feelin' Fine",
                fr: "Mode Cool",
                es: "Buen Rollito",
                it: "Tuttobene",
                de: "Wohl fühlen",
                "pt-br": "Sensação Boa",
                "zh-tw": "好心情",
                ja: "じょうきげん",
                ko: "꿀기분"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Draw a card.",
                fr: "Piochez une carte.",
                es: "Roba carta.",
                it: "Pesca una carta.",
                de: "Ziehe 1 Karte.",
                "pt-br": "Compre carta.",
                "zh-tw": "從自己的牌庫抽出張卡。",
                ja: "自分の山札を1枚引く。",
                ko: "자신의 덱을 1장 뽑는다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
