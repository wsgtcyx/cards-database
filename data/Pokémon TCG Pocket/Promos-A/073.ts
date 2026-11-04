import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/073/34a39b3ad1ce2669",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/073/34a39b3ad1ce2669",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/073/34a39b3ad1ce2669",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/073/34a39b3ad1ce2669",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/073/34a39b3ad1ce2669",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/073/34a39b3ad1ce2669",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/073/34a39b3ad1ce2669",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/073/34a39b3ad1ce2669",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/073/34a39b3ad1ce2669"
    },
    name: {
        en: "Toucannon",
        fr: "Bazoucan",
        es: "Toucannon",
        it: "Toucannon",
        de: "Tukanon",
        'pt-br': "Toucannon",
        ja: "ドデカバシ",
        ko: "왕큰부리",
        "zh-tw": "銃嘴大鳥",
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    evolveFrom: {
        en: "Trumbeak",
        "fr": "Piclairon",
        "es": "Trumbeak",
        "it": "Trumbeak",
        "de": "Trompeck",
        "pt-br": "Trumbeak",
        "zh-tw": "喇叭啄鳥",
        ja: "ケララッパ",
        ko: "크라파"
    },
    description: {
        en: "They smack beaks with others of their kind to communicate.\nThe strength and number of hits tell each other how they feel.",
        fr: "Ils communiquent entre eux en se frappant\nmutuellement sur le bec. La force et la cadence\ndes coups en disent long sur leur état d'esprit.",
        es: "Se comunican con sus compañeros chocando los\npicos. El número de veces y la fuerza con la que\nlo hacen transmiten sus distintos sentimientos.",
        it: "I Toucannon comunicano tra di loro sbattendo i becchi. La forza\ne il numero dei colpi indicano i sentimenti che vogliono esprimere.",
        de: "Sie kommunizieren miteinander, indem sie ihre\nSchnäbel gegeneinanderschlagen. Stärke und\nAnzahl der Schläge übermitteln ihre Gefühle.",
        'pt-br': "Batem os bicos com outros de sua espécie\npara se comunicar. A quantidade e a força das bicadas\ndemonstram como estão se sentindo.",
        ja: "仲間と クチバシを 叩き合わせて コミュニケーション。 叩く 強さや 回数で 気持ちを 伝えあう。",
        ko: "동료와 부리를 부딪히며\n커뮤니케이션한다. 부딪히는 강도나\n횟수로 기분을 전달한다.",
        "zh-tw": "會與夥伴互相敲擊鳥嘴來進行溝通，透過敲擊的強度和次數來傳達彼此的心情。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Beak Blast",
                fr: "Bec-Canon",
                es: "Pico Cañón",
                it: "Cannonbecco",
                de: "Schnabelkanone",
                'pt-br': "Bico Explosivo",
                ja: "くちばしキャノン",
                ko: "부리캐논",
                "zh-tw": "鳥嘴加農炮"
            },
            damage: 80,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
                fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
                ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
                ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 화상으로 만든다.",
                'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
                "zh-tw": "擲1次硬幣若為正面,則將對手的戰鬥寶可夢灼傷。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol8"]
};
export default card;
