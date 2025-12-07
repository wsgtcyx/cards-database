import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Honchkrow",
        "fr": "Honchkrow",
        "es": "honchkrow",
        "it": "Honchkrow",
        "de": "Honchkrow",
        "pt-br": "Honchkrow",
        "zh-tw": "烏鴉頭頭",
    },
    illustrator: "IKEDA Saki",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    evolveFrom: {
        en: "Murkrow",
        "fr": "Murkrow",
        "es": "Murkrow",
        "it": "Murkrow",
        "de": "Murkrow",
        "pt-br": "Murkrow",
        "zh-tw": "暗鴉"
    },
    description: {
        en: "A single cry from this nocturnal Pokémon, and\nmore than 100 of its Murkrow cronies will\nassemble.",
        "fr": "Un seul cri de ce Pokémon nocturne, et\nplus de 100 de ses amis de Murkrow le feront\nassembler.",
        "es": "Un solo grito de este Pokémon nocturno, y\nmás de 100 de sus compinches de Murkrow\nmontar.",
        "it": "Un solo grido di questo Pokémon notturno, e\npiù di 100 dei suoi amici di Murkrow lo faranno\nassemblare.",
        "de": "Ein einziger Schrei dieses nachtaktiven Pokémon, und\nMehr als 100 seiner Murkrow-Kumpane werden es tun\nzusammenbauen.",
        "pt-br": "Um único grito deste Pokémon noturno, e\nmais de 100 de seus comparsas Murkrow irão\nmontar.",
        "zh-tw": "這只夜間活動的神奇寶貝的一聲叫聲，以及\n超過 100 名暗鴉親信將\n組裝。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Evil Admonition",
                "fr": "Mauvais avertissement",
                "es": "Admonición malvada",
                "it": "Malvagio ammonimento",
                "de": "Böse Ermahnung",
                "pt-br": "Advertência maligna",
                "zh-tw": "邪惡的警告"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "This attack does 40 more damage for each of your opponent's Pokémon in play that has an Ability.",
                "fr": "Cette attaque inflige 40 dégâts supplémentaires pour chacun des Pokémon en jeu de votre adversaire possédant une capacité.",
                "es": "Este ataque hace 40 puntos de daño más por cada uno de los Pokémon en juego de tu rival que tenga una habilidad.",
                "it": "Questo attacco infligge 40 danni in più per ciascuno dei Pokémon in gioco del tuo avversario che ha un'abilità.",
                "de": "Dieser Angriff fügt jedem Pokémon deines Gegners im Spiel, das über eine Fähigkeit verfügt, 40 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 40 pontos de dano a mais para cada Pokémon do seu oponente em jogo que tenha uma Habilidade.",
                "zh-tw": "此攻擊對場上對手每隻具有技能的神奇寶貝造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
