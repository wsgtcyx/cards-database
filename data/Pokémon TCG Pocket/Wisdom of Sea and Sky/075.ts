import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Smoochum",
        "fr": "Smoochum",
        "es": "Beso",
        "it": "Smoochum",
        "de": "Knutschfleck",
        "pt-br": "Smoochum",
        "zh-tw": "斯莫庫姆"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Psychic"],
    description: {
        en: "If its face gets even slightly dirty, Smoochum will\nbathe immediately. But if its body gets dirty,\nSmoochum doesn't really seem to care.",
        "fr": "Si son visage devient ne serait-ce que légèrement sale, Smoochum le fera\nbaignez-vous immédiatement. Mais si son corps se salit,\nSmoochum ne semble pas vraiment s'en soucier.",
        "es": "Si su cara se ensucia aunque sea un poco, Smoochum\nbañarse inmediatamente. Pero si su cuerpo se ensucia,\nA Smoochum realmente no parece importarle.",
        "it": "Se la sua faccia si sporca anche leggermente, Smoochum lo farà\nfare subito il bagno. Ma se il suo corpo si sporca,\nA Smoochum non sembra importare davvero.",
        "de": "Wenn sein Gesicht auch nur ein wenig schmutzig wird, wird Knutschfleck das tun\nsofort baden. Aber wenn sein Körper schmutzig wird,\nSmoochum scheint das eigentlich egal zu sein.",
        "pt-br": "Se seu rosto ficar um pouco sujo, Smoochum irá\ntome banho imediatamente. Mas se o seu corpo ficar sujo,\nSmoochum realmente não parece se importar.",
        "zh-tw": "如果它的臉稍微臟一點，Smoochum 就會\n立即洗澡。但如果它的身體髒了，\nSmoochum 似乎並不真正關心。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Shivery Wave",
                "fr": "Vague de frissons",
                "es": "Ola escalofriante",
                "it": "Onda tremante",
                "de": "Zitternde Welle",
                "pt-br": "Onda de arrepios",
                "zh-tw": "顫抖波"
            },
            damage: 20,
            effect: {
                en: "This attack does 20 damage for each Energy attached to your opponent's Active Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
                "it": "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
                "de": "Dieser Angriff fügt 20 Schadenspunkte für jede Energie zu, die an das Aktive Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的活躍寶可夢身上附加的每一個能量都會造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["ho-oh"]
};
export default card;
