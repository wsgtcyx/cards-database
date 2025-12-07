import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Horsea",
        "fr": "Horée",
        "es": "caballoa",
        "it": "Horsea",
        "de": "Horsea",
        "pt-br": "cavalo",
        "zh-tw": "墨海馬",
    },
    illustrator: "Taira Akitsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "Horsea makes its home in oceans with gentle\ncurrents. If this Pokémon is under attack, it spits\nout pitch-black ink and escapes.",
        "fr": "Horsea s'installe dans les océans avec la douceur\ncourants. Si ce Pokémon est attaqué, il crache\nsort de l'encre noire et s'échappe.",
        "es": "Horsea hace su hogar en los océanos con suave\ncorrientes. Si este Pokémon está siendo atacado, escupe\nSale tinta negra como boca de lobo y se escapa.",
        "it": "Horsea vive negli oceani con delicatezza\ncorrenti. Se questo Pokémon è sotto attacco, sputa\nesce inchiostro nero come la pece e fugge.",
        "de": "Horsea ist sanft in den Ozeanen zu Hause\nStrömungen. Wenn dieses Pokémon angegriffen wird, spuckt es\npechschwarze Tinte und Fluchten ausstoßen.",
        "pt-br": "Horsea faz seu lar nos oceanos com suaves\ncorrentes. Se este Pokémon estiver sob ataque, ele cospe\ntinta preta como breu e escapa.",
        "zh-tw": "Horsea 以溫和的方式在海洋中安家\n電流。如果這只神奇寶貝受到攻擊，它會吐口水\n流出漆黑的墨水並逃脫。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Arrow",
                "fr": "Flèche d'eau",
                "es": "Flecha de agua",
                "it": "Freccia d'acqua",
                "de": "Wasserpfeil",
                "pt-br": "Flecha de Água",
                "zh-tw": "水箭"
            },
            cost: ["Water"],
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 10 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 10 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
