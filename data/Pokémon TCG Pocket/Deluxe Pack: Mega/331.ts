import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/331",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/331",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/331",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/331",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/331",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/331",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/331"
    },
    name: {
        en: "Zarude",
        fr: "Zarude",
        es: "Zarude",
        it: "Zarude",
        de: "Zarude",
        "pt-br": "Zarude",
        "zh-tw": "薩戮德",
        ja: "ザルード",
        ko: "자루도"
    },
    illustrator: "Shiburingaru",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Darkness"
    ],
    dexId: [
        893
    ],
    stage: "Basic",
    description: {
        en: "Once the vines on Zarude’s body tear off, they become nutrients in the soil. This helps the plants of the forest grow.",
        fr: "Lorsque ses lianes se détachent de son corps, elles fertilisent le sol et favorisent la croissance des plantes de la forêt.",
        es: "Las lianas que le brotan del cuerpo nutren y fertilizan el mantillo del bosque cuando se le desprenden.",
        it: "Se si staccano, le liane del suo corpo diventano nutrimento per il suolo, favorendo lo sviluppo delle piante della foresta.",
        de: "Reißen die an seinem Körper wachsenden Ranken ab, werden sie zu Nährstoffen für den Boden, was den Pflanzen im Wald zum Wachstum verhilft.",
        "pt-br": "Ao se soltarem do corpo de Zarude, seus cipós se tornam nutrientes para o solo, ajudando as plantas da floresta a crescer.",
        "zh-tw": "生長在身上的藤蔓斷落後會化為土壤的養分，孕育森林裡的各種植物。",
        ja: "Once the vines on Zarude’s body tear off, they become nutrients in the soil. This helps the plants of the forest grow.",
        ko: "Once the vines on Zarude’s body tear off, they become nutrients in the soil. This helps the plants of the forest grow."
    },
    attacks: [
        {
            cost: [
                "Darkness",
                "Darkness"
            ],
            name: {
                en: "Dark Vengeance",
                fr: "Vengeance Obscure",
                es: "Venganza Oscura",
                it: "Rivalsa Oscura",
                de: "Finstere Vergeltung",
                "pt-br": "Vingança Umbrosa",
                "zh-tw": "暗黑報復",
                ja: "Dark Vengeance",
                ko: "Dark Vengeance"
            },
            effect: {
                en: "If any of your {D} Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 80 more damage.",
                fr: "Si au moins un de vos Pokémon {D} a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
                es: "Si alguno de tus Pokémon {D} quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 80 puntos de daño más.",
                it: "Se uno qualsiasi dei tuoi Pokémon {D} è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 80 danni in più.",
                de: "Wenn mindestens 1 deiner {D}-Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 80 Schadenspunkte mehr zu.",
                "pt-br": "Se algum dos seus Pokémon {D} tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 80 pontos de dano a mais.",
                "zh-tw": "在上個對手的回合,若自己的{D}寶可夢因招式的傷害而昏厥了,則增加80點傷害。",
                ja: "If any of your {D} Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 80 more damage.",
                ko: "If any of your {D} Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 80 more damage."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
