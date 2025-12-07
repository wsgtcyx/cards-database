import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Sharpedo",
        "fr": "Sharpedo",
        "es": "Sharpedo",
        "it": "Sharpedo",
        "de": "Sharpedo",
        "pt-br": "Sharpedo",
        "zh-tw": "巨牙鯊",
    },
    illustrator: "Yumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Carvanha",
        "fr": "Carvanha",
        "es": "Carvanha",
        "it": "Carvanha",
        "de": "Carvanha",
        "pt-br": "Carvanha",
        "zh-tw": "利牙魚",
    },
    description: {
        en: "As soon as it catches the scent of prey, Sharpedo\nwill jet seawater from its backside, hurtling\ntoward the target to attack at 75 mph.",
        "fr": "Dès qu'il détecte l'odeur d'une proie, Sharpedo\nprojettera de l'eau de mer par l'arrière, dévalant\nvers la cible pour attaquer à 75 mph.",
        "es": "Tan pronto como capta el olor de la presa, Sharpedo\nlanzará agua de mar desde su parte trasera, lanzando\nhacia el objetivo para atacar a 75 mph.",
        "it": "Non appena sente l'odore della preda, Sharpedo\ngetterà l'acqua di mare dal suo didietro, sfrecciando\nverso il bersaglio per attaccare a 75 mph.",
        "de": "Sobald es den Geruch von Beute wahrnimmt, Sharpedo\nwird Meerwasser aus seiner Rückseite spritzen\nauf das Ziel zu, um mit 75 Meilen pro Stunde anzugreifen.",
        "pt-br": "Assim que sente o cheiro da presa, Sharpedo\nlançará água do mar pela parte traseira, arremessando-se\nem direção ao alvo para atacar a 75 mph.",
        "zh-tw": "一旦捕捉到獵物的氣味，夏皮多\n會從背面噴出海水，飛馳而過\n以 75 英里/小時的速度向目標發起攻擊。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Crunch",
                "fr": "Croquer",
                "es": "Crujido",
                "it": "Crunch",
                "de": "Knirschen",
                "pt-br": "Trituração",
                "zh-tw": "緊縮"
            },
            damage: 50,
            cost: ["Water", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda. Si sale cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Lancia una moneta. Se esce testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Wirf eine Münze. Bei „Kopf“ wirf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda. Se sair cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則丟棄對手的活躍神奇寶貝中的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
