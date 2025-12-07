import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Flareon ex",
        "fr": "Flareon ex",
        "es": "Flareon ex",
        "it": "Flareon es",
        "de": "Flareon ex",
        "pt-br": "Flareon ex",
        "zh-tw": "Flareon 超級"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 150,
    types: ["Fire"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Combust",
                "fr": "Combustion",
                "es": "Combustión",
                "it": "Combustione",
                "de": "Verbrennen",
                "pt-br": "Combustão",
                "zh-tw": "燃燒"
            },
            effect: {
                en: "Once during your turn, you may attach a {R} Energy from your discard pile to this Pokémon. If you do, do 20 damage to this Pokémon.",
                "fr": "Une fois pendant votre tour, vous pouvez attacher une Énergie {R} de votre pile de défausse à ce Pokémon. Si vous le faites, infligez 20 dégâts à ce Pokémon.",
                "es": "Una vez durante tu turno, puedes adjuntar una Energía {R} de tu pila de descarte a este Pokémon. Si lo haces, hazle 20 daños a este Pokémon.",
                "it": "Una sola volta durante il tuo turno, puoi assegnare un'Energia {R} dalla tua pila degli scarti a questo Pokémon. Se lo fai, infliggi 20 danni a questo Pokémon.",
                "de": "Einmal während deines Zuges kannst du diesem Pokémon eine {R}-Energie von deinem Ablagestapel hinzufügen. Wenn du dies tust, füge diesem Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Uma vez durante o seu turno, você pode associar uma Energia {R} da sua pilha de descarte a este Pokémon. Se fizer isso, cause 20 de dano a este Pokémon.",
                "zh-tw": "在你的回合中，你可以將你的棄牌堆中的一個 {R} 能量附加到這只神奇寶貝上。如果這樣做，則對該寶可夢造成 20 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Fire Spin",
                "fr": "Rotation du feu",
                "es": "Giro de fuego",
                "it": "Giro del fuoco",
                "de": "Feuerspin",
                "pt-br": "Giro de Fogo",
                "zh-tw": "火旋"
            },
            damage: 130,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "Discard 2 {R} Energy from this Pokémon.",
                "fr": "Défaussez 2 {R} Énergie de ce Pokémon.",
                "es": "Descarta 2 {R} de Energía de este Pokémon.",
                "it": "Scarta 2 Energie {R} da questo Pokémon.",
                "de": "Lege 2 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 {R} Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 2 個 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
