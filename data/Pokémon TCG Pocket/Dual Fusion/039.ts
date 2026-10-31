import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/039",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/039",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/039",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/039",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/039",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/039",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/039",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/039",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/039"
    },
    name: {
        en: "Basculin",
        fr: "Bargantua",
        es: "Basculin",
        "pt-br": "Basculin",
        "zh-tw": "野蠻鱸魚",
        ja: "バスラオ",
        ko: "배쓰나이",
        it: "Basculin",
        de: "Barschuft"
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 70,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Rock Head",
                fr: "Tête de Roc",
                es: "Cabeza Roca",
                it: "Testadura",
                de: "Steinhaupt",
                "pt-br": "Cabeça de Pedra",
                "zh-tw": "堅硬腦袋",
                ja: "いしあたま",
                ko: "돌머리"
            },
            cost: [
                "Colorless",
                "Water"
            ],
            damage: 40,
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 30 dégâts provenant des attaques.",
                es: "Durante el próximo turno de tu rival, los ataques hacen ‐30 puntos de daño a este Pokémon.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce −30 danni dagli attacchi.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken − 30 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá −30 pontos de dano de ataques.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到招式的傷害-30點。",
                ja: "次の相手の番、このポケモンが受けるワザのダメージを-30する。",
                ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -30한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "These Pokémon form schools with others of the same color. The greatest foe of a school of blue Basculin is a school of red Basculin.",
        fr: "Ils forment des bancs entre spécimens de même couleur. Leurs plus grands ennemis sont les Bargantua rouges.",
        es: "Forman bancos de ejemplares del mismo color. Sus enemigos acérrimos son los Basculin de raya roja.",
        it: "Gli esemplari dello stesso colore si riuniscono a formare dei banchi. I loro acerrimi nemici sono i banchi di Basculin di colore rosso.",
        de: "Sie schließen sich mit gleichfarbigen Artgenossen zu Schwärmen zusammen. Ihre Erzfeinde sind Schwärme von rotlinigen Barschuft.",
        "pt-br": "Estes Pokémon formam cardumes com outros da mesma cor. O maior inimigo de um cardume de Basculin azuis é um de Basculin vermelhos.",
        "zh-tw": "會依體色集結成群。最大的敵人是紅色的野蠻鱸魚的群體。",
        ja: "同じ色で 集まり 群れる。 いちばんの 敵は 赤い色の バスラオの 群れなのだ。",
        ko: "같은 색끼리 모여서 무리를 이룬다.\n최대의 적은 빨간색 배쓰나이 무리다."
    }
};

export default card;
