import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/137",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/137",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/137",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/137",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/137",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/137",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/137",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/137",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/137"
    },
    name: {
        en: "Spinda",
        "fr": "Spinda",
        "es": "Spinda",
        "it": "Spinda",
        "de": "Pandir",
        "pt-br": "Spinda",
        "zh-tw": "晃晃斑",
        ja: "パッチール",
        ko: "얼루기"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "Each Spinda's spot pattern is different. With its\nstumbling movements, it evades opponents'\nattacks brilliantly!",
        "fr": "Le motif de taches de chaque Spinda est différent. Avec son\nmouvements trébuchants, il échappe aux adversaires\nattaque avec brio !",
        "es": "El patrón de manchas de cada Spinda es diferente. con su\nmovimientos de tropiezo, evade los ataques de los oponentes.\nataca brillantemente!",
        "it": "Il modello di spot di ogni Spinda è diverso. Con il suo\nmovimenti incerti, elude gli avversari\nattacca brillantemente!",
        "de": "Das Fleckenmuster jedes Spindas ist anders. Mit seinem\nstolpernde Bewegungen, es weicht den Gegnern aus\ngreift brillant an!",
        "pt-br": "O padrão de pontos de cada Spinda é diferente. Com seu\nmovimentos cambaleantes, ele evita os adversários\nataca brilhantemente!",
        "zh-tw": "每個 Spinda 的斑點圖案都不同。以其\n動作跌跌撞撞，躲避對手\n攻擊華麗！",
        ja: "１匹ずつ ブチ模様は 異なる。 フラフラした 動きで 相手の 攻撃を 絶妙に かわすぞ。",
        ko: "개체마다 얼룩무늬가 다르다.\n비틀거리는 움직임으로\n상대의 공격을 절묘하게 피한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Teetering Steps",
                "fr": "Étapes chancelantes",
                "es": "Pasos tambaleantes",
                "it": "Passi in bilico",
                "de": "Schwankende Schritte",
                "pt-br": "Passos oscilantes",
                "zh-tw": "搖搖欲墜的腳步",
                ja: "フラフラステップ",
                ko: "흔들흔들스텝"
            },
            damage: 40,
            cost: ["Colorless"],
            effect: {
                en: "This Pokémon is now Confused.",
                "fr": "Ce Pokémon est maintenant Confus.",
                "es": "Este Pokémon pasa a estar Confundido.",
                "it": "Questo Pokémon viene confuso.",
                "de": "Dieses Pokémon ist jetzt verwirrt.",
                "pt-br": "Este Pokémon agora está Confuso.",
                "zh-tw": "這只神奇寶貝現在處於混亂狀態。",
                ja: "このポケモンをこんらんにする。",
                ko: "이 포켓몬을 혼란으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
