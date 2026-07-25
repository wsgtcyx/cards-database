import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/032",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/032",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/032",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/032",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/032"
    },
    name: {
        en: "Delibird",
        "fr": "Délibird",
        "es": "Delibird",
        "it": "Delibird",
        "de": "Delibird",
        "pt-br": "Delibird",
        "zh-tw": "熟食鳥"
    },
    illustrator: "USGMEN",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "It always carries its food with it, wherever it goes.\nIf attacked, it throws its food at the opponent.",
        "fr": "Il emporte toujours sa nourriture avec lui, partout où il va.\nS'il est attaqué, il jette sa nourriture sur l'adversaire.",
        "es": "Siempre lleva consigo su comida, dondequiera que vaya.\nSi es atacado, arroja su comida al oponente.",
        "it": "Porta sempre con sé il cibo, ovunque vada.\nSe attaccato lancia il suo cibo all'avversario.",
        "de": "Es trägt seine Nahrung immer bei sich, wohin es auch geht.\nWenn es angegriffen wird, wirft es seine Nahrung auf den Gegner.",
        "pt-br": "Ele sempre carrega consigo sua comida, onde quer que vá.\nSe for atacado, ele joga sua comida no oponente.",
        "zh-tw": "無論它走到哪裡，它總是帶著食物。\n如果受到攻擊，它會將食物扔向對手。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Box of Surprises",
                "fr": "Boîte à surprises",
                "es": "Caja de Sorpresas",
                "it": "Scatola delle sorprese",
                "de": "Box voller Überraschungen",
                "pt-br": "Caixa de Surpresas",
                "zh-tw": "驚喜盒"
            },
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 70 damage to your opponent's Active Pokémon. If tails, heal 30 damage from your opponent's Active Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 70 dégâts au Pokémon Actif de votre adversaire. Si c'est pile, soignez 30 dégâts du Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 70 puntos de daño al Pokémon Activo de tu rival. Si sale cruz, cura 30 puntos de daño del Pokémon Activo de tu rival.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 70 danni al Pokémon attivo del tuo avversario. Se esce croce, cura il Pokémon attivo del tuo avversario da 30 danni.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff dem Aktiven Pokémon deines Gegners 70 Schadenspunkte zu. Bei „Zahl“ heile 30 Schadenspunkte beim Aktiven Pokémon deines Gegners.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causa 70 de dano ao Pokémon Ativo do seu oponente. Se sair coroa, cure 30 de dano do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊對對手的活躍寶可夢造成 70 點傷害。如果出現反面，則治療對手的活躍神奇寶貝造成的 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
