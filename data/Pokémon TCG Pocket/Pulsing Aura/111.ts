import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/111",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/111",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/111",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/111",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/111",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/111",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/111"
    },
    name: {
        en: "Inkay",
        fr: "Sepiatop",
        es: "Inkay",
        it: "Inkay",
        de: "Iscalar",
        "pt-br": "Inkay",
        "zh-tw": "好啦魷",
        ko: "오케이징",
        ja: "マーイーカ"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [686],
    stage: "Basic",
    description: {
        en: "Being upside-down improves its blood flow and clears its mind, causing the power of its psychic moves to increase dramatically.",
        fr: "Être à l'envers améliore sa circulation sanguine et vide son esprit, ce qui entraîne une augmentation spectaculaire de la puissance de ses mouvements psychiques.",
        es: "Estar boca abajo mejora su flujo sanguíneo y aclara su mente, lo que hace que el poder de sus movimientos psíquicos aumente dramáticamente.",
        it: "Stare sottosopra migliora il suo flusso sanguigno e schiarisce la sua mente, facendo aumentare notevolmente la potenza delle sue mosse psichiche.",
        de: "Auf dem Kopf zu stehen verbessert die Durchblutung und klärt den Geist, wodurch die Kraft seiner psychischen Bewegungen dramatisch zunimmt.",
        "pt-br": "Ficar de cabeça para baixo melhora o fluxo sanguíneo e limpa a mente, fazendo com que o poder de seus movimentos psíquicos aumente dramaticamente.",
        "zh-tw": "倒立可以改善血液流動，頭腦清醒，神通威力大幅提升。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Spinning Attack",
                fr: "Attaque Tournante",
                es: "Ataque Giratorio",
                it: "Attacco Rotante",
                de: "Rundumangriff",
                "pt-br": "Ataque Giratório",
                "zh-tw": "迴轉攻擊"
            },
            damage: 20
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
