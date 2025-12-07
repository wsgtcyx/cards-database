import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Wobbuffet",
        "fr": "Wobbuffet",
        "es": "Wobbuffet",
        "it": "Wobbuffet",
        "de": "Wobbuffet",
        "pt-br": "Wobbuffet",
        "zh-tw": "沃布自助餐"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    description: {
        en: "It hates light and shock. If attacked, it inflates its\nbody to pump up its counterstrike.",
        "fr": "Il déteste la lumière et les chocs. S'il est attaqué, il gonfle son\ncorps pour intensifier sa contre-attaque.",
        "es": "Odia la luz y el shock. Si es atacado, infla su\ncuerpo para impulsar su contraataque.",
        "it": "Odia la luce e lo shock. Se attaccato, si gonfia\ncorpo per potenziare il suo contrattacco.",
        "de": "Es hasst Licht und Schock. Wenn es angegriffen wird, bläht es sich auf\nKörper, um seinen Gegenschlag zu verstärken.",
        "pt-br": "Ele odeia luz e choque. Se atacado, ele infla seu\ncorpo para bombear seu contra-ataque.",
        "zh-tw": "它討厭光和震動。如果受到攻擊，它會膨脹\n身體來發動反擊。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Reply Strongly",
                "fr": "Répondez fortement",
                "es": "Responder fuertemente",
                "it": "Rispondi con forza",
                "de": "Antworte mit Nachdruck",
                "pt-br": "Responder com firmeza",
                "zh-tw": "強烈回复"
            },
            damage: 30,
            cost: ["Psychic", "Colorless"],
            effect: {
                en: "If this Pokémon was damaged by an attack during your opponent's last turn while it was in the Active Spot, this attack does 50 more damage.",
                "fr": "Si ce Pokémon a été blessé par une attaque lors du dernier tour de votre adversaire alors qu'il se trouvait dans le Point Actif, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon fue dañado por un ataque durante el último turno de tu rival mientras estaba en el Punto Activo, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon è stato danneggiato da un attacco durante l'ultimo turno del tuo avversario mentre era in posizione attiva, questo attacco infligge 50 danni in più.",
                "de": "Wenn dieses Pokémon im letzten Zug deines Gegners durch einen Angriff beschädigt wurde, während es sich an der aktiven Stelle befand, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon foi danificado por um ataque durante o último turno do seu oponente enquanto ele estava no Ponto Ativo, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝在對手的最後一個回合中受到攻擊而受到傷害，則該攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
