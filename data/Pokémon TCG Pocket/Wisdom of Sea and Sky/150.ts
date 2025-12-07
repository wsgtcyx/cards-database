import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Bouffalant",
        "fr": "Bouffant",
        "es": "bouffalante",
        "it": "Bouffalant",
        "de": "Bouffalant",
        "pt-br": "Bouffalante",
        "zh-tw": "布法朗"
    },
    illustrator: "nagimiso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "These Pokémon can crush a car with no more\nthan a headbutt. Bouffalant with more hair on\ntheir heads hold higher positions within the herd.",
        "fr": "Ces Pokémon peuvent écraser une voiture sans plus\nqu'un coup de tête. Bouffalant avec plus de cheveux\nleurs chefs occupent des positions plus élevées au sein du troupeau.",
        "es": "Estos Pokémon pueden aplastar un coche sin más\nque un cabezazo. Bouffalant con más pelo\nsus cabezas ocupan posiciones más altas dentro de la manada.",
        "it": "Questi Pokémon possono schiacciare un'auto senza altro\npiù di una testata. Bouffalant con più peli\nle loro teste occupano posizioni più alte all'interno della mandria.",
        "de": "Diese Pokémon können ohne weiteres ein Auto zerquetschen\nals ein Kopfstoß. Bouffalant mit mehr Haaren\nIhre Köpfe nehmen innerhalb der Herde eine höhere Position ein.",
        "pt-br": "Esses Pokémon podem esmagar um carro sem mais\ndo que uma cabeçada. Bouffalant com mais cabelo\nsuas cabeças ocupam posições mais altas dentro do rebanho.",
        "zh-tw": "這些神奇寶貝可以壓碎一輛汽車\n比用頭撞。蓬鬆的頭髮更多\n他們的頭部在牛群中佔據較高的位置。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Continuous Headbutt",
                "fr": "Coup de tête continu",
                "es": "Cabezazo continuo",
                "it": "Testata continua",
                "de": "Kontinuierlicher Kopfstoß",
                "pt-br": "Cabeçada Contínua",
                "zh-tw": "連續頭撞"
            },
            damage: 70,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. This attack does 70 damage for each heads.",
                "fr": "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 70 dégâts pour chaque tête.",
                "es": "Lanza una moneda hasta que obtengas cruz. Este ataque hace 70 daños por cada cabeza.",
                "it": "Lancia una moneta finché non esce croce. Questo attacco infligge 70 danni per ogni testa.",
                "de": "Wirf eine Münze, bis du „Zahl“ erhältst. Dieser Angriff verursacht 70 Schaden pro Kopf.",
                "pt-br": "Jogue uma moeda até obter coroa. Este ataque causa 70 de dano para cada cabeça.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 70 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
