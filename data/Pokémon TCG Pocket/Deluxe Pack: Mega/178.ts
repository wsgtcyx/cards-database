import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/178",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/178",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/178",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/178",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/178",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/178",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/178",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/178",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/178"
    },
    name: {
        en: "Rattata",
        fr: "Rattata",
        es: "Rattata",
        it: "Rattata",
        de: "Rattfratz",
        "pt-br": "Rattata",
        "zh-tw": "小拉達",
        ja: "コラッタ",
        ko: "꼬렛"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Colorless"
    ],
    dexId: [
        19
    ],
    stage: "Basic",
    description: {
        en: "This Pokémon is common but hazardous. Its sharp incisors can easily cut right through hard wood.",
        fr: "Prenez garde à ce Pokémon très répandu : ses puissantes incisives sont si acérées qu'elles peuvent couper des troncs d'arbre.",
        es: "Un Pokémon muy extendido con el que conviene tener cuidado, ya que sus afilados incisivos son capaces de roer maderas nobles sin problema.",
        it: "È un Pokémon molto comune con il quale è meglio fare attenzione: con i suoi incisivi affilati può tranciare anche un'asse di legno durissimo.",
        de: "Ein weitverbreitetes Pokémon, das nicht ganz ungefährlich ist. Selbst hartes Holz zerkleinert es mit seinen scharfen Nagezähnen mühelos.",
        "zh-tw": "雖然是常見的寶可夢，但還是要小心。銳利的門牙十分堅硬，就連木材也能輕易咬斷。",
        "pt-br": "Este Pokémon é comum, mas perigoso. Seus incisivos afiados podem cortar madeiras resistentes com facilidade.",
        ja: "ありふれた ポケモンだが 注意。 鋭い 前歯は 堅い 材木さえ 簡単に へしおる。",
        ko: "흔한 포켓몬이지만 주의해야 한다.\n날카로운 앞니는 단단한 나무도\n간단하게 부러뜨린다."
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
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
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
