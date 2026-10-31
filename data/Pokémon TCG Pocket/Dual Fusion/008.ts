import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/008",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/008",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/008",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/008",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/008",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/008"
    },
    name: {
        en: "Vespiquen",
        fr: "Apireine",
        es: "Vespiquen",
        "pt-br": "Vespiquen",
        "zh-tw": "蜂女王",
        ja: "ビークイン",
        ko: "비퀸",
        it: "Vespiquen",
        de: "Honweisel"
    },
    illustrator: "Narumi Sato",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 80,
    types: [
        "Grass"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Combee",
        fr: "Apitrini",
        es: "Combee",
        it: "Combee",
        de: "Wadribie",
        "pt-br": "Combee",
        "zh-tw": "三蜜蜂",
        ja: "ミツハニー",
        ko: "세꿀버리"
    },
    attacks: [
        {
            name: {
                en: "Honey Rush",
                fr: "Ruée Miel",
                es: "Fiebre de Miel",
                it: "Ipermiele",
                de: "Honigrausch",
                "pt-br": "Adrenalina de Mel",
                "zh-tw": "蜜之猛攻",
                ja: "ハニーラッシュ",
                ko: "허니러시"
            },
            cost: [
                "Grass",
                "Grass"
            ],
            damage: "50x",
            effect: {
                en: "Reveal all of the Sweet Honey in your hand, and this attack does 50 damage for each card you revealed in this way.",
                fr: "Montrez toutes les cartes Miel dans votre main. Cette attaque inflige 50 dégâts pour chaque carte montrée de cette façon.",
                es: "Enseña todas las cartas de Miel de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas enseñado de esta manera.",
                it: "Mostra tutte le carte Miele che hai in mano. Questo attacco infligge 50 danni per ogni carta che hai mostrato in questo modo.",
                de: "Zeige deinem Gegner alle Honig-Karten auf deiner Hand und diese Attacke fügt für jede auf diese Weise gezeigte Karte 50 Schadenspunkte zu.",
                "pt-br": "Revele todas as cartas Mel Doce na sua mão, e este ataque causa 50 pontos de dano para cada carta que você revelou dessa forma.",
                "zh-tw": "在給對手看過自己的手牌的所有「甜甜蜜」後,造成給對手看過的張數×50點傷害。",
                ja: "自分の手札にある「あまいミツ」をすべて相手に見せ、見せた枚数×50ダメージ。",
                ko: "자신의 패에 있는 「달콤한꿀」을 모두 상대에게 보여주고 보여준 장수 × 50데미지를 준다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding.",
        fr: "Son abdomen abrite ses petits, qu'il contrôle grâce à des phéromones.",
        es: "Cría larvas en los panales de su cuerpo y segrega diversas feromonas para controlarlas.",
        it: "Nell'addome ospita la sua progenie, sulla quale esercita un controllo assoluto tramite i feromoni che rilascia.",
        de: "Sein Rumpf fungiert als Wabe für die Larven, die es mithilfe verschiedener Pheromone frei herumkommandieren kann.",
        "pt-br": "Guarda sua colônia em células do seu corpo e libera vários feromônios para que as larvas cumpram suas exigências.",
        "zh-tw": "身體是孩子們的巢穴。會釋放出各式各樣的費洛蒙，自由自在地控制孩子們。",
        ja: "胴体は 子供たちの 巣穴。 いろんな フェロモンを だして 子供たちを 自由に 操る。",
        ko: "몸통은 새끼들의 둥지다.\n여러 페로몬을 내뿜어\n새끼들을 자유롭게 조종한다."
    }
};

export default card;
