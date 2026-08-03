import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/046",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/046",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/046",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/046",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/046",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/046"
    },
    name: {
        en: "Mareanie",
        fr: "Vorastérie",
        es: "Mareanie",
        it: "Mareanie",
        de: "Garstella",
        "pt-br": "Mareanie",
        "zh-tw": "好壞星",
        ko: "시마사리",
        ja: "ヒドイデ"
    },
    illustrator: "Yuu Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [747],
    stage: "Basic",
    description: {
        en: "It has excellent regenerative capabilities. Legs that a Mareanie has lost have a very bitter, astringent flavor—they’re not suitable as food.",
        fr: "Il possède d’excellentes capacités de régénération. Les pattes perdues par un Vorastérie ont une saveur très amère et astringente et ne conviennent pas comme nourriture.",
        es: "Tiene excelentes capacidades regenerativas. Las patas que un Mareanie ha perdido tienen un sabor muy amargo y astringente, por lo que no son aptas como alimento.",
        it: "Ha eccellenti capacità rigenerative. Le zampe che uno Mareanie ha perso hanno un sapore molto amaro e astringente: non sono adatte come cibo.",
        de: "Es verfügt über hervorragende Regenerationsfähigkeiten. Beine, die ein Garstella verloren hat, haben einen sehr bitteren, adstringierenden Geschmack – sie sind nicht als Nahrung geeignet.",
        "pt-br": "Possui excelentes capacidades regenerativas. As pernas que um Mareanie perdeu têm um sabor muito amargo e adstringente – não são adequadas como alimento.",
        "zh-tw": "它具有出色的再生能力。 好壞星 失去的腿具有非常苦澀的味道，不適合作為食物。"
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Venoshock",
                fr: "Choc Venin",
                es: "Carga Tóxica",
                it: "Velenoshock",
                de: "Giftschock",
                "pt-br": "Venochoque",
                "zh-tw": "毒液衝擊"
            },
            effect: {
                en: "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 60 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 60 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢中毒，則這次攻擊造成的傷害增加 60 點。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
