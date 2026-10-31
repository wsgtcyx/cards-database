import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/039",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/039",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/039",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/039"
    },
    name: {
        en: "Vanilluxe",
        "fr": "Sorbouboul",
        "es": "Vanilluxe",
        "it": "Vanilluxe",
        "de": "Gelatwino",
        "pt-br": "Vanilluxe",
        "zh-tw": "雙倍多多冰",
        ja: "バイバニラ",
        ko: "배바닐라"
    },
    illustrator: "kodama",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Vanillish",
        "fr": "Sorboul",
        "es": "Vanillish",
        "it": "Vanillish",
        "de": "Gelatroppo",
        "pt-br": "Vanillish",
        "zh-tw": "多多冰",
        ja: "バニリッチ",
        ko: "바닐리치"
    },
    description: {
        en: "People believe this Pokémon formed when two\nVanillish stuck together. Its body temperature is\nroughly 21 degrees Fahrenheit.",
        "fr": "Les gens croient que ce Pokémon s'est formé lorsque deux\nVanillish est resté ensemble. Sa température corporelle est\nenviron 21 degrés Fahrenheit.",
        "es": "La gente cree que este Pokémon se formó cuando dos\nVanillish se mantuvo unido. Su temperatura corporal es\naproximadamente 21 grados Fahrenheit.",
        "it": "La gente crede che questo Pokémon si sia formato quando aveva due anni\nI Vanillish sono rimasti uniti. La sua temperatura corporea è\ncirca 21 gradi Fahrenheit.",
        "de": "Die Leute glauben, dass sich dieses Pokémon zu zweit gebildet hat\nVanillin klebte zusammen. Seine Körpertemperatur beträgt\nungefähr 21 Grad Fahrenheit.",
        "pt-br": "As pessoas acreditam que este Pokémon se formou quando dois\nVanillish grudado. Sua temperatura corporal é\ncerca de 21 graus Fahrenheit.",
        "zh-tw": "人們相信這個神奇寶貝是由兩個\n瓦尼利甚粘在一起了。它的體溫是\n大約 21 華氏度。",
        ja: "体温は マイナス６度 前後。 ２匹の バニリッチが くっつき 生まれたと いわれている。",
        ko: "체온은 마이너스 6도 전후이다.\n2마리의 바닐리치가 붙어서\n태어났다고 한다."
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Sweets Relay",
                "fr": "Relais des Bonbons",
                "es": "Relevo de dulces",
                "it": "Relè dei dolci",
                "de": "Süßigkeiten-Staffel",
                "pt-br": "Revezamento de Doces",
                "zh-tw": "糖果接力賽",
                ja: "スイーツリレー",
                ko: "스위트릴레이"
            },
            damage: "60+",
            cost: ["Water", "Water"],
            effect: {
                en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 60 more damage.",
                "fr": "Si 1 de vos Pokémon a utilisé Relais Bonbons lors de votre dernier tour, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si 1 de tus Pokémon usó Sweets Relay durante tu último turno, este ataque hace 60 daños más.",
                "it": "Se 1 dei tuoi Pokémon ha utilizzato Sweets Relay durante il tuo ultimo turno, questo attacco infligge 60 danni in più.",
                "de": "Wenn eines deiner Pokémon in deinem letzten Zug „Sweet Relay“ verwendet hat, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se 1 dos seus Pokémon usou Sweets Relay durante seu último turno, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果你的 1 個神奇寶貝在你的最後回合中使用了糖果接力，則此攻擊造成的傷害增加 60 點。",
                ja: "前の自分の番、自分のポケモンが「スイーツリレー」を使っていたなら、60ダメージ追加。",
                ko: "자신의 이전 차례에 자신의 포켓몬이 「스위트릴레이」를 사용했다면 60데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
