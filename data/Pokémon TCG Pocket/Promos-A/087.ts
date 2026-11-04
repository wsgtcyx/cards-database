import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/087/f4ed86ac3c0e7ecb",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/087/f4ed86ac3c0e7ecb",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/087/f4ed86ac3c0e7ecb",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/087/f4ed86ac3c0e7ecb",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/087/f4ed86ac3c0e7ecb",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/087/f4ed86ac3c0e7ecb",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/087/f4ed86ac3c0e7ecb",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/087/f4ed86ac3c0e7ecb",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/087/f4ed86ac3c0e7ecb"
    },
    name: {
        en: "Alcremie",
        es: "Alcremie",
        "fr": "Charmilly",
        "it": "Alcremie",
        "de": "Pokusan",
        "pt-br": "Alcremie",
        "zh-tw": "霜奶仙",
        ja: "マホイップ",
        ko: "마휘핑",
    },
    illustrator: "Tika Matsuno",
    rarity: "One Star",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Milcery",
        es: "Milcery",
        "fr": "Crèmy",
        "it": "Milcery",
        "de": "Hokumil",
        "pt-br": "Milcery",
        "zh-tw": "小仙奶",
        ja: "マホミル",
        ko: "마빌크"
    },
    description: {
        en: "When it trusts a Trainer, it will treat them\nto berries it's decorated with cream.",
        es: "Obsequia bayas decoradas con nata a\naquellos Entrenadores en los que confía.",
        "fr": "Il offre aux Dresseurs auxquels il accorde toute sa confiance des Baies décorées avec de la crème.",
        "it": "Agli Allenatori di cui si fida regala bacche decorate con la panna.",
        "de": "Es macht einem Trainer, dem es vertraut, mit Beeren samt Sahnedekoration eine Freude.",
        "pt-br": "Quando confia em um Treinador, oferece frutas decoradas com chantili.",
        "zh-tw": "牠會把自己用鮮奶油裝飾過的樹果送給自己信任的訓練家。",
        ja: "信頼する トレーナーには クリームで デコレーションした 木の実を ふるまって くれるのだ。",
        ko: "믿을 수 있는 트레이너에게는\n크림으로 데코레이션한\n나무열매를 대접한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sweets Overload",
                es: "Dulzor Extremo",
                "fr": "Avalanche Sucrée",
                "it": "Dolce Sovraccarico",
                "de": "Süßer Überfluss",
                "pt-br": "Sobrecarga Açucarada",
                "zh-tw": "甜點堆堆堆",
                ja: "ドカもりスイーツ",
                ko: "한가득스위트"
            },
            damage: "40×",
            cost: ["Colorless"],
            effect: {
                en: "This attack does 40 damage for each time your Pokémon used Sweets Relay during this game.",
                es: "Este ataque hace 40 puntos de daño por cada vez que tus Pokémon hayan usado Relevo Dulce durante esta partida.",
                "fr": "Cette attaque inflige 40 dégâts pour chaque utilisation de Saupoudrage Sucré par vos Pokémon pendant cette partie.",
                "it": "Questo attacco infligge 40 danni per ogni volta che i tuoi Pokémon hanno usato Dolce Staffetta durante questa partita.",
                "de": "Diese Attacke fügt für jedes Mal, wenn deine Pokémon in diesem Spiel Süße Staffel eingesetzt haben, 40 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 40 pontos de dano para cada vez que seus Pokémon usaram Revezamento Doce durante este jogo.",
                "zh-tw": "造成這場對戰中自己的寶可夢使用「甜點砸砸砸」的次數×40點傷害。",
                ja: "この対戦中、自分のポケモンが「スイーツリレー」を使った回数×40ダメージ。",
                ko: "이 대전 중 자신의 포켓몬이 「스위트릴레이」를 사용한 횟수 × 40데미지를 준다."
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol10"]
};
export default card;
