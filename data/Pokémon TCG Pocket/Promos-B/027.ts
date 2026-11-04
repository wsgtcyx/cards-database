import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/027/bf2942a737d94f94",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/027/bf2942a737d94f94",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/027/bf2942a737d94f94",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/027/bf2942a737d94f94",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/027/bf2942a737d94f94",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/027/bf2942a737d94f94",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/027/bf2942a737d94f94",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/027/bf2942a737d94f94",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/027/bf2942a737d94f94"
    },
    name: {
        en: "Plusle",
        fr: "Posipi",
        es: "Plusle",
        it: "Plusle",
        de: "Plusle",
        "pt-br": "Plusle",
        "zh-tw": "正電拍拍",
        ko: "플러시",
        ja: "プラスル"
    },
    illustrator: "Yuka Morii",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [311],
    stage: "Basic",
    description: {
        en: "This Pokémon absorbs electricity from telephone poles. It shorts out the electricity stored inside its body to create noises.",
        fr: "Il absorbe l'énergie des poteaux électriques et court-circuite celle qui est emmagasinée dans son corps pour produire des sons.",
        es: "Absorbe electricidad de los postes de teléfono. La almacena y crea cortocircuitos en su cuerpo para producir sonidos.",
        it: "Assorbe elettricità dai pali della luce, la accumula e poi crea dei rumorosi cortocircuiti.",
        de: "Es saugt Elektrizität aus Strommasten. Erzeugt es mit dem im Körper gespeicherten Strom einen Kurzschluss, erklingt ein Geräusch.",
        "pt-br": "Este Pokémon absorve eletricidade de postes telefônicos e descarrega a energia armazenada em seu corpo em forma de sons.",
        "zh-tw": "能從電線桿上吸取電力。會透過讓體內儲存的電流短路來發出聲音。",
        ja: "電柱から 電気を 吸い取る。 体に 溜めた 電気を ショートさせて 音を 出す。",
        ko: "전신주에서 전기를 흡수한다.\n몸에 모은 전기를\n합선시켜 소리를 낸다."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Electric Tail",
                fr: "Électro-Queue",
                es: "Cola Eléctrica",
                it: "Elettrocoda",
                de: "Stromschweif",
                "pt-br": "Cauda Elétrica",
                "zh-tw": "電尾",
                ja: "でんきしっぽ",
                ko: "전기꼬리"
            },
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
                de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
                "pt-br": "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
                "zh-tw": "擲1次硬幣若為正面,則將對手的戰鬥寶可夢麻痺。",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다."
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
