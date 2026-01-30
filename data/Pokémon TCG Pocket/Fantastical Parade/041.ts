import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Amaura",
        "fr": "Amaura",
        "es": "Amaura",
        "it": "Amaura",
        "de": "Amaura",
        "pt-br": "Amaura",
        "zh-tw": "阿莫拉"
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    evolveFrom: {
        en: "Sail Fossil",
        "fr": "Fossile de voile",
        "es": "Fósil de vela",
        "it": "Vela fossile",
        "de": "Segelfossil",
        "pt-br": "Vela Fóssil",
        "zh-tw": "風帆化石"
    },
    description: {
        en: "Amaura is an ancient Pokémon that has gone\nextinct. Specimens of this species can sometimes\nbe found frozen in ice.",
        "fr": "Amaura est un ancien Pokémon qui a disparu\néteint. Les spécimens de cette espèce peuvent parfois\nêtre retrouvé gelé dans la glace.",
        "es": "Amaura es un Pokémon antiguo que ha desaparecido.\nextinto. Los ejemplares de esta especie a veces pueden\nencontrarse congelado en hielo.",
        "it": "Amaura è un Pokémon antico scomparso\nestinto. Gli esemplari di questa specie a volte possono\nessere trovato congelato nel ghiaccio.",
        "de": "Amaura ist ein uraltes Pokémon, das nicht mehr existiert\nausgestorben. Exemplare dieser Art können manchmal\nim Eis eingefroren gefunden werden.",
        "pt-br": "Amaura é um Pokémon antigo que desapareceu\nextinto. Espécimes desta espécie podem às vezes\nser encontrado congelado no gelo.",
        "zh-tw": "阿瑪烏拉（Amaura）是一種古老的神奇寶貝，現已消失\n滅絕了。該物種的標本有時可以\n被發現被冰凍住了。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Aurora Beam",
                "fr": "Faisceau d'aurore",
                "es": "Haz de aurora",
                "it": "Fascio dell'Aurora",
                "de": "Aurora-Strahl",
                "pt-br": "Feixe Aurora",
                "zh-tw": "極光光束"
            },
            damage: 50,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
