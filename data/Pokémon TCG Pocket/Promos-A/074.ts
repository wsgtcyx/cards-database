import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/074/0cf6d456d5bd73ec",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/074/0cf6d456d5bd73ec",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/074/0cf6d456d5bd73ec",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/074/0cf6d456d5bd73ec",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/074/0cf6d456d5bd73ec",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/074/0cf6d456d5bd73ec",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/074/0cf6d456d5bd73ec",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/074/0cf6d456d5bd73ec",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/074/0cf6d456d5bd73ec"
    },
    name: {
        en: "Zeraora",
        es: "Zeraora",
        "fr": "Zeraora",
        "it": "Zeraora",
        "de": "Zeraora",
        "pt-br": "Zeraora",
        "zh-tw": "捷拉奧拉",
        ja: "ゼラオラ",
        ko: "제라오라",
    },
    illustrator: "GIDORA",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    description: {
        en: "It electrifies its claws and tears its opponents\napart with them. Even if they dodge its attack,\nthey'll be electrocuted by the flying sparks.",
        es: "Hace jirones al oponente con sus garras electrificadas. Aunque\neste esquive los golpes, acaba electrocutado por las descargas.",
        "fr": "Il déchiquette son adversaire avec ses griffes chargées d'électricité. Même si sa cible évite l'attaque, elle reçoit un coup de jus.",
        "it": "Fa a pezzi l'avversario con le unghie cariche di elettricità. Anche se il nemico schiva il colpo, viene raggiunto da una scarica folgorante.",
        "de": "Mit seinen elektrisierten Krallen reißt es Gegner in Stücke. Selbst wenn sie ausweichen, werden sie von elektrisch geladenen Funken gegrillt.",
        "pt-br": "Eletrifica suas garras e despedaça seus oponentes. Mesmo que seus oponentes desviem, eles serão eletrocutados pelas centelhas no ar.",
        "zh-tw": "會讓雙手雙腳的爪子帶電，然後將對手撕裂。就算被躲開，也會用飛散的電擊讓對手觸電。",
        ja: "両手足の ツメを 帯電させ 相手を 八つ裂き。 かわされても 飛び散る 電撃で 感電させる。",
        ko: "양 손발톱에 전기를 머금어\n상대를 갈가리 찢는다. 피하더라도\n흩날리는 전격으로 감전시킨다."
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Thunderclap Flash",
                es: "Destello Fulgurante",
                "fr": "Coup de tonnerre",
                "it": "Tuonoflash",
                "de": "Blendender Blitzsturm",
                "pt-br": "Trovão Flash",
                "zh-tw": "雷霆閃現",
                ja: "じんらいせんこう",
                ko: "신뢰 섬광"
            },
            effect: {
                en: "At the end of your first turn, take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                es: "Al final de tu primer turno, se unirá 1 Energía {L} de tu área de Energía a este Pokémon.",
                "fr": "À la fin de votre premier tour, prenez une Énergie {L} de votre zone Énergie et attachez‐la à ce Pokémon.",
                "it": "Alla fine del tuo primo turno, prendi un’Energia {L} dalla tua Zona Energia e assegnala a questo Pokémon.",
                "de": "Am Ende deines ersten Zuges lege 1 {L}-Energie aus deinem Energiebereich an dieses Pokémon an.",
                "pt-br": "No final do seu primeiro turno, pegue 1 Energia {L} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "在自己的最初回合結束時,從自己的能量區抽出1個{L}能量,附於這隻寶可夢身上。",
                ja: "最初の自分の番の終わりに、自分のエネルギーゾーンから{L}エネルギーを1個出し、このポケモンにつける。",
                ko: "자신의 첫 번째 차례의 마지막에 자신의 에너지존에서 {L}에너지를 1개 내보내 이 포켓몬에게 붙인다."
            }
        }],
    attacks: [{
            name: {
                en: "Lightning Claw",
                es: "Garra Relámpago",
                "fr": "Griffe Éclair",
                "it": "Fulminartiglio",
                "de": "Blitzkrallen",
                "pt-br": "Garra de Raio",
                "zh-tw": "雷之爪",
                ja: "かみなりのツメ",
                ko: "번개발톱"
            },
            damage: 50,
            cost: ["Lightning", "Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
