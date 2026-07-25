import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/028",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/028"
    },
    name: {
        en: "Iron Leaves",
        fr: "Vert-de-Fer",
        es: "Ferroverdor",
        it: "Fogliaferrea",
        de: "Eisenblatt",
        "pt-br": "Folhas Férreas",
        "zh-tw": "鐵斑葉",
        ko: "무쇠잎새",
        ja: "テツノイサハ"
    },
    illustrator: "Kazumasa Yasukuni",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [1010],
    stage: "Basic",
    description: {
        en: "According to the few eyewitness accounts that exist, it used its shining blades to julienne large trees and boulders.",
        fr: "Selon les quelques témoignages oculaires existants, il utilisait ses lames brillantes pour couper en julienne de gros arbres et des rochers.",
        es: "Según los pocos relatos de testigos presenciales que existen, utilizó sus hojas brillantes para cortar en juliana grandes árboles y rocas.",
        it: "Secondo le poche testimonianze oculari esistenti, tagliava a julienne grandi alberi e massi con le sue lame lucenti.",
        de: "Den wenigen existierenden Augenzeugenberichten zufolge benutzte es seine glänzenden Klingen, um große Bäume und Felsbrocken zu schneiden.",
        "pt-br": "De acordo com os poucos relatos de testemunhas oculares existentes, ele usou suas lâminas brilhantes para cortar grandes árvores e pedras em juliana.",
        "zh-tw": "根據現有的少數目擊者描述，它用閃亮的刀片將大樹和巨石切碎。"
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless", "Colorless"],
            name: {
                en: "Avenging Edge",
                fr: "Bord vengeur",
                es: "Filo vengador",
                it: "Bordo vendicativo",
                de: "Avenging Edge",
                "pt-br": "Borda Vingativa",
                "zh-tw": "復仇刀鋒"
            },
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 50 more damage.",
                fr: "Si l'un de vos Pokémon a été mis KO par les dégâts d'une attaque lors du dernier tour de votre adversaire, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si alguno de tus Pokémon quedó fuera de combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 50 puntos de daño más.",
                it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni di un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 50 danni in più.",
                de: "Wenn eines deiner Pokémon im letzten Zug deines Gegners durch Schaden durch einen Angriff kampfunfähig gemacht wurde, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se algum dos seus Pokémon foi nocauteado pelo dano de um ataque durante o último turno do seu oponente, esse ataque causará 50 de dano a mais.",
                "zh-tw": "如果你的任何一隻寶可夢在對手的最後回合中因攻擊傷害而被擊倒，則這次攻擊造成的傷害增加 50 點。"
            },
            damage: "50+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
