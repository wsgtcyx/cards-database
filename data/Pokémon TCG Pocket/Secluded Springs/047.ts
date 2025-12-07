import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Crustle",
        "fr": "Croûte",
        "es": "Crujido",
        "it": "Crosta",
        "de": "Crustle",
        "pt-br": "Crosta",
        "zh-tw": "岩殿居蟹",
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Fighting"],
    evolveFrom: {
        en: "Dwebble",
        "fr": "Bavarder",
        "es": "Dwebble",
        "it": "Dwebble",
        "de": "Dwebble",
        "pt-br": "Dwebble",
        "zh-tw": "德韋布爾"
    },
    description: {
        en: "This highly territorial Pokémon prefers dry\nclimates. It won't come out of its boulder on\nrainy days.",
        "fr": "Ce Pokémon très territorial préfère les sols secs\nclimats. Il ne sortira pas de son rocher\nles jours de pluie.",
        "es": "Este Pokémon altamente territorial prefiere el clima seco.\nclimas. No saldrá de su roca\ndías lluviosos.",
        "it": "Questo Pokémon altamente territoriale preferisce l'asciutto\nclimi. Non uscirà dal suo masso\ngiorni di pioggia.",
        "de": "Dieses sehr territoriale Pokémon bevorzugt Trockenheit\nKlimazonen. Es kommt nicht aus seinem Felsblock heraus\nregnerische Tage.",
        "pt-br": "Este Pokémon altamente territorial prefere áreas secas\nclimas. Não vai sair da pedra\ndias chuvosos.",
        "zh-tw": "這種領地意識很強的神奇寶貝喜歡乾燥\n氣候。它不會從巨石中出來\n下雨天。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Stone Edge",
                "fr": "Bordure de pierre",
                "es": "Borde de piedra",
                "it": "Bordo di pietra",
                "de": "Steinkante",
                "pt-br": "Borda de Pedra",
                "zh-tw": "石邊"
            },
            damage: 100,
            cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 50 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 50 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 50 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 50 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 50 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 50 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4
};
export default card;
