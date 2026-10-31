import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/112",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/112",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/112",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/112",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/112",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/112",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/112",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/112",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/112"
    },
    name: {
        en: "Sylveon",
        fr: "Nymphali",
        es: "Sylveon",
        it: "Sylveon",
        de: "Feelinara",
        "pt-br": "Sylveon",
        "zh-tw": "仙子伊布",
        ja: "ニンフィア",
        ko: "님피아"
    },
    illustrator: "5ban Graphics",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Psychic"
    ],
    dexId: [
        700
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
    stage: "Stage1",
    description: {
        en: "Sylveon cuts an elegant figure as it dances lightly around, feelers fluttering, but its piercing moves aim straight for its opponents’ weak spots.",
        fr: "Il danse élégamment en faisant onduler ses antennes, mais lorsqu'il attaque, il vise directement les points faibles de ses adversaires.",
        es: "Sus apéndices sensoriales ondean grácilmente y le confieren un aspecto elegante, pero, cuando ataca, va directo al punto débil de sus enemigos.",
        it: "Malgrado il suo aspetto elegante mentre danza leggiadro facendo fluttuare le antenne, quando attacca va dritto ai punti deboli degli avversari.",
        de: "Es sieht zwar elegant aus, wenn es mit wehenden Fühlern leichtfüßig tänzelt, doch seine Attacken zielen gewieft auf Schwachpunkte ab.",
        "pt-br": "Sylveon dança elegantemente com suas antenas ao vento, mirando os pontos fracos dos seus oponentes com movimentos lancinantes.",
        "zh-tw": "搖曳著觸角跳著輕快舞蹈的樣子相當優雅，但招式卻會直搗對手要害。",
        ja: "触角を なびかせ 軽やかに 舞う 姿は 優雅だが 技は 鋭く 急所を 狙う。",
        ko: "더듬이를 나부끼며 경쾌하게\n춤추는 모습은 우아하지만\n기술은 날카롭게 급소를 노린다."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Soothing Ribbon",
                fr: "Rubans Apaisants",
                es: "Cinta Tranquilizadora",
                it: "Fiocco Curativo",
                de: "Besänftigende Bänder",
                "pt-br": "Fita Tranquilizadora",
                "zh-tw": "治癒緞帶",
                ja: "いやしのリボン",
                ko: "치유의 리본"
            },
            effect: {
                en: "Once during your turn, if this Pokémon has a Pokémon Tool attached, you may heal 30 damage from 1 of your Pokémon.",
                fr: "Une fois pendant votre tour, si un Outil Pokémon est attaché à ce Pokémon, vous pouvez soigner 30 dégâts d'un de vos Pokémon.",
                es: "Una vez durante tu turno, si este Pokémon tiene 1 Herramienta Pokémon unida a él, puedes curar 30 puntos de daño a 1 de tus Pokémon.",
                it: "Una sola volta durante il tuo turno, se questo Pokémon ha un Oggetto Pokémon assegnato, puoi curare uno dei tuoi Pokémon da 30 danni.",
                de: "Einmal während deines Zuges, wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, kannst du 30 Schadenspunkte bei 1 deiner Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, você poderá curar 30 pontos de dano de 1 dos seus Pokémon.",
                "zh-tw": "若這隻寶可夢身上附有「寶可夢道具」卡,則在自己的回合時可使用1次。將自己的1隻寶可夢恢復30HP。",
                ja: "このポケモンに「ポケモンのどうぐ」がついているなら、自分の番に1回使える。自分のポケモン1匹のHPを30回復。",
                ko: "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 자신의 차례에 1번 사용할 수 있다. 자신의 포켓몬 1마리의 HP를 30회복."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Magical Shot",
                fr: "Coup Magique",
                es: "Disparo Mágico",
                it: "Magicolpo",
                de: "Magischer Schuss",
                "pt-br": "Tiro Mágico",
                "zh-tw": "魔法射擊",
                ja: "マジカルショット",
                ko: "매지컬숏"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
