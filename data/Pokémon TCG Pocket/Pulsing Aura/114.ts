import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/114",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/114"
    },
    name: {
        en: "Zarude",
        fr: "Zarude",
        es: "Zarude",
        it: "Zarude",
        de: "Zarude",
        "pt-br": "Zarude",
        "zh-tw": "薩戮德",
        ko: "자루도",
        ja: "ザルード"
    },
    illustrator: "Shiburingaru",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    dexId: [893],
    stage: "Basic",
    description: {
        en: "Once the vines on Zarude’s body tear off, they become nutrients in the soil. This helps the plants of the forest grow.",
        fr: "Lorsque ses lianes se détachent de son corps,\nelles fertilisent le sol et favorisent la croissance\ndes plantes de la forêt.",
        es: "Las lianas que le brotan del cuerpo nutren y\nfertilizan el mantillo del bosque cuando se le\ndesprenden.",
        it: "Se si staccano, le liane del suo corpo diventano\nnutrimento per il suolo, favorendo lo sviluppo\ndelle piante della foresta.",
        de: "Reißen die an seinem Körper wachsenden Ranken\nab, werden sie zu Nährstoffen für den Boden,\nwas den Pflanzen im Wald zum Wachstum verhilft.",
        "pt-br": "Depois que as vinhas do corpo de Zarude são arrancadas, elas se tornam nutrientes no solo. Isso ajuda as plantas da floresta a crescer.",
        "zh-tw": "生長在身上的藤蔓斷落後\n會化為土壤的養分，\n孕育森林裡的各種植物。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "Dark Vengeance",
                fr: "Vengeance Obscure",
                es: "Venganza Oscura",
                it: "Rivalsa Oscura",
                de: "Finstere Vergeltung",
                "pt-br": "Vingança Umbrosa",
                "zh-tw": "暗黑報復"
            },
            effect: {
                en: "If any of your {D} Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 80 more damage.",
                fr: "Si l'un de vos {D} Pokémon a été mis KO par les dégâts d'une attaque lors du dernier tour de votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
                es: "Si alguno de tus Pokémon {D} quedó fuera de combate por el daño de un ataque durante el último turno de tu oponente, este ataque hace 80 puntos de daño más.",
                it: "Se uno qualsiasi dei tuoi Pokémon {D} è stato messo KO dai danni di un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 80 danni in più.",
                de: "Wenn eines deiner {D} Pokémon im letzten Zug deines Gegners durch Schaden durch einen Angriff kampfunfähig gemacht wurde, fügt dieser Angriff 80 weitere Schadenspunkte zu.",
                "pt-br": "Se algum dos seus Pokémon {D} foi Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 80 de dano a mais.",
                "zh-tw": "如果你的任一隻 {D} 寶可夢在對手的最後回合中因攻擊傷害而被擊倒，則這次攻擊造成的傷害增加 80 點。"
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
