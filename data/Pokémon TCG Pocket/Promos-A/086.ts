import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/086/b19eff63ddba6832",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/086/b19eff63ddba6832",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/086/b19eff63ddba6832",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/086/b19eff63ddba6832",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/086/b19eff63ddba6832",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/086/b19eff63ddba6832",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/086/b19eff63ddba6832",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/086/b19eff63ddba6832",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/086/b19eff63ddba6832"
    },
    name: {
        en: "Jolteon",
        es: "Jolteon",
        "fr": "Voltali",
        "it": "Jolteon",
        "de": "Blitza",
        "pt-br": "Jolteon",
        "zh-tw": "雷伊布",
        ja: "サンダース",
        ko: "쥬피썬더",
    },
    illustrator: "Mizue",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Eevee",
        es: "Eevee",
        "fr": "Évoli",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    description: {
        en: "It concentrates the weak electric charges emitted\nby its cells and launches wicked lightning bolts.",
        es: "Concentra la débil actividad eléctrica de\nsus células para lanzar dañinas descargas.",
        "fr": "Il concentre la faible charge électrique générée par chacune de ses cellules pour projeter de puissants éclairs.",
        "it": "Concentra la debole carica elettrica emessa dalle sue cellule per lanciare potenti scariche.",
        "de": "Es sammelt die schwache elektrische Energie, die von seinen Zellen ausgeht, und feuert starke Blitze ab.",
        "pt-br": "Ele concentra as cargas elétricas fracas emitidas por suas células e lança raios elétricos enfeitiçados.",
        "zh-tw": "會把細胞發出的微弱電氣都集中起來釋放強力的電擊。",
        ja: "細胞が 出している 弱い 電気を ひとまとめにして 強力な 電撃を 放つ。",
        ko: "세포가 내고 있는 약한\n전기를 하나로 모아서\n강력한 전기를 발산한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Beginning Bolt",
                es: "Descarga de Arranque",
                "fr": "Premier Éclair",
                "it": "Fulmine a Ciel Sereno",
                "de": "Startspannung",
                "pt-br": "Raio Inicial",
                "zh-tw": "起始伏特",
                ja: "ビギニングボルト",
                ko: "비기닝볼트"
            },
            damage: "40+",
            cost: ["Lightning"],
            effect: {
                en: "If this Pokémon evolved during this turn, this attack does 20 more damage.",
                es: "Si este Pokémon ha evolucionado durante este turno, este ataque hace 20 puntos de daño más.",
                "fr": "Si ce Pokémon a évolué pendant ce tour, cette attaque inflige 20 dégâts supplémentaires.",
                "it": "Se questo Pokémon si è evoluto durante questo turno, questo attacco infligge 20 danni in più.",
                "de": "Wenn sich dieses Pokémon während dieses Zuges entwickelt hat, fügt diese Attacke 20 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon evoluiu durante este turno, este ataque causará 20 pontos de dano a mais.",
                "zh-tw": "在這個回合,若進化成這隻寶可夢,則增加20點傷害。",
                ja: "この番、このポケモンに進化していたなら、20ダメージ追加。",
                ko: "이 차례에 이 포켓몬으로 진화했다면 20데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["vol10"]
};
export default card;
