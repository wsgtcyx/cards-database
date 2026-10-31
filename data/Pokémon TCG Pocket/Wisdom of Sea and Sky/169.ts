import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/169",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/169",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/169",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/169",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/169",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/169",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/169",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/169",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/169"
    },
    name: {
        en: "Octillery",
        "fr": "Octillery",
        "es": "Octillery",
        "it": "Octillery",
        "de": "Octillery",
        "pt-br": "Octillery",
        "zh-tw": "章魚桶",
        ja: "オクタン",
        ko: "대포무노",
    },
    illustrator: "REND",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Remoraid",
        "fr": "Rémoraid",
        "es": "Remoraid",
        "it": "Remoraid",
        "de": "Remoraid",
        "pt-br": "Remoraid",
        "zh-tw": "鐵炮魚",
        ja: "テッポウオ",
        ko: "총어",
    },
    description: {
        en: "Its instinct is to bury itself in holes. It often steals\nthe nesting holes of others to sleep in them.",
        "fr": "Son instinct est de s'enfouir dans des trous. Il vole souvent\nles nids des autres pour y dormir.",
        "es": "Su instinto es enterrarse en agujeros. A menudo roba\nlos nidos de otros para dormir en ellos.",
        "it": "Il suo istinto è quello di seppellirsi nelle buche. Ruba spesso\ni nidi degli altri per dormirci dentro.",
        "de": "Sein Instinkt besteht darin, sich in Löchern zu vergraben. Es wird oft geklaut\ndie Nisthöhlen anderer, um darin zu schlafen.",
        "pt-br": "Seu instinto é enterrar-se em buracos. Muitas vezes rouba\nos ninhos de outros para dormir neles.",
        "zh-tw": "它的本能就是把自己埋進洞裡。經常偷東西\n別人的巢穴，讓他們睡在裡面。",
        ja: "穴に 入りたがる 性質で ほかの ポケモンが 作った 巣穴を 横取りして 眠る。",
        ko: "구멍에 들어가고 싶어하는\n성질이 있어 다른 포켓몬이 만든\n굴을 빼앗고 그곳에서 잠을 잔다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Octazooka",
                "fr": "Octazooka",
                "es": "Octazooka",
                "it": "Ottazooka",
                "de": "Octazooka",
                "pt-br": "Octazooka",
                "zh-tw": "八祖岡",
                ja: "オクタンほう",
                ko: "대포무노포"
            },
            damage: 50,
            cost: ["Water", "Water"],
            effect: {
                en: "If the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen. This effect lasts until the Defending Pokémon leaves the Active Spot, and it doesn't stack.",
                "fr": "Si le Pokémon défenseur tente d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, cette attaque n'a pas lieu. Cet effet dure jusqu'à ce que le Pokémon défenseur quitte le point actif, et il ne se cumule pas.",
                "es": "Si el Pokémon Defensor intenta usar un ataque, tu oponente lanza una moneda. Si sale cruz, ese ataque no ocurre. Este efecto dura hasta que el Pokémon Defensor abandona el Punto Activo y no se acumula.",
                "it": "Se il Pokémon difensore tenta di usare un attacco, il tuo avversario lancia una moneta. Se esce croce, l'attacco non avviene. Questo effetto dura finché il Pokémon difensore non lascia il punto attivo e non si accumula.",
                "de": "Wenn das verteidigende Pokémon versucht, einen Angriff auszuführen, wirft dein Gegner eine Münze. Bei „Zahl“ findet dieser Angriff nicht statt. Dieser Effekt hält an, bis das verteidigende Pokémon die aktive Position verlässt, und ist nicht stapelbar.",
                "pt-br": "Se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se der coroa, esse ataque não acontece. Este efeito dura até o Pokémon Defensor sair do Ponto Ativo e não se acumula.",
                "zh-tw": "如果防守的神奇寶貝嘗試使用攻擊，你的對手會擲硬幣。如果是反面，則不會發生該攻擊。該效果會持續到防御寶可夢離開活動區域為止，並且不會疊加。",
                ja: "このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。この効果は、このワザを受けたポケモンがバトル場をはなれるまで続き、重ならない。",
                ko: "이 기술을 받은 포켓몬이 기술을 사용할 때 상대는 동전을 1번 던진다. 뒷면이 나오면 그 기술은 실패한다. 이 효과는 이 기술을 받은 포켓몬이 배틀필드를 떠날 때까지 계속되며 중복되지 않는다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
