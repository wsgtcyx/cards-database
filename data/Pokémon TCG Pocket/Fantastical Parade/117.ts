import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/117",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/117",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/117",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/117",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/117",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/117"
    },
    name: {
        en: "Galarian Stunfisk",
        "fr": "Limonde de Galar",
        "es": "Stunfisk de Galar",
        "it": "Stunfisk di Galar",
        "de": "Galar-Flunschlik",
        "pt-br": "Stunfisk de Galar",
        "zh-tw": "伽勒爾泥巴魚"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    description: {
        en: "Its conspicuous lips lure prey in as it lies in wait in\nthe mud. When prey gets close, Stunfisk clamps\nits jagged steel fins down on them.",
        "fr": "Ses lèvres bien visibles attirent les proies alors qu'elles les attendent.\nla boue. Lorsque la proie s'approche, Stunfisk s'accroche\nses ailerons dentelés en acier tombèrent sur eux.",
        "es": "Sus llamativos labios atraen a sus presas mientras acechan en\nel barro. Cuando la presa se acerca, Stunfisk la agarra.\nsus aletas dentadas de acero caen sobre ellos.",
        "it": "Le sue labbra vistose attirano la preda mentre è in agguato\nil fango. Quando la preda si avvicina, Stunfisk si aggancia\nle sue pinne d'acciaio frastagliate si abbassarono su di loro.",
        "de": "Seine auffälligen Lippen locken Beute an, während er auf der Lauer liegt\nder Schlamm. Wenn sich die Beute nähert, greift Stunfisk zu\nseine gezackten Stahlflossen fielen auf sie herab.",
        "pt-br": "Seus lábios conspícuos atraem a presa enquanto ele fica à espreita\na lama. Quando a presa se aproxima, Stunfisk aperta\nsuas barbatanas de aço irregulares caíram sobre eles.",
        "zh-tw": "它引人注目的嘴唇在等待時引誘獵物\n泥巴。當獵物靠近時，Stunfisk會夾緊\n鋸齒狀的鋼鰭落在它們身上。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Snapping Trap",
                "fr": "Piège à claquement",
                "es": "Trampa de chasquido",
                "it": "Trappola a scatto",
                "de": "Schnappfalle",
                "pt-br": "Armadilha de Snap",
                "zh-tw": "捕捉陷阱"
            },
            damage: 40,
            cost: ["Metal", "Colorless"],
            effect: {
                en: "During your opponent's next turn, if this Pokémon is in the Active Spot when your opponent's Active Pokémon retreats, this attack does 40 damage to the new Active Pokémon.",
                "fr": "Lors du prochain tour de votre adversaire, si ce Pokémon est dans le Point Actif lorsque le Pokémon Actif de votre adversaire bat en retraite, cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
                "es": "Durante el próximo turno de tu rival, si este Pokémon está en el Punto Activo cuando el Pokémon Activo de tu rival se retira, este ataque hace 40 puntos de daño al nuevo Pokémon Activo.",
                "it": "Durante il prossimo turno del tuo avversario, se questo Pokémon è in posizione attiva quando il Pokémon attivo del tuo avversario si ritira, questo attacco infligge 40 danni al nuovo Pokémon attivo.",
                "de": "Wenn sich dieses Pokémon im nächsten Zug deines Gegners an der aktiven Stelle befindet, während sich das aktive Pokémon deines Gegners zurückzieht, fügt dieser Angriff dem neuen aktiven Pokémon 40 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, se este Pokémon estiver no Ponto Ativo quando o Pokémon Ativo do seu oponente recuar, este ataque causará 40 de dano ao novo Pokémon Ativo.",
                "zh-tw": "在對手的下一個回合中，如果當對手的活躍神奇寶貝撤退時，該神奇寶貝位於活躍位置，則此攻擊對新的活躍神奇寶貝造成 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
