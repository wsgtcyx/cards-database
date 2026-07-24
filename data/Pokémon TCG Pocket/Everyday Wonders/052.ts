import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/052",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/052"
    },
    name: {
        en: "Wigglytuff",
        fr: "Grodoudou",
        es: "Wigglytuff",
        it: "Wigglytuff",
        de: "Knuddeluff",
        "pt-br": "Wigglytuff",
        "zh-tw": "胖可丁",
        ko: "푸크린",
        ja: "プクリン"
    },
    illustrator: "Lee HyunJung",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    dexId: [40],
    evolveFrom: {
        en: "Jigglypuff",
        fr: "Rondoudou",
        es: "Jigglypuff",
        it: "Jigglypuff",
        de: "Pummeluff",
        "pt-br": "Jigglypuff",
        "zh-tw": "胖丁",
        ko: "푸린",
        ja: "プリン"
    },
    stage: "Stage1",
    description: {
        en: "The rich, fluffy fur that covers its body feels so good that anyone who feels it can’t stop touching it.",
        fr: "La fourrure riche et moelleuse qui recouvre son corps est si agréable que quiconque la sent ne peut s'empêcher de la toucher.",
        es: "El pelaje rico y esponjoso que cubre su cuerpo se siente tan bien que cualquiera que lo siente no puede dejar de tocarlo.",
        it: "La pelliccia ricca e soffice che ricopre il suo corpo è così bella che chiunque la senta non può smettere di toccarla.",
        de: "Das üppige, flauschige Fell, das seinen Körper bedeckt, fühlt sich so gut an, dass jeder, der es spürt, nicht aufhören kann, es zu berühren.",
        "pt-br": "O pelo rico e fofo que cobre seu corpo é tão gostoso que qualquer um que o sente não consegue parar de tocá-lo.",
        "zh-tw": "覆蓋它身體的濃密蓬鬆的皮毛感覺非常好，任何摸到它的人都會忍不住去觸摸它。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Expand",
                fr: "Développement",
                es: "Expandir",
                it: "Espansione",
                de: "Ausdehnen",
                "pt-br": "Expandir",
                "zh-tw": "膨脹*"
            },
            effect: {
                en: "During your opponent's next turn, this Pokémon takes -20 damage from attacks.",
                fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit - 20 dégâts provenant des attaques.",
                es: "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.",
                it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce -20 danni dagli attacchi.",
                de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken - 20 Schadenspunkte zugefügt.",
                "pt-br": "Durante o próximo turno do seu oponente, este Pokémon receberá -20 pontos de dano de ataques.",
                "zh-tw": "在對手的下一個回合中，這只寶可夢受到的攻擊傷害為-20。"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
