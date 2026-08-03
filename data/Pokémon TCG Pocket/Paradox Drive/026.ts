import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/026",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/026",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/026",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/026",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/026",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/026",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/026"
    },
    name: {
        en: "Flutter Mane ex",
        fr: "Flotte-Mèche-ex",
        es: "Melenaleteo ex",
        it: "Crinealato-ex",
        de: "Flatterhaar-ex",
        "pt-br": "Juba Sopro ex",
        "zh-tw": "振翼髮ex",
        ko: "날개치는머리 ex",
        ja: "ハバタクカミex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Psychic"],
    dexId: [987],
    stage: "Basic",
    attacks: [
        {
            cost: ["Psychic", "Psychic"],
            name: {
                en: "Spellbinding Start",
                fr: "Début envoûtant",
                es: "Comienzo fascinante",
                it: "Inizio affascinante",
                de: "Zauberhafter Start",
                "pt-br": "Início fascinante",
                "zh-tw": "原書咒縛"
            },
            effect: {
                en: "If this is the first time this Pokémon has used an attack after coming into play, during your opponent's next turn, they can't use any Trainer cards from their hand.",
                fr: "Si c'est la première fois que ce Pokémon utilise une attaque après son entrée en jeu, lors du prochain tour de votre adversaire, il ne pourra utiliser aucune carte Dresseur de sa main.",
                es: "Si es la primera vez que este Pokémon usa un ataque después de entrar en juego, durante el próximo turno de tu rival, no podrá usar ninguna carta de Entrenador de su mano.",
                it: "Se è la prima volta che questo Pokémon usa un attacco dopo essere entrato in gioco, durante il turno successivo del tuo avversario, non potrà usare nessuna delle carte Allenatore che ha in mano.",
                de: "Wenn dies das erste Mal ist, dass dieses Pokémon einen Angriff ausführt, nachdem es ins Spiel gekommen ist, kann dein Gegner im nächsten Zug keine Trainerkarten aus seiner Hand verwenden.",
                "pt-br": "Se esta for a primeira vez que este Pokémon usa um ataque depois de entrar em jogo, durante o próximo turno do seu oponente, ele não poderá usar nenhuma carta de Treinador da sua mão.",
                "zh-tw": "如果這是該寶可夢在進場後第一次使用攻擊，則在對手的下一個回合中，他們不能使用手牌中的任何訓練家卡。"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
