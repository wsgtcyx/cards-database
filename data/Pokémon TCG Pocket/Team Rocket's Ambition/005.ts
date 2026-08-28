import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/005",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/005",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/005",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/005",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/005",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/005",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/005"
    },
    name: {
        en: "Serperior",
        fr: "Majaspic",
        es: "Serperior",
        it: "Serperior",
        de: "Serpiroyal",
        "pt-br": "Serperior",
        "zh-tw": "君主蛇",
        ko: "샤로다",
        ja: "ジャローダ"
    },
    illustrator: "Mizue",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    dexId: [497],
    evolveFrom: {
        en: "Servine",
        fr: "Lianaja",
        es: "Servine",
        it: "Servine",
        de: "Efoserp",
        "pt-br": "Servine",
        "zh-tw": "青藤蛇",
        ko: "샤비",
        ja: "ジャノビー"
    },
    stage: "Stage2",
    description: {
        en: "An intimidating gaze and majestic appearance have caused this Pokémon to be known as the Lord of the Forest.",
        fr: "On l'appelle « le monarque de la forêt ». Il doit ce surnom à son regard intimidant et à son allure majestueuse.",
        es: "Su mirada capaz de amilanar al rival y su porte majestuoso le han valido el sobrenombre de Soberano de los Bosques.",
        it: "Il suo sguardo che immobilizza gli avversari e il suo aspetto solenne gli sono valsi l'appellativo di \"signore della foresta\".",
        de: "Dank seines würdevollen Aussehens und seines stechenden Blicks, der andere erstarren lässt, nennt man es auch den „Herrscher des Waldes“.",
        "pt-br": "Seu olhar intimidador e sua aparência majestosa fizeram com que este Pokémon ficasse conhecido como o Lorde da Floresta.",
        "zh-tw": "擁有能讓對手畏怯的眼神以及威風凜凜的身姿，因此被稱為森林的君主。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Regal Bloom",
                fr: "Floraison Royale",
                es: "Florecimiento Regio",
                it: "Fioritura Regale",
                de: "Hoheitliches Blühen",
                "pt-br": "Florada Real",
                "zh-tw": "皇家綻放"
            },
            effect: {
                en: "This Pokémon gets +30 HP for each {G} Energy attached to it.",
                fr: "Chaque Énergie {G} attachée à ce Pokémon lui ajoute 30 PV.",
                es: "Este Pokémon obtiene 30 PS más por cada Energía {G} unida a él.",
                it: "Questo Pokémon ha +30 PS per ogni Energia {G} a esso assegnata.",
                de: "Dieses Pokémon erhält + 30 KP für jede an es angelegte {G}-Energie.",
                "pt-br": "Este Pokémon recebe +30 PS para cada Energia {G} ligada a ele.",
                "zh-tw": "這隻寶可夢的最大HP,依這隻寶可夢身上附加的{G}能量每1個+30。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Flog",
                fr: "Martinet",
                es: "Azotar",
                it: "Scudiscio",
                de: "Auspeitscher",
                "pt-br": "Fustigar",
                "zh-tw": "鞭倒在地"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 60 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加60點傷害。"
            },
            damage: "60+"
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
