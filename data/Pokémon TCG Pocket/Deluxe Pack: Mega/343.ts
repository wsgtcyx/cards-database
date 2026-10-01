import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/343",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/343",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/343",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/343",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/343",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/343",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/343"
    },
    name: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        it: "Dratini",
        de: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ja: "ミニリュウ",
        ko: "미뇽"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Dragon"
    ],
    dexId: [
        147
    ],
    stage: "Basic",
    description: {
        en: "It is born large to start with. It repeatedly sheds its skin as it steadily grows longer.",
        fr: "Déjà grand dès sa naissance, il devient encore plus long à chacune de ses fréquentes mues.",
        es: "Al nacer ya tiene un tamaño considerable. Muda continuamente de piel a la vez que crece.",
        it: "Già grande alla nascita, continua poi a crescere, cambiando ripetutamente la pelle.",
        de: "Es ist bereits bei Geburt sehr groß. Durch permanentes Häuten wächst es schnell und wird noch länger.",
        "pt-br": "Nasce com um corpo grande e troca de pele repetidamente à medida que cresce.",
        "zh-tw": "從出生開始就已經很大一隻。在反覆蛻皮的成長過程中，身體會變得越來越長。",
        ja: "It is born large to start with. It repeatedly sheds its skin as it steadily grows longer.",
        ko: "It is born large to start with. It repeatedly sheds its skin as it steadily grows longer."
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "Slam",
                fr: "Souplesse",
                es: "Atizar",
                it: "Schianto",
                de: "Slam",
                "zh-tw": "摔打",
                "pt-br": "Pancada Brusca",
                ja: "Slam",
                ko: "Slam"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。",
                ja: "Flip 2 coins. This attack does 20 damage for each heads.",
                ko: "Flip 2 coins. This attack does 20 damage for each heads."
            },
            damage: "20x"
        }
    ],
    retreat: 1
};

export default card;
