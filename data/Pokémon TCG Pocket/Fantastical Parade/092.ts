import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/092",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/092",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/092",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/092",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/092",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/092"
    },
    name: {
        en: "Falinks",
        "fr": "Falinks",
        "es": "falinks",
        "it": "Falink",
        "de": "Falinks",
        "pt-br": "Falinks",
        "zh-tw": "法林克斯"
    },
    illustrator: "Yuu Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "The leader, known as the brass, uses its\nextendible horn to issue orders to the others\nwhen it's time to change formation.",
        "fr": "Le leader, connu sous le nom d'airain, utilise son\nklaxon extensible pour donner des ordres aux autres\nquand il est temps de changer de formation.",
        "es": "El líder, conocido como el latón, utiliza su\nbocina extensible para dar órdenes a los demás\ncuando llega el momento de cambiar de formación.",
        "it": "Il leader, noto come l'ottone, usa il suo\ncorno estensibile per impartire ordini agli altri\nquando è il momento di cambiare formazione.",
        "de": "Der Anführer, bekannt als Brass, verwendet seine\nausfahrbares Horn, um den anderen Befehle zu erteilen\nwenn es Zeit ist, die Formation zu ändern.",
        "pt-br": "O líder, conhecido como latão, usa seu\nbuzina extensível para dar ordens aos outros\nquando é hora de mudar a formação.",
        "zh-tw": "領導者，被稱為黃銅，使用它的\n可伸縮喇叭向其他人發出命令\n當需要改變陣型的時候。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Coordinated Unit",
                "fr": "Unité coordonnée",
                "es": "Unidad Coordinada",
                "it": "Unità coordinata",
                "de": "Koordinierte Einheit",
                "pt-br": "Unidade Coordenada",
                "zh-tw": "協調單位"
            },
            effect: {
                en: "If you have another Falinks in play, this Pokémon's attacks do +20 damage to your opponent's Active Pokémon, and this Pokémon takes −20 damage from attacks from your opponent's Pokémon.",
                "fr": "Si vous avez un autre Falinks en jeu, les attaques de ce Pokémon infligent +20 dégâts au Pokémon Actif de votre adversaire, et ce Pokémon subit -20 dégâts des attaques du Pokémon de votre adversaire.",
                "es": "Si tienes otro Falinks en juego, los ataques de este Pokémon hacen +20 de daño al Pokémon Activo de tu rival, y este Pokémon recibe -20 de daño de los ataques del Pokémon de tu rival.",
                "it": "Se hai un altro Falinks in gioco, gli attacchi di questo Pokémon infliggono +20 danni al Pokémon attivo del tuo avversario e questo Pokémon subisce -20 danni dagli attacchi dei Pokémon del tuo avversario.",
                "de": "Wenn du einen weiteren Falinks im Spiel hast, fügen die Angriffe dieses Pokémon dem Aktiven Pokémon deines Gegners +20 Schaden zu und dieses Pokémon erleidet −20 Schaden durch Angriffe der Pokémon deines Gegners.",
                "pt-br": "Se você tiver outro Falinks em jogo, os ataques deste Pokémon causarão +20 de dano ao Pokémon Ativo do seu oponente e este Pokémon sofrerá -20 de dano dos ataques dos Pokémon do seu oponente.",
                "zh-tw": "如果你場上還有其他法林克，這只神奇寶貝的攻擊會對對手的活躍神奇寶貝造成 +20 傷害，並且這只神奇寶貝會因對手神奇寶貝的攻擊而受到 -20 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Invade",
                "fr": "Envahir",
                "es": "Invadir",
                "it": "Invadere",
                "de": "Einmarschieren",
                "pt-br": "Invadir",
                "zh-tw": "入侵"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
