import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Greninja ex",
        "fr": "Greninja ex",
        "es": "ex greninja",
        "it": "Greninja ex",
        "de": "Greninja ex",
        "pt-br": "Ex-Greninja",
        "zh-tw": "格忍尼亞超級"
    },
    illustrator: "PLANETA Saito",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 170,
    types: ["Water"],
    evolveFrom: {
        en: "Frogadier",
        "fr": "Frogadier",
        "es": "ranadier",
        "it": "Frogadier",
        "de": "Frogadier",
        "pt-br": "Sapo",
        "zh-tw": "弗洛加迪爾"
    },
    stage: "Stage2",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Shifting Stream",
                "fr": "Flux changeant",
                "es": "Corriente cambiante",
                "it": "Flusso mutevole",
                "de": "Wechselnder Strom",
                "pt-br": "Mudança de fluxo",
                "zh-tw": "轉移流"
            },
            effect: {
                en: "Once during your turn, you may switch your Active {W} Pokémon with 1 of your Benched Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez échanger votre Pokémon {W} Actif avec 1 de votre Pokémon de Banc.",
                "es": "Una vez durante tu turno, puedes cambiar tu Pokémon Activo {W} por 1 de tus Pokémon en Banca.",
                "it": "Una sola volta durante il tuo turno, puoi scambiare il tuo Pokémon attivo {W} con 1 dei tuoi Pokémon in panchina.",
                "de": "Einmal während deines Zuges kannst du dein Aktives {W}-Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
                "pt-br": "Uma vez durante o seu turno, você pode trocar seu Pokémon Ativo {W} por 1 dos seus Pokémon no Banco.",
                "zh-tw": "在你的回合中，你可以將你的活躍 {W} 神奇寶貝與你的 1 只後備神奇寶貝交換。"
            }
        }],
    attacks: [{
            name: {
                en: "Aqua Edge",
                "fr": "Bord Aqua",
                "es": "Borde acuático",
                "it": "Bordo acquatico",
                "de": "Aqua Edge",
                "pt-br": "Borda Aqua",
                "zh-tw": "水色邊緣"
            },
            damage: 100,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
