import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Xatu",
        "fr": "Xatu",
        "es": "Xatu",
        "it": "Xatu",
        "de": "Xatu",
        "pt-br": "Xatu",
        "zh-tw": "天然鳥",
    },
    illustrator: "Hajime Kusajima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Natu",
        "fr": "Natu",
        "es": "natural",
        "it": "Natura",
        "de": "Natu",
        "pt-br": "Natu",
        "zh-tw": "天然雀",
    },
    description: {
        en: "They say that it stays still and quiet because it is\nseeing both the past and future at the same time.",
        "fr": "On dit qu'il reste immobile et silencieux parce qu'il est\nvoir à la fois le passé et le futur.",
        "es": "Dicen que se queda quieto y en silencio porque es\nviendo el pasado y el futuro al mismo tiempo.",
        "it": "Dicono che sta fermo e tranquillo perché è così\nvedere il passato e il futuro allo stesso tempo.",
        "de": "Sie sagen, dass es still und still bleibt, weil es so ist\nVergangenheit und Zukunft gleichzeitig sehen.",
        "pt-br": "Dizem que fica quieto e quieto porque é\nvendo o passado e o futuro ao mesmo tempo.",
        "zh-tw": "他們說它保持靜止和安靜，因為它是\n同時看到過去和未來。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Life Drain",
                "fr": "Drain de vie",
                "es": "Drenaje de vida",
                "it": "Prosciugamento della vita",
                "de": "Lebensentzug",
                "pt-br": "Dreno de Vida",
                "zh-tw": "生命汲取"
            },
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Flip a coin. If heads, your opponent's Active Pokémon's remaining HP is now 10.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, les PV restants du Pokémon Actif de votre adversaire sont désormais de 10.",
                "es": "Lanza una moneda. Si sale cara, los HP restantes del Pokémon Activo de tu rival ahora son 10.",
                "it": "Lancia una moneta. Se esce testa, i PS rimanenti del Pokémon attivo del tuo avversario diventano 10.",
                "de": "Wirf eine Münze. Bei „Kopf“ betragen die verbleibenden HP des Aktiven Pokémon deines Gegners jetzt 10.",
                "pt-br": "Jogue uma moeda. Se der cara, o HP restante do Pokémon Ativo do seu oponente será agora 10.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則對手的活躍神奇寶貝的剩餘生命值現在為 10。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
