import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Sandygast",
        "fr": "Sandygast",
        "es": "sandygast",
        "it": "Sandygast",
        "de": "Sandygast",
        "pt-br": "Sandygast",
        "zh-tw": "沙丘娃",
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "It flings sand into the eyes of its prey and tries to\nclose in on them while they're blinded, but since\nSandygast is so slow, the prey tends to escape.",
        "fr": "Il jette du sable dans les yeux de sa proie et tente de\nrapprochez-vous d'eux pendant qu'ils sont aveuglés, mais depuis\nSandygast est si lent que la proie a tendance à s'échapper.",
        "es": "Arroja arena a los ojos de su presa y trata de\nacercarse a ellos mientras están cegados, pero desde\nSandygast es tan lento que la presa tiende a escapar.",
        "it": "Lancia la sabbia negli occhi della preda e ci prova\navvicinateli mentre sono accecati, ma da allora\nSandygast è così lento che la preda tende a scappare.",
        "de": "Es wirft Sand in die Augen seiner Beute und versucht es auch\nNähere dich ihnen, während sie geblendet sind, aber seitdem\nSandygast ist so langsam, dass die Beute dazu neigt, zu entkommen.",
        "pt-br": "Ele joga areia nos olhos de sua presa e tenta\naproxime-se deles enquanto estão cegos, mas desde\nSandygast é tão lento que a presa tende a escapar.",
        "zh-tw": "它把沙子扔進獵物的眼睛裡，並試圖\n在他們失明的時候接近他們，但自從\n桑迪加斯特行動緩慢，獵物往往會逃跑。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sand Attack",
                "fr": "Attaque de sable",
                "es": "Ataque de arena",
                "it": "Attacco di sabbia",
                "de": "Sandangriff",
                "pt-br": "Ataque de Areia",
                "zh-tw": "沙土襲擊"
            },
            damage: 20,
            cost: ["Fighting", "Colorless"],
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
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
