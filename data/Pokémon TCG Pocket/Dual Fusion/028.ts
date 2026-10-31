import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/028",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/028",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/028",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/028"
    },
    name: {
        en: "Ceruledge",
        fr: "Malvalame",
        es: "Ceruledge",
        "pt-br": "Ceruledge",
        "zh-tw": "蒼炎刃鬼",
        ja: "ソウブレイズ",
        ko: "파라블레이즈",
        it: "Ceruledge",
        de: "Azugladis"
    },
    illustrator: "telu",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 120,
    types: [
        "Fire"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ja: "カルボウ",
        ko: "카르본"
    },
    attacks: [
        {
            name: {
                en: "Rally Back",
                fr: "Répercussions",
                es: "Apoyo Vengativo",
                it: "Radunata Rinforzi",
                de: "Aufholjagd",
                "pt-br": "Responder à Altura",
                "zh-tw": "捲土重來",
                ja: "まきかえす",
                ko: "반격하기"
            },
            cost: [
                "Colorless",
                "Fire",
                "Fire"
            ],
            damage: "70+",
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 70 more damage.",
                fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 70 puntos de daño más.",
                it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l’ultimo turno del tuo avversario, questo attacco infligge 70 danni in più.",
                de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 70 Schadenspunkte mehr zu.",
                "pt-br": "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 70 pontos de dano a mais.",
                "zh-tw": "在上個對手的回合,若自己的寶可夢因招式的傷害而昏厥了,則增加70點傷害。",
                ja: "前の相手の番、ワザのダメージで、自分のポケモンがきぜつしていたなら、70ダメージ追加。",
                ko: "상대의 이전 차례에 기술의 데미지로 자신의 포켓몬이 기절했다면 70데미지를 추가한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.",
        fr: "Les flammes de ses épées sont animées par la rancœur d’une âme guerrière qui a péri avant de pouvoir accomplir son but.",
        es: "Las afiladas llamas que cubren sus brazos están avivadas por la frustración de un espadachín que cayó antes de poder cumplir su cometido.",
        it: "Le lame fiammeggianti che ricoprono le sue braccia ardono per il rimorso di uno spadaccino caduto prima di compiere la propria missione.",
        de: "Die Flammenschwerter an beiden Armen lodern mit dem Groll eines Schwertkämpfers, der fiel, ehe er sein Ziel erreichen konnte.",
        "pt-br": "As lâminas de fogo em seus braços queimam com o ressentimento duradouro de um espadachim derrotado em batalha antes de alcançar seu objetivo.",
        "zh-tw": "雙臂的火焰之劍燃著在戰鬥中喪命的劍士的怨念。",
        ja: "両腕の 炎の剣は 志半ばで 力つきた 剣士の 怨念で 燃え上がる。",
        ko: "양팔의 불꽃 검은\n뜻을 다 이루지 못한 채 스러진\n검사의 원념에 의해 타오르고 있다."
    }
};

export default card;
