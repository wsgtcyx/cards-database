import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/044",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/044",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/044",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/044",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/044",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/044",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/044"
    },
    name: {
        en: "Voltorb",
        fr: "Voltorbe",
        es: "Voltorb",
        "pt-br": "Voltorb",
        "zh-tw": "霹靂電球",
        ja: "ビリリダマ",
        ko: "찌리리공",
        it: "Voltorb",
        de: "Voltobal"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x",
        "pikachu"
    ],
    hp: 60,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Rollout",
                fr: "Roulade",
                es: "Rodar",
                it: "Rotolamento",
                de: "Walzer",
                "pt-br": "Rolagem",
                "zh-tw": "滾動",
                ja: "ころがる",
                ko: "Rollout"
            },
            cost: [
                "Colorless"
            ],
            damage: 10
        }
    ],
    abilities: [],
    description: {
        en: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
        fr: "Il se déplace en roulant. Si le sol est cabossé, les chocs le font exploser.",
        es: "Se mueve rodando. Si el terreno es irregular, una chispa provocada por algún bache lo hará explotar.",
        it: "Rotola per spostarsi. Se il terreno è irregolare, può esplodere all’improvviso a causa dell’urto contro un dosso.",
        de: "Es bewegt sich rollend fort. Rollt es über unebenen Boden, kann es plötzlich explodieren.",
        "pt-br": "Ele rola para se mover. Quando o solo está desnivelado, um solavanco repentino após um baque pode fazê-lo explodir.",
        "zh-tw": "靠著滾來滾去移動，如果地面凹凸不平，就會受到衝擊而爆炸。",
        ja: "転がって 移動するので 地面が デコボコだと ショックで 爆発してしまう。",
        ko: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode."
    }
};

export default card;
