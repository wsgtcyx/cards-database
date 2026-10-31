import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/188",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/188",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/188",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/188",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/188",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/188",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/188",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A1/188",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A1/188"
    },
    name: {
        en: "Pidgeot",
        fr: "Roucarnage",
        es: "Pidgeot",
        it: "Pidgeot",
        de: "Tauboss",
        'pt-br': "Pidgeot",
        ja: "ピジョット",
        ko: "피죤투",
        "zh-tw": "大比鳥",
    },
    illustrator: "Scav",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    stage: "Stage2",
    evolveFrom: {
        en: "Pidgeotto",
        "fr": "Roucoups",
        "es": "Pidgeotto",
        "it": "Pidgeotto",
        "de": "Tauboga",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥",
        ja: "ピジョン",
        ko: "피죤"
    },
    abilities: [{
            type: "Ability",
            name: {
                en: "Drive Off",
                fr: "Déroute",
                es: "Ahuyentar",
                it: "Filar Via",
                de: "Wegtreiben",
                'pt-br': "Rechaçar",
                ja: "おいはらう",
                ko: "쫓아내기",
                "zh-tw": "開車離開"
            },
            effect: {
                en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
                fr: "Une fois pendant votre tour, vous pouvez échanger le Pokémon Actif de votre adversaire contre l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
                es: "Una vez durante tu turno, puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
                it: "Una sola volta durante il tuo turno, puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
                de: "Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)",
                'pt-br': "Uma vez durante o seu turno, você poderá mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
                ja: "自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。[バトル場に出すポケモンは相手が選ぶ。]",
                ko: "자신의 차례에 1번 사용할 수 있다. 상대의 배틀 포켓몬을 벤치 포켓몬과 교체한다. (배틀필드로 내보낼 포켓몬은 상대가 선택한다.)",
                "zh-tw": "在你的回合中，你可以將對手的活躍神奇寶貝切換到替補席上。 （你的對手選擇新的活躍神奇寶貝。）"
            }
        }],
    attacks: [{
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Wing Attack",
                fr: "Cru-Ailes",
                es: "Ataque Ala",
                it: "Attacco d'Ala",
                de: "Flügelschlag",
                'pt-br': "Ataque de Asa",
                ja: "つばさでうつ",
                ko: "날개치기",
                "zh-tw": "翼攻擊"
            },
            damage: "70"
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Three Diamond",
    description: {
        en: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
        fr: "Il survole la surface de l'eau pour repérer\nune proie et plonge en piqué pour l'attraper.",
        es: "Cuando caza, vuela muy deprisa a ras del agua\ny sorprende a inocentes presas como Magikarp.",
        it: "Quando caccia, vola velocissimo sul pelo dell'acqua\ne cattura ignare prede come Magikarp.",
        de: "Dieses Pokémon schnellt bei der Jagd blitzschnell\nunter Wasser, um seine ahnungslose Beute zu fangen.",
        'pt-br': "Quando caça, bate na superfície da água em\nalta velocidade para capturar presas desavisadas,\ncomo Magikarp.",
        ja: "エサを 探すとき 水面 すれすれを 滑るように 飛んで コイキングなどを わしづかみにする。",
        ko: "먹이를 찾을 때 수면을\n아슬아슬하게 미끄러지듯 날아\n잉어킹 등을 움켜잡는다.",
        "zh-tw": "捕獵時，它會高速掠過水面，捕捉鯉魚等粗心的獵物。"
    },
    boosters: ["mewtwo"]
};
export default card;
