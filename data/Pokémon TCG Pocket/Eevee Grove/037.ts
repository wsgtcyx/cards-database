import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3b/037",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3b/037",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3b/037",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3b/037",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3b/037",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3b/037",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3b/037",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3b/037",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3b/037"
    },
    name: {
        en: "Alcremie",
        "fr": "Charmilly",
        "es": "Alcremie",
        "it": "Alcremie",
        "de": "Pokusan",
        "pt-br": "Alcremie",
        "zh-tw": "霜奶仙",
        ja: "マホイップ",
        ko: "마휘핑",
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Milcery",
        "fr": "Crèmy",
        "es": "Milcery",
        "it": "Milcery",
        "de": "Hokumil",
        "pt-br": "Milcery",
        "zh-tw": "小仙奶",
        ja: "マホミル",
        ko: "마빌크",
    },
    description: {
        en: "When it trusts a Trainer, it will treat them\nto berries it's decorated with cream.",
        "fr": "Quand il fait confiance à un Dresseur, il le traite\naux baies, il est décoré de crème.",
        "es": "Cuando confía en un Entrenador, lo tratará\na las bayas se le adorna con crema.",
        "it": "Quando si fida di un Allenatore, lo tratterà\nai frutti di bosco si decora con panna.",
        "de": "Wenn es einem Trainer vertraut, wird es ihn behandeln\nZu den Beeren wird es mit Sahne dekoriert.",
        "pt-br": "Quando confia em um Treinador, ele irá tratá-lo\npara frutas vermelhas é decorado com creme.",
        "zh-tw": "當它信任訓練師時，它會對待他們\n漿果則用奶油裝飾。",
        ja: "信頼する トレーナーには クリームで デコレーションした 木の実を ふるまって くれるのだ。",
        ko: "믿을 수 있는 트레이너에게는\n크림으로 데코레이션한\n나무열매를 대접한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sweets Overload",
                "fr": "Surcharge de bonbons",
                "es": "Sobrecarga de dulces",
                "it": "Sovraccarico di dolci",
                "de": "Süßigkeiten-Überladung",
                "pt-br": "Sobrecarga de doces",
                "zh-tw": "糖果超載",
                ja: "ドカもりスイーツ",
                ko: "한가득스위트"
            },
            damage: "40×",
            cost: ["Colorless"],
            effect: {
                en: "This attack does 40 damage for each time your Pokémon used Sweets Relay during this game.",
                "fr": "Cette attaque inflige 40 dégâts à chaque fois que votre Pokémon a utilisé Sweets Relay pendant cette partie.",
                "es": "Este ataque hace 40 daños por cada vez que tu Pokémon usó Sweets Relay durante este juego.",
                "it": "Questo attacco infligge 40 danni per ogni volta che i tuoi Pokémon hanno utilizzato Sweets Relay durante questo gioco.",
                "de": "Dieser Angriff fügt 40 Schadenspunkte für jedes Mal zu, wenn Ihr Pokémon in diesem Spiel „Sweet Relay“ verwendet hat.",
                "pt-br": "Este ataque causa 40 de dano cada vez que seu Pokémon usou Sweets Relay durante o jogo.",
                "zh-tw": "在此遊戲中，您的神奇寶貝每次使用糖果接力時，此攻擊都會造成 40 點傷害。",
                ja: "この対戦中、自分のポケモンが「スイーツリレー」を使った回数×40ダメージ。",
                ko: "이 대전 중 자신의 포켓몬이 「스위트릴레이」를 사용한 횟수 × 40데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
