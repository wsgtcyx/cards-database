import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/133",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/133",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/133",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/133",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/133",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/133",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/133",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/133",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/133"
    },
    name: {
        en: "Swellow",
        "fr": "Hélédelle",
        "es": "Swellow",
        "it": "Swellow",
        "de": "Schwalboss",
        "pt-br": "Swellow",
        "zh-tw": "大王燕",
        ja: "オオスバメ",
        ko: "스왈로"
    },
    illustrator: "Mizue",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Taillow",
        "fr": "Nirondelle",
        "es": "Taillow",
        "it": "Taillow",
        "de": "Schwalbini",
        "pt-br": "Taillow",
        "zh-tw": "傲骨燕",
        ja: "スバメ",
        ko: "테일로"
    },
    description: {
        en: "It dives at a steep angle as soon as it spots its\nprey. It catches its prey with sharp claws.",
        "fr": "Il plonge à un angle prononcé dès qu'il repère son\nproie. Il attrape ses proies avec ses griffes acérées.",
        "es": "Se lanza en picado en un ángulo pronunciado tan pronto como ve su\npresa. Atrapa a su presa con garras afiladas.",
        "it": "Si tuffa con un angolo ripido non appena lo vede\npreda. Cattura la preda con artigli affilati.",
        "de": "Es taucht in einem steilen Winkel ab, sobald es es entdeckt\nBeute. Es fängt seine Beute mit scharfen Krallen.",
        "pt-br": "Ele mergulha em um ângulo íngreme assim que avista seu\npresa. Ele captura suas presas com garras afiadas.",
        "zh-tw": "一旦發現它的踪跡，它就會以陡峭的角度俯衝\n獵物。它用鋒利的爪子捕捉獵物。",
        ja: "森に 住む 獲物を 見つけると 上空から 急降下。 鋭い ツメで 捕まえる。",
        ko: "숲에 사는 먹이를 찾으면\n상공에서 급강하해서\n예리한 발톱으로 잡는다."
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Repelling Wind",
                "fr": "Repousser le vent",
                "es": "Repeler el viento",
                "it": "Respingere il vento",
                "de": "Wind abwehren",
                "pt-br": "Repelindo o Vento",
                "zh-tw": "驅風",
                ja: "むしよけウインド",
                ko: "벌레회피 윈드"
            },
            effect: {
                en: "Once during your turn, you may switch out your opponent's Active Basic Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                "fr": "Une fois pendant votre tour, vous pouvez transférer le Pokémon Actif de Base de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                "es": "Una vez durante tu turno, puedes cambiar el Pokémon Básico Activo de tu rival a la Banca. (Tu oponente elige el nuevo Pokémon Activo).",
                "it": "Una sola volta durante il tuo turno, puoi mettere in panchina il Pokémon Base attivo del tuo avversario. (Il tuo avversario sceglie il nuovo Pokémon attivo.)",
                "de": "Einmal während deines Zuges kannst du das Aktive Basis-Pokémon deines Gegners auf die Bank tauschen. (Dein Gegner wählt das neue Aktive Pokémon.)",
                "pt-br": "Uma vez durante o seu turno, você pode trocar o Pokémon Básico Ativo do seu oponente para o Banco. (Seu oponente escolhe o novo Pokémon Ativo.)",
                "zh-tw": "在你的回合中，你可以將對手的活躍基礎神奇寶貝移至替補席上一次。 （你的對手選擇新的活躍神奇寶貝。）",
                ja: "自分の番に1回使える。相手のバトル場のたねポケモンをベンチポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]",
                ko: "자신의 차례에 1번 사용할 수 있다. 상대 배틀필드의 기본 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)"
            }
        }],
    attacks: [{
            name: {
                en: "Wing Attack",
                "fr": "Attaque d'aile",
                "es": "Ataque de ala",
                "it": "Attacco d'ala",
                "de": "Flügelangriff",
                "pt-br": "Ataque de asa",
                "zh-tw": "翼攻擊",
                ja: "つばさでうつ",
                ko: "날개치기"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
