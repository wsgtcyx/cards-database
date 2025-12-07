import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Feraligatr",
        "fr": "Feraligatr",
        "es": "feraligatr",
        "it": "Feraligatr",
        "de": "Feraligatr",
        "pt-br": "Feraligatr",
        "zh-tw": "大力鱷",
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    evolveFrom: {
        en: "Croconaw",
        "fr": "Croconaw",
        "es": "croconaw",
        "it": "Croconaw",
        "de": "Croconaw",
        "pt-br": "Croconaw",
        "zh-tw": "藍鱷",
    },
    description: {
        en: "It usually moves slowly, but it goes at blinding\nspeed when it attacks and bites prey.",
        "fr": "Il se déplace généralement lentement, mais il est aveuglant.\nvitesse lorsqu'il attaque et mord ses proies.",
        "es": "Suele moverse lentamente, pero llega a cegar.\nVelocidad cuando ataca y muerde a su presa.",
        "it": "Di solito si muove lentamente, ma arriva ad accecare\nvelocità quando attacca e morde la preda.",
        "de": "Normalerweise bewegt es sich langsam, aber es blendet\nGeschwindigkeit, wenn es Beute angreift und beißt.",
        "pt-br": "Geralmente se move lentamente, mas chega a cegar\nvelocidade quando ataca e morde a presa.",
        "zh-tw": "它通常移動緩慢，但它會致盲\n攻擊和咬住獵物時的速度。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Destructive Whirlpool",
                "fr": "Tourbillon destructeur",
                "es": "Remolino destructivo",
                "it": "Vortice distruttivo",
                "de": "Zerstörerischer Whirlpool",
                "pt-br": "Redemoinho Destrutivo",
                "zh-tw": "破壞性漩渦"
            },
            damage: 90,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "Discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Lege eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "丟棄對手的活躍神奇寶貝中的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
