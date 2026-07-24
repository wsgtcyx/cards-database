import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/081",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/081"
    },
    name: {
        en: "Iron Bundle ex",
        fr: "Hotte-de-Fer-ex",
        es: "Ferrosaco ex",
        it: "Saccoferreo-ex",
        de: "Eisenbündel-ex",
        "pt-br": "Pacote Férreo ex",
        "zh-tw": "鐵包袱ex",
        ko: "무쇠보따리 ex",
        ja: "テツノツツミex"
    },
    illustrator: "Ultimateinudog",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    dexId: [991],
    stage: "Basic",
    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Cold Start",
                fr: "Démarrage à froid",
                es: "Arranque en frío",
                it: "Inizio a freddo",
                de: "Kaltstart",
                "pt-br": "Partida a frio",
                "zh-tw": "冷啟動"
            },
            effect: {
                en: "If this is the first time this Pokémon has used an attack after coming into play, this attack does 20 more damage, and your opponent's Active Pokémon is now Paralyzed.",
                fr: "Si c'est la première fois que ce Pokémon utilise une attaque après son entrée en jeu, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Actif de votre adversaire est désormais Paralysé.",
                es: "Si es la primera vez que este Pokémon usa un ataque después de entrar en juego, este ataque hace 20 puntos de daño más y el Pokémon Activo de tu rival ahora queda Paralizado.",
                it: "Se è la prima volta che questo Pokémon usa un attacco dopo essere entrato in gioco, questo attacco infligge 20 danni in più e il Pokémon attivo del tuo avversario viene paralizzato.",
                de: "Wenn dies das erste Mal ist, dass dieses Pokémon einen Angriff ausführt, nachdem es ins Spiel gekommen ist, fügt dieser Angriff 20 weitere Schadenspunkte zu und das Aktive Pokémon deines Gegners ist jetzt gelähmt.",
                "pt-br": "Se esta for a primeira vez que este Pokémon usa um ataque depois de entrar em jogo, este ataque causará mais 20 danos e o Pokémon Ativo do seu oponente ficará Paralisado.",
                "zh-tw": "如果這是該寶可夢在進場後第一次使用攻擊，則該攻擊造成的傷害增加 20 點，並且對手的活躍寶可夢現在陷入麻痺狀態。"
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
