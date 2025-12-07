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
        "zh-tw": "未知"
    },
    illustrator: "OKUBO",
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
                en: "GUARD",
                "fr": "GARDE",
                "es": "GUARDIA",
                "it": "GUARDIA",
                "de": "BEWACHEN",
                "pt-br": "GUARDA",
                "zh-tw": "警衛"
            },
            effect: {
                en: "This Ability works if you have any Unown in play with an Ability other than . All of your Pokémon take −10 damage from attacks from your opponent's Pokémon.",
                "fr": "Cette capacité fonctionne si vous avez un Zarbi en jeu avec une capacité autre que . Tous vos Pokémon subissent -10 dégâts des attaques des Pokémon de votre adversaire.",
                "es": "Esta habilidad funciona si tienes algún Unown en juego con una habilidad distinta a . Todos tus Pokémon reciben -10 de daño de los ataques de los Pokémon de tu oponente.",
                "it": "Questa abilità funziona se hai in gioco degli Unown con un'abilità diversa da . Tutti i tuoi Pokémon subiscono -10 danni dagli attacchi dei Pokémon del tuo avversario.",
                "de": "Diese Fähigkeit funktioniert, wenn Sie einen Unbekannten mit einer anderen Fähigkeit als im Spiel haben. Alle deine Pokémon erleiden −10 Schaden durch Angriffe der Pokémon deines Gegners.",
                "pt-br": "Esta habilidade funciona se você tiver algum Unown em jogo com uma habilidade diferente de . Todos os seus Pokémon sofrem -10 de dano de ataques dos Pokémon do seu oponente.",
                "zh-tw": "如果您有任何未知的技能與 以外的技能一起使用，則此技能有效。你的所有神奇寶貝因對手神奇寶貝的攻擊而受到−10點傷害。"
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
    boosters: ["ho-oh"]
};
export default card;
