import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/030",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/030"
    },
    name: {
        en: "Team Rocket's Mewtwo",
        fr: "Mewtwo de la Team Rocket",
        es: "Mewtwo del Team Rocket",
        it: "Mewtwo del Team Rocket",
        de: "Team Rockets Mewtu",
        "pt-br": "Mewtwo da Equipe Rocket",
        "zh-tw": "火箭隊的超夢",
        ko: "로켓단의 뮤츠",
        ja: "ロケット団のミュウツー"
    },
    illustrator: "danciao",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    stage: "Basic",
    description: {
        en: "The research efforts of a certain scientist ultimately resulted in this Pokémon. Its powers are dedicated to battling.",
        fr: "Ce Pokémon est le fruit des expériences d'un scientifique. Sa puissance se révèle tout particulièrement en combat.",
        es: "Este Pokémon es el fruto de la investigación de cierto cientifico. La fuerza que atesora luce en todo su esplendor durante los combates.",
        it: "È stato creato da uno scienziato dopo lunghe ricerche. La sua potenza emerge specialmente nella lotta.",
        de: "Dieses Pokémon ist das Resultat der Experimente eines gewissen Forschers. Es setzt all seine Kraft fürs Kämpfen ein.",
        "pt-br": "A pesquisa de um certo cientista acabou resultando neste Pokémon. Seus poderes existem unicamente para a batalha.",
        "zh-tw": "某位科學家的研究造就了夢夢的誕生，牠的力量專為戰鬥而存在。"
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic", "Colorless"],
            name: {
                en: "Psychic Explosion",
                fr: "Explosion Psychique",
                es: "Explosión Psíquica",
                it: "Deflagrazione Psichica",
                de: "Psycho-Explosion",
                "pt-br": "Detonação Psíquica",
                "zh-tw": "精神炸彈"
            },
            effect: {
                en: "This Pokémon also does 70 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 70 dégâts.",
                es: "Este Pokémon también se hace 70 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 70 danni a se stesso.",
                de: "Dieses Pokémon fügt auch selbst sich 70 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 70 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到70點傷害。"
            },
            damage: 130
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
