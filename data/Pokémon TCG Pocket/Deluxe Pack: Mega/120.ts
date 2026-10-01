import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/120",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/120",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/120",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/120",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/120",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/120",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/120"
    },
    name: {
        en: "Flutter Mane ex",
        fr: "Flotte-Mèche-ex",
        es: "Melenaleteo ex",
        it: "Crinealato-ex",
        de: "Flatterhaar-ex",
        "pt-br": "Juba Sopro ex",
        "zh-tw": "振翼髮ex",
        ja: "ハバタクカミex",
        ko: "날개치는머리 ex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: [
        "Psychic"
    ],
    dexId: [
        987
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Psychic",
                "Psychic"
            ],
            name: {
                en: "Spellbinding Start",
                fr: "Exorde Envoûtant",
                es: "Inicio Hechizante",
                it: "Prima Malia",
                de: "Fesselnder Start",
                "pt-br": "Começo Enfeitiçador",
                "zh-tw": "原書咒縛",
                ja: "Spellbinding Start",
                ko: "Spellbinding Start"
            },
            effect: {
                en: "If this is the first time this Pokémon has used an attack after coming into play, during your opponent's next turn, they can't use any Trainer cards from their hand.",
                fr: "Si c'est la première fois que ce Pokémon a utilisé une attaque après être entré en jeu, votre adversaire ne peut pas utiliser de carte Dresseur de sa main pendant son prochain tour.",
                es: "Si es la primera vez que este Pokémon usa un ataque tras entrar en juego, tu rival no puede jugar ninguna carta de Entrenador de su mano durante su próximo turno.",
                it: "Se è la prima volta che questo Pokémon usa un attacco dopo essere entrato in gioco, il tuo avversario durante il suo prossimo turno non potrà giocare le carte Allenatore che ha in mano.",
                de: "Wenn dieses Pokémon zum ersten Mal eine Attacke einsetzt, nachdem es ins Spiel gebracht wurde, kann dein Gegner während seines nächsten Zuges keine Trainerkarten aus seiner Hand spielen.",
                "pt-br": "Se esta for a primeira vez que este Pokémon usa um ataque após entrar em jogo, durante o próximo turno do seu oponente, ele não poderá usar nenhuma carta de Treinador da mão dele.",
                "zh-tw": "若這隻寶可夢被放置於場上後首次使用了招式,則在下個對手的回合,對手無法從手牌使出訓練家卡。",
                ja: "If this is the first time this Pokémon has used an attack after coming into play, during your opponent's next turn, they can't use any Trainer cards from their hand.",
                ko: "If this is the first time this Pokémon has used an attack after coming into play, during your opponent's next turn, they can't use any Trainer cards from their hand."
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
