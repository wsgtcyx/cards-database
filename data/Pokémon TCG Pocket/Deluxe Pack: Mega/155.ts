import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/155",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/155",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/155",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/155",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/155",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/155",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/155",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/155",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/155"
    },
    name: {
        en: "Mega Steelix ex",
        fr: "Méga-Steelix-ex",
        es: "Mega-Steelix ex",
        it: "Mega Steelix-ex",
        de: "Mega-Stahlos-ex",
        "pt-br": "Mega Steelix ex",
        "zh-tw": "超級大鋼蛇ex",
        ja: "メガハガネールex",
        ko: "메가강철톤 ex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 220,
    types: [
        "Metal"
    ],
    dexId: [
        208
    ],
    evolveFrom: {
        en: "Onix",
        fr: "Onix",
        es: "Onix",
        it: "Onix",
        de: "Onix",
        "pt-br": "Onix",
        "zh-tw": "大岩蛇",
        ja: "イワーク",
        ko: "롱스톤"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Metal",
                "Metal",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Adamantine Rolling",
                fr: "Roulade Diamantine",
                es: "Rotación Adamantina",
                it: "Rotolata Adamantina",
                de: "Stahlhartes Rollen",
                "pt-br": "Rolagem Adamantina",
                "zh-tw": "堅身回轉",
                ja: "アダマントローリング",
                ko: "애더먼트롤링"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks and has no Weakness.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques et n'a pas de Faiblesse.",
                es: "Durante el próximo turno de tu rival, los ataques hacen ‐20 puntos de daño a este Pokémon, y este no tiene Debilidad.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi e non ha debolezza.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken -20 Schadenspunkte zugefügt und es hat keine Schwäche.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá −20 pontos de dano de ataques e não terá Fraqueza.",
                "zh-tw": "在下個對手的回合,這隻寶可夢受到招式的傷害-20點,弱點也全部消除。",
                ja: "次の相手の番、このポケモンが受けるワザのダメージを-20し、弱点もすべてなくす。",
                ko: "상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지를 -20하고 약점도 모두 없앤다."
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
