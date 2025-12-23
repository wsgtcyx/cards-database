import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Charizard Y ex",
        "fr": "Méga-Dracaufeu Y ex",
        "es": "Mega Charizard Y ex",
        "it": "Mega Charizard Y ex",
        "de": "Mega-Glurak Y ex",
        "pt-br": "Mega Charizard Y ex",
        "zh-tw": "超級噴火龍Y ex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 220,
    types: ["Fire"],
    evolveFrom: {
        en: "Charmeleon",
        "fr": "Reptincel",
        "es": "Charmeleon",
        "it": "Charmeleon",
        "de": "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍"
    },
    description: {
        en: "Its bond with its Trainer is the source of\nits power. It boasts speed and maneuverability\ngreater than that of a jet.",
        "fr": "Son lien avec son Formateur est la source de\nsa puissance. Il offre vitesse et maniabilité\nsupérieure à celle d'un avion à réaction.",
        "es": "Su vínculo con su Entrenador es la fuente de\nsu poder. Presume de velocidad y maniobrabilidad.\nmayor que el de un jet.",
        "it": "Il suo legame con il suo Allenatore è all'origine di\nil suo potere. Vanta velocità e manovrabilità\nmaggiore di quello di un jet.",
        "de": "Seine Bindung zu seinem Trainer ist die Quelle von\nseine Macht. Es zeichnet sich durch Geschwindigkeit und Manövrierfähigkeit aus\ngrößer als die eines Jets.",
        "pt-br": "Seu vínculo com seu Treinador é a fonte de\nseu poder. Possui velocidade e manobrabilidade\nmaior que a de um jato.",
        "zh-tw": "它與訓練師的羈絆是它的源泉\n它的力量。它擁有速度和機動性\n比噴氣式飛機更大。"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Crimson Dive",
                "fr": "Plongée pourpre",
                "es": "Buceo carmesí",
                "it": "Immersione cremisi",
                "de": "Crimson Dive",
                "pt-br": "Mergulho Carmesim",
                "zh-tw": "紅蓮俯衝"
            },
            damage: 250,
            cost: ["Fire", "Fire", "Fire", "Colorless"],
            effect: {
                en: "This Pokémon also does 50 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 50 dégâts.",
                "es": "Este Pokémon también se hace 50 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 50 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 50 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 50 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
