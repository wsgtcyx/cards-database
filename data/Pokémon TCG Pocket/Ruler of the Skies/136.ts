import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/136",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/136",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/136",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/136",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/136"
    },
    name: {
        en: "Kecleon",
        fr: "Kecleon",
        es: "Kecleon",
        it: "Kecleon",
        de: "Kecleon",
        "pt-br": "Kecleon",
        "zh-tw": "變隱龍",
        ko: "켈리몬",
        ja: "カクレオン"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    dexId: [352],
    stage: "Basic",
    description: {
        en: "It changes color to blend in with its surroundings in order to sneak up on prey. It can't make its belly pattern disappear, however."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Samesies Slap",
                fr: "Paire de Gifles",
                es: "Bofetada Copiona",
                "pt-br": "Tapa Combinado",
                "zh-tw": "撞能巴掌"
            },
            effect: {
                en: "If this Pokémon and your opponent's Active Pokémon have 1 or more of the same type of Energy attached, this attack does 30 more damage.",
                fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont une Énergies du même type attachée ou plus, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Si este Pokémon y el Pokémon Activo de tu rival tienen 1 o más Energías del mismo tipo unidas a ellos, este ataque hace 30 puntos de daño más.",
                "pt-br": "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem 1 ou mais do mesmo tipo de Energia ligada a eles, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢身上的能量的屬性與對手的戰鬥寶可夢身上的能量的屬性有1種以上相同,則增加30點傷害。"
            },
            damage: "20+"
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
