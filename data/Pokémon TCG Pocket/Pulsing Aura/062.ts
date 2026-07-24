import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/062"
    },
    name: {
        en: "Morpeko",
        fr: "Morpeko",
        es: "Morpeko",
        it: "Morpeko",
        de: "Morpeko",
        "pt-br": "Morpeko",
        "zh-tw": "莫魯貝可",
        ko: "모르페코",
        ja: "モルペコ"
    },
    illustrator: "Megumi Mizutani",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [877],
    stage: "Basic",
    description: {
        en: "It has a small stomach. If it isn’t constantly eating the seeds it keeps in its pockets, it will get hungry immediately.",
        fr: "Il a un petit ventre. S’il ne mange pas constamment les graines qu’il garde dans ses poches, il aura immédiatement faim.",
        es: "Tiene un estómago pequeño. Si no come constantemente las semillas que guarda en sus bolsillos, le entrará hambre inmediatamente.",
        it: "Ha uno stomaco piccolo. Se non mangia costantemente i semi che tiene in tasca, avrà subito fame.",
        de: "Es hat einen kleinen Magen. Wenn es nicht ständig die Samen frisst, die es in seinen Taschen hat, wird es sofort hungrig.",
        "pt-br": "Tem um estômago pequeno. Se não comer constantemente as sementes que guarda nos bolsos, ficará com fome imediatamente.",
        "zh-tw": "它有一個小胃。如果它不經常吃口袋裡的種子，它會立即感到飢餓。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Full Belly Bolt",
                fr: "Éclair Rassasiant",
                es: "Voltaje Saciante",
                it: "Fulmine Panciapiena",
                de: "Voller-Bauch-Blitz",
                "pt-br": "Raio de Barriga Cheia",
                "zh-tw": "滿腹伏特"
            },
            effect: {
                en: "If this Pokémon has no damage on it, this attack does 30 more damage.",
                fr: "Si ce Pokémon n'a aucun dégât, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Si este Pokémon no tiene daño, este ataque hace 30 puntos de daño más.",
                it: "Se questo Pokémon non ha danni su di sé, questo attacco infligge 30 danni in più.",
                de: "Wenn dieses Pokémon keinen Schaden hat, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon não causar danos, este ataque causará 30 danos a mais.",
                "zh-tw": "如果這隻寶可夢沒有受到任何傷害，這次攻擊會造成額外 30 點傷害。"
            },
            damage: "10+"
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
