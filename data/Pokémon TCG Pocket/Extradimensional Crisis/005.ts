import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Decidueye",
        "fr": "Décidueye",
        "es": "Decidueye",
        "it": "Decidueye",
        "de": "Decidueye",
        "pt-br": "Decidueye",
        "zh-tw": "狙射樹梟",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    evolveFrom: {
        en: "Dartrix",
        "fr": "Dartrix",
        "es": "dartrix",
        "it": "Dartrix",
        "de": "Dartrix",
        "pt-br": "Dartrix",
        "zh-tw": "達特里克斯"
    },
    description: {
        en: "It nocks its arrow quills and shoots them at\nopponents. When it simply can't afford to miss,\nit tugs the vine on its head to improve its focus.",
        "fr": "Il encoche ses flèches et les tire sur\nadversaires. Quand il ne peut tout simplement pas se permettre de rater,\nil tire la vigne sur la tête pour améliorer sa concentration.",
        "es": "Coloca sus flechas y las dispara a\noponentes. Cuando simplemente no puede darse el lujo de perder,\nTira de la enredadera sobre su cabeza para mejorar su enfoque.",
        "it": "Incocca le penne delle frecce e le scaglia\navversari. Quando semplicemente non può permettersi di mancare,\ntira la vite sulla testa per migliorare la sua concentrazione.",
        "de": "Es legt seine Pfeilfedern an und schießt auf sie\nGegner. Wenn es sich einfach nicht leisten kann, etwas zu verpassen,\nEs zieht die Rebe auf dem Kopf, um den Fokus zu verbessern.",
        "pt-br": "Ele coloca suas penas de flecha e as atira\noponentes. Quando simplesmente não pode perder,\nele puxa a videira pela cabeça para melhorar seu foco.",
        "zh-tw": "它用箭羽搭箭並將其射向\n對手。當它根本無法錯過時，\n它會拉動頭上的藤蔓以提高注意力。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Sniping Arrow",
                "fr": "Flèche de tireur d'élite",
                "es": "Flecha de francotirador",
                "it": "Freccia da cecchino",
                "de": "Scharfschützenpfeil",
                "pt-br": "Flecha de atirador",
                "zh-tw": "狙擊箭"
            },
            cost: ["Grass", "Grass"],
            effect: {
                en: "This attack does 70 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 70 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 70 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 70 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 70 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 70 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 70 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
