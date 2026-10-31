import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/224",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/224",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/224",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/224",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/224",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/224",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/224",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/224",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/224"
    },
    name: {
        en: "Porygon-Z",
        fr: "Porygon-Z",
        es: "Porygon-Z",
        it: "Porygon-Z",
        de: "Porygon-Z",
        "pt-br": "Porygon-Z",
        "zh-tw": "多邊獸Ｚ",
        ko: "폴리곤Z",
        ja: "ポリゴンZ"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    dexId: [474],
    evolveFrom: {
        en: "Porygon2",
        fr: "Porygon2",
        es: "Porygon2",
        it: "Porygon2",
        de: "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "多邊獸Ⅱ",
        ko: "폴리곤2",
        ja: "ポリゴン2"
    },
    stage: "Stage2",
    description: {
        en: "Porygon-Z had a program installed to allow it to move between dimensions, but the program also caused instability in Porygon-Z’s behavior.",
        fr: "Depuis qu’on lui a ajouté un programme\npermettant de voyager entre les dimensions,\nson comportement est devenu instable.",
        es: "Se le instaló un software que le permite entrar\ny salir de otras dimensiones, pero que provocó\nque su comportamiento se volviese inestable.",
        it: "Da quando gli è stato installato un programma\nche gli permette di viaggiare in altre dimensioni,\nmostra un comportamento instabile.",
        de: "Seit eine neue Software installiert wurde, die es\nzu interdimensionalen Reisen befähigen sollte,\nwurde sein Verhalten instabil.",
        "pt-br": "Porygon-Z tinha um programa instalado para permitir a movimentação entre dimensões, mas o programa também causou instabilidade no comportamento de Porygon-Z.",
        "zh-tw": "在追加了能夠自由進出\n異次元空間的程式後，\n動作就變得不穩定了。",
        ja: "異次元 空間に 出入りできる プログラムを 追加したところ 挙動が 不安定になった。",
        ko: "다른 공간에 드나들 수 있는\n프로그램을 추가한 결과\n움직임이 불안정해졌다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Cyberjack",
                fr: "Cyberpiratage",
                es: "Cibersecuestro",
                it: "Sabotaggio Cibernetico",
                de: "Cyberstoß",
                "pt-br": "Ciberataque",
                "zh-tw": "網路劫持",
                ja: "サイバージャック",
                ko: "사이버잭"
            },
            effect: {
                en: "This attack does 20 more damage for each Trainer card in your opponent's deck.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Dresseur du deck de votre adversaire.",
                es: "Este ataque hace 20 daños más por cada carta de Entrenador en el mazo de tu oponente.",
                it: "Questo attacco infligge 20 danni in più per ogni carta Allenatore nel mazzo del tuo avversario.",
                de: "Dieser Angriff verursacht 20 weitere Schadenspunkte für jede Trainerkarte im Deck deines Gegners.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada carta de Treinador no baralho do seu oponente.",
                "zh-tw": "此攻擊對對手牌組中的每張訓練家卡造成 20 點額外傷害。",
                ja: "相手の山札にあるトレーナーズの枚数×20ダメージ追加。",
                ko: "상대의 덱에 있는 트레이너스의 장수 × 20데미지를 추가한다."
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
