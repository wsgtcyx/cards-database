import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/091",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/091",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/091",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/091",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/091"
    },
    name: {
        en: "Passimian",
        "fr": "Passimien",
        "es": "Passimiano",
        "it": "Passimiano",
        "de": "Passimian",
        "pt-br": "Passimiano",
        "zh-tw": "帕西米安"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    description: {
        en: "The boss chooses 10 members of the group to\ngo out hunting. The hunting party will evenly split\nthe food they find with the rest of the group.",
        "fr": "Le patron choisit 10 membres du groupe pour\npartir à la chasse. Le groupe de chasse sera divisé à parts égales\nla nourriture qu'ils trouvent avec le reste du groupe.",
        "es": "El jefe elige a 10 miembros del grupo para\nsalir a cazar. El grupo de caza se dividirá equitativamente.\nla comida que encuentran con el resto del grupo.",
        "it": "Il capo sceglie 10 membri del gruppo\nandare a caccia. Il gruppo di cacciatori si dividerà equamente\nil cibo che trovano con il resto del gruppo.",
        "de": "Der Chef wählt 10 Mitglieder der Gruppe aus\ngeh auf die Jagd. Die Jagdgruppe wird gleichmäßig aufgeteilt\ndas Essen, das sie zusammen mit dem Rest der Gruppe finden.",
        "pt-br": "O chefe escolhe 10 membros do grupo para\nsair para caçar. O grupo de caça será dividido igualmente\na comida que encontram com o resto do grupo.",
        "zh-tw": "老闆選出10名小組成員\n出去打獵。狩獵隊將平分\n他們和其他人一起找到的食物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Fling",
                "fr": "Jeter",
                "es": "Arrojar",
                "it": "Lanciare",
                "de": "Schleudern",
                "pt-br": "Arremesso",
                "zh-tw": "一扔"
            },
            cost: ["Fighting"],
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge 30 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手後備隊的 1 只寶可夢造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
