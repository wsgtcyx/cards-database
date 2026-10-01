import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/077",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/077",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/077",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/077",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/077",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/077",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/077"
    },
    name: {
        en: "Iron Bundle ex",
        fr: "Hotte-de-Fer-ex",
        es: "Ferrosaco ex",
        it: "Saccoferreo-ex",
        de: "Eisenbündel-ex",
        "pt-br": "Pacote Férreo ex",
        "zh-tw": "鐵包袱ex",
        ja: "テツノツツミex",
        ko: "무쇠보따리 ex"
    },
    illustrator: "Ultimateinudog",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: [
        "Water"
    ],
    dexId: [
        991
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Water",
                "Water",
                "Colorless"
            ],
            name: {
                en: "Cold Start",
                fr: "Démarrage à Froid",
                es: "Arranque Gélido",
                it: "Partenza a Freddo",
                de: "Eisiger Start",
                "pt-br": "Começo Frio",
                "zh-tw": "冷啟動",
                ja: "Cold Start",
                ko: "Cold Start"
            },
            effect: {
                en: "If this is the first time this Pokémon has used an attack after coming into play, this attack does 20 more damage, and your opponent's Active Pokémon is now Paralyzed.",
                fr: "Si c'est la première fois que ce Pokémon a utilisé une attaque après être entré en jeu, cette attaque inflige 20 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
                es: "Si es la primera vez que este Pokémon usa un ataque tras entrar en juego, hace 20 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
                it: "Se è la prima volta che questo Pokémon usa un attacco dopo essere entrato in gioco, questo attacco infligge 20 danni in più, e il Pokémon attivo dell'avversario viene paralizzato.",
                de: "Wenn dieses Pokémon zum ersten Mal eine Attacke einsetzt, nachdem es ins Spiel gebracht wurde, fügt diese Attacke 20 Schadenspunkte mehr zu, und das Aktive Pokémon deines Gegners ist jetzt paralysiert.",
                "pt-br": "Se esta for a primeira vez que este Pokémon usa um ataque após entrar em jogo, este ataque causará 20 pontos de dano a mais, e o Pokémon Ativo do seu oponente agora está Paralisado.",
                "zh-tw": "若這隻寶可夢被放置於場上後首次使用了招式,則增加20點傷害,並將對手的戰鬥寶可夢麻痺。",
                ja: "If this is the first time this Pokémon has used an attack after coming into play, this attack does 20 more damage, and your opponent's Active Pokémon is now Paralyzed.",
                ko: "If this is the first time this Pokémon has used an attack after coming into play, this attack does 20 more damage, and your opponent's Active Pokémon is now Paralyzed."
            },
            damage: "60+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
