import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/428",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/428",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/428",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/428",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/428",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/428",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/428",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/428",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/428"
    },
    name: {
        en: "Miraidon ex",
        fr: "Miraidon-ex",
        es: "Miraidon ex",
        it: "Miraidon-ex",
        de: "Miraidon-ex",
        "pt-br": "Miraidon ex",
        "zh-tw": "密勒頓ex",
        ja: "ミライドンex",
        ko: "미라이돈 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Crown",
    category: "Pokemon",
    hp: 140,
    types: [
        "Lightning"
    ],
    dexId: [
        1008
    ],
    stage: "Basic",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Legendary Drive",
                fr: "Propulsion Légendaire",
                es: "Impulso Legendario",
                it: "Assalto Leggendario",
                de: "Legendärer Antrieb",
                "pt-br": "Impulso Lendário",
                "zh-tw": "傳說進擊",
                ja: "でんせつのしんげき",
                ko: "전설의 진격"
            },
            effect: {
                en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may switch it with your Active Pokémon. If you do, move all of your Energy in play to this Pokémon.",
                fr: "Une seule fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez l'échanger avec votre Pokémon Actif. Dans ce cas, déplacez toute votre Énergie en jeu vers ce Pokémon.",
                es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano a tu Banca, puedes cambiarlo por tu Pokémon Activo. Si lo haces, mueve toda tu Energía en juego a este Pokémon.",
                it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, sposta tutte le tue Energie in gioco a questo Pokémon.",
                de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand auf deine Bank spielst, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, verschiebe alle deine Energien im Spiel auf dieses Pokémon.",
                "pt-br": "Uma vez durante o seu turno, quando você colocar este Pokémon da sua mão no seu Banco, você poderá trocá‐lo pelo seu Pokémon Ativo. Se fizer isso, mova todas as suas Energias em jogo para este Pokémon.",
                "zh-tw": "在自己的回合,當從手牌將這張卡放置於備戰區時,可使用1次。將這隻寶可夢與戰鬥寶可夢互換。然後,將自己的場上的所有能量改附於這隻寶可夢身上。",
                ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。このポケモンをバトルポケモンと入れ替える。その後、自分の場のエネルギーをすべて、このポケモンにつけ替える。",
                ko: "자신의 차례에 이 카드를 패에서 벤치로 내보냈을 때 1번 사용할 수 있다. 이 포켓몬을 배틀 포켓몬과 교체한다. 그 뒤, 자신의 필드의 에너지를 모두 이 포켓몬에게 바꿔 붙인다."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Hadron Ray",
                fr: "Rayon à Hadrons",
                es: "Rayo Hadrónico",
                it: "Raggio Adronico",
                de: "Hadronen-Strahl",
                "pt-br": "Feixe Hadrônico",
                "zh-tw": "強子射線",
                ja: "ハドロンレイ",
                ko: "하드론레이"
            },
            effect: {
                en: "This attack does 20 more damage for each {L} Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {L} attachée à ce Pokémon.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía {L} unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia {L} assegnata a questo Pokémon.",
                de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {L}-Energie 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia {L} ligada a este Pokémon.",
                "zh-tw": "增加這隻寶可夢身上的{L}能量的數量×20點傷害。",
                ja: "このポケモンの{L}エネルギーの数×20ダメージ追加。",
                ko: "이 포켓몬의 {L}에너지의 개수 × 20데미지를 추가한다."
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
