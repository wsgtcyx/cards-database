import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/075",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/075"
    },
    name: {
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
    illustrator: "Kanami Ogata",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [39],
    stage: "Basic",
    description: {
        en: "If it inflates to sing a lullaby, it can perform longer and cause sure drowsiness in its audience.",
        fr: "En se gonflant, il peut chanter une longue berceuse\nqui endort inévitablement ses adversaires.",
        es: "Si se hincha para cantar una nana, cantará más tiempo\ny podría causar sopor en el público.",
        it: "Se si gonfia e usa il suo Canto diventa più resistente\ne causa una forte sonnolenza in chi lo ascolta.",
        de: "Wenn es Gesang einsetzt, steigt seine Ausdauer\nund seine Zuhörer werden in Tiefschlaf versetzt.",
        "pt-br": "Se inflar para cantar uma canção de ninar, pode durar mais tempo e causar certa sonolência no público.",
        "zh-tw": "如果它充氣來唱搖籃曲，它可以表演更長時間並導致觀眾昏昏欲睡。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Stompy Stomp",
                fr: "Stompy Stomp",
                es: "Pisotón fuerte",
                it: "Stomp Stomp",
                de: "Stompy Stomp",
                "pt-br": "Stompy Stomp",
                "zh-tw": "踏踏"
            },
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 30 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 30 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 30 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。"
            },
            damage: "30x"
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
