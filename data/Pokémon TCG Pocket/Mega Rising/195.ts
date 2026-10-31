import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/195",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/195",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/195",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/195",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/195",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/195",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/195",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/195",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/195"
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
        ko: "얼루기",
    },
    illustrator: "Shigenori Negishi",
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
                en: "Dizzying Headbutt",
                "fr": "Coup de tête vertigineux",
                "es": "Cabezazo vertiginoso",
                "it": "Testata vertiginosa",
                "de": "Schwindelerregender Kopfstoß",
                "pt-br": "Cabeçada vertiginosa",
                "zh-tw": "令人眼花繚亂的頭撞",
                ja: "フラフラずつき",
                ko: "흔들흔들 박치기"
            },
            damage: 30,
            cost: ["Colorless"],
            effect: {
                en: "Both Active Pokémon are now Confused.",
                "fr": "Les deux Pokémon Actifs sont désormais Confus.",
                "es": "Ambos Pokémon Activos ahora están Confundidos.",
                "it": "Entrambi i Pokémon attivi sono ora confusi.",
                "de": "Beide aktiven Pokémon sind jetzt verwirrt.",
                "pt-br": "Ambos os Pokémon ativos agora estão confusos.",
                "zh-tw": "兩隻活躍的神奇寶貝現在都處於混亂狀態。",
                ja: "おたがいのバトルポケモンをこんらんにする。",
                ko: "서로의 배틀 포켓몬을 혼란으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria"
	]
};
export default card;
