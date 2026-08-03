import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/142",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/142",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/142",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/142",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/142"
    },
    name: {
        en: "Furfrou",
        fr: "Couafarel",
        es: "Furfrou",
        it: "Furfrou",
        de: "Coiffwaff",
        "pt-br": "Furfrou",
        "zh-tw": "多麗米亞",
        ko: "트리미앙",
        ja: "トリミアン"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [676],
    stage: "Basic",
    description: {
        en: "Left alone, its fur will grow longer and longer, but it will only allow someone it trusts to cut it.",
        fr: "Sa fourrure pousse indéfiniment, mais il refuse\nde se faire couper la toison par une personne\nen qui il n’a pas confiance.",
        es: "El pelo le crece sin cesar, pero solo deja que se\nlo corten aquellos de quienes se fía plenamente.",
        it: "Se non viene tagliato, il suo pelo continua\na crescere a dismisura. Si lascia tosare\nsolamente dalle persone di cui si fida.",
        de: "Trimmt man sein Fell nicht regelmäßig, wächst es\nohne Unterlass. Allerdings lässt es sich nur von\njemandem frisieren, dem es traut.",
        "pt-br": "Deixado sozinho, seu pelo crescerá cada vez mais, mas só permitirá que alguém de sua confiança o corte.",
        "zh-tw": "如果放著不管，體毛就會\n不斷變長，但牠只允許\n信賴的人幫自己修剪。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Fur Coat",
                fr: "Toison Épaisse",
                es: "Pelaje Recio",
                it: "Foltopelo",
                de: "Fellkleid",
                "pt-br": "Camada de Pelos",
                "zh-tw": "毛皮大衣"
            },
            effect: {
                en: "This Pokémon takes −20 damage from attacks.",
                fr: "Ce Pokémon subit − 20 dégâts provenant des attaques.",
                es: "Los ataques hacen -20 puntos de daño a este Pokémon.",
                it: "Questo Pokémon subisce -20 danni dagli attacchi.",
                de: "Diesem Pokémon werden durch Attacken - 20 Schadenspunkte zugefügt.",
                "pt-br": "Este Pokémon recebe −20 pontos de dano de ataques.",
                "zh-tw": "這隻寶可夢受到招式的傷害-20點。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Retaliate",
                fr: "Vengeance",
                es: "Represalia",
                it: "Nemesi",
                de: "Heimzahlung",
                "zh-tw": "報仇",
                "pt-br": "Retaliação"
            },
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 50 more damage.",
                fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 50 puntos de daño más.",
                it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni di un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 50 danni in più.",
                de: "Wenn eines deiner Pokémon im letzten Zug deines Gegners durch Schaden durch einen Angriff kampfunfähig gemacht wurde, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "在上個對手的回合,若自己的寶可夢因招式的傷害而昏厥了,則增加50點傷害。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
