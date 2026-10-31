import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/080",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/080",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/080",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/080",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/080",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/080",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/080",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/080",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/080"
    },
    name: {
        en: "Hariyama",
        fr: "Hariyama",
        es: "Hariyama",
        it: "Hariyama",
        de: "Hariyama",
        "pt-br": "Hariyama",
        "zh-tw": "鐵掌力士",
        ko: "하리뭉",
        ja: "ハリテヤマ"
    },
    illustrator: "Hisao Nakamura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [297],
    evolveFrom: {
        en: "Makuhita",
        fr: "Makuhita",
        es: "Makuhita",
        it: "Makuhita",
        de: "Makuhita",
        "pt-br": "Makuhita",
        "zh-tw": "幕下力士",
        ko: "마크탕",
        ja: "マクノシタ"
    },
    stage: "Stage1",
    description: {
        en: "It stomps on the ground to build power. It can send a 10-ton truck flying with a straight-arm punch.",
        fr: "Il piétine le sol violemment pour concentrer son\nénergie. Il peut envoyer en l’air un camion de 10 t\nd’un seul coup de poing.",
        es: "Para aumentar su fuerza, da un pisotón en el suelo.\nPuede lanzar un camión de 10 toneladas por los aires\nde un puñetazo.",
        it: "Pesta i piedi sul terreno per accumulare energia.\nCon uno dei suoi schiaffi può far prendere il volo\na un camion di 10 t.",
        de: "Es stampft auf den Boden, um Energie zu\ngenerieren. Ein einziger Armschlag reicht aus, um\neinen 10 t schweren LKW durch die Luft zu wirbeln.",
        "pt-br": "Pisoteia o chão para acumular energia. Pode mandar um caminhão de 10 toneladas pelos ares com um soco direto.",
        "zh-tw": "會用雙腳踩地積蓄力量，\n一拳就能打飛\n10噸重的卡車。",
        ja: "両足で 地面を 踏み鳴らして パワーを ためる。張り手 １発で １０トン トラックを 吹っ飛ばす。",
        ko: "두 다리로 땅을 힘껏 밟아서\n파워를 모은다. 손바닥 치기 한 방으로\n10톤 트럭을 날려 버린다."
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Pivot Throw",
                fr: "Lancer Tournant",
                es: "Lanzamiento de Pívot",
                de: "Schleuderwurf",
                "pt-br": "Arremesso Articulado",
                "zh-tw": "逆轉摔",
                "it": "Rotolancio",
                ja: "うっちゃり",
                ko: "뒤돌아던지기"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes +50 damage from attacks.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit + 50 dégâts provenant des attaques.",
                es: "Durante el próximo turno de tu rival, los ataques hacen +50 puntos de daño a este Pokémon.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken + 50 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá +50 pontos de dano de ataques.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到招式的傷害+50點。",
                "it": "Durante il prossimo turno del tuo avversario, questo Pokémon subisce +50 danni dagli attacchi.",
                ja: "次の相手の番、このポケモンが受けるワザのダメージを+50する。",
                ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 +50한다."
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 3
};
export default card;
