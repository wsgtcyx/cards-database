import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/102"
    },
    name: {
        en: "Skuntank",
        "fr": "Moufflair",
        "es": "Skuntank",
        "it": "Skuntank",
        "de": "Skuntank",
        "pt-br": "Skuntank",
        "zh-tw": "臭鼬罐"
    },
    illustrator: "sowsow",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    evolveFrom: {
        en: "Stunky",
        "fr": "Puant",
        "es": "apestoso",
        "it": "Puzzolente",
        "de": "Stunkig",
        "pt-br": "Fedorento",
        "zh-tw": "臭臭"
    },
    description: {
        en: "It attacks by spraying a repugnant fluid from its\ntail, but the stench dulls after a few squirts.",
        "fr": "Il attaque en projetant un fluide répugnant depuis son corps.\nqueue, mais la puanteur s'atténue après quelques jets.",
        "es": "Ataca rociando un fluido repugnante desde su\ncola, pero el hedor se apaga después de algunos chorros.",
        "it": "Attacca spruzzando un fluido ripugnante dai suoi\ncoda, ma la puzza si attenua dopo pochi schizzi.",
        "de": "Es greift an, indem es eine abstoßende Flüssigkeit aus seinem Körper versprüht\nSchwanz, aber der Gestank lässt nach ein paar Spritzern nach.",
        "pt-br": "Ele ataca pulverizando um fluido repugnante de seu\ncauda, mas o fedor diminui depois de algumas esguichos.",
        "zh-tw": "它通過從其身體噴出令人厭惡的液體來進行攻擊\n尾巴，但噴幾下後臭味就減弱了。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Smokescreen Shot",
                "fr": "Tir d'écran de fumée",
                "es": "Disparo de cortina de humo",
                "it": "Colpo di cortina di fumo",
                "de": "Nebelschuss",
                "pt-br": "Tiro de cortina de fumaça",
                "zh-tw": "煙幕彈"
            },
            damage: 70,
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
                "fr": "Lors du prochain tour de votre adversaire, si le Pokémon Défenseur tente d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, cette attaque n'a pas lieu.",
                "es": "Durante el siguiente turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza una moneda. Si sale cruz, ese ataque no ocurre.",
                "it": "Durante il prossimo turno del tuo avversario, se il Pokémon difensore tenta di usare un attacco, il tuo avversario lancia una moneta. Se esce croce, l'attacco non avviene.",
                "de": "Wenn das verteidigende Pokémon im nächsten Zug deines Gegners versucht, einen Angriff auszuführen, wirft dein Gegner eine Münze. Bei „Zahl“ findet dieser Angriff nicht statt.",
                "pt-br": "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se der coroa, esse ataque não acontece.",
                "zh-tw": "在對手的下一個回合中，如果防御神奇寶貝嘗試使用攻擊，對手會擲硬幣。如果是反面，則不會發生該攻擊。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
