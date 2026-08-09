import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/163",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/163",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/163",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/163",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/163",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/163",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/163"
    },
    name: {
        en: "Aurorus",
        "fr": "Dragmara",
        "es": "Aurorus",
        "it": "Aurorus",
        "de": "Amagarga",
        "pt-br": "Aurorus",
        "zh-tw": "冰雪巨龍"
    },
    illustrator: "sui",
    rarity: "One Star",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    evolveFrom: {
        en: "Amaura",
        "fr": "Amagara",
        "es": "Amaura",
        "it": "Amaura",
        "de": "Amarino",
        "pt-br": "Amaura",
        "zh-tw": "冰雪龍"
    },
    description: {
        en: "When gripped by rage, Aurorus will emanate\nfreezing air, covering everything around it in ice.",
        "fr": "Lorsqu'il est saisi par la rage, Aurorus émanera\nun air glacial, recouvrant tout autour de lui de glace.",
        "es": "Cuando se apodera de la ira, Aurorus emanará\naire helado, cubriendo todo a su alrededor con hielo.",
        "it": "Quando preso dalla rabbia, emanerà Aurorus\naria gelida, ricoprendo tutto intorno di ghiaccio.",
        "de": "Wenn Aurorus von Wut gepackt wird, strahlt er aus\ngefrierende Luft, die alles um sich herum mit Eis bedeckt.",
        "pt-br": "Quando dominado pela raiva, Aurorus emanará\nar gelado, cobrindo tudo ao seu redor com gelo.",
        "zh-tw": "當被憤怒抓住時，Aurorus 會散發出來\n空氣結冰，周圍的一切都被冰覆蓋。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Hail Prison",
                "fr": "Prison de grêle",
                "es": "Granizo Prisión",
                "it": "Saluti Prigione",
                "de": "Hagel-Gefängnis",
                "pt-br": "Salve Prisão",
                "zh-tw": "監獄萬歲"
            },
            damage: 90,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "Discard Water2 {W} Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
                "fr": "Défaussez l'Énergie Eau2 {W} de ce Pokémon. Le Pokémon Actif de votre adversaire est désormais Paralysé.",
                "es": "Descarta Energía Agua2 {W} de este Pokémon. El Pokémon Activo de tu rival ahora está Paralizado.",
                "it": "Scarta Energia Water2 {W} da questo Pokémon. Il Pokémon attivo del tuo avversario è ora paralizzato.",
                "de": "Lege Water2 {W} Energie von diesem Pokémon ab. Das aktive Pokémon deines Gegners ist jetzt gelähmt.",
                "pt-br": "Descarte a energia Water2 {W} deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
                "zh-tw": "丟棄該神奇寶貝的 Water2 {W} 能量。你對手的主動神奇寶貝現在陷入麻痺狀態。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 3
};
export default card;
