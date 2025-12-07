import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Darkrai ex",
        "fr": "Darkrai ex",
        "es": "Darkrai ex",
        "it": "Darkrai ex",
        "de": "Darkrai ex",
        "pt-br": "Ex-Darkrai",
        "zh-tw": "達克萊伊前任"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Nightmare Aura",
                "fr": "Aura de cauchemar",
                "es": "Aura de pesadilla",
                "it": "Aura da incubo",
                "de": "Albtraum-Aura",
                "pt-br": "Aura de Pesadelo",
                "zh-tw": "夢魘光環"
            },
            effect: {
                en: "Whenever you attach a {D} Energy from your Energy Zone to this Pokémon, do 20 damage to your opponent's Active Pokémon.",
                "fr": "Chaque fois que vous attachez une Énergie {D} de votre Zone d'Énergie à ce Pokémon, infligez 20 dégâts au Pokémon Actif de votre adversaire.",
                "es": "Siempre que unes una Energía {D} de tu Zona de Energía a este Pokémon, haz 20 puntos de daño al Pokémon Activo de tu rival.",
                "it": "Ogni volta che assegni un'Energia {D} dalla tua Zona delle Energie a questo Pokémon, infliggi 20 danni al Pokémon attivo del tuo avversario.",
                "de": "Immer wenn du diesem Pokémon eine {D}-Energie aus deiner Energiezone anlegst, füge dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Sempre que você associar uma Energia {D} da sua Zona de Energia a este Pokémon, cause 20 pontos de dano ao Pokémon Ativo do seu oponente.",
                "zh-tw": "每當你將能量區中的 {D} 能量附加到這只神奇寶貝上時，就會對對手的活躍神奇寶貝造成 20 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Dark Prism",
                "fr": "Prisme sombre",
                "es": "Prisma oscuro",
                "it": "Prisma Oscuro",
                "de": "Dunkles Prisma",
                "pt-br": "Prisma Escuro",
                "zh-tw": "黑暗棱鏡"
            },
            damage: 80,
            cost: ["Darkness", "Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
