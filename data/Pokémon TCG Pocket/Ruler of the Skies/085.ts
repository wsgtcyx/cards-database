import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/085",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/085",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/085",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/085",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/085",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/085",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/085"
    },
    name: {
        en: "Drilbur",
        fr: "Rototaupe",
        es: "Drilbur",
        it: "Drilbur",
        de: "Rotomurf",
        "pt-br": "Drilbur",
        "zh-tw": "螺釘地鼠",
        ko: "두더류",
        ja: "モグリュー"
    },
    illustrator: "tetsuya koizumi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [529],
    stage: "Basic",
    description: {
        en: "It makes its way swiftly through the soil by putting both claws together and rotating at high speed.",
        fr: "Il se propulse à grande vitesse sous la terre en joignant\nses griffes et en tourbillonnant sur lui-même.",
        es: "Cuando junta las garras y comienza a dar vueltas frenéticas,\navanza bajo tierra a gran velocidad.",
        it: "Sfreccia a gran velocità sotto terra, avvitandosi su se stesso,\nmentre si apre un passaggio scavando con le unghie.",
        de: "Es führt seine beiden Klauen zusammen, dreht sich rapide um\ndie eigene Achse und gräbt sich ratzfatz durch das Erdreich.",
        "pt-br": "Ele abre seu caminho agilmente pelo solo ao unir ambas as garras e girá-las em alta velocidade.",
        "zh-tw": "只要將兩手的爪子疊在一起，\n並高速旋轉身體，\n便能以驚人的速度在地底前進。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Mud-Slap",
                fr: "Coud'Boue",
                es: "Bofetón Lodo",
                it: "Fangosberla",
                de: "Lehmschelle",
                "pt-br": "Tapa de Lama",
                "zh-tw": "擲泥"
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
    retreat: 2
};

export default card;
