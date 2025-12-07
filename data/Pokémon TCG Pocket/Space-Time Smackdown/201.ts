import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Weavile ex",
        fr: "Dimoret-ex",
        es: "Weavile ex",
        it: "Weavile-ex",
        de: "Snibunna-ex",
        'pt-br': "Weavile ex",
        ko: "포푸니라 ex",
        "zh-tw": "韋維爾前夫"
    },
    illustrator: "hncl",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    evolveFrom: {
        en: "Sneasel",
        "fr": "Sneasel",
        "es": "Sneasel",
        "it": "Sneasel",
        "de": "Nieseln",
        "pt-br": "Sneasel",
        "zh-tw": "斯內塞爾"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Scratching Nails",
                fr: "Griffes Griffantes",
                es: "Uñas Rasgadoras",
                it: "Unghie Graffianti",
                de: "Kratzende Krallen",
                'pt-br': "Unhas Arranhadoras",
                ko: "스크래치네일",
                "zh-tw": "抓指甲"
            },
            damage: "30+",
            cost: ["Darkness"],
            effect: {
                en: "If your opponent's Active Pokémon has damage on it, this attack does 40 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 40 dégâts de plus.",
                es: "Si el Pokémon Activo de tu rival ya tiene daño, este ataque hace 40 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è danneggiato, questo attacco infligge 40 danni in più.",
                de: "Wenn dem Aktiven Pokémon deines Gegners bereits Schaden zugefügt wurde, fügt diese Attacke 40 Schadenspunkte mehr zu.",
                'pt-br': "Se o Pokémon Ativo do seu oponente estiver danificado, este ataque causará 40 pontos de dano a mais.",
                ko: "상대의 배틀 포켓몬이 데미지를 받고 있다면 40데미지를 추가한다.",
                "zh-tw": "如果對手的出戰寶可夢受到傷害，則這次攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["palkia"]
};
export default card;
