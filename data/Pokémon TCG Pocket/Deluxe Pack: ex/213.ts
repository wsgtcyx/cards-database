import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Lucario",
        "fr": "Lucario",
        "es": "lucario",
        "it": "Lucario",
        "de": "Lucario",
        "pt-br": "Lucário",
        "zh-tw": "路卡利歐"
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Riolu",
        "fr": "Riolu",
        "es": "Riolu",
        "it": "Riolu",
        "de": "Riolu",
        "pt-br": "Riolu",
        "zh-tw": "利奧盧"
    },
    description: {
        en: "It's said that no foe can remain invisible to\nLucario, since it can detect auras—even those\nof foes it could not otherwise see.",
        "fr": "On dit qu'aucun ennemi ne peut rester invisible\nLucario, puisqu'il peut détecter les auras, même celles\nd'ennemis qu'il ne pourrait pas voir autrement.",
        "es": "Se dice que ningún enemigo puede permanecer invisible para\nLucario, ya que puede detectar auras, incluso aquellas\nde enemigos que de otro modo no podría ver.",
        "it": "Si dice che nessun nemico possa rimanere invisibile\nLucario, poiché può rilevare le aure, anche quelle\ndi nemici che altrimenti non potrebbe vedere.",
        "de": "Es heißt, dass kein Feind für ihn unsichtbar bleiben kann\nLucario, da es Auren erkennen kann – sogar diese\nvon Feinden, die es sonst nicht sehen könnte.",
        "pt-br": "Diz-se que nenhum inimigo pode permanecer invisível para\nLucario, já que pode detectar auras – mesmo aquelas\nde inimigos que de outra forma não poderia ver.",
        "zh-tw": "據說沒有任何敵人可以保持隱形\n路卡利歐，因為它能探測到光環——甚至是那些\n它無法看到的敵人。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fighting Coach",
                "fr": "Entraîneur de combat",
                "es": "Entrenador de lucha",
                "it": "Allenatore di combattimento",
                "de": "Kampftrainer",
                "pt-br": "Treinador de luta",
                "zh-tw": "格鬥教練"
            },
            effect: {
                en: "Attacks used by your {F} Pokémon do +20 damage to your opponent's Active Pokémon.",
                "fr": "Les attaques utilisées par votre Pokémon {F} infligent +20 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Los ataques utilizados por tu Pokémon {F} hacen +20 de daño al Pokémon Activo de tu rival.",
                "it": "Gli attacchi usati dai tuoi Pokémon {F} infliggono +20 danni al Pokémon attivo del tuo avversario.",
                "de": "Angriffe deines {F}-Pokémon fügen dem Aktiven Pokémon deines Gegners +20 Schaden zu.",
                "pt-br": "Os ataques usados ​​pelos seus Pokémon {F} causam +20 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "你的{F}神奇寶貝使用的攻擊對對手的活躍神奇寶貝造成+20傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Submarine Blow",
                "fr": "Coup sous-marin",
                "es": "Golpe submarino",
                "it": "Colpo sottomarino",
                "de": "U-Boot-Schlag",
                "pt-br": "Golpe Submarino",
                "zh-tw": "潛艇打擊"
            },
            damage: 40,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
