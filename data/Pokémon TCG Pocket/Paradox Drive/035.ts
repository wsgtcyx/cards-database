import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/035",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/035"
    },
    name: {
        en: "Sandy Shocks",
        fr: "Pelage-Sablé",
        es: "Pelarena",
        it: "Peldisabbia",
        de: "Sandfell",
        "pt-br": "Choque Areia",
        "zh-tw": "沙鐵皮",
        ko: "모래털가죽",
        ja: "スナノケガワ"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    dexId: [989],
    stage: "Basic",
    description: {
        en: "It slightly resembles a Magneton that lived for 10,000 years and was featured in an article in a paranormal magazine.",
        fr: "Il ressemble légèrement à un Magnéton qui a vécu 10 000 ans et qui a été présenté dans un article d'un magazine paranormal.",
        es: "Se parece ligeramente a un Magneton que vivió durante 10.000 años y apareció en un artículo de una revista paranormal.",
        it: "Assomiglia leggermente a uno Magneton che visse per 10.000 anni e fu descritto in un articolo su una rivista paranormale.",
        de: "Es ähnelt ein wenig einem Magneton, der 10.000 Jahre alt war und in einem Artikel in einem paranormalen Magazin vorgestellt wurde.",
        "pt-br": "Assemelha-se um pouco a um Magneton que viveu por 10.000 anos e foi publicado em um artigo de uma revista paranormal.",
        "zh-tw": "它有點像一隻活了 10,000 年的 三合一磁怪，曾在超自然雜誌的一篇文章中出現過。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Pull In and Pound",
                fr: "Tirez et livrez",
                es: "Tirar y golpear",
                it: "Tirare dentro e battere",
                de: "Einziehen und hämmern",
                "pt-br": "Puxar e bater",
                "zh-tw": "引而碎之"
            },
            effect: {
                en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, this attack does 50 damage to the new Active Pokémon.",
                fr: "Insérez 1 des Pokémon du Banc de votre adversaire sur le point actif. Si vous le faites, cette attaque inflige 50 dégâts au nouveau Pokémon Actif.",
                es: "Cambia 1 de los Pokémon en Banca de tu rival al Punto Activo. Si lo haces, este ataque hace 50 puntos de daño al nuevo Pokémon Activo.",
                it: "Metti in posizione attiva uno dei Pokémon nella panchina del tuo avversario. Se lo fai, questo attacco infligge 50 danni al nuovo Pokémon attivo.",
                de: "Tauschen Sie 1 Pokémon auf der Bank Ihres Gegners an der aktiven Stelle aus. Wenn du dies tust, fügt dieser Angriff dem neuen Aktiven Pokémon 50 Schadenspunkte zu.",
                "pt-br": "Troque 1 dos Pokémon do Banco do seu oponente para o Ponto Ativo. Se fizer isso, este ataque causará 50 de dano ao novo Pokémon Ativo.",
                "zh-tw": "將對手的 1 隻後備寶可夢切換到活動位置。如果這樣做，這次攻擊會對新的活躍寶可夢造成 50 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
