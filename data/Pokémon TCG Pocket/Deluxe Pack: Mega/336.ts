import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/336",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/336",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/336",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/336",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/336",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/336",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/336",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/336",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/336"
    },
    name: {
        en: "Beldum",
        fr: "Terhal",
        es: "Beldum",
        it: "Beldum",
        de: "Tanhel",
        "pt-br": "Beldum",
        "zh-tw": "鐵啞鈴",
        ja: "ダンバル",
        ko: "메탕"
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Metal"
    ],
    dexId: [
        374
    ],
    stage: "Basic",
    description: {
        en: "All its cells are magnets. It communicates with others of its kind by transmitting magnetic forces from its body.",
        fr: "Toutes les cellules de son corps sont des aimants. Il communique avec les siens à l'aide d'impulsions magnétiques.",
        es: "Todas sus células cuentan con carga magnética, y se comunica con los suyos a través de pulsos electromagnéticos.",
        it: "Le cellule del suo corpo sono calamite. Il suo corpo emette onde magnetiche, tramite le quali comunica con i suoi simili.",
        de: "Seine Zellen sind magnetisch geladen. Es setzt magnetische Impulse frei, um mit Artgenossen zu kommunizieren.",
        "pt-br": "Todas as suas células são ímãs. Comunica-se com outros da sua espécie transmitindo forças magnéticas de seu corpo.",
        "zh-tw": "全身細胞都由磁鐵構成，會從身體放出磁力，藉此和夥伴對話。",
        ja: "細胞 すべてが 磁石で 体から 磁力を 発信し 仲間と 会話 している。",
        ko: "모든 세포가 자석이다.\n몸에서 자력을 발신하여\n동료와 대화한다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Conductive Body",
                fr: "Corps Conducteur",
                es: "Cuerpo Conductor",
                it: "Corpo Conduttivo",
                "pt-br": "Corpo Condutor",
                "zh-tw": "牽引身軀",
                de: "Leitender Körper",
                ja: "ひきあうからだ",
                ko: "인력의 몸"
            },
            effect: {
                en: "If you have another Beldum in play, this Pokémon's Retreat Cost is 2 less.",
                fr: "Si vous avez un autre Terhal en jeu, le Coût de Retraite de ce Pokémon est diminué de 2.",
                es: "Si tienes otro Beldum en juego, el Coste de Retirada de este Pokémon es de 2 menos.",
                it: "Se hai un altro Beldum in gioco, il costo di ritirata di questo Pokémon è ridotto di 2.",
                de: "Wenn du ein weiteres Tanhel im Spiel hast, verringern sich die Rückzugskosten dieses Pokémon um 2.",
                "pt-br": "Se você tiver outro Beldum em jogo, o Custo de Recuo deste Pokémon será 2 a menos.",
                "zh-tw": "若自己的場上有其他的「鐵啞鈴」,則這隻寶可夢撤退所需的能量減少2個。",
                ja: "自分の場に別の「ダンバル」がいるなら、このポケモンのにげるためのエネルギーを、2個少なくする。",
                ko: "자신의 필드에 다른 「메탕」이 있다면 이 포켓몬의 후퇴에 필요한 에너지를 2개 적게 만든다."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Metal"
            ],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞",
                ja: "ぶつかる",
                ko: "부딪치기"
            },
            damage: 10
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
