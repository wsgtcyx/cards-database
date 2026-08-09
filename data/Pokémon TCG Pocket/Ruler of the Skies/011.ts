import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/011",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/011"
    },
    name: {
        en: "Vespiquen ex",
        fr: "Apireine-ex",
        es: "Vespiquen ex",
        it: "Vespiquen-ex",
        de: "Honweisel-ex",
        "pt-br": "Vespiquen ex",
        "zh-tw": "蜂女王ex",
        ko: "비퀸 ex",
        ja: "ビークインex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    dexId: [416],
    evolveFrom: {
        en: "Combee",
        fr: "Apitrini",
        es: "Combee",
        it: "Combee",
        de: "Wadribie",
        "pt-br": "Combee",
        "zh-tw": "三蜜蜂",
        ko: "세꿀버리",
        ja: "ミツハニー"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Grass", "Grass"],
            name: {
                en: "Chase Order",
                fr: "Ordre de Poursuite",
                es: "Orden de Seguimiento",
                "pt-br": "Ordem de Perseguição",
                "zh-tw": "追擊指令",
                "it": "Ordine di Inseguimento",
                "de": "Jagdbefehl"
            },
            effect: {
                en: "You may discard 1 of your Benched Basic {G} Pokémon. If you do, this attack does 70 more damage.",
                fr: "Vous pouvez défausser un de vos Pokémon {G} de base de Banc. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Puedes descartar 1 de tus Pokémon {G} Básicos en Banca. Si lo haces, este ataque inflige 70 puntos de daño más.",
                it: "Puoi scartare uno dei tuoi Pokémon Base {G} in panchina. Se lo fai, questo attacco infligge 70 danni in più.",
                "pt-br": "Você pode descartar 1 dos seus Pokémon {G} Básicos no Banco. Se fizer isso, este ataque causará 70 pontos de dano a mais.",
                "zh-tw": "若希望,選擇1隻自己的備戰區的{G}屬性基礎寶可夢,將其丟棄。這個情況下,增加70點傷害。",
                "de": "Du kannst 1 Basis-{G}-Pokémon von deiner Bank auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 70 Schadenspunkte mehr zu."
            },
            damage: "70+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};
export default card;
