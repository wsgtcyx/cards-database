import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/060",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/060",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/060",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/060",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/060",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/060",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/060",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/060"
    },
    name: {
        en: "Espeon",
        fr: "Mentali",
        es: "Espeon",
        "pt-br": "Espeon",
        "zh-tw": "太陽伊布",
        ja: "エーフィ",
        ko: "에브이",
        it: "Espeon",
        de: "Psiana"
    },
    illustrator: "Cona Nitanda",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 90,
    types: [
        "Psychic"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    attacks: [
        {
            name: {
                en: "Brainwave",
                fr: "Onde Cérébrale",
                es: "Onda Cerebral",
                it: "Onda Cerebrale",
                de: "Gehirnwelle",
                "pt-br": "Onda Cerebral",
                "zh-tw": "腦力波",
                ja: "ブレインウェーブ",
                ko: "브레인웨이브"
            },
            cost: [
                "Colorless"
            ],
            damage: "10+",
            effect: {
                en: "This attack does 20 more damage for each {P} Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {P} attachée à ce Pokémon.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía {P} unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia {P} assegnata a questo Pokémon.",
                de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {P}-Energie 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia {P} ligada a este Pokémon.",
                "zh-tw": "增加這隻寶可夢身上的{P}能量的數量×20點傷害。",
                ja: "このポケモンの{P}エネルギーの数×20ダメージ追加。",
                ko: "이 포켓몬의 {P}에너지의 개수 × 20데미지를 추가한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "The tip of its forked tail quivers when it is predicting its opponent’s next move.",
        fr: "Quand il prédit la prochaine attaque de son adversaire, l’extrémité fourchue de sa queue frémit.",
        es: "Al predecir el siguiente movimiento de su rival, los extremos de su cola bífida tiemblan ligeramente.",
        it: "Mentre prevede la prossima mossa del nemico, le punte della sua coda biforcuta tremano lievemente.",
        de: "Die Spitze seines geteilten Schweifs bebt, wenn es die nächste Attacke seines Feindes voraussagt.",
        "pt-br": "A ponta de sua cauda bifurcada treme enquanto prevê o próximo movimento de seu oponente.",
        "zh-tw": "預知對手的行動時，分叉的尾巴前端就會微微地擺動。",
        ja: "相手の 動きを 予知するとき ふたまたに なっている 尻尾の 先は 微妙に 揺れている。",
        ko: "상대의 움직임을 예지할 때\n두 갈래로 갈라져 있는 꼬리의\n끝이 미세하게 떨린다."
    }
};

export default card;
