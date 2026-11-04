import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/004/22e570bdfb66890d",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/004/22e570bdfb66890d",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/004/22e570bdfb66890d",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/004/22e570bdfb66890d",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/004/22e570bdfb66890d",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/004/22e570bdfb66890d",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/004/22e570bdfb66890d",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/004/22e570bdfb66890d",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/004/22e570bdfb66890d"
    },
    name: {
        en: "Luxray",
        fr: "Luxray",
        es: "Luxray",
        it: "Luxray",
        de: "Luxtra",
        "pt-br": "Luxray",
        "zh-tw": "倫琴貓",
        ko: "렌트라",
        ja: "レントラー"
    },
    illustrator: "Hasuno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    dexId: [405],
    evolveFrom: {
        en: "Luxio",
        fr: "Luxio",
        es: "Luxio",
        it: "Luxio",
        de: "Luxio",
        "pt-br": "Luxio",
        "zh-tw": "勒克貓",
        ko: "럭시오",
        ja: "ルクシオ"
    },
    stage: "Stage2",
    description: {
        en: "Luxray’s ability to see through objects comes in handy when it’s scouting for danger.",
        fr: "Il est capable de voir à travers tout ce qui existe, ce qui lui est très utile pour détecter le moindre danger.",
        es: "Tiene la capacidad de ver a través de todo, algo que resulta extremadamente valioso cuando acecha el peligro.",
        it: "L'abilità radioscopica di Luxray si rivela molto utile quando si vuole rilevare la presenza di oggetti pericolosi.",
        de: "Beim Aufspüren von Gefahren ist Luxtras Röntgenblick äußerst hilfreich.",
        "pt-br": "A habilidade do Luxray de ver através dos objetos é muito útil quando confere se há perigos.",
        "zh-tw": "倫琴貓的透視能力在發現危險事物時非常有幫助。",
        ja: "レントラーの 透視能力は 危険な ものを 発見するとき とても 役に立つのだ。",
        ko: "렌트라의 투시 능력은\n위험한 것을 발견할 때\n매우 도움이 된다."
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Flash Impact",
                fr: "Impact-Flash",
                es: "Impacto Resplandor",
                it: "Impattoflash",
                de: "Blitzeinschlag",
                "pt-br": "Impacto Lampejante",
                "zh-tw": "閃光衝擊",
                ja: "フラッシュインパクト",
                ko: "플래시임팩트"
            },
            effect: {
                en: "This attack also does 20 damage to 1 of your Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à un de vos Pokémon de Banc.",
                es: "Este ataque también hace 20 puntos de daño a 1 de tus Pokémon en Banca.",
                it: "Questo attacco infligge anche 20 danni a uno dei tuoi Pokémon in panchina.",
                de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos seus Pokémon no Banco.",
                "zh-tw": "自己的1隻備戰寶可夢也受到20點傷害。",
                ja: "自分のベンチポケモン1匹にも20ダメージ。",
                ko: "자신의 벤치 포켓몬 1마리에게도 20데미지를 준다."
            },
            damage: 110
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 0,
    boosters: ["vol1"]
};

export default card;
