import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/062",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/062",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/062",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/062",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/062",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/062",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/062",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/062"
    },
    name: {
        en: "Deoxys",
        fr: "Deoxys",
        es: "Deoxys",
        "pt-br": "Deoxys",
        "zh-tw": "代歐奇希斯",
        ja: "デオキシス",
        ko: "테오키스",
        it: "Deoxys",
        de: "Deoxys"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 100,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Psycho Boost",
                fr: "Psycho-Boost",
                es: "Psicoataque",
                it: "Psicoslancio",
                de: "Psychschub",
                "pt-br": "Impulso Psíquico",
                "zh-tw": "精神突進",
                ja: "サイコブースト",
                ko: "사이코부스트"
            },
            cost: [
                "Colorless",
                "Psychic",
                "Psychic"
            ],
            damage: 100,
            effect: {
                en: "During your next turn, this Pokémon's Psycho Boost does −50 damage.",
                fr: "Pendant votre prochain tour, ce Pokémon inflige − 50 dégâts avec Psycho-Boost.",
                es: "Durante tu próximo turno, el ataque Psicoataque de este Pokémon hace ‐50 puntos de daño.",
                it: "Durante il tuo prossimo turno, l’attacco Psicoslancio di questo Pokémon infligge -50 danni.",
                de: "Während deines nächsten Zuges fügt die Attacke Psychschub von diesem Pokémon − 50 Schadenspunkte zu.",
                "pt-br": "Durante o seu próximo turno, o ataque Impulso Psíquico deste Pokémon causará − 50 pontos de dano.",
                "zh-tw": "在下個自己的回合,這隻寶可夢「精神突進」的傷害-50點。",
                ja: "次の自分の番、このポケモンの「サイコブースト」のダメージを-50する。",
                ko: "자신의 다음 차례에 이 포켓몬의 「사이코부스트」의 데미지를 -50한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "An alien virus that fell to earth on a meteor underwent a DNA mutation to become this Pokémon.",
        fr: "Il vient d’un virus extraterrestre arrivé avec une météorite et ayant subi une mutation génétique.",
        es: "Surgió a raíz de la mutación de ADN de un virus alienígena que cayó a la tierra en un meteorito.",
        it: "È il risultato della mutazione genetica di un virus alieno giunto con un meteorite.",
        de: "Ein außerirdischer Virus kam mit einem Meteor auf die Erde. Seine DNA mutierte. So entstand Deoxys.",
        "pt-br": "Um vírus alienígena que caiu na Terra em um meteoro sofreu uma mutação no DNA e se transformou neste Pokémon.",
        "zh-tw": "附著在隕石上的宇宙病毒的DNA發生變異後誕生的寶可夢。",
        ja: "隕石に 付着していた 宇宙ウイルスの ＤＮＡが 変異して 生まれた ポケモン。",
        ko: "운석에 붙어 있던\n우주 바이러스의 DNA가\n변이하여 생겨난 포켓몬이다."
    }
};

export default card;
