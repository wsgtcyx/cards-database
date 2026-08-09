import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/048",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/048",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/048",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/048",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/048",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/048"
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
    illustrator: "Mizue",
    rarity: "None",
    category: "Pokemon",
    hp: 110,
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
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Hammer In",
                fr: "Enfoncement",
                es: "Martillear",
                it: "Martello",
                de: "Einhämmern",
                "pt-br": "Martelada",
                "zh-tw": "頭突"
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: []
};

export default card;
