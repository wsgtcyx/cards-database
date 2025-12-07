import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Zoroark",
        "fr": "Zoroark",
        "es": "Zoroark",
        "it": "Zoroark",
        "de": "Zoroark",
        "pt-br": "Zoroark",
        "zh-tw": "索羅亞克"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Zorua",
        "fr": "Zorua",
        "es": "Zorúa",
        "it": "Zorua",
        "de": "Zorua",
        "pt-br": "Zorua",
        "zh-tw": "索魯亞"
    },
    description: {
        en: "Stories say those who tried to catch Zoroark were\ntrapped in an illusion and punished.",
        "fr": "Les histoires disent que ceux qui ont tenté d'attraper Zoroark étaient\npiégé dans une illusion et puni.",
        "es": "Las historias dicen que aquellos que intentaron atrapar a Zoroark fueron\natrapado en una ilusión y castigado.",
        "it": "Le storie dicono che coloro che hanno cercato di catturare Zoroark lo sono stati\nintrappolato in un'illusione e punito.",
        "de": "Geschichten sagen, dass diejenigen, die versuchten, Zoroark zu fangen, es waren\nin einer Illusion gefangen und bestraft.",
        "pt-br": "As histórias dizem que aqueles que tentaram capturar Zoroark foram\npreso em uma ilusão e punido.",
        "zh-tw": "故事稱那些試圖抓住索羅亞克的人是\n陷入幻覺並受到懲罰。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Illusive Trickery",
                "fr": "Supercherie illusoire",
                "es": "Truco ilusorio",
                "it": "Inganno illusorio",
                "de": "Illusiver Trick",
                "pt-br": "Truque Ilusivo",
                "zh-tw": "虛幻的詭計"
            },
            effect: {
                en: "If your opponent's Pokémon is Knocked Out by damage from this Pokémon's attacks, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
                "fr": "Si le Pokémon de votre adversaire est mis KO par les dégâts des attaques de ce Pokémon, pendant le prochain tour de votre adversaire, prévenez tous les dégâts et effets des attaques infligées à ce Pokémon.",
                "es": "Si el Pokémon de tu rival queda fuera de combate por el daño de los ataques de este Pokémon, durante el próximo turno de tu rival, evita todo el daño (y los efectos de) los ataques realizados a este Pokémon.",
                "it": "Se il Pokémon del tuo avversario viene messo KO dai danni inflitti dagli attacchi di questo Pokémon, durante il prossimo turno del tuo avversario, previeni tutti i danni e gli effetti degli attacchi inflitti a questo Pokémon.",
                "de": "Wenn das Pokémon deines Gegners durch Schaden durch die Angriffe dieses Pokémon kampfunfähig wird, verhindere im nächsten Zug deines Gegners jeglichen Schaden und alle Auswirkungen von Angriffen, die diesem Pokémon zugefügt werden.",
                "pt-br": "Se o Pokémon do seu oponente for Nocauteado pelo dano dos ataques deste Pokémon, durante o próximo turno do seu oponente, evite todos os danos e efeitos dos ataques causados ​​a este Pokémon.",
                "zh-tw": "如果對手的神奇寶貝被該神奇寶貝的攻擊造成的傷害擊倒，則在對手的下一個回合中，阻止對該神奇寶貝造成的所有攻擊傷害及其效果。"
            }
        }],
    attacks: [{
            name: {
                en: "Night Daze",
                "fr": "Étourdissement nocturne",
                "es": "Aturdimiento nocturno",
                "it": "Stordimento notturno",
                "de": "Nachtbenommenheit",
                "pt-br": "Noite atordoada",
                "zh-tw": "夜發呆"
            },
            damage: 70,
            cost: ["Darkness", "Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
