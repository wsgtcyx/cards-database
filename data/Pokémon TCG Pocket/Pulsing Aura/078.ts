import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/078",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/078"
    },
    name: {
        en: "Bonsly",
        fr: "Manzaï",
        es: "Bonsly",
        it: "Bonsly",
        de: "Mobai",
        "pt-br": "Bonsly",
        "zh-tw": "盆才怪",
        ko: "꼬지지",
        ja: "ウソハチ"
    },
    illustrator: "Midori Harada",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Fighting"],
    dexId: [438],
    stage: "Basic",
    description: {
        en: "From its eyes, it can expel excess moisture from its body. This liquid is similar in composition to human sweat.",
        fr: "Il se débarrasse des liquides superflus par ses\nyeux. La composition chimique de ces liquides\nressemble à celle de la sueur humaine.",
        es: "Expulsa por los ojos el líquido corporal que le\nsobra. La composición química de este líquido\nse parece a la del sudor de los seres humanos.",
        it: "Espelle dagli occhi l’umidità corporea in eccesso.\nSi tratta di un fenomeno fisiologico simile alla\nsudorazione.",
        de: "Überschüssiges Wasser in seinem Körper\nscheidet es über die Augen aus. Dieses ist\nvergleichbar mit dem Schweiß des Menschen.",
        "pt-br": "Dos olhos, pode expelir o excesso de umidade do corpo. Este líquido tem composição semelhante ao suor humano.",
        "zh-tw": "會從眼睛排出體內多餘的水分。\n該成分接近人類的汗液。"
    },
    attacks: [
        {
            name: {
                en: "Teary Attack",
                fr: "Attaque qui Chouine",
                es: "Ataque Lacrimoso",
                it: "Attacco Lacrimoso",
                de: "Tränenreicher Angriff",
                "pt-br": "Golpe Choroso",
                "zh-tw": "嗚嗚打"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do -30 damage.",
                fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent - 30 dégâts.",
                es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -30 puntos de daño.",
                it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono -30 danni.",
                de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon - 30 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão -30 pontos de dano.",
                "zh-tw": "在對手的下一個回合中，防御寶可夢使用的攻擊造成-30點傷害。"
            },
            damage: 10
        }
    ],
    retreat: 0
};

export default card;
