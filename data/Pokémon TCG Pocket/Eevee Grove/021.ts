import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Alomomola",
        "fr": "Alomomola",
        "es": "Alomomola",
        "it": "Alomomola",
        "de": "Alomomola",
        "pt-br": "Alomomola",
        "zh-tw": "阿洛莫拉"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    description: {
        en: "It gently holds injured and weak Pokémon in its\nfins. Its special membrane heals their wounds.",
        "fr": "Il tient doucement les Pokémon blessés et faibles dans son\nnageoires. Sa membrane spéciale guérit leurs blessures.",
        "es": "Mantiene suavemente a los Pokémon heridos y débiles en su\naletas. Su membrana especial cura sus heridas.",
        "it": "Tiene delicatamente i Pokémon feriti e deboli nella sua\npinne. La sua speciale membrana guarisce le loro ferite.",
        "de": "Es hält verletzte und schwache Pokémon sanft in seinem Griff\nFlossen. Seine spezielle Membran heilt ihre Wunden.",
        "pt-br": "Ele gentilmente segura Pokémon feridos e fracos em seu\nbarbatanas. Sua membrana especial cura suas feridas.",
        "zh-tw": "它溫柔地把受傷和虛弱的神奇寶貝抱在懷裡\n鰭。它的特殊膜可以治愈他們的傷口。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Pulse",
                "fr": "Pulsation de l'eau",
                "es": "Pulso de agua",
                "it": "Impulso dell'acqua",
                "de": "Wasserimpuls",
                "pt-br": "Pulso de Água",
                "zh-tw": "水脈衝"
            },
            damage: 50,
            cost: ["Water", "Colorless", "Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
