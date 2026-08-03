import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/004",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/004"
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
    rarity: "None",
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
        fr: "Sa capacité à voir à travers tout est très utile pour détecter\nles moindres dangers.",
        es: "La potente visión de Luxray resulta extremadamente valiosa\ncuando acecha el peligro.",
        it: "L’abilità radioscopica di Luxray si rivela utile quando gli fa\nscoprire oggetti pericolosi.",
        de: "Beim Aufspüren von Gefahren sind Luxtras hellseherische\nFähigkeiten äußerst hilfreich.",
        "pt-br": "A capacidade do Luxray de ver através dos objetos é útil quando ele está em busca de perigo.",
        "zh-tw": "倫琴貓 透視物體的能力在偵察危險時派上用場。"
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
                "zh-tw": "閃光衝擊"
            },
            effect: {
                en: "This attack also does 20 damage to 1 of your Benched Pokémon.",
                fr: "Cette attaque inflige également 20 dégâts à 1 de vos Pokémon de Banc.",
                es: "Este ataque también hace 20 daños a 1 de tus Pokémon en Banca.",
                it: "Questo attacco infligge anche 20 danni a 1 dei tuoi Pokémon in panchina.",
                de: "Dieser Angriff fügt außerdem 1 deiner Bank-Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 de dano a 1 dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊還會對你後備的 1 只寶可夢造成 20 點傷害。"
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
