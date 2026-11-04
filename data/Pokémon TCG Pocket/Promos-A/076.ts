import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/076/e1235b4026ee353b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/076/e1235b4026ee353b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/076/e1235b4026ee353b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/076/e1235b4026ee353b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/076/e1235b4026ee353b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/076/e1235b4026ee353b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/076/e1235b4026ee353b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/076/e1235b4026ee353b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/076/e1235b4026ee353b"
    },
    name: {
        en: "Blacephalon",
        es: "Blacephalon",
        "fr": "Pierroteknik",
        "it": "Blacephalon",
        "de": "Kopplosio",
        "pt-br": "Blacephalon",
        "zh-tw": "砰頭小丑",
        ja: "ズガドーン",
        ko: "두파팡",
    },
    illustrator: "Hasuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    description: {
        en: "It slithers toward people. Then, without warning, it triggers the\nexplosion of its own head. It's apparently one kind of Ultra Beast.",
        es: "Parece ser uno de los temibles Ultraentes. Se acerca a la gente contoneándose y hace explotar su propia cabeza súbitamente.",
        "fr": "Il s'approche des gens avec son allure désarticulée et fait subitement exploser sa tête. Ce serait une Ultra-Chimère.",
        "it": "Sembra che sia un'Ultracreatura. Si avvicina alle persone ondeggiando e fa esplodere la sua testa all'improvviso.",
        "de": "Dieses Wesen ist vermutlich eine Ultrabestie. Es nähert sich Menschen tänzelnd, nur um dann plötzlich seinen Kopf explodieren zu lassen.",
        "pt-br": "Aproxima-se sorrateiramente das pessoas e explode subitamente a própria cabeça. Parece que é um tipo de Ultracriatura.",
        "zh-tw": "會扭動著身體靠近人，然後突然讓頭爆炸。似乎是究極異獸的一種。",
        ja: "クネクネ動いて 人に 近付くと 突然 頭を 爆発させた。 ウルトラビーストの 一種らしい。",
        ko: "꿈틀거리며 사람에게 다가오다\n느닷없이 머리를 폭발시킨다.\n울트라비스트의 일종인 듯하다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beat Punk",
                es: "Beat Punk",
                "fr": "Punk Pop",
                "it": "Beat Punk",
                "de": "Beat Punk",
                "pt-br": "Beat Punk",
                "zh-tw": "爆奏龐克",
                ja: "ビートパンク",
                ko: "비트펑크"
            },
            damage: 130,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "This Pokémon also does 70 damage to itself.",
                es: "Este Pokémon también se hace 70 puntos de daño a sí mismo.",
                "fr": "Ce Pokémon s'inflige aussi 70 dégâts.",
                "it": "Questo Pokémon infligge anche 70 danni a se stesso.",
                "de": "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 70 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到70點傷害。",
                ja: "このポケモンにも70ダメージ。",
                ko: "이 포켓몬에게도 70데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol9"]
};
export default card;
