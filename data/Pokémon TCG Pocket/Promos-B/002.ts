import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/002/95807e0865262f1a",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/002/95807e0865262f1a",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/002/95807e0865262f1a",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/002/95807e0865262f1a",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/002/95807e0865262f1a",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/002/95807e0865262f1a",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/002/95807e0865262f1a",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/002/95807e0865262f1a",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/002/95807e0865262f1a"
    },
    name: {
        en: "Petilil",
        fr: "Chlorobule",
        es: "Petilil",
        it: "Petilil",
        de: "Lilminip",
        "pt-br": "Petilil",
        "zh-tw": "百合根娃娃",
        ko: "치릴리",
        ja: "チュリネ"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    dexId: [548],
    stage: "Basic",
    description: {
        en: "If the leaves on its head are pruned with regularity, this Pokémon can be grown into a fine plump shape.",
        fr: "Si on taille ses feuilles de temps à autre, cela lui donne une forme parfaitement ronde et harmonieuse.",
        es: "Adquiere un aspecto esplendoroso cuando se le recortan las hojas de la cabeza con cierta asiduidad.",
        it: "Le foglie che ha sul capo vanno spuntate di tanto in tanto per permettergli di crescere florido e bello rotondo.",
        de: "Wenn man ab und zu seine Blätter schneidet, wächst sein Körper rund und prächtig heran.",
        "pt-br": "Se as folhas em sua cabeça forem podadas regularmente, este Pokémon pode crescer com um elegante formato rechonchudo.",
        "zh-tw": "如果偶爾修剪葉子，就會長成圓鼓鼓很華麗的樣子。",
        ja: "たまに 葉っぱを トリミングすると 丸々とした 立派な 姿に 育っていくのだ。",
        ko: "가끔 잎을 손질해 주면\n둥글둥글하게 훌륭한 모습으로\n자라난다."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Surprise Attack",
                fr: "Attaque Surprise",
                es: "Ataque Sorpresa",
                it: "Attacco a Sorpresa",
                de: "Überraschungsangriff",
                "pt-br": "Ataque Surpresa",
                "zh-tw": "偷襲",
                ja: "ふいをつく",
                ko: "허찌르기"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
                de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
                "zh-tw": "擲1次硬幣若為反面,則這個招式失敗。",
                ja: "コインを1回投げウラなら、このワザは失敗。",
                ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol1"]
};

export default card;
