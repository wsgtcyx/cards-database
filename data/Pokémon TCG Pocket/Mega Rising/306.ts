import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/306",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/306",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/306",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/306",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/306",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/306",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/306",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/306",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/306"
    },
    name: {
        en: "Hypno",
        "fr": "Hypnomade",
        "es": "Hypno",
        "it": "Hypno",
        "de": "Hypno",
        "pt-br": "Hypno",
        "zh-tw": "引夢貘人",
        ja: "スリーパー",
        ko: "슬리퍼",
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Drowzee",
        "fr": "Soporifik",
        "es": "Drowzee",
        "it": "Drowzee",
        "de": "Traumato",
        "pt-br": "Drowzee",
        "zh-tw": "催眠貘",
        ja: "スリープ",
        ko: "슬리프",
    },
    description: {
        en: "When it locks eyes with an enemy, it will use\na mix of psi moves, such as Hypnosis and\nConfusion.",
        "fr": "Lorsqu'il croise les yeux d'un ennemi, il utilisera\nun mélange de mouvements psi, tels que l'hypnose et\nConfusion.",
        "es": "Cuando mira a un enemigo a los ojos, usará\nuna mezcla de movimientos psi, como hipnosis y\nConfusión.",
        "it": "Quando fissa gli occhi con un nemico, utilizzerà\nun mix di mosse psichiche, come Ipnosi e\nConfusione.",
        "de": "Wenn es einen Feind ansieht, wird es ihn benutzen\neine Mischung aus Psi-Bewegungen wie Hypnose und\nVerwirrung.",
        "pt-br": "Quando ele encarar um inimigo, ele usará\numa mistura de movimentos psi, como hipnose e\nConfusão.",
        "zh-tw": "當它鎖定敵人時，它會使用\n混合了 psi 動作，例如催眠和\n混亂。",
        ja: "相手と 目が 合ったときに 催眠術など 数々の 超能力を 使うという。",
        ko: "상대와 눈이 마주쳤을 때\n최면술 등의 다양한 초능력을\n사용한다고 전해진다."
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Sleep Pendulum",
                "fr": "Pendule du sommeil",
                "es": "Péndulo del sueño",
                "it": "Pendolo del sonno",
                "de": "Schlafpendel",
                "pt-br": "Pêndulo do Sono",
                "zh-tw": "睡眠鐘擺",
                ja: "ねむりのふりこ",
                ko: "잠듦의 추"
            },
            effect: {
                en: "Once during your turn, you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
                "fr": "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "Una vez durante tu turno, puedes lanzar una moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
                "it": "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Einmal in deinem Zug darfst du eine Münze werfen. Bei „Kopf“ schläft das aktive Pokémon deines Gegners jetzt.",
                "pt-br": "Uma vez durante o seu turno, você pode jogar uma moeda. Se der cara, o Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "在你的回合中，你可以拋一次硬幣。如果正面，則對手的活躍神奇寶貝現在處於睡眠狀態。",
                ja: "自分の番に1回使える。コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。",
                ko: "자신의 차례에 1번 사용할 수 있다. 동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 잠듦으로 만든다."
            }
        }],
    attacks: [{
            name: {
                en: "Psypunch",
                "fr": "Coup de poing psychologique",
                "es": "Psypunch",
                "it": "Psicopugno",
                "de": "Psypunch",
                "pt-br": "Psypunch",
                "zh-tw": "靈拳",
                ja: "サイコパンチ",
                ko: "사이코펀치"
            },
            damage: 50,
            cost: ["Psychic", "Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
