import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Sunflora",
        "fr": "Flore solaire",
        "es": "flora solar",
        "it": "Sunflora",
        "de": "Sonnenflora",
        "pt-br": "Sunflora",
        "zh-tw": "向日花怪",
    },
    illustrator: "Miki Tanaka",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Sunkern",
        "fr": "Englouti",
        "es": "hundido",
        "it": "Affondato",
        "de": "Sunkern",
        "pt-br": "Afundado",
        "zh-tw": "向日種子",
    },
    description: {
        en: "In the daytime, it rushes about in a hectic\nmanner, but it comes to a complete stop when\nthe sun sets.",
        "fr": "Le jour, il se précipite de manière trépidante\nmanière, mais il s'arrête complètement lorsque\nle soleil se couche.",
        "es": "Durante el día, corre de un modo frenético.\nmanera, pero se detiene por completo cuando\nel sol se pone.",
        "it": "Di giorno corre freneticamente\nmodo, ma si ferma completamente quando\nil sole tramonta.",
        "de": "Tagsüber herrscht Hektik\nArt und Weise, aber es kommt völlig zum Stillstand, wenn\ndie Sonne geht unter.",
        "pt-br": "Durante o dia, ele corre em uma agitação\nmaneira, mas para completamente quando\no sol se põe.",
        "zh-tw": "白天，它忙碌地奔波\n方式，但當它完全停止時\n太陽落山了。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Trip Over",
                "fr": "Voyage terminé",
                "es": "Tropezar",
                "it": "Inciampare",
                "de": "Stolpern vorbei",
                "pt-br": "Viagem",
                "zh-tw": "絆倒"
            },
            damage: 50,
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
