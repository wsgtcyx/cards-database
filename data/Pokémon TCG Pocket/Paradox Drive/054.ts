import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/054",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/054",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/054",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/054",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/054",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/054",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/054"
    },
    name: {
        en: "Gouging Fire",
        fr: "Feu-Perçant",
        es: "Flamariete",
        it: "Vampeaguzze",
        de: "Keilflamme",
        "pt-br": "Fogo Corrosão",
        "zh-tw": "破空焰",
        ko: "꿰뚫는화염",
        ja: "ウガツホムラ"
    },
    illustrator: "Uninori",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Dragon"],
    dexId: [1020],
    stage: "Basic",
    description: {
        en: "It resembles an eerie Pokémon once shown in a paranormal magazine. That Pokémon was said to be an Entei regenerated from a fossil.",
        fr: "Il ressemble à un Pokémon étrange autrefois montré dans un magazine paranormal. Ce Pokémon serait un Entei régénéré à partir d'un fossile.",
        es: "Se parece a un Pokémon espeluznante que alguna vez apareció en una revista paranormal. Se decía que ese Pokémon era un Entei regenerado a partir de un fósil.",
        it: "Assomiglia ad un Pokémon inquietante mostrato una volta in una rivista sul paranormale. Si diceva che quel Pokémon fosse uno Entei rigenerato da un fossile.",
        de: "Es ähnelt einem unheimlichen Pokémon, das einmal in einer paranormalen Zeitschrift gezeigt wurde. Bei diesem Pokémon soll es sich um ein aus einem Fossil regeneriertes Entei gehandelt haben.",
        "pt-br": "Assemelha-se a um Pokémon misterioso que já foi mostrado em uma revista paranormal. Dizia-se que esse Pokémon era um Entei regenerado de um fóssil.",
        "zh-tw": "它類似於超自然雜誌中曾經出現過的怪異寶可夢。據說那隻寶可夢是由化石再生的炎帝。"
    },
    attacks: [
        {
            cost: ["Fire", "Lightning", "Colorless"],
            name: {
                en: "Scorching Interruption",
                fr: "Interruption torride",
                es: "Interrupción abrasadora",
                it: "Interruzione rovente",
                de: "Sengende Unterbrechung",
                "pt-br": "Interrupção Escaldante",
                "zh-tw": "炙火遮天"
            },
            effect: {
                en: "Discard 2 Energy from this Pokémon. During your opponent's next turn, this Pokémon takes -30 damage from attacks.",
                fr: "Défaussez 2 Énergies de ce Pokémon. Lors du prochain tour de votre adversaire, ce Pokémon subit -30 dégâts des attaques.",
                es: "Descarta 2 Energías de este Pokémon. Durante el próximo turno de tu rival, este Pokémon recibe -30 de daño por ataques.",
                it: "Scarta due Energie da questo Pokémon. Durante il prossimo turno del tuo avversario, questo Pokémon subisce -30 danni dagli attacchi.",
                de: "Lege 2 Energien von diesem Pokémon ab. Während des nächsten Zuges deines Gegners erleidet dieses Pokémon -30 Schaden durch Angriffe.",
                "pt-br": "Descarte 2 Energias deste Pokémon. Durante o próximo turno do seu oponente, este Pokémon sofrerá -30 de dano de ataques.",
                "zh-tw": "丟棄該寶可夢的 2 點能量。在對手的下一個回合中，這隻寶可夢受到的攻擊傷害為-30。"
            },
            damage: 100
        }
    ],
    retreat: 2
};

export default card;
