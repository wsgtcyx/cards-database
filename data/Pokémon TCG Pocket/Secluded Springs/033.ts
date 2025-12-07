import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Mismagius",
        "fr": "Mismage",
        "es": "mismagio",
        "it": "Mismagio",
        "de": "Mismagius",
        "pt-br": "Mismágio",
        "zh-tw": "夢妖魔",
    },
    illustrator: "tono",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Misdreavus",
        "fr": "Misdreavus",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Misdreavus",
        "pt-br": "Misdreavus",
        "zh-tw": "誤判"
    },
    description: {
        en: "Its cry sounds like an incantation. It is said the cry\nmay rarely be imbued with happiness-giving power.",
        "fr": "Son cri ressemble à une incantation. On dit le cri\npeut rarement être imprégné d’un pouvoir générateur de bonheur.",
        "es": "Su grito suena como un encantamiento. se dice el llanto\nrara vez puede estar imbuido del poder de dar felicidad.",
        "it": "Il suo grido sembra un incantesimo. Si dice il grido\npuò raramente essere intriso di potere che dà felicità.",
        "de": "Sein Schrei klingt wie eine Beschwörung. Es heißt, der Schrei\nkann selten von glückspendender Kraft durchdrungen sein.",
        "pt-br": "Seu grito soa como um encantamento. Diz-se que o choro\nraramente pode estar imbuído do poder de dar felicidade.",
        "zh-tw": "它的叫聲聽起來就像是咒語。據說哭聲\n可能很少充滿給予幸福的力量。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Cursed Prose",
                "fr": "Prose maudite",
                "es": "Prosa maldita",
                "it": "Prosa maledetta",
                "de": "Verfluchte Prosa",
                "pt-br": "Prosa Amaldiçoada",
                "zh-tw": "被詛咒的散文"
            },
            cost: ["Psychic"],
            effect: {
                en: "At the end of your opponent's next turn, do 90 damage to the Defending Pokémon.",
                "fr": "À la fin du prochain tour de votre adversaire, infligez 90 dégâts au Pokémon défenseur.",
                "es": "Al final del siguiente turno de tu rival, haz 90 puntos de daño al Pokémon Defensor.",
                "it": "Alla fine del prossimo turno del tuo avversario, infliggi 90 danni al Pokémon difensore.",
                "de": "Füge am Ende des nächsten Zuges deines Gegners dem verteidigenden Pokémon 90 Schadenspunkte zu.",
                "pt-br": "No final do próximo turno do seu oponente, cause 90 de dano ao Pokémon Defensor.",
                "zh-tw": "下個對手回合結束時，對守方寶可夢造成 90 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
