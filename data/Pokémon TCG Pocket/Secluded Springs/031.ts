import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/031",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/031",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/031",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/031",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/031"
    },
    name: {
        en: "Boltund",
        "fr": "Fulgudog",
        "es": "Boltund",
        "it": "Boltund",
        "de": "Bellektro",
        "pt-br": "Boltund",
        "zh-tw": "逐電犬",
        ja: "パルスワン",
        ko: "펄스멍",
    },
    illustrator: "Tomomi Ozaki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    evolveFrom: {
        en: "Yamper",
        "fr": "Voltoutou",
        "es": "Yamper",
        "it": "Yamper",
        "de": "Voldi",
        "pt-br": "Yamper",
        "zh-tw": "來電汪",
        ja: "ワンパチ",
        ko: "멍파치",
    },
    description: {
        en: "This Pokémon generates electricity and channels\nit into its legs to keep them going strong.\nBoltund can run nonstop for three full days.",
        "fr": "Ce Pokémon génère de l'électricité et des canaux\nil dans ses jambes pour les maintenir forts.\nBoltund peut fonctionner sans interruption pendant trois jours complets.",
        "es": "Este Pokémon genera electricidad y canales.\nen sus piernas para mantenerlas fuertes.\nBoltund puede correr sin parar durante tres días completos.",
        "it": "Questo Pokémon genera elettricità e canalizza\nnelle sue gambe per mantenerle forti.\nBoltund può correre senza sosta per tre giorni interi.",
        "de": "Dieses Pokémon erzeugt Elektrizität und Kanäle\nes in seine Beine, um sie stark zu halten.\nBoltund kann drei volle Tage lang ununterbrochen laufen.",
        "pt-br": "Este Pokémon gera eletricidade e canaliza\nem suas pernas para mantê-las fortes.\nBoltund pode funcionar sem parar por três dias inteiros.",
        "zh-tw": "這個神奇寶貝會產生電力和通道\n它進入它的腿以保持它們的力量。\nBoltund 可以不間斷地運行三天。",
        ja: "電気を つくって 脚に 送り 走りを アシスト。 三日三晩 休まず 走れるのだ。",
        ko: "만든 전기를 다리로 보내서\n달리는 것을 돕는다. 삼 일 밤낮을\n쉬지 않고 달릴 수 있다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Defiant Spark",
                "fr": "Étincelle provocante",
                "es": "Chispa desafiante",
                "it": "Scintilla ribelle",
                "de": "Trotziger Funke",
                "pt-br": "Faísca desafiadora",
                "zh-tw": "挑釁火花",
                ja: "まけんきスパーク",
                ko: "오기스파크"
            },
            damage: 70,
            cost: ["Lightning", "Colorless", "Colorless"],
            effect: {
                en: "If this Pokémon has damage on it, this attack can be used for 1 {L} Energy.",
                "fr": "Si ce Pokémon subit des dégâts, cette attaque peut être utilisée pour 1 {L} Énergie.",
                "es": "Si este Pokémon tiene daño, este ataque puede usarse por 1 {L} de Energía.",
                "it": "Se questo Pokémon ha dei danni, questo attacco può essere usato per 1 Energia {L}.",
                "de": "Wenn dieses Pokémon Schaden hat, kann dieser Angriff für 1 {L} Energie verwendet werden.",
                "pt-br": "Se este Pokémon sofrer dano, este ataque poderá ser usado por 1 {L} Energia.",
                "zh-tw": "如果該神奇寶貝受到傷害，則該攻擊可消耗 1 {L} 點能量。",
                ja: "このワザは、このポケモンがダメージを受けているなら、{L}エネルギー1個で使える。",
                ko: "이 기술은 이 포켓몬이 데미지를 받고 있다면 {L}에너지 1개로 사용할 수 있다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
