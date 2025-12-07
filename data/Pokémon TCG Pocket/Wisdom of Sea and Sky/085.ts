import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Unown",
        "fr": "inconnu",
        "es": "desconocido",
        "it": "Unown",
        "de": "Unbekannt",
        "pt-br": "Desconhecido",
        "zh-tw": "未知圖騰",
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Its flat, thin body is always stuck on walls. Its shape\nappears to have some meaning.",
        "fr": "Son corps plat et mince est toujours collé aux murs. Sa forme\nsemble avoir une certaine signification.",
        "es": "Su cuerpo plano y delgado siempre está pegado a las paredes. Su forma\nparece tener algún significado.",
        "it": "Il suo corpo piatto e sottile è sempre attaccato alle pareti. La sua forma\nsembra avere un significato.",
        "de": "Sein flacher, dünner Körper klebt immer an Wänden. Seine Form\nscheint eine Bedeutung zu haben.",
        "pt-br": "Seu corpo achatado e fino está sempre preso nas paredes. Sua forma\nparece ter algum significado.",
        "zh-tw": "它扁平、薄薄的身體總是貼在牆上。它的形狀\n似乎有一定的意義。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "POWER",
                "fr": "POUVOIR",
                "es": "FUERZA",
                "it": "ENERGIA",
                "de": "LEISTUNG",
                "pt-br": "PODER",
                "zh-tw": "力量"
            },
            effect: {
                en: "This Ability works if you have any Unown in play with an Ability other than . Attacks used by your Pokémon do +10 damage to your opponent's Active Pokémon.",
                "fr": "Cette capacité fonctionne si vous avez un Zarbi en jeu avec une capacité autre que . Les attaques utilisées par votre Pokémon infligent +10 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Esta habilidad funciona si tienes algún Unown en juego con una habilidad distinta a . Los ataques utilizados por tus Pokémon causan +10 de daño al Pokémon Activo de tu oponente.",
                "it": "Questa abilità funziona se hai in gioco degli Unown con un'abilità diversa da . Gli attacchi usati dai tuoi Pokémon infliggono +10 danni al Pokémon attivo del tuo avversario.",
                "de": "Diese Fähigkeit funktioniert, wenn Sie einen Unbekannten mit einer anderen Fähigkeit als im Spiel haben. Angriffe deines Pokémon fügen dem aktiven Pokémon deines Gegners +10 Schaden zu.",
                "pt-br": "Esta habilidade funciona se você tiver algum Unown em jogo com uma habilidade diferente de . Os ataques usados ​​pelos seus Pokémon causam +10 de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "如果您有任何未知的技能與 以外的技能一起使用，則此技能有效。你的神奇寶貝使用的攻擊對對手的活躍神奇寶貝造成+10傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Hidden Power",
                "fr": "Pouvoir caché",
                "es": "Poder oculto",
                "it": "Potere nascosto",
                "de": "Verborgene Macht",
                "pt-br": "Poder Oculto",
                "zh-tw": "隱藏的力量"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
